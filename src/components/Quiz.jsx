import { useState } from 'react';
import { sources } from '../data/curriculum.js';
import { judgeCode } from '../api/judge.js';
import { evaluateOpenAnswer, isJudgeQuestion, isOpenQuestion } from '../utils/scoring.js';
import { ChoiceFeedback, OpenFeedback } from './Feedback.jsx';

export function Quiz({
  module,
  lesson,
  phase,
  qIndex,
  answers,
  sessionXP,
  correctCount,
  health,
  moduleHint,
  onSetPhase,
  onAnswer,
  onNext,
  onPrevious
}) {
  if (phase === 'intro') {
    return (
      <QuizShell lesson={lesson} qCount="Intro" progress={0} sessionXP={sessionXP} correctCount={correctCount}>
        <div className="intro-card">
          <div className="q-label">{module.title} · Introdução</div>
          <h2>{lesson.title}</h2>
          <p>{lesson.desc}</p>
          <ul>{lesson.intro.map((item) => <li key={item}>{item}</li>)}</ul>
          <div dangerouslySetInnerHTML={{ __html: lesson.theory }} />
          <div className="action-row">
            <button className="primary-btn" onClick={() => onSetPhase('quiz')}>Começar perguntas</button>
            <button className="secondary-btn" style={{ background: '#1b2230' }} onClick={() => onSetPhase('review')}>Ver resumo de revisão</button>
          </div>
        </div>
      </QuizShell>
    );
  }

  if (phase === 'review') {
    const all = module.lessons.flatMap((item) => item.intro);
    return (
      <QuizShell lesson={lesson} qCount="Revisão" progress={0} sessionXP={sessionXP} correctCount={correctCount}>
        <div className="intro-card">
          <div className="q-label">{module.title} · Revisão rápida</div>
          <h2>Mapa mental do módulo</h2>
          <ul className="review-list">{all.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}</ul>
          <h2 style={{ marginTop: 18 }}>Fontes para estudar mais</h2>
          <ul className="source-list">
            {sources.map(([label, url]) => (
              <li key={url}><a href={url} target="_blank" rel="noreferrer">{label}</a></li>
            ))}
          </ul>
          <div className="action-row">
            <button className="primary-btn" onClick={() => onSetPhase('quiz')}>Ir para as perguntas</button>
          </div>
        </div>
      </QuizShell>
    );
  }

  const question = lesson.items[qIndex];
  const progress = Math.round((qIndex / lesson.items.length) * 100);
  const answer = answers[qIndex];

  return (
    <QuizShell
      lesson={lesson}
      qCount={`${qIndex + 1}/${lesson.items.length}`}
      progress={progress}
      sessionXP={sessionXP}
      correctCount={correctCount}
    >
      {isOpenQuestion(question) ? (
        <OpenQuestion
          key={`${qIndex}-${question.exerciseId || question.q}`}
          question={question}
          answer={answer}
          moduleHint={moduleHint}
          health={health}
          isFirst={qIndex === 0}
          isLast={qIndex + 1 === lesson.items.length}
          onAnswer={(value) => onAnswer(qIndex, value)}
          onNext={onNext}
          onPrevious={onPrevious}
          onIntro={() => onSetPhase('intro')}
        />
      ) : (
        <ChoiceQuestion
          question={question}
          answer={answer}
          moduleHint={moduleHint}
          isFirst={qIndex === 0}
          isLast={qIndex + 1 === lesson.items.length}
          onAnswer={(value) => onAnswer(qIndex, value)}
          onNext={onNext}
          onPrevious={onPrevious}
          onIntro={() => onSetPhase('intro')}
        />
      )}
    </QuizShell>
  );
}

function QuizShell({ qCount, progress, sessionXP, correctCount, children }) {
  return (
    <section id="quiz" className="screen active">
      <div className="app-shell">
        <div className="quiz-layout">
          <div className="quiz-main">{children}</div>
          <aside className="side-card">
            <div className="quiz-progress">
              <div className="bar"><div className="fill bg-busca" style={{ width: `${progress}%` }} /></div>
              <span>{qCount}</span>
            </div>
            <div className="pill life">∞ vidas ilimitadas</div>
            <div className="quick-sheet" style={{ color: 'var(--ink)', marginTop: 16 }}>
              <div><strong>XP da sessão:</strong> <span>{sessionXP}</span></div>
              <div><strong>Acertos:</strong> <span>{correctCount}</span></div>
              <div><strong>Dica:</strong> responda pensando no raciocínio da prova, não só na alternativa.</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ChoiceQuestion({ question, answer, moduleHint, isFirst, isLast, onAnswer, onNext, onPrevious, onIntro }) {
  return (
    <div className="question-card">
      <div className="q-label">Questão</div>
      <div className="q-text">{question.q}</div>
      <div className="options">
        {question.opts.map((option, index) => {
          let className = 'option-btn';
          if (answer !== null && answer !== undefined) {
            if (index === question.correct) className += ' correct';
            if (index === answer && answer !== question.correct) className += ' wrong';
          }
          return <button key={option} className={className} onClick={() => onAnswer(index)}>{option}</button>;
        })}
      </div>
      {answer !== null && answer !== undefined && <ChoiceFeedback question={question} chosen={answer} moduleHint={moduleHint} />}
      <div className="action-row">
        <button className="secondary-btn" style={{ background: '#1b2230' }} onClick={onPrevious} disabled={isFirst}>← Voltar</button>
        <button className="primary-btn" onClick={onNext} disabled={answer === null || answer === undefined}>{isLast ? 'Finalizar' : 'Continuar'}</button>
        <button className="secondary-btn" style={{ background: '#1b2230' }} onClick={onIntro}>Ver introdução</button>
      </div>
    </div>
  );
}

function OpenQuestion({ question, answer, moduleHint, health, isFirst, isLast, onAnswer, onNext, onPrevious, onIntro }) {
  const usesPrologWorkspace = question.workspace === 'prolog';
  const [text, setText] = useState(answer?.text ?? question.starter ?? '');
  const [prologParts, setPrologParts] = useState(() => initialPrologParts(question, answer));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit() {
    const clean = usesPrologWorkspace ? joinPrologParts(prologParts).trim() : text.trim();
    if (!clean) {
      setError('Escreva algo primeiro.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const rawResult = isJudgeQuestion(question) ? await judgeCode(question, clean) : evaluateOpenAnswer(question, clean);
      const maxScore = rawResult.maxScore || rawResult.max || 1;
      const result = {
        ...rawResult,
        maxScore,
        ratio: maxScore ? rawResult.score / maxScore : 0,
        criteria: rawResult.criteria || [],
        tests: rawResult.tests || []
      };
      onAnswer({ text: clean, parts: usesPrologWorkspace ? prologParts : undefined, result });
    } catch (err) {
      setError(err.message);
      onAnswer({
        text: clean,
        parts: usesPrologWorkspace ? prologParts : undefined,
        result: {
          score: 0,
          maxScore: 1,
          ratio: 0,
          criteria: [],
          tests: [{ name: 'Judge local', passed: false, message: err.message }]
        }
      });
    } finally {
      setBusy(false);
    }
  }

  const isPrologRunner = question.runner === 'prolog';
  const runtimeReady = !isJudgeQuestion(question) || (isPrologRunner ? health?.swipl : health?.python);
  const runtimeName = isPrologRunner ? 'SWI-Prolog' : 'Python';

  return (
    <div className="question-card">
      <div className="q-label">Questão · {question.type === 'code' ? 'Código' : 'Resposta aberta'}</div>
      <div className="q-text">{question.q}</div>
      {(question.problem || question.writeGuide || question.tips?.length) && (
        <div className="problem-panel">
          {question.problem && (
            <>
              <h3>Problema</h3>
              <p>{question.problem}</p>
            </>
          )}
          {question.writeGuide && (
            <>
              <h3>O que escrever</h3>
              <p>{question.writeGuide}</p>
            </>
          )}
          {!!question.tips?.length && (
            <>
              <h3>Dicas</h3>
              <ul>{question.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
            </>
          )}
        </div>
      )}
      {isJudgeQuestion(question) && !runtimeReady && (
        <div className="feedback show partial">
          <strong>Judge local indisponível.</strong>
          <div className="answer-line">Instale ou coloque {runtimeName} no PATH para executar este exercício.</div>
        </div>
      )}
      {usesPrologWorkspace ? (
        <PrologWorkspace parts={prologParts} onChange={setPrologParts} />
      ) : (
        <textarea
          className={question.type === 'code' ? 'written-box code-block-input' : 'written-box'}
          value={text}
          placeholder={question.placeholder || 'Escreva sua resposta aqui...'}
          onChange={(event) => setText(event.target.value)}
        />
      )}
      {error && (
        <div className="feedback show bad">
          <strong>Ainda não.</strong>
          <div className="answer-line">{error}</div>
        </div>
      )}
      {answer && <OpenFeedback question={question} answer={answer} moduleHint={moduleHint} />}
      <div className="action-row">
        <button className="secondary-btn" style={{ background: '#1b2230' }} onClick={onPrevious} disabled={isFirst}>← Voltar</button>
        <button className="primary-btn" onClick={submit} disabled={busy || !runtimeReady}>{busy ? 'Corrigindo...' : 'Corrigir resposta'}</button>
        <button className="primary-btn" onClick={onNext} disabled={!answer}>{isLast ? 'Finalizar' : 'Continuar'}</button>
        <button className="secondary-btn" style={{ background: '#1b2230' }} onClick={onIntro}>Ver introdução</button>
      </div>
    </div>
  );
}

function PrologWorkspace({ parts, onChange }) {
  function update(key, value) {
    onChange({ ...parts, [key]: value });
  }

  return (
    <div className="prolog-workspace">
      <label>
        <span>Fatos</span>
        <textarea
          className="written-box code-block-input"
          value={parts.facts}
          placeholder="Ex.: gosta(ana, praia)."
          onChange={(event) => update('facts', event.target.value)}
        />
      </label>
      <label>
        <span>Regras</span>
        <textarea
          className="written-box code-block-input"
          value={parts.rules}
          placeholder="Ex.: pode_ir_praia(P) :- gosta(P, praia), tem_dinheiro(P)."
          onChange={(event) => update('rules', event.target.value)}
        />
      </label>
      <label>
        <span>Consulta que você testaria</span>
        <textarea
          className="written-box code-block-input prolog-query-input"
          value={parts.query}
          placeholder="Ex.: pode_ir_praia(ana)."
          onChange={(event) => update('query', event.target.value)}
        />
      </label>
    </div>
  );
}

function initialPrologParts(question, answer) {
  if (answer?.parts) return answer.parts;
  return {
    facts: question.sections?.facts ?? '',
    rules: question.sections?.rules ?? '',
    query: question.sections?.query ?? ''
  };
}

function joinPrologParts(parts) {
  return `% FATOS
${parts.facts || ''}

% REGRAS
${parts.rules || ''}

% CONSULTA QUE EU USARIA
% ${String(parts.query || '').replace(/\r?\n/g, '\n% ')}`;
}
