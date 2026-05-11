import { useEffect, useMemo, useState } from 'react';
import { curriculum, moduleHints } from './data/curriculum.js';
import { fetchHealth } from './api/judge.js';
import { answerLabel, correctLabel, getAnswerScore, mistakeExplanation } from './utils/scoring.js';
import { TopBar } from './components/TopBar.jsx';
import { Home } from './components/Home.jsx';
import { LessonList } from './components/LessonList.jsx';
import { Quiz } from './components/Quiz.jsx';
import { Result } from './components/Result.jsx';

const defaultState = { xp: 0, lessonsCompleted: 0, streak: 0, completedLessons: {} };

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem('iaquest-n1') || '{}') };
  } catch {
    return defaultState;
  }
}

function saveState(state) {
  localStorage.setItem('iaquest-n1', JSON.stringify(state));
}

function sessionStats(lesson, answers) {
  if (!lesson) return { score: 0, xp: 0, correct: 0 };
  const score = answers.reduce((total, answer, index) => total + getAnswerScore(lesson.items[index], answer), 0);
  const correct = answers.reduce((total, answer, index) => total + (getAnswerScore(lesson.items[index], answer) >= 0.85 ? 1 : 0), 0);
  return { score, correct, xp: Math.round(score * 10) };
}

export default function App() {
  const [appState, setAppState] = useState(loadState);
  const [screen, setScreen] = useState('home');
  const [currentModule, setCurrentModule] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [phase, setPhase] = useState('intro');
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [health, setHealth] = useState({ python: false, swipl: false, server: false });

  const module = curriculum[currentModule];
  const lesson = module?.lessons[currentLesson];
  const stats = useMemo(() => sessionStats(lesson, answers), [lesson, answers]);

  useEffect(() => {
    fetchHealth().then((value) => setHealth({ ...value, server: true }));
  }, []);

  useEffect(() => {
    saveState(appState);
  }, [appState]);

  function openModule(moduleIndex) {
    setCurrentModule(moduleIndex);
    setScreen('lesson-list');
  }

  function startLesson(moduleIndex, lessonIndex) {
    const nextLesson = curriculum[moduleIndex].lessons[lessonIndex];
    setCurrentModule(moduleIndex);
    setCurrentLesson(lessonIndex);
    setAnswers(Array(nextLesson.items.length).fill(null));
    setQIndex(0);
    setPhase('intro');
    setResult(null);
    setScreen('quiz');
  }

  function goBack() {
    if (screen === 'quiz' || screen === 'result') setScreen('lesson-list');
    else if (screen === 'lesson-list') setScreen('home');
    else setScreen('home');
  }

  function setAnswer(index, value) {
    setAnswers((current) => {
      const next = [...current];
      next[index] = value;
      return next;
    });
  }

  function previousQuestion() {
    if (qIndex > 0) setQIndex((value) => value - 1);
  }

  function nextQuestion() {
    if (answers[qIndex] === null || answers[qIndex] === undefined) return;
    if (qIndex + 1 >= lesson.items.length) finishLesson();
    else setQIndex((value) => value + 1);
  }

  function finishLesson() {
    const finalStats = sessionStats(lesson, answers);
    const total = lesson.items.length;
    const mistakes = answers
      .map((answer, index) => ({ answer, item: lesson.items[index] }))
      .filter((row) => getAnswerScore(row.item, row.answer) < 0.85)
      .map((row) => ({
        q: row.item.q,
        chosen: answerLabel(row.item, row.answer),
        correct: correctLabel(row.item),
        exp: mistakeExplanation(row.item, row.answer)
      }));
    const key = `${module.id}-${currentLesson}`;
    const wasCompleted = Boolean(appState.completedLessons[key]);
    const earnedXP = finalStats.xp + (wasCompleted ? 0 : 20);

    setAppState((current) => {
      if (current.completedLessons[key]) return current;
      return {
        ...current,
        xp: current.xp + earnedXP,
        streak: current.streak + 1,
        lessonsCompleted: current.lessonsCompleted + 1,
        completedLessons: { ...current.completedLessons, [key]: true }
      };
    });

    setResult({
      xp: earnedXP,
      accuracy: Math.round((finalStats.correct / total) * 100),
      total,
      mistakes
    });
    setScreen('result');
  }

  function nextLesson() {
    if (currentLesson + 1 < module.lessons.length) startLesson(currentModule, currentLesson + 1);
    else if (currentModule + 1 < curriculum.length) openModule(currentModule + 1);
    else setScreen('home');
  }

  return (
    <>
      <TopBar onBack={goBack} isHome={screen === 'home'} />
      {screen === 'home' && <Home curriculum={curriculum} state={appState} onOpenModule={openModule} />}
      {screen === 'lesson-list' && (
        <LessonList
          module={module}
          moduleIndex={currentModule}
          completedLessons={appState.completedLessons}
          onStartLesson={startLesson}
        />
      )}
      {screen === 'quiz' && (
        <Quiz
          key={`${currentModule}-${currentLesson}-${qIndex}-${phase}`}
          module={module}
          lesson={lesson}
          phase={phase}
          qIndex={qIndex}
          answers={answers}
          sessionXP={stats.xp}
          correctCount={stats.correct}
          health={health}
          moduleHint={moduleHints[module.id]}
          onSetPhase={setPhase}
          onAnswer={setAnswer}
          onNext={nextQuestion}
          onPrevious={previousQuestion}
        />
      )}
      {screen === 'result' && result && (
        <Result
          module={module}
          lesson={lesson}
          result={result}
          onNextLesson={nextLesson}
          onBackToModule={() => setScreen('lesson-list')}
        />
      )}
    </>
  );
}
