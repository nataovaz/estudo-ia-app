function getApiBase() {
  const rawBase = (import.meta.env.VITE_JUDGE_BASE_URL || '').trim();
  if (!rawBase) return '';
  const base = rawBase.replace(/\/+$/, '');
  return base.endsWith('/api') ? base : `${base}/api`;
}

function withBase(path) {
  const base = getApiBase();
  return base ? `${base}${path}` : `/api${path}`;
}

export async function fetchHealth() {
  try {
    const response = await fetch(withBase('/health'));
    if (!response.ok) throw new Error('health check failed');
    return await response.json();
  } catch {
    return { python: false, swipl: false, server: false };
  }
}

export async function judgeCode(question, code) {
  const response = await fetch(withBase(`/judge/${question.runner}`), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ exerciseId: question.exerciseId, code })
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const message = payload?.error || 'Não foi possível executar o judge local.';
    throw new Error(message);
  }
  return payload;
}
