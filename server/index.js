import express from 'express';
import { spawn } from 'node:child_process';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

const app = express();
const port = Number(process.env.PORT || 3001);
const host = process.env.HOST || '0.0.0.0';
const PYTHON = process.env.PYTHON || 'python';
const SWIPL = process.env.SWIPL || 'swipl';

app.use(express.json({ limit: '256kb' }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.get('/api/health', async (_req, res) => {
  const [python, swipl] = await Promise.all([
    commandAvailable(PYTHON, ['--version']),
    commandAvailable(SWIPL, ['--version'])
  ]);
  res.json({ python, swipl });
});

app.post('/api/judge/python', async (req, res) => {
  const { exerciseId, code } = req.body || {};
  if (!pythonExercises[exerciseId]) return res.status(404).json({ error: 'Exercício Python não encontrado.' });
  if (typeof code !== 'string' || !code.trim()) return res.status(400).json({ error: 'Código vazio.' });
  if (!(await commandAvailable(PYTHON, ['--version']))) {
    return res.status(503).json({ error: 'Python não está disponível no PATH.' });
  }

  try {
    const result = await runPythonExercise(pythonExercises[exerciseId], code);
    res.json(result);
  } catch (error) {
    res.status(500).json(normalizeServerError(error));
  }
});

app.post('/api/judge/prolog', async (req, res) => {
  const { exerciseId, code } = req.body || {};
  if (!prologExercises[exerciseId]) return res.status(404).json({ error: 'Exercício Prolog não encontrado.' });
  if (typeof code !== 'string' || !code.trim()) return res.status(400).json({ error: 'Código vazio.' });
  if (!(await commandAvailable(SWIPL, ['--version']))) {
    return res.status(503).json({ error: 'SWI-Prolog não está disponível no PATH.' });
  }

  try {
    const result = await runPrologExercise(prologExercises[exerciseId], code);
    res.json(result);
  } catch (error) {
    res.status(500).json(normalizeServerError(error));
  }
});

app.listen(port, host, () => {
  console.log(`IA Quest judge rodando em http://${host}:${port}`);
});

const pythonExercises = {
  'python-bfs-order': {
    tests: [
      {
        name: 'Ordem BFS do grafo da prova',
        expression: "bfs_order({'A':['B','C','D','E'],'B':['F','G'],'C':['H'],'D':['I'],'E':['J','K'],'F':[],'G':[],'H':[],'I':[],'J':[],'K':[]}, 'A')",
        expected: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']
      },
      {
        name: 'Não revisita nó em grafo com ciclo',
        expression: "bfs_order({'A':['B'],'B':['A','C'],'C':[]}, 'A')",
        expected: ['A', 'B', 'C']
      }
    ]
  },
  'python-fuzzy-ops': {
    tests: [
      { name: 'min/max/complemento básicos', expression: 'fuzzy_ops(0.7, 0.6)', expected: [0.6, 0.7, 0.30000000000000004] },
      { name: 'caso com interseção baixa', expression: 'fuzzy_ops(0.2, 0.8)', expected: [0.2, 0.8, 0.8] }
    ]
  },
  'prolog-intersecao': { tests: [
    { name: 'Interseção da prova', goal: 'once(intersecao([1,2,3,4,5],[5,6,1,8,3],[1,3,5]))' },
    { name: 'Sem elementos comuns', goal: 'once(intersecao([a,b],[c,d],[]))' },
    { name: 'Mantém ordem da primeira lista', goal: 'once(intersecao([a,b,c],[c,b,a],[a,b,c]))' }
  ] },
  'prolog-concatena': { tests: [
    { name: 'Concatena duas listas', goal: 'once(concatena([1,2],[3,4],[1,2,3,4]))' },
    { name: 'Lista vazia à esquerda', goal: 'once(concatena([],[a,b],[a,b]))' },
    { name: 'Lista vazia à direita', goal: 'once(concatena([a],[],[a]))' }
  ] },
  'prolog-inverte': { tests: [
    { name: 'Inverte números', goal: 'once(inverte([1,2,3],[3,2,1]))' },
    { name: 'Inverte lista unitária', goal: 'once(inverte([a],[a]))' },
    { name: 'Inverte lista vazia', goal: 'once(inverte([],[]))' }
  ] },
  'prolog-remove-negativos': { tests: [
    { name: 'Remove valores negativos', goal: 'once(remove_negativos([-2,0,5,-1,3],[0,5,3]))' },
    { name: 'Mantém lista só positiva', goal: 'once(remove_negativos([1,2,3],[1,2,3]))' },
    { name: 'Remove todos negativos', goal: 'once(remove_negativos([-3,-1],[]))' }
  ] },
  'prolog-maiores-que': { tests: [
    { name: 'Filtra maiores que 5', goal: 'once(maiores_que(5,[2,8,5,10,1],[8,10]))' },
    { name: 'Nenhum maior', goal: 'once(maiores_que(9,[1,2,3],[]))' },
    { name: 'Todos maiores', goal: 'once(maiores_que(0,[1,2,3],[1,2,3]))' }
  ] },
  'prolog-conta-pares': { tests: [
    { name: 'Conta pares misturados', goal: 'once(conta_pares([1,2,3,4,6],3))' },
    { name: 'Lista sem pares', goal: 'once(conta_pares([1,3,5],0))' },
    { name: 'Lista vazia', goal: 'once(conta_pares([],0))' }
  ] },
  'prolog-caminho': { tests: [
    { name: 'Existe caminho direto', goal: 'once(caminho(a,b))' },
    { name: 'Existe caminho indireto', goal: 'once(caminho(a,d))' },
    { name: 'Não existe caminho de volta', goal: 'once(\\+ caminho(d,a))' }
  ] },
  'prolog-ancestral': { tests: [
    { name: 'Pai é ancestral', goal: 'once(ancestral(joao,maria))' },
    { name: 'Avô é ancestral', goal: 'once(ancestral(joao,pedro))' },
    { name: 'Não inverte ancestralidade', goal: 'once(\\+ ancestral(pedro,joao))' }
  ] },
  'prolog-temperatura': { tests: [
    { name: 'Temperatura fria', goal: 'once(classifica_temperatura(12,fria))' },
    { name: 'Temperatura morna', goal: 'once(classifica_temperatura(24,morna))' },
    { name: 'Temperatura quente', goal: 'once(classifica_temperatura(31,quente))' }
  ] },
  'prolog-decide-praia': { tests: [
    { name: 'Vai à praia quando tudo ajuda', goal: 'once(decide_praia(nao,sim,sim,sim))' },
    { name: 'Não vai se chover', goal: 'once(decide_praia(sim,sim,sim,nao))' },
    { name: 'Não vai sem dinheiro', goal: 'once(decide_praia(nao,nao,sim,nao))' },
    { name: 'Não vai sem tempo', goal: 'once(decide_praia(nao,sim,nao,nao))' }
  ] },
  'prolog-fuzzy-ops': { tests: [
    { name: 'Interseção usa mínimo', goal: 'once((fuzzy_intersecao(0.2,0.8,R), number(R), abs(R-0.2) =< 0.0001))' },
    { name: 'União usa máximo', goal: 'once((fuzzy_uniao(0.7,0.6,R), number(R), abs(R-0.7) =< 0.0001))' },
    { name: 'Complemento usa 1 menos o grau', goal: 'once((fuzzy_complemento(0.3,R), number(R), abs(R-0.7) =< 0.0001))' }
  ] }
};

const prologExercises = {
  'prolog-praia-basico': { tests: [
    { name: 'Ana pode ir à praia', goal: 'once(pode_ir_praia(ana))' },
    { name: 'João não pode ir sem dinheiro', goal: 'once(\\+ pode_ir_praia(joao))' },
    { name: 'Maria não pode ir se não gosta de praia', goal: 'once(\\+ pode_ir_praia(maria))' }
  ] },
  'prolog-maioridade': { tests: [
    { name: 'Ana é maior de idade', goal: 'once(maior_de_idade(ana))' },
    { name: 'Bruno ainda não é maior de idade', goal: 'once(\\+ maior_de_idade(bruno))' },
    { name: 'Carla é maior de idade', goal: 'once(maior_de_idade(carla))' }
  ] },
  'prolog-irmaos': { tests: [
    { name: 'Ana e Bruno são irmãos', goal: 'once(irmaos(ana,bruno))' },
    { name: 'Irmãos funciona nos dois sentidos', goal: 'once(irmaos(bruno,ana))' },
    { name: 'Uma pessoa não é irmã dela mesma', goal: 'once(\\+ irmaos(ana,ana))' }
  ] },
  'prolog-pertence': { tests: [
    { name: 'Encontra elemento no começo', goal: 'once(pertence(1,[1,2,3]))' },
    { name: 'Encontra elemento no fim', goal: 'once(pertence(3,[1,2,3]))' },
    { name: 'Falha quando não pertence', goal: 'once(\\+ pertence(9,[1,2,3]))' }
  ] },
  'prolog-primeiro': { tests: [
    { name: 'Primeiro número', goal: 'once(primeiro([10,20,30],10))' },
    { name: 'Primeiro átomo', goal: 'once(primeiro([ana,bruno],ana))' },
    { name: 'Não aceita elemento errado', goal: 'once(\\+ primeiro([10,20,30],20))' }
  ] },
  'prolog-ultimo': { tests: [
    { name: 'Último de lista com vários itens', goal: 'once(ultimo([1,2,3,4],4))' },
    { name: 'Último de lista unitária', goal: 'once(ultimo([x],x))' },
    { name: 'Não aceita primeiro como último', goal: 'once(\\+ ultimo([1,2,3],1))' }
  ] },
  'prolog-tamanho': { tests: [
    { name: 'Tamanho de lista vazia', goal: 'once(tamanho([],0))' },
    { name: 'Tamanho de três elementos', goal: 'once(tamanho([a,b,c],3))' },
    { name: 'Tamanho de cinco elementos', goal: 'once(tamanho([1,2,3,4,5],5))' }
  ] },
  'prolog-soma': { tests: [
    { name: 'Soma lista vazia', goal: 'once(soma([],0))' },
    { name: 'Soma positivos', goal: 'once(soma([2,3,5],10))' },
    { name: 'Soma com negativo', goal: 'once(soma([-2,2,4],4))' }
  ] },
  'prolog-intersecao': { tests: [
    { name: 'Interseção da prova', goal: 'once(intersecao([1,2,3,4,5],[5,6,1,8,3],[1,3,5]))' },
    { name: 'Sem elementos comuns', goal: 'once(intersecao([a,b],[c,d],[]))' },
    { name: 'Mantém ordem da primeira lista', goal: 'once(intersecao([a,b,c],[c,b,a],[a,b,c]))' }
  ] },
  'prolog-concatena': { tests: [
    { name: 'Concatena duas listas', goal: 'once(concatena([1,2],[3,4],[1,2,3,4]))' },
    { name: 'Lista vazia à esquerda', goal: 'once(concatena([],[a,b],[a,b]))' },
    { name: 'Lista vazia à direita', goal: 'once(concatena([a],[],[a]))' }
  ] },
  'prolog-inverte': { tests: [
    { name: 'Inverte números', goal: 'once(inverte([1,2,3],[3,2,1]))' },
    { name: 'Inverte lista unitária', goal: 'once(inverte([a],[a]))' },
    { name: 'Inverte lista vazia', goal: 'once(inverte([],[]))' }
  ] },
  'prolog-remove-negativos': { tests: [
    { name: 'Remove valores negativos', goal: 'once(remove_negativos([-2,0,5,-1,3],[0,5,3]))' },
    { name: 'Mantém lista só positiva', goal: 'once(remove_negativos([1,2,3],[1,2,3]))' },
    { name: 'Remove todos negativos', goal: 'once(remove_negativos([-3,-1],[]))' }
  ] },
  'prolog-maiores-que': { tests: [
    { name: 'Filtra maiores que 5', goal: 'once(maiores_que(5,[2,8,5,10,1],[8,10]))' },
    { name: 'Nenhum maior', goal: 'once(maiores_que(9,[1,2,3],[]))' },
    { name: 'Todos maiores', goal: 'once(maiores_que(0,[1,2,3],[1,2,3]))' }
  ] },
  'prolog-conta-pares': { tests: [
    { name: 'Conta pares misturados', goal: 'once(conta_pares([1,2,3,4,6],3))' },
    { name: 'Lista sem pares', goal: 'once(conta_pares([1,3,5],0))' },
    { name: 'Lista vazia', goal: 'once(conta_pares([],0))' }
  ] },
  'prolog-caminho': { tests: [
    { name: 'Existe caminho direto', goal: 'once(caminho(a,b))' },
    { name: 'Existe caminho indireto', goal: 'once(caminho(a,d))' },
    { name: 'Não existe caminho de volta', goal: 'once(\\+ caminho(d,a))' }
  ] },
  'prolog-ancestral': { tests: [
    { name: 'Pai é ancestral', goal: 'once(ancestral(joao,maria))' },
    { name: 'Avô é ancestral', goal: 'once(ancestral(joao,pedro))' },
    { name: 'Não inverte ancestralidade', goal: 'once(\\+ ancestral(pedro,joao))' }
  ] },
  'prolog-temperatura': { tests: [
    { name: 'Temperatura fria', goal: 'once(classifica_temperatura(12,fria))' },
    { name: 'Temperatura morna', goal: 'once(classifica_temperatura(24,morna))' },
    { name: 'Temperatura quente', goal: 'once(classifica_temperatura(31,quente))' }
  ] },
  'prolog-decide-praia': { tests: [
    { name: 'Vai à praia quando tudo ajuda', goal: 'once(decide_praia(nao,sim,sim,sim))' },
    { name: 'Não vai se chover', goal: 'once(decide_praia(sim,sim,sim,nao))' },
    { name: 'Não vai sem dinheiro', goal: 'once(decide_praia(nao,nao,sim,nao))' },
    { name: 'Não vai sem tempo', goal: 'once(decide_praia(nao,sim,nao,nao))' }
  ] },
  'prolog-fuzzy-ops': { tests: [
    { name: 'Interseção usa mínimo', goal: 'once((fuzzy_intersecao(0.2,0.8,R), number(R), abs(R-0.2) =< 0.0001))' },
    { name: 'União usa máximo', goal: 'once((fuzzy_uniao(0.7,0.6,R), number(R), abs(R-0.7) =< 0.0001))' },
    { name: 'Complemento usa 1 menos o grau', goal: 'once((fuzzy_complemento(0.3,R), number(R), abs(R-0.7) =< 0.0001))' }
  ] },
  'prolog-media': {
    tests: [
      {
        name: 'Média da lista da prova',
        goal: 'once((media(M,[0,5,10,15,20]), number(M), abs(M-10) =< 0.0001))'
      },
      {
        name: 'Média de lista unitária',
        goal: 'once((media(M,[7]), number(M), abs(M-7) =< 0.0001))'
      },
      {
        name: 'Média com valores negativos',
        goal: 'once((media(M,[-2,2,4]), number(M), abs(M-1.3333333333333333) =< 0.0001))'
      }
    ]
  }
};

async function runPythonExercise(exercise, code) {
  const dir = await mkdtemp(path.join(tmpdir(), 'iaquest-python-'));
  try {
    const file = path.join(dir, 'solution.py');
    await writeFile(file, `${code}\n\n${pythonHarness(exercise.tests)}\n`, 'utf8');
    const result = await runProcess(PYTHON, [file], { timeoutMs: 3500 });
    if (result.timedOut) return failedRun(exercise.tests, 'Tempo limite excedido. Verifique loops infinitos.');
    if (result.code !== 0) return failedRun(exercise.tests, result.stderr || result.stdout || 'Erro de execução.');
    const lastLine = result.stdout.trim().split(/\r?\n/).filter(Boolean).at(-1) || '{}';
    const parsed = JSON.parse(lastLine);
    return scoreTests(parsed.tests);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

function pythonHarness(tests) {
  return `
if __name__ == "__main__":
    import json
    import math
    import traceback

    def close_enough(actual, expected):
        if isinstance(expected, float):
            return isinstance(actual, (int, float)) and math.isclose(float(actual), expected, rel_tol=1e-6, abs_tol=1e-6)
        if isinstance(expected, (list, tuple)):
            return isinstance(actual, (list, tuple)) and len(actual) == len(expected) and all(close_enough(a, e) for a, e in zip(actual, expected))
        return actual == expected

    tests = []
${tests.map((test) => `
    try:
        actual = ${test.expression}
        expected = ${JSON.stringify(test.expected)}
        passed = close_enough(actual, expected)
        tests.append({"name": ${JSON.stringify(test.name)}, "passed": passed, "message": f"esperado {expected!r}, recebido {actual!r}"})
    except Exception:
        tests.append({"name": ${JSON.stringify(test.name)}, "passed": False, "message": traceback.format_exc(limit=1)})
`).join('')}
    print(json.dumps({"tests": tests}, ensure_ascii=False))
`;
}

async function runPrologExercise(exercise, code) {
  const dir = await mkdtemp(path.join(tmpdir(), 'iaquest-prolog-'));
  try {
    const file = path.join(dir, 'solution.pl');
    await writeFile(file, code, 'utf8');
    const tests = [];
    for (const test of exercise.tests) {
      const result = await runProcess(SWIPL, ['-q', '-s', file, '-g', `(${test.goal} -> halt(0); halt(1))`], { timeoutMs: 3000 });
      if (result.timedOut) {
        tests.push({ name: test.name, passed: false, message: 'Tempo limite excedido. Verifique recursão infinita.' });
      } else if (result.code === 0) {
        tests.push({ name: test.name, passed: true, message: 'consulta satisfeita' });
      } else {
        const message = result.stderr || result.stdout || 'consulta falhou';
        tests.push({ name: test.name, passed: false, message: compactMessage(message) });
      }
    }
    return scoreTests(tests);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

function scoreTests(tests) {
  const score = tests.filter((test) => test.passed).length;
  const maxScore = Math.max(tests.length, 1);
  return { score, maxScore, passed: score === maxScore, tests };
}

function failedRun(tests, message) {
  return scoreTests(tests.map((test) => ({ name: test.name, passed: false, message: compactMessage(message) })));
}

function normalizeServerError(error) {
  return { error: compactMessage(error?.message || String(error)) };
}

function compactMessage(message) {
  return String(message || '').split(/\r?\n/).filter(Boolean).slice(0, 4).join(' | ');
}

function commandAvailable(command, args) {
  return new Promise((resolve) => {
    const child = spawn(command, args, { windowsHide: true });
    const timer = setTimeout(() => {
      child.kill();
      resolve(false);
    }, 1500);
    child.on('error', () => {
      clearTimeout(timer);
      resolve(false);
    });
    child.on('close', () => {
      clearTimeout(timer);
      resolve(true);
    });
  });
}

function runProcess(command, args, { timeoutMs }) {
  return new Promise((resolve) => {
    const child = spawn(command, args, { windowsHide: true });
    let stdout = '';
    let stderr = '';
    let settled = false;
    const timer = setTimeout(() => {
      settled = true;
      child.kill();
      resolve({ code: null, stdout, stderr, timedOut: true });
    }, timeoutMs);

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });
    child.on('error', (error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve({ code: 1, stdout, stderr: error.message, timedOut: false });
    });
    child.on('close', (code) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve({ code, stdout, stderr, timedOut: false });
    });
  });
}
