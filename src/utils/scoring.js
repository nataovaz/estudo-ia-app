export function isOpenQuestion(question) {
  return question.type === 'written' || question.type === 'code';
}

export function isJudgeQuestion(question) {
  return question.type === 'code' && (question.runner === 'prolog' || question.runner === 'python');
}

export function normalizeAnswer(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function evaluateOpenAnswer(question, text) {
  const criteria = (question.criteria || []).map((criterion) => ({
    label: criterion.label,
    hit: criterionHit(text, criterion)
  }));
  const score = criteria.filter((criterion) => criterion.hit).length;
  const max = Math.max(criteria.length, 1);
  return { score, maxScore: max, ratio: score / max, criteria, tests: [] };
}

export function criterionHit(text, criterion) {
  if (criterion.regex) {
    try {
      if (new RegExp(criterion.regex, 'i').test(text)) return true;
    } catch {
      return false;
    }
  }
  if (criterion.all) return criterion.all.every((term) => termFound(text, term));
  if (criterion.any) return criterion.any.some((term) => termFound(text, term));
  return false;
}

export function termFound(text, term) {
  const hay = normalizeAnswer(text);
  const needle = normalizeAnswer(term);
  return hay.includes(needle) || hay.replace(/\s+/g, '').includes(needle.replace(/\s+/g, ''));
}

export function getAnswerScore(question, answer) {
  if (answer === null || answer === undefined) return 0;
  if (isOpenQuestion(question)) return answer.result ? answer.result.ratio : 0;
  return answer === question.correct ? 1 : 0;
}

export function answerLabel(question, answer) {
  if (answer === null || answer === undefined) return 'Em branco';
  if (isOpenQuestion(question)) return answer.text || 'Em branco';
  return question.opts[answer];
}

export function correctLabel(question) {
  if (isOpenQuestion(question)) return question.expected;
  return question.opts[question.correct];
}

export function mistakeExplanation(question, answer) {
  if (!isOpenQuestion(question)) return question.exp;
  const result = answer?.result || evaluateOpenAnswer(question, answer?.text || '');
  const missing = (result.criteria || []).filter((criterion) => !criterion.hit).map((criterion) => criterion.label);
  if (!missing.length) return question.exp;
  return `${question.exp}<br><strong>Faltou revisar:</strong> ${missing.join('; ')}.`;
}
