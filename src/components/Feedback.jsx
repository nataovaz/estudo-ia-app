export function ChoiceFeedback({ question, chosen, moduleHint }) {
  const ok = chosen === question.correct;
  return (
    <div className={`feedback show ${ok ? 'good' : 'bad'}`}>
      <strong>{ok ? 'Correto.' : 'Ainda não.'}</strong>
      <div className="answer-line"><b>Sua resposta:</b> {question.opts[chosen]}</div>
      <div className="answer-line"><b>Resposta correta:</b> {question.opts[question.correct]}</div>
      <div className="answer-line"><b>Raciocínio:</b> {question.exp}</div>
      <div className="answer-line"><b>Regra de bolso:</b> {moduleHint}</div>
    </div>
  );
}

export function OpenFeedback({ question, answer, moduleHint }) {
  const result = answer.result;
  const statusClass = result.ratio >= 0.85 ? 'good' : result.ratio >= 0.45 ? 'partial' : 'bad';
  const title = result.ratio >= 0.85 ? 'Muito bom.' : result.ratio >= 0.45 ? 'Meio certo.' : 'Ainda não.';
  const tests = result.tests || [];
  const criteria = result.criteria || [];
  const hideExpected = Boolean(question.hideExpected);
  const tips = question.tips || [];

  return (
    <div className={`feedback show ${statusClass}`}>
      <strong>
        {title} <span className="practice-score">{result.score}/{result.maxScore} critérios</span>
      </strong>
      <div className="answer-line"><b>Sua resposta:</b></div>
      <pre className="code-block">{answer.text}</pre>
      {!hideExpected && question.expected && (
        <>
          <div className="answer-line"><b>Resposta-modelo:</b></div>
          <pre className="code-block">{question.expected}</pre>
        </>
      )}
      {hideExpected && tips.length > 0 && (
        <>
          <div className="answer-line"><b>Dicas:</b></div>
          {tips.map((tip) => (
            <div key={tip} className="answer-line">- {tip}</div>
          ))}
        </>
      )}
      {!!criteria.length && (
        <div className="criterion-list">
          {criteria.map((criterion) => (
            <div key={criterion.label} className={`criterion ${criterion.hit ? 'ok' : 'miss'}`}>
              <span className="mark">{criterion.hit ? '✓' : '×'}</span>
              <span>{criterion.label}</span>
            </div>
          ))}
        </div>
      )}
      {!!tests.length && (
        <div className="criterion-list">
          {tests.map((test) => (
            <div key={test.name} className={`criterion ${test.passed ? 'ok' : 'miss'}`}>
              <span className="mark">{test.passed ? '✓' : '×'}</span>
              <span><b>{test.name}:</b> {test.message}</span>
            </div>
          ))}
        </div>
      )}
      <div className="answer-line"><b>Raciocínio:</b> {question.exp}</div>
      <div className="answer-line"><b>Regra de bolso:</b> {moduleHint}</div>
    </div>
  );
}
