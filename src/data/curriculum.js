export const graphFigure = `
<div class="exam-figure">
  <svg class="graph-svg" viewBox="0 0 520 260" role="img" aria-label="Grafo da prova com A ligado a B, C, D, E; B a F e G; C a H; D a I; E a J e K">
    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#263241"></path>
      </marker>
    </defs>
    <g stroke="#263241" stroke-width="3" marker-end="url(#arrow)">
      <line x1="260" y1="42" x2="105" y2="104"></line>
      <line x1="260" y1="42" x2="205" y2="104"></line>
      <line x1="260" y1="42" x2="315" y2="104"></line>
      <line x1="260" y1="42" x2="415" y2="104"></line>
      <line x1="105" y1="118" x2="70" y2="188"></line>
      <line x1="105" y1="118" x2="140" y2="188"></line>
      <line x1="205" y1="118" x2="205" y2="188"></line>
      <line x1="315" y1="118" x2="315" y2="188"></line>
      <line x1="415" y1="118" x2="380" y2="188"></line>
      <line x1="415" y1="118" x2="450" y2="188"></line>
    </g>
    <g fill="#172033" font-size="24" font-weight="900" text-anchor="middle" font-family="Segoe UI, Arial">
      ${node('A',260,32)} ${node('B',105,108)} ${node('C',205,108)} ${node('D',315,108)} ${node('E',415,108)}
      ${node('F',70,206)} ${node('G',140,206)} ${node('H',205,206)} ${node('I',315,206)} ${node('J',380,206)} ${node('K',450,206)}
    </g>
  </svg>
</div>`;

function node(label,x,y){ return `<circle cx="${x}" cy="${y}" r="14" fill="#172033"></circle><text x="${x}" y="${y-20}">${label}</text>`; }

export const prologResolutionFigure = `
<div class="exam-figure">
  <svg class="graph-svg" viewBox="0 0 560 260" role="img" aria-label="Árvore de resolução Prolog mostrando consulta, unificação, subobjetivos e backtracking">
    <defs>
      <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#263241"></path>
      </marker>
    </defs>
    <g font-family="Segoe UI, Arial" text-anchor="middle">
      <rect x="165" y="18" width="230" height="44" rx="12" fill="#dcf8b8" stroke="#58cc02" stroke-width="2"></rect>
      <text x="280" y="46" font-size="17" font-weight="900" fill="#263241">consulta: pertence(3,[1,2,3])</text>
      <line x1="280" y1="64" x2="120" y2="106" stroke="#263241" stroke-width="2" marker-end="url(#arrow2)"></line>
      <line x1="280" y1="64" x2="280" y2="106" stroke="#263241" stroke-width="2" marker-end="url(#arrow2)"></line>
      <line x1="280" y1="64" x2="440" y2="106" stroke="#263241" stroke-width="2" marker-end="url(#arrow2)"></line>
      <rect x="30" y="108" width="180" height="44" rx="12" fill="#ffe1e1" stroke="#ff4b4b" stroke-width="2"></rect>
      <text x="120" y="136" font-size="16" font-weight="900" fill="#263241">3 = 1 ? falha</text>
      <rect x="190" y="108" width="180" height="44" rx="12" fill="#ffe1e1" stroke="#ff4b4b" stroke-width="2"></rect>
      <text x="280" y="136" font-size="16" font-weight="900" fill="#263241">3 = 2 ? falha</text>
      <rect x="350" y="108" width="180" height="44" rx="12" fill="#dcf8b8" stroke="#58cc02" stroke-width="2"></rect>
      <text x="440" y="136" font-size="16" font-weight="900" fill="#263241">3 = 3 ? sucesso</text>
      <line x1="120" y1="154" x2="280" y2="204" stroke="#263241" stroke-width="2" stroke-dasharray="5 5" marker-end="url(#arrow2)"></line>
      <line x1="280" y1="154" x2="280" y2="204" stroke="#263241" stroke-width="2" stroke-dasharray="5 5" marker-end="url(#arrow2)"></line>
      <line x1="440" y1="154" x2="280" y2="204" stroke="#263241" stroke-width="2" marker-end="url(#arrow2)"></line>
      <rect x="155" y="205" width="250" height="38" rx="12" fill="#dff5ff" stroke="#1cb0f6" stroke-width="2"></rect>
      <text x="280" y="230" font-size="15" font-weight="900" fill="#263241">resposta: true após backtracking</text>
    </g>
  </svg>
</div>`;

export const weightedSearchFigure = `
<div class="exam-figure">
  <svg class="graph-svg" viewBox="0 0 560 300" role="img" aria-label="Grafo ponderado para busca de custo uniforme, gulosa e A estrela">
    <defs>
      <marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#263241"></path>
      </marker>
    </defs>
    <g stroke="#263241" stroke-width="3" marker-end="url(#arrow3)" font-family="Segoe UI, Arial">
      <line x1="74" y1="150" x2="195" y2="68"></line><text x="132" y="92" fill="#263241" font-weight="900">2</text>
      <line x1="74" y1="150" x2="195" y2="232"></line><text x="132" y="222" fill="#263241" font-weight="900">5</text>
      <line x1="222" y1="70" x2="340" y2="70"></line><text x="281" y="58" fill="#263241" font-weight="900">4</text>
      <line x1="222" y1="230" x2="340" y2="230"></line><text x="281" y="256" fill="#263241" font-weight="900">1</text>
      <line x1="365" y1="70" x2="488" y2="150"></line><text x="438" y="94" fill="#263241" font-weight="900">7</text>
      <line x1="365" y1="230" x2="488" y2="150"></line><text x="438" y="224" fill="#263241" font-weight="900">2</text>
      <line x1="218" y1="78" x2="342" y2="218"></line><text x="294" y="142" fill="#263241" font-weight="900">2</text>
    </g>
    <g font-family="Segoe UI, Arial" text-anchor="middle" font-weight="900">
      ${wNode('S',60,150,'h=6')} ${wNode('A',210,60,'h=4')} ${wNode('B',210,240,'h=3')}
      ${wNode('C',355,60,'h=7')} ${wNode('D',355,240,'h=2')} ${wNode('G',505,150,'h=0')}
    </g>
  </svg>
</div>`;

function wNode(label,x,y,h){ return `<circle cx="${x}" cy="${y}" r="22" fill="#172033"></circle><text x="${x}" y="${y+5}" fill="#fff" font-size="18">${label}</text><text x="${x}" y="${y+40}" fill="#68707c" font-size="13">${h}</text>`; }

export const astarFormulaFigure = `
<div class="exam-figure">
  <svg class="graph-svg" viewBox="0 0 560 190" role="img" aria-label="Fórmula do A estrela f de n igual g de n mais h de n">
    <rect x="28" y="28" width="504" height="132" rx="18" fill="#f9fbfe" stroke="#e2e7ee"></rect>
    <g font-family="Segoe UI, Arial" text-anchor="middle">
      <text x="280" y="72" font-size="30" font-weight="950" fill="#172033">f(n) = g(n) + h(n)</text>
      <rect x="56" y="100" width="132" height="42" rx="12" fill="#dff5ff"></rect>
      <rect x="214" y="100" width="132" height="42" rx="12" fill="#dcf8b8"></rect>
      <rect x="372" y="100" width="132" height="42" rx="12" fill="#f0ddff"></rect>
      <text x="122" y="126" font-size="14" font-weight="900" fill="#172033">f: prioridade</text>
      <text x="280" y="126" font-size="14" font-weight="900" fill="#172033">g: custo real</text>
      <text x="438" y="126" font-size="14" font-weight="900" fill="#172033">h: estimativa</text>
    </g>
  </svg>
</div>`;

export const fuzzyMembershipFigure = `
<div class="exam-figure">
  <svg class="graph-svg" viewBox="0 0 560 240" role="img" aria-label="Funções de pertinência fuzzy para temperatura fria, morna e quente">
    <rect x="24" y="18" width="512" height="196" rx="16" fill="#151b2f"></rect>
    <line x1="64" y1="178" x2="500" y2="178" stroke="#c8d5e6" stroke-width="2"></line>
    <line x1="64" y1="178" x2="64" y2="42" stroke="#c8d5e6" stroke-width="2"></line>
    <polygon points="64,178 140,52 236,178" fill="#1cb0f6" opacity=".45" stroke="#1cb0f6" stroke-width="3"></polygon>
    <polygon points="150,178 280,52 410,178" fill="#58cc02" opacity=".45" stroke="#58cc02" stroke-width="3"></polygon>
    <polygon points="324,178 438,52 500,178" fill="#ff4b4b" opacity=".45" stroke="#ff4b4b" stroke-width="3"></polygon>
    <g font-family="Segoe UI, Arial" font-weight="900">
      <text x="108" y="74" fill="#dff5ff">fria</text>
      <text x="254" y="74" fill="#dcf8b8">morna</text>
      <text x="412" y="74" fill="#ffe1e1">quente</text>
      <text x="48" y="45" fill="#c8d5e6">1</text>
      <text x="48" y="181" fill="#c8d5e6">0</text>
      <text x="256" y="204" fill="#c8d5e6">temperatura</text>
    </g>
  </svg>
</div>`;

export const sources = [
  ['INEP: Caderno público ENADE 2024 - Ciência da Computação', 'https://download.inep.gov.br/enade/provas_e_gabaritos/2024_PV_ciencia_da_computacao.pdf'],
  ['INEP: Diretrizes ENADE Computação 2011 - escopo de IA', 'https://download.inep.gov.br/educacao_superior/enade/legislacao/2011/diretrizes/diretrizes_computacao_n_239.pdf'],
  ['SWI-Prolog documentation', 'https://www.swi-prolog.org/pldoc/'],
  ['Visual Prolog: Lists and Recursion', 'https://wiki.visual-prolog.com/index.php?title=Lists_and_Recursion'],
  ['UFRJ: Lista de Exercícios sobre Prolog', 'https://ic.ufrj.br/~carla/cursos/IA/lista_prolog.pdf'],
  ['Qconcursos: questão de heurística em IA', 'https://www.qconcursos.com/questoes-de-concursos/questoes/577c9ab3-38'],
  ['PUC-Rio INF1771: exercícios de A* e busca local', 'https://edirlei.com/aulas/ia_2013_1/ListaExercicios02.pdf'],
  ['UFPE/CIn: exercícios de estratégias de busca', 'https://www.cin.ufpe.br/~mcps/IA/IA2006.1/exercicios-busca-2006.1.pdf'],
  ['FATEC-SP/USP: Lista de Exercícios de IA', 'https://www.ime.usp.br/~slago/fatecsp.ia.lista1.pdf'],
  ['UFSC: Plano de IA com busca, SE e fuzzy', 'https://repositorio.ufsc.br/bitstream/handle/123456789/230335/DEC7133%20-%20Inteligencia%20Artificial.pdf?isAllowed=y&sequence=40'],
  ['ISUTC: Fichas de exercícios de IA', 'https://fenix.isutc.ac.mz/isutc/disciplinas/IART/Ano%20Lectivo%202023/1-semestre/fichas-de-exercicios'],
  ['Baeldung: DFS vs BFS', 'https://www.baeldung.com/cs/dfs-vs-bfs'],
  ['GeeksforGeeks: BFS for Artificial Intelligence', 'https://www.geeksforgeeks.org/artificial-intelligence/breadth-first-search-bfs-for-artificial-intelligence/'],
  ['GeeksforGeeks: Forward and Backward Chaining', 'https://www.geeksforgeeks.org/artificial-intelligence/forward-chaining-and-backward-chaining-inference-in-rule-based-systems/'],
  ['Fuzzy set operations reference', 'https://link.springer.com/chapter/10.1007/978-981-13-7430-2_2']
];

export const moduleHints = {
  prolog: 'Em Prolog, leia da esquerda para a direita: primeiro tente casar a cabeça da regra, depois acompanhe os subobjetivos e o backtracking.',
  'prolog-lab': 'Escreva primeiro os fatos, depois as regras, e só então pense na consulta que provaria o resultado pedido.',
  busca: 'Em busca, desenhe a fronteira. BFS usa fila e expande por nível; DFS usa pilha e desce por ramo.',
  se: 'Em sistemas especialistas, separe sempre antecedente (SE) e consequente (ENTÃO) antes de classificar variáveis.',
  fuzzy: 'Em fuzzy, traduza a frase para operação: E costuma virar mínimo, OU costuma virar máximo, NÃO vira 1 menos o grau.',
  exam: 'No simulado, responda como se estivesse justificando na prova: nomeie a técnica, aplique a regra e mostre o resultado.'
};

const prologPracticeItems = [
  plab('Praia simples', 'Crie fatos sobre quem gosta de praia e quem tem dinheiro. Depois crie pode_ir_praia(Pessoa).', 'Informe fatos para ana, joao e maria. A regra deve ser verdadeira só quando a pessoa gosta de praia e tem dinheiro.', ['Fatos terminam com ponto.', 'A vírgula dentro da regra funciona como E.', 'A consulta de treino pode ser pode_ir_praia(ana).'], 'prolog-praia-basico', {
    facts:'gosta(ana, praia).\ngosta(joao, praia).\ngosta(maria, cinema).\ntem_dinheiro(ana).',
    rules:'pode_ir_praia(Pessoa) :-\n    gosta(Pessoa, praia),\n    tem_dinheiro(Pessoa).',
    query:'pode_ir_praia(ana).'
  }),
  plab('Maioridade', 'Modele pessoas com idade e escreva maior_de_idade(Pessoa).', 'Use idade(Pessoa, Idade) como fato e uma regra que aprove quando Idade >= 18.', ['Use comparação numérica: Idade >= 18.', 'Átomos como ana e bruno começam com minúscula.', 'Teste maior_de_idade(ana).'], 'prolog-maioridade', {
    facts:'idade(ana, 20).\nidade(bruno, 17).\nidade(carla, 18).',
    rules:'maior_de_idade(Pessoa) :-\n    idade(Pessoa, Idade),\n    Idade >= 18.',
    query:'maior_de_idade(carla).'
  }),
  plab('Irmãos', 'Com fatos de pai e mãe, crie uma regra irmaos(A,B).', 'Duas pessoas são irmãs se têm o mesmo pai e a mesma mãe, mas não são a mesma pessoa.', ['Use \\= para garantir que A e B são diferentes.', 'A regra precisa funcionar nos dois sentidos.', 'A consulta de treino pode ser irmaos(ana, bruno).'], 'prolog-irmaos', {
    facts:'pai(carlos, ana).\npai(carlos, bruno).\npai(joao, bia).\nmae(maria, ana).\nmae(maria, bruno).\nmae(luiza, bia).',
    rules:'irmaos(A, B) :-\n    pai(P, A), pai(P, B),\n    mae(M, A), mae(M, B),\n    A \\= B.',
    query:'irmaos(ana, bruno).'
  }),
  plab('Pertence à lista', 'Escreva pertence(X, Lista) usando recursão.', 'A regra deve acertar quando X for a cabeça da lista ou procurar X na cauda.', ['Use [X|_] para acertar na cabeça.', 'Use [_|T] para ignorar a cabeça e continuar.', 'Esse é o mesmo padrão do nono da prova.'], 'prolog-pertence', {
    facts:'',
    rules:'pertence(X, [X|_]).\npertence(X, [_|T]) :- pertence(X, T).',
    query:'pertence(3, [1,2,3]).'
  }),
  plab('Primeiro elemento', 'Crie primeiro(Lista, X), que retorna o primeiro elemento da lista.', 'Use unificação com [X|_] para separar cabeça e cauda.', ['A cauda pode ser ignorada com _.', 'Lista vazia não tem primeiro elemento.', 'Teste primeiro([10,20,30], X).'], 'prolog-primeiro', {
    facts:'',
    rules:'primeiro([X|_], X).',
    query:'primeiro([10,20,30], X).'
  }),
  plab('Último elemento', 'Crie ultimo(Lista, X), que retorna o último elemento.', 'A lista com um único elemento é o caso base; caso contrário, ignore a cabeça e procure na cauda.', ['Caso base: ultimo([X], X).', 'Caso recursivo usa [_|T].', 'Teste ultimo([1,2,3,4], X).'], 'prolog-ultimo', {
    facts:'',
    rules:'ultimo([X], X).\nultimo([_|T], X) :- ultimo(T, X).',
    query:'ultimo([1,2,3,4], X).'
  }),
  plab('Tamanho da lista', 'Crie tamanho(Lista, N), contando quantos elementos existem.', 'A lista vazia tem tamanho 0. Na lista não vazia, conte a cauda e some 1.', ['Use is para calcular N is N1 + 1.', 'Use [_|T] quando não precisa do valor da cabeça.', 'Teste tamanho([a,b,c], N).'], 'prolog-tamanho', {
    facts:'',
    rules:'tamanho([], 0).\ntamanho([_|T], N) :-\n    tamanho(T, N1),\n    N is N1 + 1.',
    query:'tamanho([a,b,c], N).'
  }),
  plab('Soma de lista', 'Crie soma(Lista, S), somando números de uma lista.', 'A soma da lista vazia é 0; na recursão, some a cabeça ao resultado da cauda.', ['Use [H|T].', 'Use S is S1 + H.', 'Teste soma([2,3,5], S).'], 'prolog-soma', {
    facts:'',
    rules:'soma([], 0).\nsoma([H|T], S) :-\n    soma(T, S1),\n    S is S1 + H.',
    query:'soma([2,3,5], S).'
  }),
  plab('Média da lista', 'Crie media(M, Lista), como na questão da prova.', 'Você pode criar soma/2 e tamanho/2, depois calcular M is S / N.', ['Inclua N > 0 para evitar divisão por zero.', 'O judge testa lista da prova e outros casos.', 'Consulta de treino: media(X, [0,5,10,15,20]).'], 'prolog-media', {
    facts:'',
    rules:'soma([], 0).\nsoma([H|T], S) :- soma(T, S1), S is S1 + H.\n\ntamanho([], 0).\ntamanho([_|T], N) :- tamanho(T, N1), N is N1 + 1.\n\nmedia(M, Lista) :-\n    soma(Lista, S),\n    tamanho(Lista, N),\n    N > 0,\n    M is S / N.',
    query:'media(X, [0,5,10,15,20]).'
  }),
  plab('Interseção de listas', 'Crie intersecao(A, B, R), preservando a ordem da primeira lista.', 'Se a cabeça da primeira lista pertence à segunda, ela entra em R; senão, é ignorada.', ['Você pode criar pertence/2.', 'Use corte ! se quiser evitar alternativas duplicadas.', 'É a versão com nome bom do nana da prova.'], 'prolog-intersecao', {
    facts:'',
    rules:'pertence(X, [X|_]).\npertence(X, [_|T]) :- pertence(X, T).\n\nintersecao([], _, []).\nintersecao([H|T], B, [H|R]) :-\n    pertence(H, B), !,\n    intersecao(T, B, R).\nintersecao([_|T], B, R) :-\n    intersecao(T, B, R).',
    query:'intersecao([1,2,3,4,5], [5,6,1,8,3], R).'
  }),
  plab('Concatenação', 'Crie concatena(A, B, R), juntando duas listas.', 'Quando a primeira lista acaba, o resultado é B. Caso contrário, mantenha a cabeça de A no resultado.', ['Caso base: concatena([], B, B).', 'Caso recursivo constrói [H|R].', 'Teste concatena([1,2], [3,4], R).'], 'prolog-concatena', {
    facts:'',
    rules:'concatena([], B, B).\nconcatena([H|T], B, [H|R]) :-\n    concatena(T, B, R).',
    query:'concatena([1,2], [3,4], R).'
  }),
  plab('Inverter lista', 'Crie inverte(Lista, R).', 'Use concatena/3 para colocar a cabeça no final da lista invertida da cauda.', ['Primeiro defina concatena/3.', 'Lista vazia invertida é vazia.', 'Teste inverte([1,2,3], R).'], 'prolog-inverte', {
    facts:'',
    rules:'concatena([], B, B).\nconcatena([H|T], B, [H|R]) :- concatena(T, B, R).\n\ninverte([], []).\ninverte([H|T], R) :-\n    inverte(T, RT),\n    concatena(RT, [H], R).',
    query:'inverte([1,2,3], R).'
  }),
  plab('Remover negativos', 'Crie remove_negativos(Lista, R).', 'Mantenha H quando H >= 0; descarte H quando H < 0.', ['Use duas regras recursivas para lista não vazia.', 'O corte pode evitar cair na regra de descarte depois de manter.', 'Teste remove_negativos([-2,0,5,-1,3], R).'], 'prolog-remove-negativos', {
    facts:'',
    rules:'remove_negativos([], []).\nremove_negativos([H|T], [H|R]) :-\n    H >= 0, !,\n    remove_negativos(T, R).\nremove_negativos([_|T], R) :-\n    remove_negativos(T, R).',
    query:'remove_negativos([-2,0,5,-1,3], R).'
  }),
  plab('Maiores que N', 'Crie maiores_que(N, Lista, R).', 'Filtre os elementos da lista que são maiores que N.', ['A condição é H > N.', 'Se H não passar, ignore e continue.', 'Teste maiores_que(5, [2,8,5,10,1], R).'], 'prolog-maiores-que', {
    facts:'',
    rules:'maiores_que(_, [], []).\nmaiores_que(N, [H|T], [H|R]) :-\n    H > N, !,\n    maiores_que(N, T, R).\nmaiores_que(N, [_|T], R) :-\n    maiores_que(N, T, R).',
    query:'maiores_que(5, [2,8,5,10,1], R).'
  }),
  plab('Contar pares', 'Crie conta_pares(Lista, N).', 'Conte quantos números da lista são pares.', ['Use H mod 2 =:= 0.', '=:= compara valores aritméticos.', 'Use is para somar 1.'], 'prolog-conta-pares', {
    facts:'',
    rules:'conta_pares([], 0).\nconta_pares([H|T], N) :-\n    H mod 2 =:= 0, !,\n    conta_pares(T, N1),\n    N is N1 + 1.\nconta_pares([_|T], N) :-\n    conta_pares(T, N).',
    query:'conta_pares([1,2,3,4,6], N).'
  }),
  plab('Caminho em grafo', 'Com fatos aresta(A,B), crie caminho(A,B).', 'Um caminho existe se há uma aresta direta ou se há uma aresta até um intermediário que chega ao destino.', ['Este é um padrão recursivo parecido com busca.', 'Cuidado com ciclos; este exercício usa grafo sem ciclo.', 'Teste caminho(a, d).'], 'prolog-caminho', {
    facts:'aresta(a,b).\naresta(b,c).\naresta(c,d).\naresta(a,e).',
    rules:'caminho(A, B) :- aresta(A, B).\ncaminho(A, B) :-\n    aresta(A, X),\n    caminho(X, B).',
    query:'caminho(a, d).'
  }),
  plab('Ancestralidade', 'Com fatos pai(Pai,Filho), crie ancestral(A,B).', 'A é ancestral de B se é pai direto de B ou pai de alguém que é ancestral de B.', ['Caso direto primeiro.', 'Caso recursivo usa uma pessoa intermediária.', 'Teste ancestral(joao, pedro).'], 'prolog-ancestral', {
    facts:'pai(joao, maria).\npai(maria, pedro).\npai(pedro, bia).',
    rules:'ancestral(A, B) :- pai(A, B).\nancestral(A, B) :-\n    pai(A, X),\n    ancestral(X, B).',
    query:'ancestral(joao, pedro).'
  }),
  plab('Classificar temperatura', 'Crie classifica_temperatura(T, Classe).', 'Classifique T como fria se T < 18, morna se 18 <= T < 30, quente se T >= 30.', ['Use comparações numéricas.', 'Faça uma regra para cada classe.', 'Teste classifica_temperatura(24, C).'], 'prolog-temperatura', {
    facts:'',
    rules:'classifica_temperatura(T, fria) :- T < 18.\nclassifica_temperatura(T, morna) :- T >= 18, T < 30.\nclassifica_temperatura(T, quente) :- T >= 30.',
    query:'classifica_temperatura(24, C).'
  }),
  plab('Decisão da praia', 'Transforme as regras do sistema especialista da prova em Prolog.', 'Crie decide_praia(Chuva, Dinheiro, Tempo, Resultado). Use sim/nao em minúsculo.', ['Regra 1: nao, sim, sim -> sim.', 'Regra 2: chuva sim OU dinheiro nao OU tempo nao -> nao.', 'Escreva as regras com padrões nos argumentos.'], 'prolog-decide-praia', {
    facts:'',
    rules:'decide_praia(nao, sim, sim, sim).\ndecide_praia(sim, _, _, nao).\ndecide_praia(_, nao, _, nao).\ndecide_praia(_, _, nao, nao).',
    query:'decide_praia(nao, sim, sim, R).'
  }),
  plab('Operações fuzzy', 'Crie predicados para interseção, união e complemento fuzzy.', 'Implemente fuzzy_intersecao(A,B,R), fuzzy_uniao(A,B,R) e fuzzy_complemento(A,R).', ['Interseção usa mínimo.', 'União usa máximo.', 'Complemento usa R is 1 - A.'], 'prolog-fuzzy-ops', {
    facts:'',
    rules:'fuzzy_intersecao(A, B, A) :- A =< B, !.\nfuzzy_intersecao(_, B, B).\n\nfuzzy_uniao(A, B, A) :- A >= B, !.\nfuzzy_uniao(_, B, B).\n\nfuzzy_complemento(A, R) :- R is 1 - A.',
    query:'fuzzy_intersecao(0.2, 0.8, R).'
  }),
  codeq(
    'Lista UNIFEI 01: alunos, professores e colegas',
    `aluno(joao, estruturas1).
aluno(maria, estruturas1).
aluno(joel, estruturas1).
aluno(creusa, estruturas1).
aluno(joao, so).
aluno(maria, so).
aluno(creusa, so).
aluno(creusa, cn).
aluno(iara, cn).
aluno(cesar, cn).
aluno(iara, estruturas2).
aluno(paulo, estruturas2).
aluno(marta, estruturas2).
aluno(josimar, so).

frequenta(joao, unifei).
frequenta(maria, unifei).
frequenta(joel, unifei).
frequenta(creusa, unifei).
frequenta(creusa, ufmg).
frequenta(iara, ufmg).
frequenta(cesar, ufmg).
frequenta(iara, unifal).
frequenta(paulo, unifal).
frequenta(marta, unifal).
frequenta(josimar, unifei).

professor(sandro, estruturas1).
professor(juliano, so).
professor(gisele, cn).
professor(luiz, estruturas2).

funcionario(sandro, unifei).
funcionario(juliano, unifei).
funcionario(gisele, ufmg).
funcionario(luiz, unifal).

% Implemente:
% a) aluno_do_professor(X, Y)
% b) pessoa_da_universidade(X, U)
% c) colega(X, Y)
% Regra: aluno eh colega se for colega de disciplina ou universidade.
% Regra: professor eh colega se for funcionario da mesma universidade.
`,
    '',
    [
      { label: 'Definiu aluno_do_professor/2', regex: 'aluno_do_professor\\s*\\(' },
      { label: 'Definiu pessoa_da_universidade/2', regex: 'pessoa_da_universidade\\s*\\(' },
      { label: 'Definiu colega/2', regex: 'colega\\s*\\(' }
    ],
    'Use as relacoes aluno/2, professor/2, frequenta/2 e funcionario/2 para ligar as pessoas.',
    {
      workspace: 'prolog',
      problem: 'Implemente as regras pedidas para descobrir alunos de um professor, pessoas de uma universidade e colegas.',
      writeGuide: 'Crie os predicados aluno_do_professor/2, pessoa_da_universidade/2 e colega/2 seguindo as regras do enunciado.',
      tips: [
        'Para aluno_do_professor, ligue professor(Y, Disc) com aluno(X, Disc).',
        'Para pessoa_da_universidade, use frequenta/2 ou funcionario/2.',
        'Para colega, use X \\= Y para evitar pessoa com ela mesma.'
      ],
      hideExpected: true
    }
  ),
  codeq(
    'Lista UNIFEI 02: situacao do aluno',
    `nota(joao, 5.0).
nota(maria, 6.0).
nota(joana, 8.0).
nota(mariana, 9.0).
nota(cleuza, 8.5).
nota(jose, 6.5).
nota(jaoquim, 4.5).
nota(pedro, -1).
nota(mary, 11).

% Crie situacao(X) para:
% aprovado (7.0 a 10.0)
% recuperacao (5.0 ate menor que 7.0)
% reprovado (0.0 ate menor que 5.0)
% erro se nenhuma faixa anterior
`,
    '',
    [
      { label: 'Definiu situacao/1', regex: 'situacao\\s*\\(' },
      { label: 'Tratou faixa de aprovado', regex: '>=\\s*7' },
      { label: 'Tratou erro fora da faixa', regex: 'erro|invalid|fora' }
    ],
    'Use faixas numericas com >= e <. Um corte pode evitar backtracking entre faixas.',
    {
      workspace: 'prolog',
      problem: 'Classifique a situacao do aluno com base na nota.',
      writeGuide: 'Escreva situacao/1 com as faixas pedidas e um caso de erro.',
      tips: [
        'As faixas sao: [7,10], [5,7) e [0,5).',
        'Use write/1 ou retorne um atom como aprovado/recuperacao/reprovado.',
        'Coloque o caso de erro por ultimo.'
      ],
      hideExpected: true
    }
  ),
  codeq(
    'Lista UNIFEI 03: cidades e estados',
    `cidade(sao_mateus, pequena).
cidade(vitoria, media).
cidade(sao_paulo, grande).
cidade(santos, media).
cidade(maceio, media).
cidade(campos, pequena).
cidade(cariacica, pequena).
cidade(colatina, pequena).

capital(vitoria).
capital(maceio).
capital(sao_paulo).

estado(es, sudeste).
estado(al, nordeste).
estado(sp, sudeste).
estado(pe, nordeste).

pertence(sao_mateus, es).
pertence(vitoria, es).
pertence(sao_paulo, sp).
pertence(santos, sp).
pertence(maceio, al).
pertence(campos, sp).
pertence(colatina, es).
pertence(cariacica, es).

% Implemente:
% cidade_pequena/1
% cidade_na_regiao_norte/1
% capital_regiao_sul/1
% cidade_pequena_regiao_sudeste/1
% estado_com_capital_grande/1
% estado_regiao_nordeste_com_capital_media/1
% cidade_pequena_do_estado/2
`,
    '',
    [
      { label: 'Definiu cidade_pequena/1', regex: 'cidade_pequena\\s*\\(' },
      { label: 'Definiu cidade_na_regiao_norte/1', regex: 'cidade_na_regiao_norte\\s*\\(' },
      { label: 'Definiu cidade_pequena_do_estado/2', regex: 'cidade_pequena_do_estado\\s*\\(' }
    ],
    'Ligue cidade/2, pertence/2, estado/2 e capital/1 para chegar nas respostas.',
    {
      workspace: 'prolog',
      problem: 'Use fatos de cidade, estado, capital e pertence para criar os predicados pedidos.',
      writeGuide: 'Implemente os predicados listados no enunciado e teste com consultas.',
      tips: [
        'Capital de um estado: capital(C), pertence(C, E).',
        'Regiao de um estado: estado(E, Regiao).',
        'Cidade pequena do estado: cidade(C, pequena), pertence(C, E).'
      ],
      hideExpected: true
    }
  ),
  codeq(
    'Lista UNIFEI 04: arvore genealogica',
    `homem(joao).
homem(pedro).
homem(jose).

mulher(maria).
mulher(creusa).

genitor(joao, pedro).
genitor(pedro, jose).
genitor(maria, pedro).
genitor(creusa, jose).

pai(X, Y) :- homem(X), genitor(X, Y).
mae(X, Y) :- mulher(X), genitor(X, Y).

% Implemente: avom, avof, irmao, irma, primo, prima, tio, tia.
`,
    '',
    [
      { label: 'Definiu avom/2 ou avof/2', regex: 'avom\\s*\\(|avof\\s*\\(' },
      { label: 'Definiu irmao/2 ou irma/2', regex: 'irmao\\s*\\(|irma\\s*\\(' },
      { label: 'Definiu tio/2 ou tia/2', regex: 'tio\\s*\\(|tia\\s*\\(' }
    ],
    'Use pai/2 e mae/2 como base e derive os demais relacionamentos.',
    {
      workspace: 'prolog',
      problem: 'Complete a arvore genealogica com as relacoes pedidas.',
      writeGuide: 'Crie regras para avos, irmaos, primos e tios a partir de pai/2 e mae/2.',
      tips: [
        'Para avo, use pai/2 ou mae/2 em dois passos.',
        'Irmao/irma costuma exigir mesmo pai e mae e X \\= Y.',
        'Tio/tia: X eh irmao(a) de um dos pais de Y.'
      ],
      hideExpected: true
    }
  ),
  wr(
    'Lista UNIFEI 05: eu sou meu proprio avo',
    '',
    [
      { label: 'Definiu relacoes basicas (pai/mae)', regex: 'pai\\s*\\(|mae\\s*\\(' },
      { label: 'Definiu sogro/2 ou genro/2', regex: 'sogro\\s*\\(|genro\\s*\\(' }
    ],
    'Modele a historia com fatos e regras de familia e mostre como a conclusao aparece.',
    'Descreva as relacoes em Prolog e explique como chega em avo(Voce, Voce).',
    {
      tips: [
        'Crie fatos para casamento e parentesco imediato.',
        'Defina sogro/sogra e genro/nora para conectar familias.',
        'Mostre uma cadeia de duas geracoes que retorna a voce.'
      ],
      hideExpected: true
    }
  ),
  mc(
    'Atividade 1: gosta_de/2',
    [
      'Para a pergunta gosta_de(maria, X) o programa acusara um erro.',
      'Para a pergunta gosta_de(maria, X) a resposta sera false.',
      'Para a pergunta gosta_de(maria, X) a resposta sera X = tenis.',
      'Para a pergunta gosta_de(maria, X) a resposta sera true.',
      'Nenhuma das alternativas anteriores.'
    ],
    2,
    'Maria herda X de elen e precisa de um Y diferente de X que marco goste. Como marco gosta de basquete, X=tenis funciona.'
  ),
  codeq(
    'Atividade 2: indice em lista',
    `% Implemente encontraind(Valor, Lista, Indice).
% Indice deve comecar em 0.
% Exemplo: encontraind(7,[3,41,27,7,18],X) => X = 3.
`,
    '',
    [
      { label: 'Definiu encontraind/3', regex: 'encontraind\\s*\\(' },
      { label: 'Usou acumulador ou conta de passos', regex: 'is|N1|N\\s*is' }
    ],
    'Use recursao com acumulador ou aumente o indice a cada passo na cauda.',
    {
      workspace: 'prolog',
      problem: 'Retorne o indice (base 0) da primeira ocorrencia do valor na lista.',
      writeGuide: 'Crie encontraind/3 seguindo os exemplos do enunciado.',
      tips: [
        'Caso base quando a cabeca da lista eh o valor buscado.',
        'No caso recursivo, incremente o indice.',
        'Comece a busca com indice 0.'
      ],
      hideExpected: true
    }
  ),
  codeq(
    'Atividade 3: multiplicacao de listas',
    `% Implemente multi(L1, L2, R).
% Quando as listas tem tamanhos diferentes, continue com os elementos restantes.
% Exemplo: multi([2,4,5],[4,3,2,6,8,9],R) => R = [8,12,10,6,8,9].
`,
    '',
    [
      { label: 'Definiu multi/3', regex: 'multi\\s*\\(' },
      { label: 'Tratou listas de tamanhos diferentes', regex: '\\[\\]|\|T' }
    ],
    'Multiplique elemento a elemento. Se uma lista acabar, copie o restante da outra.',
    {
      workspace: 'prolog',
      problem: 'Faça a multiplicacao elemento a elemento e preserve o restante da lista maior.',
      writeGuide: 'Crie multi/3 seguindo os exemplos do enunciado.',
      tips: [
        'Caso base quando uma das listas for [].',
        'Caso recursivo multiplica cabecas e segue na cauda.',
        'Quando uma lista termina, retorne a outra como resto.'
      ],
      hideExpected: true
    }
  ),
  wr(
    'Atividade 4: programa misterio',
    '',
    [
      { label: 'Identificou o que o programa calcula', regex: 'par|tamanho|comprimento' }
    ],
    'Explique o que o programa faz e simule a consulta xxxx([5,3,7,9]).',
    'Descreva o objetivo de xxxx/1 e o resultado da consulta proposta.',
    {
      tips: [
        'nnnn/2 conta o tamanho da lista.',
        'xxxx/1 verifica se o tamanho eh par.',
        'A lista [5,3,7,9] tem 4 elementos.'
      ],
      hideExpected: true
    }
  ),
  codeq(
    'Atividade 5: tradutor listtran',
    `tran(eins, one). tran(um, un).
tran(zwei, two). tran(dois, deux).
tran(drei, three). tran(tres, trois).
tran(vier, four). tran(quatro, quatre).
tran(fuenf, five). tran(cinco, cinq).
tran(sechs, six). tran(seis, six).
tran(sieben, seven). tran(sete, sept).
tran(acht, eight). tran(oito, huit).
tran(neun, nine). tran(nove, neuf).
tran(zehn, ten). tran(dez, dix).

% Implemente listtran/2 para traduzir listas.
% Deve funcionar nos dois sentidos.
`,
    '',
    [
      { label: 'Definiu listtran/2', regex: 'listtran\\s*\\(' },
      { label: 'Usou tran/2 dentro da recursao', regex: 'tran\\s*\\(' }
    ],
    'Use recursao sobre a lista e o predicado tran/2 para mapear cada elemento.',
    {
      workspace: 'prolog',
      problem: 'Crie listtran/2 para traduzir listas entre idiomas usando tran/2.',
      writeGuide: 'Implemente listtran/2 de forma bidirecional.',
      tips: [
        'Caso base: listtran([], []).',
        'Caso recursivo: traduza a cabeca e siga para a cauda.',
        'Nao use is; apenas unificacao e tran/2.'
      ],
      hideExpected: true
    }
  )
];

export const curriculum = [
  {
    id:'prolog', icon:'🧩', title:'PROLOG', subtitle:'Programação lógica, listas, recursão e simulação de predicados', color:'prolog',
    lessons:[
      lesson('Prolog do zero: fatos, regras e consultas', 'Antes das listas, entenda como o Prolog pensa', [
        'Prolog não começa com passo a passo como C/Java. Ele começa com fatos, regras e perguntas.',
        'Fato é algo declarado como verdadeiro. Regra é uma conclusão que depende de condições.',
        'Consulta é a pergunta que você faz; o Prolog tenta provar se aquilo é verdadeiro.'
      ], `<span class="code-block">% fatos
gosta(ana, praia).
gosta(joao, praia).
tem_dinheiro(ana).

% regra
pode_ir_praia(Pessoa) :-
    gosta(Pessoa, praia),
    tem_dinheiro(Pessoa).

% consulta
pode_ir_praia(ana).
% resposta: true</span>
<div class="exam-paper">
  <h3>Leitura de prova</h3>
  <ol>
    <li><strong>nome(...)</strong> é um predicado. Pense nele como uma relação ou pergunta.</li>
    <li><strong>:-</strong> pode ser lido como "se".</li>
    <li><strong>,</strong> entre condições funciona como E lógico.</li>
    <li><strong>.</strong> encerra fato, regra ou consulta.</li>
  </ol>
</div>`, [
        mc('Em Prolog, um fato representa:', ['Algo declarado como verdadeiro', 'Um loop for', 'Uma tela HTML', 'Uma fila FIFO'], 0, 'Fato é uma afirmação simples do conhecimento.'),
        mc('O símbolo :- em uma regra pode ser lido como:', ['se', 'senão', 'igual aritmético', 'lista vazia'], 0, 'A cabeça da regra é verdadeira se o corpo da regra for verdadeiro.'),
        mc('Na regra pode_ir_praia(P) :- gosta(P,praia), tem_dinheiro(P)., a vírgula significa:', ['E', 'OU', 'NÃO', 'fim do programa'], 0, 'As duas condições precisam ser provadas.'),
        tf('Uma consulta em Prolog é uma pergunta feita ao programa.', true, 'A consulta tenta provar um objetivo.'),
        mc('Em gosta(ana, praia)., o nome do predicado é:', ['gosta', 'ana', 'praia', 'true'], 0, 'O predicado vem antes dos parênteses.')
      ]),
      lesson('Listas do zero: [], [a,b] e [H|T]', 'Como montar e desmontar uma lista pela primeira vez', [
        'Lista vazia é escrita como [].',
        'Uma lista com elementos é escrita entre colchetes: [1,2,3].',
        'A forma [H|T] separa a cabeça H do resto T. Esse é o ponto mais importante para entender a prova.'
      ], `<span class="code-block">Lista vazia:
  []

Lista normal:
  [1,2,3,4]

Separando cabeça e cauda:
  [H|T] = [1,2,3,4]
  H = 1
  T = [2,3,4]

Mais exemplos:
  [H|T] = [a]
  H = a
  T = []

  [H|T] = [10,20]
  H = 10
  T = [20]</span>
<div class="exam-paper">
  <h3>Macete para listas</h3>
  <ol>
    <li><strong>H</strong> costuma significar head/cabeça: o primeiro elemento.</li>
    <li><strong>T</strong>, <strong>R</strong>, <strong>C1</strong> ou <strong>Cauda</strong> costumam significar o resto da lista.</li>
    <li>O resto da lista ainda é uma lista. Em [1,2,3], a cauda é [2,3], não só 2.</li>
  </ol>
</div>`, [
        mc('Qual é a lista vazia em Prolog?', ['[]', '{}', '()', '[0]'], 0, 'Lista vazia usa colchetes sem elementos.'),
        mc('Em [H|T] = [1,2,3], qual é H?', ['1', '[1]', '[2,3]', '3'], 0, 'H é a cabeça, o primeiro elemento.'),
        mc('Em [H|T] = [1,2,3], qual é T?', ['2', '[2,3]', '[1]', '[]'], 1, 'T é a cauda, ou seja, o resto da lista.'),
        mc('Em [X|R] = [a], temos:', ['X=a e R=[]', 'X=[] e R=a', 'X=[a] e R=[]', 'X=a e R=[a]'], 0, 'Uma lista com um elemento tem cauda vazia.'),
        tf('A cauda de uma lista em Prolog também é uma lista.', true, 'Mesmo quando sobra um único elemento, a cauda aparece como lista: [20].')
      ]),
      lesson('Variáveis especiais: _, =, is e !', 'Os símbolos que mais confundem no começo', [
        'Variável em Prolog começa com letra maiúscula ou underscore, como X, Lista, C1 ou _.',
        'O underscore sozinho (_) é variável anônima: significa "existe um valor aqui, mas eu não preciso saber qual".',
        '= unifica termos; is calcula expressões aritméticas; ! é corte, usado para impedir tentativas alternativas.'
      ], `<span class="code-block">% _ ignora um valor
primeiro([X|_], X).

primeiro([10,20,30], X).
X = 10.

% = unifica, não calcula
X = 3 + 4.
X = 3 + 4.

% is calcula
X is 3 + 4.
X = 7.

% ! corta alternativas depois de uma escolha
pertence(X, [X|_]) :- !.
pertence(X, [_|T]) :- pertence(X, T).</span>
<div class="exam-paper">
  <h3>Tradução rápida dos símbolos</h3>
  <ol>
    <li><strong>_</strong>: "não me interessa esse pedaço".</li>
    <li><strong>[X|_]</strong>: pegue só o primeiro elemento e ignore o resto.</li>
    <li><strong>[_|R]</strong>: ignore o primeiro elemento e continue com o resto.</li>
    <li><strong>is</strong>: use quando tiver conta.</li>
    <li><strong>!</strong>: depois que deu certo por aqui, não volte para tentar outro caminho.</li>
  </ol>
</div>`, [
        mc('O que significa _ em Prolog?', ['Variável anônima cujo valor será ignorado', 'Lista vazia', 'Erro de sintaxe', 'Operador de média'], 0, 'O underscore é usado quando o valor existe, mas não importa.'),
        mc('Em [X|_], o que está sendo ignorado?', ['O resto da lista', 'O primeiro elemento', 'A lista inteira', 'O predicado'], 0, 'X guarda a cabeça; _ ignora a cauda.'),
        mc('Em [_|R], o que R representa?', ['O resto da lista', 'O primeiro elemento', 'A lista vazia sempre', 'Um número calculado'], 0, 'O primeiro elemento é ignorado e R fica com a cauda.'),
        mc('Para calcular X = 3 + 4 em Prolog, o correto é:', ['X is 3 + 4', 'X = 3 + 4 sempre calcula', 'is(X,3+4)', 'X := 3 + 4'], 0, 'Aritmética em Prolog usa is.'),
        tf('O corte ! pode ser usado para impedir backtracking depois de uma escolha.', true, 'Ele fixa a escolha feita até aquele ponto.')
      ]),
      lesson('Programa 1 da prova: nana e nono', 'Agora sim: entenda o código que aparece no seu material', [
        'Na sua prova, Prolog aparece como predicados sobre listas: nana recebe duas listas e devolve L.',
        'nono(N, Lista) pergunta se N pertence à lista. Por isso o melhor nome seria membro ou pertence.',
        'nana(Lista1, Lista2, L) percorre a primeira lista e coloca em L só os elementos que também aparecem na segunda.'
      ], `<span class="code-block">nana([], _, []) :- !.
nana([X|C1], C2, [X|C3]) :-
    nono(X, C2), !,
    nana(C1, C2, C3).
nana([_|C1], C2, C3) :-
    nana(C1, C2, C3).

nono(N, [N|_]).
nono(N, [_|R]) :- nono(N, R).</span>
<div class="exam-paper">
  <h3>Como ler isso sem decorar</h3>
  <ol>
    <li><strong>[X|C1]</strong> significa: X é o primeiro elemento da lista e C1 é o resto.</li>
    <li><strong>nono(X, C2)</strong> testa se X aparece na segunda lista.</li>
    <li>Se aparece, a resposta vira <strong>[X|C3]</strong>, ou seja, X entra na lista L.</li>
    <li>Se não aparece, a terceira regra usa <strong>[_|C1]</strong>: ignora esse elemento e continua.</li>
    <li>Quando a primeira lista acaba, <strong>nana([], _, [])</strong> termina a resposta.</li>
  </ol>
</div>
<span class="code-block">Consulta da prova:
nana([1,2,3,4,5], [5,6,1,8,3], L).

1 pertence à segunda lista -> entra em L
2 não pertence -> ignora
3 pertence -> entra em L
4 não pertence -> ignora
5 pertence -> entra em L

L = [1, 3, 5]</span>
<div class="exam-paper">
  <h3>Questão 1 da prova</h3>
  <ol>
    <li><strong>a)</strong> Para nana([1,2,3,4,5], [5,6,1,8,3], L), o valor de L é [1,3,5].</li>
    <li><strong>b)</strong> Bons nomes: nana = intersecao; nono = membro ou pertence.</li>
    <li><strong>c)</strong> Simulação: teste cada elemento da primeira lista na segunda; aceite 1, rejeite 2, aceite 3, rejeite 4, aceite 5.</li>
  </ol>
</div>`, [
        mc('No Programa 1 da prova, o que o predicado nono(N, Lista) faz?', ['Testa se N pertence à Lista', 'Calcula média da Lista', 'Ordena a Lista', 'Conta os nós do grafo'], 0, 'Pelo caso nono(N,[N|_]) ele dá certo quando N é a cabeça; pelo caso recursivo ele procura no resto.'),
        mc('No Programa 1, o que o predicado nana(Lista1, Lista2, L) calcula?', ['A interseção das duas listas', 'A união das duas listas', 'A média da primeira lista', 'A busca em largura'], 0, 'Ele coloca em L os elementos da primeira lista que também pertencem à segunda.'),
        mc('Em [X|C1], olhando para [1,2,3,4,5], X e C1 são:', ['X=1 e C1=[2,3,4,5]', 'X=[1,2] e C1=[3,4,5]', 'X=5 e C1=[1,2,3,4]', 'X=[1] e C1=2'], 0, 'Cabeça é o primeiro elemento; cauda é o restante da lista.'),
        mc('Na consulta da prova nana([1,2,3,4,5], [5,6,1,8,3], L), qual é L?', ['[1,3,5]', '[5,1,3]', '[2,4]', '[1,2,3,4,5]'], 0, 'A resposta mantém a ordem da primeira lista: 1, depois 3, depois 5.'),
        tf('O símbolo _ em nana([], _, []) significa: o valor da segunda lista não importa nesse caso.', true, 'Quando a primeira lista acabou, a interseção restante é vazia independentemente da segunda lista.')
      ]),
      lesson('Listas: membro e interseção', 'Entenda nana e nono da prova', [
        'A notação [X|R] separa cabeça e cauda: X é o primeiro elemento, R é o resto.',
        'O predicado nono(N, Lista) da prova é equivalente a membro/pertence.',
        'O predicado nana(Lista1, Lista2, L) monta a interseção mantendo os elementos da primeira lista que pertencem à segunda.'
      ], `<span class="code-block">nana([], _, []) :- !.
nana([X|C1], C2, [X|C3]) :- nono(X, C2), !, nana(C1, C2, C3).
nana([_|C1], C2, C3) :- nana(C1, C2, C3).

nono(N, [N|_]).
nono(N, [_|R]) :- nono(N, R).</span>`, [
        mc('Para nana([1,2,3,4,5], [5,6,1,8,3], L), qual é L?', ['[5,1,3]', '[1,3,5]', '[1,2,3,4,5]', '[6,8]'], 1, 'A interseção sai na ordem da primeira lista: 1, depois 3, depois 5.'),
        mc('Os melhores nomes para nana e nono seriam:', ['ordena e busca_largura', 'intersecao e membro', 'soma e media', 'pilha e fila'], 1, 'nana calcula interseção; nono verifica pertinência.'),
        mc('Em [X|Y] aplicado a [a,b,c,d], temos:', ['X=a e Y=[b,c,d]', 'X=[a,b] e Y=[c,d]', 'X=d e Y=[a,b,c]', 'X=[a] e Y=b'], 0, 'Cabeça é o primeiro elemento; cauda é a lista restante.'),
        tf('O underscore _ em Prolog indica variável anônima que pode ser ignorada.', true, 'É usado quando o valor não importa, como em [_|R].'),
        mc('Na regra nana([X|C1], C2, [X|C3]) :- nono(X,C2), !, nana(C1,C2,C3)., o corte ! serve principalmente para:', ['Parar de procurar alternativas depois que X já foi aceito', 'Somar X a C3', 'Apagar C2', 'Transformar lista em número'], 0, 'O corte evita backtracking desnecessário para aquele caso.')
      ]),
      lesson('Recursão e média', 'Como escrever media(X, Lista)', [
        'Predicados recursivos têm caso base e caso recursivo.',
        'Para calcular, Prolog usa is, não apenas =.',
        'A média é soma dividida pelo tamanho da lista.'
      ], `<span class="code-block">soma([], 0).
soma([H|T], S) :- soma(T, S1), S is S1 + H.

tamanho([], 0).
tamanho([_|T], N) :- tamanho(T, N1), N is N1 + 1.

media(M, Lista) :-
    soma(Lista, S),
    tamanho(Lista, N),
    N > 0,
    M is S / N.</span>
<div class="exam-paper">
  <h3>Questão 5 da prova</h3>
  <ol>
    <li>Faça um programa Prolog com um predicado que recebe uma lista numérica e retorna a média dos valores.</li>
    <li>Exemplo de busca: <strong>media(X, [0,5,10,15,20]).</strong></li>
    <li>Resposta esperada: <strong>X = 10.</strong></li>
  </ol>
</div>`, [
        mc('Para media(X, [0,5,10,15,20]), qual é X?', ['5', '10', '20', '50'], 1, 'Soma 50, quantidade 5, média 10.'),
        mc('O operador is em Prolog é usado para:', ['Avaliar expressão aritmética', 'Criar lista', 'Comparar strings', 'Fazer comentário'], 0, 'X is 3+4 calcula 7.'),
        tf('X = 3 + 4 calcula X = 7 em Prolog.', false, 'Com = ocorre unificação com o termo 3+4. Para calcular use is.'),
        mc('Uma boa estrutura recursiva em Prolog precisa de:', ['Apenas caso recursivo', 'Caso base e caso recursivo', 'Somente cut', 'Loop for'], 1, 'Sem caso base, a recursão não sabe parar.'),
        mc('Qual linha evita divisão por zero no predicado media?', ['N > 0', 'soma(Lista,S)', 'M is S / N', 'tamanho(Lista,N)'], 0, 'Ela garante que a lista tem pelo menos um elemento.')
      ]),
      lesson('Receitas clássicas de listas', 'Predicados que têm muita chance de cair', [
        'Quase todo exercício de lista em Prolog usa o mesmo molde: caso base para lista vazia e caso recursivo com [H|T].',
        'Quando a questão pede para “fazer um programa”, escreva primeiro o caso base, depois pense no que acontece com a cabeça H.',
        'Guarde estes padrões: pertence, tamanho, soma, ultimo, concatena e inverte.'
      ], `<span class="code-block">% pertence(X, Lista)
pertence(X, [X|_]).
pertence(X, [_|T]) :- pertence(X, T).

% tamanho(Lista, N)
tamanho([], 0).
tamanho([_|T], N) :- tamanho(T, N1), N is N1 + 1.

% soma(Lista, S)
soma([], 0).
soma([H|T], S) :- soma(T, S1), S is H + S1.

% ultimo(Lista, U)
ultimo([U], U).
ultimo([_|T], U) :- ultimo(T, U).

% concatena(A, B, R)
concatena([], B, B).
concatena([H|T], B, [H|R]) :- concatena(T, B, R).</span>
<div class="exam-paper">
  <h3>Macete de prova</h3>
  <ol>
    <li>Se a lista acaba, pense no resultado neutro: soma 0, tamanho 0, interseção [].</li>
    <li>Se usa <strong>[H|T]</strong>, H é o elemento atual e T é o problema menor.</li>
    <li>Se precisa calcular número, use <strong>is</strong>.</li>
    <li>Se só precisa testar presença, use uma regra que acerta na cabeça e outra que procura na cauda.</li>
  </ol>
</div>`, [
        mc('Qual é o caso base correto para tamanho(Lista, N)?', ['tamanho([], 0).', 'tamanho([], 1).', 'tamanho([H|T], 0).', 'tamanho(N, []).'], 0, 'Lista vazia tem tamanho 0.'),
        mc('Para soma([2,3,5], S), qual deve ser S?', ['5', '8', '10', '[2,3,5]'], 2, '2 + 3 + 5 = 10.'),
        mc('Para ultimo([a,b,c,d], U), qual deve ser U?', ['a', 'b', 'c', 'd'], 3, 'O último elemento é d.'),
        mc('Para concatena([1,2], [3,4], R), qual deve ser R?', ['[1,2,3,4]', '[3,4,1,2]', '[1,3,2,4]', '[]'], 0, 'Concatenação preserva a ordem da primeira lista e depois coloca a segunda.'),
        mc('No predicado soma([H|T], S), H representa:', ['O primeiro elemento da lista', 'A lista inteira', 'O último elemento sempre', 'O resultado final'], 0, 'H é a cabeça da lista.')
      ]),
      lesson('Consultas de lista no estilo prova', 'Treine bater o olho e responder', [
        'A prova pode pedir o resultado de uma consulta, não só escrever o programa.',
        'Para responder rápido, substitua a lista em [H|T] e vá reduzindo até o caso base.',
        'Quando aparece uma variável na consulta, Prolog procura valores que tornam a consulta verdadeira.'
      ], `<span class="code-block">pertence(X, [10,20,30]).
X = 10 ;
X = 20 ;
X = 30.

tamanho([a,b,c], N).
N = 3.

concatena([1,2], [3], R).
R = [1,2,3].

ultimo([7,8,9], U).
U = 9.</span>
<span class="code-block">Simulação curta de tamanho([a,b,c], N):
tamanho([a,b,c], N)
-> tamanho([b,c], N1), N is N1 + 1
-> tamanho([c], N2), N1 is N2 + 1
-> tamanho([], 0)
Volta calculando: N2=1, N1=2, N=3</span>`, [
        mc('Qual é a resposta de tamanho([a,b,c], N)?', ['N=0', 'N=2', 'N=3', 'N=a'], 2, 'A lista tem três elementos.'),
        mc('Qual é a primeira resposta de pertence(X, [10,20,30])?', ['X=10', 'X=20', 'X=30', 'false'], 0, 'Prolog tenta primeiro casar com a cabeça da lista.'),
        mc('Depois de pedir mais soluções em pertence(X, [10,20,30]), quais valores aparecem?', ['10, 20 e 30', 'Apenas 10', 'Apenas 30', 'Nenhum'], 0, 'Com backtracking, ele procura na cauda.'),
        mc('Qual é a resposta de concatena([a], [b,c], R)?', ['R=[a,b,c]', 'R=[b,c,a]', 'R=[a]', 'R=[]'], 0, 'A primeira lista vem antes da segunda.'),
        tf('Na consulta pertence(4, [1,2,3]), Prolog deve retornar false.', true, '4 não aparece na lista.')
      ]),
      lesson('Simulação de execução', 'Treine o “passo a passo” que cai na prova', [
        'Simular Prolog é seguir a ordem das cláusulas de cima para baixo.',
        'Quando uma tentativa falha, Prolog faz backtracking.',
        'Para listas, observe sempre cabeça, cauda e caso base.'
      ], `<span class="code-block">nono(3, [1,2,3]).
1) 3 = 1? não.
2) tenta cauda [2,3].
3) 3 = 2? não.
4) tenta cauda [3].
5) 3 = 3? sim.</span>`, [
        mc('Ao simular nana([1,2,3], [3,1], L), o primeiro elemento aceito é:', ['1', '2', '3', 'Nenhum'], 0, '1 pertence à segunda lista, então entra em L.'),
        mc('Depois de rejeitar 2 em nana([1,2,3], [3,1], L), o algoritmo:', ['Para tudo', 'Segue para a cauda e testa 3', 'Volta para 1 e apaga L', 'Ordena a lista'], 1, 'A terceira regra ignora o elemento que não pertence e continua.'),
        tf('Backtracking permite tentar outra cláusula ou outro valor quando uma tentativa falha.', true, 'Esse é um mecanismo central em Prolog.'),
        mc('Se nono(9, [1,2,3]) for consultado, o resultado final é:', ['true', 'false', '9 = 1', '[9]'], 1, '9 não aparece em nenhuma posição da lista.')
      ]),
      lesson('Unificação estilo concurso', 'Treine variáveis, átomos, termos compostos e pegadinhas do =', [
        'Unificação é o casamento de termos em Prolog.',
        'Variáveis podem receber valores; átomos minúsculos só casam com átomos iguais.',
        'Termos compostos só unificam se tiverem mesmo functor e mesma quantidade de argumentos.'
      ], `<span class="code-block">X = melancia.
% X = melancia

f(X, 9) = f(a, Y).
% X = a, Y = 9

f(X, X) = f(a, b).
% false, porque X teria que ser a e b ao mesmo tempo

g(X, h(2)) = g(1, Y).
% X = 1, Y = h(2)</span>
${prologResolutionFigure}
<div class="exam-paper">
  <h3>Fonte de treino</h3>
  <ol>
    <li>Listas públicas de Prolog costumam cobrar unificação, listas, corte e árvore de resolução.</li>
    <li>Em concurso, a pegadinha é confundir <strong>=</strong> com cálculo aritmético.</li>
  </ol>
</div>`, [
        mc('Qual unificação é verdadeira?', ['f(a,b) = f(a,b)', 'f(a,b) = g(a,b)', 'f(a,b) = f(a)', 'a = b'], 0, 'Mesmo functor, mesma aridade e mesmos argumentos.'),
        mc('Na unificação f(X, 9) = f(a, Y), o resultado é:', ['X=a e Y=9', 'X=9 e Y=a', 'false', 'X=Y'], 0, 'A primeira posição casa com a primeira, a segunda com a segunda.'),
        mc('Na unificação f(X, X) = f(a, b), o resultado é:', ['X=a', 'X=b', 'false', 'X=[a,b]'], 2, 'A mesma variável X teria que valer a e b ao mesmo tempo.'),
        mc('Na unificação [H|T] = [10,20,30], temos:', ['H=10 e T=[20,30]', 'H=[10] e T=20', 'H=30 e T=[10,20]', 'false'], 0, 'Cabeça é o primeiro elemento; cauda é o resto como lista.'),
        mc('Na unificação [A,B|R] = [1,2,3,4], temos:', ['A=1, B=2, R=[3,4]', 'A=[1,2], B=3, R=4', 'A=4, B=3, R=[1,2]', 'false'], 0, 'Dá para retirar mais de uma cabeça antes do operador |.'),
        tf('Em Prolog, X = 2 + 3 calcula X = 5.', false, 'Com =, Prolog unifica X com o termo 2+3. Para calcular use is.'),
        mc('Para testar igualdade aritmética entre 2+3 e 5, usa-se:', ['2+3 =:= 5', '2+3 = 5', '2+3 is 5', '2+3 == 5 sempre'], 0, '=:= avalia os dois lados como expressões aritméticas.'),
        mc('Qual alternativa tem átomo e variável, nessa ordem?', ['casa, X', 'Casa, x', 'X, casa', '[casa], X'], 0, 'Átomo começa minúsculo; variável começa maiúscula.'),
        mc('O termo aluno(maria, ia) tem:', ['functor aluno e aridade 2', 'functor maria e aridade 1', 'functor ia e aridade 2', 'aridade 0'], 0, 'O nome antes dos parênteses é o functor; há dois argumentos.'),
        tf('p(X, X) unifica com p(joao, joao).', true, 'A variável X pode assumir joao nas duas posições.')
      ]),
      lesson('Corte, negação e backtracking', 'O que o ! muda na árvore de respostas', [
        'O corte ! impede que Prolog volte para alternativas anteriores dentro daquela escolha.',
        'Backtracking gera novas respostas quando existem outras cláusulas ou outros valores possíveis.',
        'Em prova, o corte costuma aparecer para perguntar quais respostas ainda são produzidas.'
      ], `<span class="code-block">p(1).
p(2) :- !.
p(3).

consulta: p(X).
respostas: X = 1 ; X = 2.
% o corte na regra de p(2) impede chegar em p(3)

consulta: p(X), !, p(Y).
% depois do primeiro X, o corte prende X=1
% Y ainda pode vir de p(Y), respeitando o corte interno de p(2)</span>
<div class="exam-paper">
  <h3>Regra mental</h3>
  <ol>
    <li>Sem corte: Prolog tenta outras cláusulas se você pedir mais respostas.</li>
    <li>Com corte: escolhas feitas antes do ! ficam comprometidas.</li>
    <li>Negação como falha: <strong>not(P)</strong> dá certo quando P não pode ser provado.</li>
  </ol>
</div>`, [
        mc('No programa p(1). p(2) :- !. p(3)., a consulta p(X) retorna:', ['X=1; X=2', 'X=1; X=2; X=3', 'apenas X=3', 'false'], 0, 'Ao chegar em p(2), o corte impede buscar p(3).'),
        mc('O corte ! serve principalmente para:', ['Controlar backtracking', 'Somar listas', 'Criar átomos', 'Calcular média'], 0, 'Ele corta alternativas de busca.'),
        tf('O corte sempre torna o programa logicamente mais declarativo e fácil de entender.', false, 'O corte pode ser útil, mas também deixa o comportamento mais procedural.'),
        mc('Em pertence(X,[X|_]) :- !., o corte evita:', ['procurar o mesmo X em outras posições depois que já achou', 'calcular X', 'criar a lista', 'usar recursão'], 0, 'Depois do primeiro sucesso, não há necessidade de procurar outras provas.'),
        mc('Na negação como falha, not(nono(4,[1,2,3])) deve ser:', ['true', 'false', 'X=4', '[4]'], 0, 'Como 4 não pertence à lista, a tentativa de provar nono falha; a negação dá certo.'),
        mc('Na negação como falha, not(nono(2,[1,2,3])) deve ser:', ['true', 'false', '2=[]', '[2]'], 1, 'Como 2 pertence à lista, a negação falha.'),
        tf('Backtracking pode produzir várias respostas para uma mesma consulta com variável.', true, 'Exemplo: pertence(X,[a,b]) pode produzir X=a e X=b.'),
        mc('Qual consulta tende a produzir múltiplas respostas?', ['pertence(X,[a,b,c])', 'tamanho([a,b,c],3)', 'soma([],0)', 'media(10,[10])'], 0, 'X pode assumir cada elemento da lista.'),
        mc('Se uma questão pede a árvore de resolução, você deve mostrar:', ['as tentativas, falhas, sucessos e voltas por backtracking', 'apenas a resposta final', 'só o CSS da página', 'sempre uma matriz'], 0, 'Árvore de resolução evidencia o caminho da prova.'),
        tf('O operador \\= testa que dois termos não são unificáveis.', true, 'X \\= Y significa que os termos não casam naquele momento.')
      ]),
      lesson('Listas avançadas de treino', 'Padrões de listas que aparecem em listas universitárias e provas', [
        'Depois de membro, soma e tamanho, os exercícios evoluem para inverter, remover repetidos, filtrar intervalo e inserir ordenado.',
        'A lógica quase sempre é: caso base para [], caso recursivo com [H|T].',
        'Quando a lista de saída também tem cabeça e cauda, normalmente você está construindo resultado.'
      ], `<span class="code-block">% filtra elementos entre A e B
entre(_, _, [], []).
entre(A, B, [H|T], [H|R]) :-
    H >= A, H =< B, !,
    entre(A, B, T, R).
entre(A, B, [_|T], R) :-
    entre(A, B, T, R).

% remove repetidos mantendo primeira ocorrência
sem_rep([], []).
sem_rep([H|T], R) :- nono(H, T), !, sem_rep(T, R).
sem_rep([H|T], [H|R]) :- sem_rep(T, R).</span>
<div class="exam-paper">
  <h3>Treino inspirado em listas de Prolog</h3>
  <ol>
    <li>par/impar: verifique o tamanho da lista.</li>
    <li>palindromo: compare lista com sua inversa.</li>
    <li>uniao sem repetição: concatene e remova duplicatas.</li>
  </ol>
</div>`, [
        mc('Qual consulta filtra corretamente números entre 3 e 7 em [1,3,5,8,7]?', ['entre(3,7,[1,3,5,8,7],R) -> R=[3,5,7]', 'entre(3,7,[1,3,5,8,7],R) -> R=[1,8]', 'entre(3,7,[1,3,5,8,7],R) -> R=[]', 'entre(3,7,[1,3,5,8,7],R) -> R=[8]'], 0, 'Mantém apenas H com A <= H <= B.'),
        mc('Um predicado palindromo(Lista) pode ser definido comparando Lista com:', ['sua inversa', 'sua soma', 'seu primeiro elemento apenas', 'uma fila BFS'], 0, 'Palíndromo lê igual nos dois sentidos.'),
        mc('Para inverso([1,2,3], R), o resultado é:', ['[3,2,1]', '[1,2,3]', '[2,1,3]', '[]'], 0, 'Inverter troca a ordem dos elementos.'),
        tf('par(Lista) pode ser implementado calculando tamanho(Lista,N) e testando N mod 2 =:= 0.', true, 'Essa é uma solução direta.'),
        mc('Para inserir 4 em [1,3,5,7] mantendo ordem crescente, o resultado deve ser:', ['[1,3,4,5,7]', '[4,1,3,5,7]', '[1,3,5,7,4]', '[1,4,3,5,7]'], 0, 'O 4 entra antes do primeiro elemento maior que ele.'),
        mc('uniao sem repetição de [1,2,2] e [2,3] deve produzir algo equivalente a:', ['[1,2,3]', '[1,2,2,2,3]', '[3]', '[]'], 0, 'União guarda elementos uma vez só.'),
        mc('sem_rep([a,b,a,c,b], R) poderia retornar:', ['[a,c,b]', '[a,b,c]', '[a,b,a,c,b]', '[]'], 0, 'A versão mostrada remove ocorrências que ainda aparecem na cauda, preservando a última ocorrência.'),
        mc('No padrão pred([H|T], [H|R]) :- ..., pred(T,R)., o segundo argumento geralmente é:', ['lista de saída sendo construída', 'um número fixo', 'a variável objetivo de SE', 'uma heurística'], 0, 'A cabeça H é mantida no resultado e R é calculado recursivamente.'),
        tf('Todo exercício de lista precisa obrigatoriamente de corte !.', false, 'Muitos predicados funcionam sem corte; ele é só uma ferramenta de controle.'),
        mc('Qual é o caso base mais comum em predicados que transformam listas?', ['pred([], []).', 'pred([H|T], []).', 'pred([], [x]).', 'pred(X, 0).'], 0, 'Lista vazia normalmente transforma em lista vazia.')
      ]),
      lesson('Resolução e consultas compostas', 'Como Prolog prova uma pergunta com vários objetivos', [
        'Uma consulta composta é uma lista de objetivos separados por vírgula.',
        'Prolog tenta provar os objetivos da esquerda para a direita.',
        'Se um objetivo falha, ele volta por backtracking e tenta alternativas anteriores.'
      ], `${prologResolutionFigure}
<span class="code-block">animal(gato).
animal(cachorro).
cor(gato, preto).
cor(cachorro, marrom).

consulta:
animal(X), cor(X, preto).

1) animal(X) -> X = gato
2) cor(gato, preto) -> sucesso
Resposta: X = gato</span>
<div class="exam-paper">
  <h3>Como simular consulta composta</h3>
  <ol>
    <li>Resolva o primeiro objetivo.</li>
    <li>Use o valor encontrado no próximo objetivo.</li>
    <li>Se falhar, volte e tente outro valor no objetivo anterior.</li>
  </ol>
</div>`, [
        mc('Em uma consulta A, B, C, Prolog tenta provar:', ['A depois B depois C', 'C depois B depois A', 'todos ao mesmo tempo sem ordem', 'somente C'], 0, 'A ordem operacional padrão é da esquerda para a direita.'),
        mc('Na consulta animal(X), cor(X,preto), com animal(gato) e cor(gato,preto), X vale:', ['gato', 'preto', 'animal', 'false'], 0, 'O primeiro objetivo encontra X=gato; o segundo confirma a cor.'),
        mc('Se animal(X) dá X=gato, mas cor(gato,azul) falha, Prolog:', ['faz backtracking para tentar outro animal', 'encerra o computador', 'calcula média', 'transforma em fuzzy'], 0, 'Ele volta para um ponto com alternativas.'),
        tf('A vírgula no corpo de uma regra Prolog funciona como conjunção lógica.', true, 'Todos os subobjetivos separados por vírgula precisam ser provados.'),
        mc('Na regra avo(X,Z) :- pai(X,Y), pai(Y,Z)., Y representa:', ['um intermediário entre avô e neto', 'a lista final', 'um valor fuzzy', 'uma fila'], 0, 'Y é o filho de X e pai de Z.'),
        mc('Se pai(joao,maria) e pai(maria,pedro), então avo(joao,pedro) é:', ['true', 'false', 'X=lista', 'depende de BFS'], 0, 'Existe Y=maria que satisfaz as duas condições.'),
        tf('A ordem dos objetivos pode afetar desempenho e até terminar ou não em alguns programas recursivos.', true, 'A leitura declarativa pode ser parecida, mas o comportamento operacional muda.'),
        mc('Uma árvore de resolução mostra principalmente:', ['caminhos de prova, falhas e backtracking', 'apenas cores de nós', 'somente CSS', 'apenas resultado final'], 0, 'Ela mostra como a prova foi construída.'),
        mc('Na consulta pertence(X,[1,2]), X > 1, a primeira resposta válida é:', ['2', '1', '[1,2]', 'false'], 0, 'X=1 falha em X>1; com backtracking X=2 passa.'),
        tf('Se um objetivo anterior não tem mais alternativas, a consulta composta falha.', true, 'Sem alternativas, não há outro caminho de prova.')
      ]),
      lesson('Maratona Prolog', 'Mais questões rápidas para fixar padrão de prova', [
        'Esta aula é propositalmente repetitiva: ela treina reconhecimento automático.',
        'Responda pensando em unificação, lista vazia, cabeça-cauda, is e backtracking.',
        'Quando errar, leia o raciocínio e tente explicar em voz alta.'
      ], `<span class="code-block">Padrões para decorar:
[]                 -> lista vazia
[H|T]              -> cabeça e cauda
X = termo          -> unificação
X is expressão     -> cálculo
pred([], Base).    -> caso base
pred([H|T], R)     -> caso recursivo</span>`, [
        mc('Qual é a cabeça de [9,8,7]?', ['9', '[8,7]', '7', '[]'], 0, 'Cabeça é o primeiro elemento.'),
        mc('Qual é a cauda de [9,8,7]?', ['[8,7]', '8', '[9]', '7'], 0, 'Cauda é o resto como lista.'),
        mc('A lista [a] unifica com [H|T] gerando:', ['H=a, T=[]', 'H=[], T=a', 'H=[a], T=[]', 'false'], 0, 'Lista unitária tem cauda vazia.'),
        mc('A lista [] unifica com [H|T]?', ['não', 'sim, H=[]', 'sim, T=[]', 'sim, H=T'], 0, 'Não há cabeça em lista vazia.'),
        mc('Qual predicado testa pertinência?', ['membro(X,[X|_]).', 'membro([],0).', 'membro(X,Y) :- X is Y.', 'membro(a).'], 0, 'Essa cláusula acerta quando X é a cabeça.'),
        mc('Para soma([4,6],S), S deve ser:', ['10', '2', '[4,6]', '46'], 0, '4+6=10.'),
        mc('Para media(M,[2,4,6]), M deve ser:', ['4', '12', '3', '6'], 0, 'Soma 12, quantidade 3.'),
        tf('tamanho([_|T],N) ignora a cabeça e conta a cauda.', true, 'O _ descarta o elemento atual.'),
        tf('ultimo([U],U). é um caso base válido para último elemento.', true, 'Quando só há um elemento, ele é o último.'),
        mc('concatena([],B,R) deve produzir:', ['R=B', 'R=[] sempre', 'B=[] sempre', 'false'], 0, 'Concatenar lista vazia com B resulta em B.'),
        mc('concatena([1],[2,3],R) produz:', ['[1,2,3]', '[2,3,1]', '[1]', '[]'], 0, 'Primeira lista vem antes da segunda.'),
        mc('inverte([a,b],R) deve produzir:', ['[b,a]', '[a,b]', '[a]', '[]'], 0, 'Inversão troca a ordem.'),
        tf('O corte ! pode mudar o conjunto de respostas de um programa.', true, 'Ele impede algumas alternativas.'),
        mc('Qual consulta deve falhar?', ['pertence(5,[1,2,3])', 'pertence(2,[1,2,3])', 'tamanho([],0)', 'soma([],0)'], 0, '5 não está na lista.'),
        mc('Em X is 10/2, X vale:', ['5', '10/2', '2', 'false'], 0, 'is avalia a divisão.'),
        tf('X = 10/2 e X is 10/2 têm exatamente o mesmo efeito.', false, '= unifica com termo; is calcula.'),
        mc('O functor de rota(a,b,10) é:', ['rota', 'a', 'b', '10'], 0, 'Functor é o nome do termo composto.'),
        mc('A aridade de rota(a,b,10) é:', ['3', '2', '1', '0'], 0, 'São três argumentos.'),
        mc('Se p(a). p(b)., a consulta p(X) pode retornar:', ['X=a; X=b', 'apenas false', 'X=[a,b]', 'X=p'], 0, 'Há dois fatos possíveis.'),
        tf('Backtracking é irrelevante quando há múltiplos fatos para o mesmo predicado.', false, 'É justamente o mecanismo que percorre múltiplos fatos.')
      ])
    ]
  },
  {
    id:'busca', icon:'🗺️', title:'BUSCA', subtitle:'Espaço de estados, BFS, DFS e heurísticas', color:'busca',
    lessons:[
      lesson('Espaço de estados', 'Problemas de IA como grafos', [
        'Um estado representa uma configuração do problema.',
        'Operadores geram sucessores, formando um grafo ou árvore de busca.',
        'A prova usa um grafo com A como raiz e folhas F, G, H, I, J, K.'
      ], `${graphFigure}
<div class="exam-paper">
  <h3>Questão 2 da prova</h3>
  <ol>
    <li>Observe a Figura 1 e descreva o algoritmo de busca em largura primeiro.</li>
    <li>Diga a estrutura de dados usada e dê exemplo.</li>
    <li>Apresente a sequência de estados examinados no grafo.</li>
  </ol>
</div>`, [
        mc('No grafo da prova, quais são os filhos de A?', ['B, C, D, E', 'F, G, H', 'I, J, K', 'A, B, C'], 0, 'A aponta para B, C, D e E.'),
        mc('Quais são os filhos de B?', ['C e D', 'F e G', 'H e I', 'J e K'], 1, 'B aponta para F e G.'),
        tf('F, G, H, I, J e K são folhas no grafo mostrado.', true, 'Eles não possuem filhos no desenho.'),
        mc('Estado objetivo significa:', ['O estado inicial', 'A solução procurada', 'O nó com mais filhos', 'Sempre a raiz'], 1, 'É o estado que satisfaz o problema.')
      ]),
      lesson('Busca em largura primeiro', 'BFS com fila FIFO', [
        'BFS visita todos os nós de um nível antes de descer.',
        'Usa fila: o primeiro a entrar é o primeiro a sair.',
        'Em grafos sem peso, BFS encontra caminho com menor número de arestas.'
      ], `<span class="code-block">Fila: [A]
Visita A -> adiciona B,C,D,E
Visita B -> adiciona F,G
Visita C -> adiciona H
Visita D -> adiciona I
Visita E -> adiciona J,K

Ordem: A, B, C, D, E, F, G, H, I, J, K</span>${graphFigure}
<div class="exam-paper">
  <h3>Modelo de resposta da Questão 2</h3>
  <ol>
    <li>Busca em largura examina primeiro a raiz, depois todos os nós do nível seguinte, e só então desce para o próximo nível.</li>
    <li>A estrutura usada é uma fila FIFO. Exemplo: começa [A], remove A e coloca B, C, D, E no final.</li>
    <li>No grafo da prova: <strong>A, B, C, D, E, F, G, H, I, J, K</strong>.</li>
  </ol>
</div>`, [
        mc('Qual estrutura de dados é usada pela busca em largura?', ['Pilha LIFO', 'Fila FIFO', 'Heap obrigatória', 'Tabela verdade'], 1, 'BFS usa fila.'),
        mc('A sequência BFS no grafo da prova é:', ['A,B,F,G,C,H,D,I,E,J,K', 'A,B,C,D,E,F,G,H,I,J,K', 'F,G,H,I,J,K,B,C,D,E,A', 'A,E,K,J,D,I,C,H,B,G,F'], 1, 'Primeiro raiz, depois todo o segundo nível, depois folhas.'),
        mc('Na resposta escrita, a melhor descrição de BFS é:', ['Visita por níveis usando fila FIFO', 'Desce sempre até uma folha usando pilha', 'Escolhe o nó com menor pertinência fuzzy', 'Aplica regras SE-ENTÃO'], 0, 'A prova pede descrição do algoritmo; cite níveis e fila.'),
        mc('Quando BFS visita B, seus filhos entram:', ['No final da fila', 'No início da fila', 'Em ordem aleatória', 'Na pilha de recursão'], 0, 'Novos sucessores vão para o final.'),
        tf('BFS é completa em grafos finitos quando há controle de visitados.', true, 'Se existe solução, BFS chega no nível dela.'),
        mc('Por que BFS pode gastar muita memória?', ['Porque guarda a fronteira inteira de um nível', 'Porque não usa estrutura de dados', 'Porque apaga os nós visitados', 'Porque só guarda um caminho'], 0, 'Em grafos largos, a fila pode crescer muito.')
      ]),
      lesson('DFS e comparação', 'Profundidade com pilha LIFO', [
        'DFS desce por um caminho até o fim antes de voltar.',
        'Pode usar pilha ou recursão.',
        'Costuma usar menos memória que BFS, mas não garante menor caminho.'
      ], `<span class="code-block">Ordem DFS comum no grafo:
A, B, F, G, C, H, D, I, E, J, K

BFS: A, B, C, D, E, F, G, H, I, J, K
DFS: A, B, F, G, C, H, D, I, E, J, K</span>`, [
        mc('DFS usa normalmente:', ['Fila FIFO', 'Pilha LIFO ou recursão', 'Tabela fuzzy', 'Base de regras'], 1, 'Profundidade é naturalmente implementada com pilha.'),
        mc('Uma desvantagem de DFS é:', ['Nunca encontra solução em árvores finitas', 'Pode não achar o menor caminho', 'Usa sempre mais memória que BFS', 'Não trabalha com grafos'], 1, 'DFS pode achar uma solução profunda antes de uma mais curta.'),
        tf('DFS pode ficar preso em ramos muito profundos ou infinitos se não houver limite.', true, 'Por isso existem variações como busca em profundidade limitada.'),
        mc('Para achar caminho mínimo em labirinto sem pesos, é melhor usar:', ['BFS', 'DFS puro', 'Sistema especialista', 'Complemento fuzzy'], 0, 'BFS garante menor número de passos.')
      ]),
      lesson('Heurísticas e A*', 'Estimativas para buscar melhor', [
        'Busca heurística usa conhecimento do problema para priorizar nós.',
        'A* combina custo real g(n) e estimativa h(n): f(n)=g(n)+h(n).',
        'Heurística admissível não superestima o custo real até o objetivo.'
      ], `<span class="code-block">A*: f(n) = g(n) + h(n)
g(n): custo já pago
h(n): estimativa até o objetivo

Greedy: usa só h(n)
BFS: não usa heurística</span>`, [
        mc('Em A*, h(n) representa:', ['Custo real já percorrido', 'Estimativa até o objetivo', 'Número de regras', 'Tamanho da fila'], 1, 'h é a heurística.'),
        tf('Heurística admissível nunca superestima o custo real.', true, 'Ela é otimista ou exata.'),
        mc('Busca gulosa usa principalmente:', ['h(n)', 'g(n)+h(n)', 'Apenas fatos Prolog', 'min fuzzy'], 0, 'Greedy escolhe pelo que parece mais perto.'),
        mc('A diferença central entre BFS e A* é que:', ['A* usa heurística para priorizar', 'BFS usa regra SE-ENTÃO', 'A* não usa custo', 'BFS só funciona em lista'], 0, 'A* busca de forma informada.')
      ]),
      lesson('Critérios de avaliação de busca', 'Completude, otimalidade, tempo e memória', [
        'Questões de IA costumam perguntar como comparar estratégias de busca.',
        'Completude pergunta: se existir solução, o algoritmo encontra?',
        'Otimalidade pergunta: a solução encontrada é a melhor segundo o custo?'
      ], `<span class="code-block">Critérios clássicos:
1) Completude: encontra solução se ela existe?
2) Otimalidade: encontra a solução de menor custo?
3) Tempo: quantos nós expande?
4) Memória: quantos nós guarda na fronteira?

BFS: completo e ótimo se todos os custos forem iguais.
DFS: memória menor, mas pode não ser ótimo.
UCS: ótimo com custos positivos.
A*: ótimo se h for admissível.</span>
<div class="exam-paper">
  <h3>Jeito concurso de cobrar</h3>
  <ol>
    <li>Trocar completude por otimalidade.</li>
    <li>Dizer que DFS sempre acha menor caminho.</li>
    <li>Dizer que BFS usa heurística, quando ele é busca cega.</li>
  </ol>
</div>`, [
        mc('Completude de uma estratégia de busca significa:', ['encontrar solução se ela existir', 'sempre gastar pouca memória', 'sempre usar heurística', 'nunca expandir nós'], 0, 'Completude é garantia de encontrar solução.'),
        mc('Otimalidade significa:', ['encontrar a melhor solução segundo o custo', 'encontrar qualquer solução', 'usar pilha', 'usar fuzzy'], 0, 'Ótimo é melhor custo, não apenas chegar ao objetivo.'),
        tf('BFS é ótimo em grafos sem pesos ou com custos iguais.', true, 'Nessa situação, menor número de arestas também é menor custo.'),
        tf('DFS sempre é ótimo porque vai mais fundo.', false, 'Ir fundo pode achar uma solução pior antes de uma melhor.'),
        mc('A fronteira de busca contém:', ['nós gerados ainda não expandidos', 'apenas nós já descartados', 'somente o objetivo', 'os graus fuzzy'], 0, 'Fronteira é a lista de candidatos pendentes.'),
        mc('Qual estratégia tende a consumir mais memória em árvores largas?', ['BFS', 'DFS', 'busca em profundidade limitada', 'hill climbing puro'], 0, 'BFS guarda muitos nós do mesmo nível.'),
        mc('Busca cega também pode ser chamada de:', ['busca não informada', 'busca fuzzy', 'busca por regras', 'busca supervisionada'], 0, 'Ela não usa estimativa de distância/custo ao objetivo.'),
        mc('Uma questão que pede tempo de busca normalmente quer saber:', ['quantidade de nós expandidos ou ordem de expansão', 'cor do nó', 'nome do professor', 'tipo de variável fuzzy'], 0, 'Tempo é associado ao esforço de expansão.')
      ]),
      lesson('Custo uniforme, gulosa e A*', 'Compare g(n), h(n) e f(n) em grafo ponderado', [
        'Busca de custo uniforme escolhe o menor g(n), isto é, o menor custo acumulado desde o início.',
        'Busca gulosa escolhe o menor h(n), isto é, o que parece mais perto do objetivo.',
        'A* escolhe o menor f(n)=g(n)+h(n).'
      ], `${weightedSearchFigure}${astarFormulaFigure}
<span class="code-block">No grafo da figura:
S-A-D-G custa 2 + 2 + 2 = 6
S-B-D-G custa 5 + 1 + 2 = 8
S-A-C-G custa 2 + 4 + 7 = 13

Com h admissível, A* encontra S-A-D-G.</span>`, [
        mc('No grafo, qual é o custo do caminho S-A-D-G?', ['4', '6', '8', '13'], 1, '2 + 2 + 2 = 6.'),
        mc('No grafo, qual é o melhor caminho entre os listados?', ['S-A-D-G', 'S-B-D-G', 'S-A-C-G', 'S-A-C-D-G'], 0, 'Ele tem menor custo total: 6.'),
        mc('Busca de custo uniforme prioriza:', ['menor g(n)', 'menor h(n)', 'maior h(n)', 'ordem alfabética sempre'], 0, 'UCS expande o caminho de menor custo acumulado.'),
        mc('Busca gulosa prioriza:', ['menor h(n)', 'menor g(n)+h(n)', 'maior custo real', 'nó mais profundo'], 0, 'Greedy usa somente a estimativa até o objetivo.'),
        mc('A* prioriza:', ['menor f(n)=g(n)+h(n)', 'menor profundidade', 'maior h(n)', 'apenas ordem de chegada'], 0, 'A* combina custo real e estimativa.'),
        mc('Em A*, se A tem g=2 e h=4, então f(A)=', ['2', '4', '6', '8'], 2, 'f = g + h = 6.'),
        mc('Em A*, se B tem g=5 e h=3, então f(B)=', ['2', '5', '8', '15'], 2, 'f = 5 + 3 = 8.'),
        mc('Após expandir S, A* escolheria A ou B?', ['A, pois f(A)=6 e f(B)=8', 'B, pois h(B)=3 é menor', 'B, pois custo 5 é maior', 'nenhum'], 0, 'A* usa f, não h isolado.'),
        tf('Busca gulosa pode escolher um caminho ruim se a heurística parecer boa mas enganar.', true, 'Como ignora g(n), pode ser atraída por estimativas locais.'),
        tf('Custo uniforme é ótimo quando os custos das arestas são não negativos.', true, 'Ele expande por menor custo acumulado.'),
        mc('Qual algoritmo combina melhor eficiência e garantia de otimalidade com heurística admissível?', ['A*', 'DFS puro', 'gulosa pura', 'subida de encosta'], 0, 'A* é o clássico para isso.'),
        mc('Se h(n)=0 para todos os nós, A* se comporta como:', ['custo uniforme', 'DFS', 'fuzzy', 'minimax'], 0, 'f(n)=g(n)+0, então a prioridade vira custo acumulado.')
      ]),
      lesson('Heurística estilo concurso', 'Admissibilidade, consistência e pegadinhas comuns', [
        'Heurística é uma estimativa que orienta a busca para estados promissores.',
        'Admissível: nunca superestima o custo real até o objetivo.',
        'Consistente: respeita h(n) <= c(n,n2) + h(n2) em cada aresta.'
      ], `<span class="code-block">Admissível:
h(n) <= custo_real(n, objetivo)

Consistente:
h(n) <= custo(n, vizinho) + h(vizinho)

Pegadinha:
Toda consistente é admissível.
Nem toda admissível é consistente.</span>
<div class="exam-paper">
  <h3>Questão real de concurso como inspiração</h3>
  <ol>
    <li>Uma banca recente cobrou heurística como técnica que prioriza soluções promissoras.</li>
    <li>Não confunda heurística com garantia automática de ótimo.</li>
  </ol>
</div>`, [
        mc('Em IA, heurística é melhor descrita como:', ['informação estimada que orienta a busca', 'garantia de ótimo em qualquer caso', 'ausência total de conhecimento', 'uma lista Prolog'], 0, 'Heurística guia escolhas usando conhecimento do problema.'),
        mc('Uma heurística admissível:', ['nunca superestima o custo real', 'sempre superestima', 'ignora o objetivo', 'é sempre negativa'], 0, 'Ela é otimista.'),
        tf('Toda heurística consistente é admissível, considerando h(objetivo)=0.', true, 'Consistência é uma condição mais forte.'),
        tf('Toda heurística admissível é necessariamente consistente.', false, 'Pode ser admissível e ainda violar a desigualdade de consistência em alguma aresta.'),
        mc('Se o custo real de n até o objetivo é 10, qual h(n) é admissível?', ['8', '11', '20', '100'], 0, '8 não superestima 10.'),
        mc('Se h(A)=6, custo(A,B)=2 e h(B)=3, a consistência em A->B:', ['falha, pois 6 > 2+3', 'vale, pois 6 < 2', 'não pode ser testada', 'depende de BFS'], 0, 'Consistência exige h(A) <= c(A,B)+h(B).'),
        mc('Distância em linha reta em mapas costuma ser heurística admissível porque:', ['não passa da distância real por estradas', 'sempre é maior que a estrada', 'não usa números', 'é aleatória'], 0, 'Em geral, estrada real não é menor que linha reta.'),
        mc('A frase "heurística garante solução ótima em todos os algoritmos" está:', ['errada', 'correta', 'correta só em DFS', 'correta em busca gulosa'], 0, 'Heurística sozinha não garante ótimo; depende do algoritmo e das propriedades.'),
        mc('Busca informada difere da não informada porque:', ['usa conhecimento adicional como h(n)', 'usa sempre fila', 'nunca usa grafo', 'não tem objetivo'], 0, 'A informação extra guia a expansão.'),
        tf('BFS e DFS são exemplos clássicos de busca não informada.', true, 'Eles não usam heurística para escolher o próximo nó.')
      ]),
      lesson('Busca local e jogos: noções que aparecem em IA', 'Hill climbing, mínimos locais e minimax em nível de prova', [
        'Nem toda busca constrói uma árvore completa de caminhos até o objetivo.',
        'Busca local trabalha com um estado atual e tenta melhorá-lo.',
        'Em jogos, minimax alterna escolhas de MAX e MIN para decidir a melhor jogada.'
      ], `<span class="code-block">Busca local:
estado atual -> vizinho melhor -> vizinho melhor -> ...

Problemas comuns:
maximo local: parece bom, mas não é o melhor global
platô: vários vizinhos com valor parecido
ombro: região plana antes de melhorar

Minimax:
MAX tenta maximizar utilidade.
MIN tenta minimizar utilidade.</span>
<div class="exam-paper">
  <h3>Quando isso importa</h3>
  <ol>
    <li>Se a questão fala em vizinhos e melhoria incremental, pense em busca local.</li>
    <li>Se fala em jogo de dois jogadores, pense em minimax e poda alfa-beta.</li>
  </ol>
</div>`, [
        mc('Busca local normalmente mantém:', ['um estado atual e seus vizinhos', 'todos os caminhos desde a raiz', 'uma base de regras SE', 'uma lista Prolog apenas'], 0, 'Ela se move no espaço de estados sem guardar toda a árvore.'),
        mc('Hill climbing escolhe:', ['um vizinho melhor segundo uma função de avaliação', 'o nó mais antigo da fila', 'sempre o caminho mais barato garantido', 'o menor grau fuzzy'], 0, 'Subida de encosta tenta melhorar localmente.'),
        mc('Um máximo local é:', ['um estado melhor que seus vizinhos, mas não necessariamente o melhor global', 'a solução ótima garantida', 'uma lista vazia', 'o objetivo de Prolog'], 0, 'A busca pode ficar presa nele.'),
        tf('Hill climbing puro garante ótimo global.', false, 'Ele pode parar em máximo local.'),
        mc('Uma forma de escapar de máximos locais é:', ['reinício aleatório', 'apagar a heurística sempre', 'usar apenas lista vazia', 'proibir vizinhos'], 0, 'Random restart é uma técnica comum.'),
        mc('Minimax é usado principalmente em:', ['jogos de dois jogadores com interesses opostos', 'cálculo de média Prolog', 'fuzzificação de temperatura', 'ordenação de listas'], 0, 'MAX e MIN alternam escolhas.'),
        mc('No minimax, o jogador MAX tenta:', ['maximizar utilidade', 'minimizar utilidade', 'usar fila FIFO', 'usar not(P)'], 0, 'MAX escolhe o maior valor.'),
        mc('No minimax, o jogador MIN tenta:', ['minimizar utilidade', 'maximizar utilidade', 'calcular h(n)', 'fazer união fuzzy'], 0, 'MIN escolhe o menor valor.'),
        tf('Poda alfa-beta pode reduzir nós avaliados sem alterar a decisão minimax final.', true, 'Ela corta ramos que não podem mudar a escolha.'),
        mc('Se a banca menciona "função de avaliação" em jogo ou busca local, ela está falando de:', ['estimativa da qualidade de um estado', 'tamanho da lista Prolog', 'variável objetivo do SE', 'somente true/false'], 0, 'A função avalia quão bom o estado parece.')
      ]),
      lesson('Maratona de busca e heurística', 'Questões rápidas para consolidar BFS, DFS, UCS, gulosa e A*', [
        'Esta aula é para ganhar velocidade em identificação de algoritmo.',
        'Procure palavras-chave: fila, pilha, custo acumulado, heurística e f=g+h.',
        'Se a questão falar em garantia de melhor caminho, olhe para custos e propriedades da heurística.'
      ], `<span class="code-block">Palavras-chave:
fila -> BFS
pilha -> DFS
menor g(n) -> custo uniforme
menor h(n) -> gulosa
menor g(n)+h(n) -> A*
sem h(n) -> busca não informada</span>`, [
        mc('Se a estrutura é fila FIFO, o algoritmo mais provável é:', ['BFS', 'DFS', 'A*', 'minimax'], 0, 'BFS usa fila.'),
        mc('Se a estrutura é pilha LIFO, o algoritmo mais provável é:', ['DFS', 'BFS', 'UCS', 'fuzzy'], 0, 'DFS usa pilha ou recursão.'),
        mc('Se a prioridade é menor custo acumulado, é:', ['custo uniforme', 'gulosa', 'DFS', 'backward chaining'], 0, 'UCS usa g(n).'),
        mc('Se a prioridade é menor estimativa h(n), é:', ['gulosa', 'custo uniforme', 'BFS', 'SE'], 0, 'Greedy usa h.'),
        mc('Se a prioridade é g(n)+h(n), é:', ['A*', 'DFS', 'BFS', 'fuzzy'], 0, 'Essa é a fórmula do A*.'),
        tf('BFS encontra menor número de arestas em grafo sem pesos.', true, 'Ele expande por níveis.'),
        tf('Custo uniforme considera pesos das arestas.', true, 'Ele usa o custo acumulado.'),
        tf('DFS é sempre completo em grafos infinitos.', false, 'Pode descer infinitamente.'),
        mc('Em uma árvore com fator de ramificação muito alto, BFS tende a sofrer com:', ['memória', 'falta de objetivo', 'ausência de lista', 'complemento fuzzy'], 0, 'A fronteira pode crescer muito.'),
        mc('Profundidade limitada é uma variação de:', ['DFS', 'BFS', 'A*', 'fuzzy'], 0, 'Ela limita o quão fundo o DFS pode ir.'),
        mc('Busca em aprofundamento iterativo combina:', ['memória de DFS e completude de BFS em custos uniformes', 'fuzzy e Prolog', 'SE e média', 'apenas heurística'], 0, 'IDDFS aumenta o limite progressivamente.'),
        tf('A* com heurística admissível é ótimo em condições usuais de custos positivos.', true, 'Admissibilidade ajuda a garantir otimalidade.'),
        mc('Se h(n) superestima o custo real, ela pode prejudicar:', ['a garantia de otimalidade do A*', 'a sintaxe HTML', 'a existência de estados', 'a definição de fila'], 0, 'A* pode escolher caminhos não ótimos.'),
        mc('No grafo S-A-D-G, com custos 2,2,2, o custo total é:', ['6', '4', '8', '2'], 0, 'Some as arestas do caminho.'),
        mc('No grafo S-B-D-G, com custos 5,1,2, o custo total é:', ['8', '6', '5', '3'], 0, '5+1+2=8.'),
        tf('Greedy pode expandir menos nós, mas sacrificar solução ótima.', true, 'Ela é agressiva, mas não garante ótimo.'),
        mc('Se todos os custos são 1, custo uniforme se parece com:', ['BFS', 'DFS', 'minimax', 'defuzzificação'], 0, 'Menor custo acumulado equivale a menor profundidade.'),
        mc('Em busca, "nó expandido" é o nó:', ['retirado da fronteira para gerar sucessores', 'nunca visitado', 'sempre objetivo', 'sempre folha'], 0, 'Expandir é gerar seus filhos/sucessores.'),
        mc('Em busca, "nó gerado" é:', ['um sucessor criado por expansão', 'um nó apagado', 'um grau fuzzy', 'um termo Prolog'], 0, 'Gerar é colocar candidatos na fronteira.'),
        tf('Heurística é uma estimativa, não uma verdade obrigatória.', true, 'Ela pode errar ou ser imprecisa.')
      ])
    ]
  },
  {
    id:'se', icon:'🧪', title:'SE', subtitle:'Sistemas especialistas e regras SE-ENTÃO', color:'se',
    lessons:[
      lesson('Regras e variáveis', 'Leia as regras da prova sem tropeçar', [
        'Um sistema especialista usa regras para representar conhecimento.',
        'Antecedente é a parte SE; consequente é a parte ENTÃO.',
        'A variável objetivo é aquilo que o sistema quer concluir.'
      ], `<div class="rule-grid">
        <div class="rule-box"><h4>REGRA 1</h4>SE amanhã pode chover = Não<br>E tenho dinheiro suficiente = Sim<br>E tenho tempo suficiente = Sim<br><strong>ENTÃO devo ir à praia = Sim</strong></div>
        <div class="rule-box"><h4>REGRA 2</h4>SE amanhã pode chover = Sim<br>OU tenho dinheiro suficiente = Não<br>OU tenho tempo suficiente = Não<br><strong>ENTÃO devo ir à praia = Não</strong></div>
      </div>
<div class="exam-paper">
  <h3>Questão 3 da prova</h3>
  <ol>
    <li>Quais são as variáveis objetivo?</li>
    <li>Existem variáveis univaloradas? Quais?</li>
    <li>Existem variáveis multivaloradas? Quais?</li>
    <li>Ter dinheiro é decisivo nas regras 1 e 2? Explique.</li>
  </ol>
</div>`, [
        mc('Qual é a variável objetivo nas regras da praia?', ['amanhã pode chover', 'tenho dinheiro suficiente', 'devo ir à praia', 'tenho tempo suficiente'], 2, 'É a conclusão no ENTÃO.'),
        mc('A Regra 1 usa principalmente qual conector?', ['E', 'OU', 'XOR', 'NAND'], 0, 'Todas as condições precisam ser satisfeitas.'),
        mc('A Regra 2 usa qual conector?', ['E', 'OU', 'Apenas NÃO', 'Nenhum'], 1, 'Qualquer problema impede a praia.'),
        tf('Antecedente é a parte ENTÃO da regra.', false, 'Antecedente é a parte SE; consequente é a conclusão.')
      ]),
      lesson('Univalorada, multivalorada e decisiva', 'Classificação que cai direto', [
        'Univalorada/binária no contexto da prova: assume um valor entre Sim/Não.',
        'Multivalorada tem vários termos possíveis, como baixa, média, alta.',
        'Uma variável é decisiva quando mudar seu valor muda a conclusão.'
      ], `<span class="code-block">Condição:
amanhã pode chover = Sim/Não
tenho dinheiro suficiente = Sim/Não
tenho tempo suficiente = Sim/Não

Objetivo:
devo ir à praia = Sim/Não</span>
<div class="exam-paper">
  <h3>Modelo de resposta da Questão 3</h3>
  <ol>
    <li><strong>Variável objetivo:</strong> devo ir à praia.</li>
    <li><strong>Univaloradas no enunciado:</strong> amanhã pode chover, tenho dinheiro suficiente, tenho tempo suficiente e devo ir à praia, todas com Sim/Não.</li>
    <li><strong>Multivaloradas:</strong> não aparecem nessas regras, pois não há variável com vários termos como baixo, médio, alto.</li>
    <li><strong>Dinheiro é decisivo:</strong> dinheiro=Sim é necessário para concluir praia=Sim na Regra 1; dinheiro=Não já basta para concluir praia=Não na Regra 2.</li>
  </ol>
</div>`, [
        mc('Nas regras da praia, quais variáveis são de condição?', ['Só devo ir à praia', 'chuva, dinheiro e tempo', 'Só dinheiro', 'Nenhuma'], 1, 'Elas aparecem na parte SE.'),
        mc('Qual seria uma boa resposta para a letra a da Questão 3?', ['devo ir à praia', 'tenho dinheiro suficiente', 'amanhã pode chover', 'tenho tempo suficiente'], 0, 'A variável objetivo é a conclusão que aparece no ENTÃO.'),
        mc('Existe variável multivalorada nas regras da praia?', ['Sim, todas', 'Sim, apenas dinheiro', 'Não, todas são Sim/Não', 'Sim, apenas chuva'], 2, 'Todas assumem apenas Sim ou Não no enunciado.'),
        mc('Ter dinheiro é decisivo porque:', ['Aparece nas duas regras e muda a conclusão', 'Nunca aparece no antecedente', 'Só aparece no título', 'É multivalorado'], 0, 'Dinheiro=Sim ajuda a concluir praia=Sim; dinheiro=Não conclui praia=Não.'),
        tf('Uma variável como temperatura={fria,morna,quente} seria multivalorada.', true, 'Ela possui mais de dois valores linguísticos.')
      ]),
      lesson('Encadeamento', 'Forward e backward chaining', [
        'Forward chaining começa dos fatos e deriva conclusões.',
        'Backward chaining começa do objetivo e tenta provar suas condições.',
        'Prolog se comporta naturalmente como encadeamento regressivo.'
      ], `<span class="code-block">Forward:
fatos -> regras aplicáveis -> novas conclusões

Backward:
objetivo -> regras que concluem esse objetivo -> subobjetivos</span>`, [
        mc('Forward chaining começa por:', ['Objetivos', 'Fatos conhecidos', 'Conclusões finais', 'Heurística h(n)'], 1, 'É dirigido por dados.'),
        mc('Backward chaining começa pelo:', ['Objetivo a provar', 'Primeiro fato da base', 'Último nó folha', 'Menor valor fuzzy'], 0, 'É dirigido por metas.'),
        tf('Prolog usa naturalmente backward chaining.', true, 'A consulta vira o objetivo a ser provado.'),
        mc('Um diagnóstico que parte de sintomas e conclui doença usa tipicamente:', ['Forward chaining', 'Complemento fuzzy', 'DFS', 'A*'], 0, 'Sintomas são fatos que levam a conclusões.')
      ]),
      lesson('Motor de inferência e conflito', 'Quando várias regras podem disparar ao mesmo tempo', [
        'A base de conhecimento guarda fatos e regras.',
        'O motor de inferência aplica regras aos fatos para gerar conclusões.',
        'Quando várias regras são aplicáveis, o sistema precisa de estratégia de resolução de conflitos.'
      ], `<span class="code-block">Fatos:
febre = alta
tosse = sim
dor_corpo = sim

Regra A:
SE febre=alta E tosse=sim
ENTÃO suspeita=gripe

Regra B:
SE febre=alta E dor_corpo=sim
ENTÃO suspeita=dengue

Conflito:
duas regras podem disparar.
O sistema pode usar prioridade, especificidade ou ordem.</span>`, [
        mc('A base de conhecimento de um SE contém principalmente:', ['fatos e regras', 'apenas imagens', 'apenas filas', 'somente números fuzzy'], 0, 'Conhecimento especializado fica em fatos e regras.'),
        mc('O motor de inferência serve para:', ['aplicar regras aos fatos e derivar conclusões', 'trocar a cor da interface', 'calcular f(n) do A*', 'somar uma lista Prolog'], 0, 'Ele é o mecanismo de raciocínio.'),
        mc('Conflito em SE ocorre quando:', ['mais de uma regra pode disparar', 'não existe nenhuma variável', 'a lista está vazia', 'BFS usa fila'], 0, 'A agenda pode ter várias regras candidatas.'),
        mc('Uma forma comum de resolver conflito é:', ['prioridade de regras', 'apagar a base inteira', 'usar sempre DFS', 'usar média aritmética'], 0, 'Regras podem ter prioridade ou especificidade.'),
        tf('Forward chaining é mais dirigido por dados do que por objetivos.', true, 'Ele começa dos fatos disponíveis.'),
        tf('Backward chaining é útil quando queremos provar uma hipótese específica.', true, 'Ele parte do objetivo.'),
        mc('Se a consulta é "o paciente tem gripe?", o raciocínio mais natural é:', ['backward chaining', 'BFS sem objetivo', 'união fuzzy', 'unificação de lista apenas'], 0, 'Parte-se da hipótese e tenta-se provar sintomas.'),
        mc('Se sensores chegam continuamente e o sistema vai disparando regras, tende a ser:', ['forward chaining', 'A*', 'corte Prolog', 'complemento fuzzy'], 0, 'Dados novos acionam regras.'),
        tf('Um sistema especialista sempre aprende sozinho com dados rotulados.', false, 'SE clássico usa conhecimento codificado em regras; aprendizagem é outro paradigma.'),
        mc('Em prova, "consequente" significa:', ['parte ENTÃO', 'parte SE', 'fila de busca', 'grau de pertinência'], 0, 'Consequente é a conclusão da regra.')
      ]),
      lesson('Arquitetura e explicação em SE', 'Como um sistema especialista justifica suas conclusões', [
        'Um SE clássico tem base de conhecimento, memória de trabalho, motor de inferência e interface.',
        'A memória de trabalho guarda fatos do caso atual.',
        'O módulo de explicação mostra por que uma conclusão foi obtida.'
      ], `<span class="code-block">Componentes:
base de conhecimento -> regras gerais
memória de trabalho  -> fatos do caso atual
motor de inferência  -> aplica regras
interface            -> conversa com usuário
explicação           -> mostra o raciocínio

Exemplo de explicação:
"Concluí praia=Não porque dinheiro=Não ativa a Regra 2."</span>
<div class="exam-paper">
  <h3>Diferença importante</h3>
  <ol>
    <li>Base de conhecimento é geral.</li>
    <li>Memória de trabalho é do caso específico.</li>
    <li>Motor de inferência raciocina com as duas.</li>
  </ol>
</div>`, [
        mc('A memória de trabalho guarda:', ['fatos do caso atual', 'apenas regras gerais', 'somente imagens', 'código CSS'], 0, 'Ela guarda os dados temporários do problema atual.'),
        mc('A base de conhecimento guarda:', ['regras e conhecimento do domínio', 'somente o usuário atual', 'apenas a fila BFS', 'somente graus fuzzy'], 0, 'É o conhecimento especializado do sistema.'),
        mc('O módulo de explicação serve para:', ['justificar como a conclusão foi obtida', 'apagar regras', 'calcular média', 'desenhar listas'], 0, 'Explicabilidade é uma vantagem clássica de SE.'),
        mc('A interface com usuário serve para:', ['coletar informações e apresentar conclusões', 'substituir o motor de inferência', 'garantir A* ótimo', 'fazer unificação'], 0, 'Ela permite interação com o sistema.'),
        tf('A base de conhecimento e a memória de trabalho são exatamente a mesma coisa.', false, 'A base é geral; a memória é específica do caso.'),
        tf('Um SE pode perguntar dados ao usuário quando faltam fatos para disparar regras.', true, 'Ele precisa completar a memória de trabalho.'),
        mc('Se o sistema pergunta "tem febre?", ele está tentando obter:', ['um fato para a memória de trabalho', 'uma heurística A*', 'uma cauda de lista', 'um complemento fuzzy'], 0, 'A resposta vira fato do caso atual.'),
        mc('Se o sistema diz "concluí X porque regra R foi ativada", ele está usando:', ['módulo de explicação', 'BFS', 'DFS', 'centróide'], 0, 'Ele explica a trilha de raciocínio.'),
        tf('Sistemas especialistas são bons quando há conhecimento especializado que pode ser escrito em regras.', true, 'Esse é o caso clássico de aplicação.'),
        mc('Uma limitação comum de SE é:', ['manutenção trabalhosa da base de regras', 'não poder usar regras', 'não aceitar fatos', 'ser sempre rede neural'], 0, 'Atualizar e validar regras pode dar trabalho.')
      ]),
      lesson('Maratona de Sistemas Especialistas', 'Regras, conectivos, variáveis e encadeamento', [
        'Use esta aula para treinar classificação rápida de regra.',
        'Sempre separe SE de ENTÃO antes de responder.',
        'Procure se a pergunta quer objetivo, condição, conector ou tipo de encadeamento.'
      ], `<span class="code-block">Checklist de prova:
1) Onde está o ENTÃO? -> variável objetivo
2) O que está no SE? -> variáveis de condição
3) Conector é E? -> todas as condições
4) Conector é OU? -> uma condição basta
5) Começa por fatos? -> forward
6) Começa por hipótese? -> backward</span>`, [
        mc('Em SE A E B ENTÃO C, C é:', ['consequente', 'antecedente', 'fato de entrada sempre', 'heurística'], 0, 'C aparece no ENTÃO.'),
        mc('Em SE A E B ENTÃO C, A e B são:', ['antecedentes', 'consequentes', 'defuzzificadores', 'nós folha'], 0, 'A e B ficam na parte SE.'),
        mc('Com conector E, a regra dispara quando:', ['todas as condições são verdadeiras', 'qualquer condição é verdadeira', 'nenhuma condição existe', 'h(n)=0'], 0, 'E exige todas.'),
        mc('Com conector OU, a regra dispara quando:', ['pelo menos uma condição é verdadeira', 'todas são falsas', 'somente a última é verdadeira', 'nunca dispara'], 0, 'OU exige pelo menos uma.'),
        tf('Variável objetivo costuma aparecer no consequente da regra.', true, 'É aquilo que o sistema quer concluir.'),
        mc('Uma variável com valores {baixo, medio, alto} é:', ['multivalorada', 'univalorada', 'sempre booleana', 'sempre lista'], 0, 'Tem vários valores possíveis.'),
        mc('Uma variável com valores {Sim, Não} é tratada na prova como:', ['binária/univalorada', 'multivalorada com cinco termos', 'heurística', 'functor'], 0, 'No contexto da prova, Sim/Não é binária.'),
        mc('Se chuva=Sim ativa a regra praia=Não, chuva é:', ['variável de condição decisiva naquele caso', 'variável objetivo', 'defuzzificador', 'lista vazia'], 0, 'Ela aparece no antecedente e muda conclusão.'),
        tf('Forward chaining é orientado por dados.', true, 'Parte de fatos.'),
        tf('Backward chaining é orientado por objetivo.', true, 'Parte de hipótese.'),
        mc('Diagnóstico a partir de sintomas conhecidos tende a usar:', ['forward chaining', 'A*', 'min fuzzy', 'concatena'], 0, 'Fatos levam à conclusão.'),
        mc('Provar uma hipótese específica tende a usar:', ['backward chaining', 'BFS', 'união fuzzy', 'soma'], 0, 'Começa do objetivo.'),
        mc('Conflito entre regras significa:', ['mais de uma regra aplicável ao mesmo tempo', 'nenhuma regra existe', 'lista com um elemento', 'heurística admissível'], 0, 'O sistema deve escolher uma regra da agenda.'),
        mc('Uma estratégia de conflito pode usar:', ['prioridade ou especificidade', 'apenas cor da tela', 'apenas média', 'somente complemento'], 0, 'Prioridade e especificidade são estratégias comuns.'),
        tf('O motor de inferência é o componente que executa o raciocínio.', true, 'Ele aplica regras aos fatos.')
      ])
    ]
  },
  {
    id:'fuzzy', icon:'🌊', title:'FUZZY', subtitle:'Lógica difusa, operações e inferência', color:'fuzzy',
    lessons:[
      lesson('Crisp vs fuzzy', 'Quando 0 ou 1 não basta', [
        'Lógica booleana trabalha com verdadeiro/falso.',
        'Lógica fuzzy permite graus de pertinência entre 0 e 1.',
        'É útil para conceitos vagos: quente, alto, barato, febre alta.'
      ], `<span class="code-block">Crisp:
temperatura > 30 => quente = 1
temperatura <= 30 => quente = 0

Fuzzy:
25 graus => quente = 0.3
28 graus => quente = 0.6
32 graus => quente = 0.9</span>
<div class="exam-paper">
  <h3>Questão 4 da prova - parte conceitual</h3>
  <ol>
    <li>Explique a diferença entre lógica booleana e lógica fuzzy.</li>
    <li>Dê um exemplo prático em que a lógica fuzzy é mais adequada que a lógica clássica.</li>
  </ol>
</div>`, [
        mc('A principal diferença da lógica fuzzy é:', ['Permitir graus entre 0 e 1', 'Usar apenas true/false', 'Não aceitar números', 'Ser igual a Prolog'], 0, 'Pertinência fuzzy varia continuamente.'),
        mc('Qual resposta escrita fica melhor para a Questão 4?', ['Booleana usa apenas verdadeiro/falso; fuzzy aceita graus entre 0 e 1, como febre alta 0.8', 'Booleana e fuzzy são sempre iguais', 'Fuzzy usa apenas fila FIFO', 'Fuzzy é só lista em Prolog'], 0, 'A resposta boa compara 0/1 com graus e traz exemplo prático.'),
        mc('Qual caso combina mais com fuzzy?', ['2+2=4', 'febre alta', 'senha correta', 'lista vazia'], 1, 'Febre alta é conceito gradual.'),
        tf('Um conjunto fuzzy pode representar cada elemento como (x, µ(x)).', true, 'µ(x) indica o grau de pertinência.'),
        mc('Uma variável linguística é:', ['Uma variável com termos como baixa, normal, alta', 'Uma lista Prolog', 'Um nó de BFS', 'Um valor sempre booleano'], 0, 'Valores linguísticos são palavras associadas a funções de pertinência.')
      ]),
      lesson('Operações fuzzy', 'União, interseção e complemento', [
        'Interseção padrão usa mínimo.',
        'União padrão usa máximo.',
        'Complemento usa 1 menos o grau de pertinência.'
      ], `<span class="code-block">A = {(x1,0.2),(x2,0.7),(x3,1.0),(x4,0.5)}
B = {(x1,0.8),(x2,0.6),(x3,0.9),(x4,0.3)}

A inter B = min:
{(x1,0.2),(x2,0.6),(x3,0.9),(x4,0.3)}</span>
<div class="exam-paper">
  <h3>Questão 4 da prova - cálculo</h3>
  <ol>
    <li>A = {(x1,0.2), (x2,0.7), (x3,1.0), (x4,0.5)}</li>
    <li>B = {(x1,0.8), (x2,0.6), (x3,0.9), (x4,0.3)}</li>
    <li>Calcule A ∩ B usando o menor grau de cada elemento.</li>
    <li>Resultado: <strong>{(x1,0.2),(x2,0.6),(x3,0.9),(x4,0.3)}</strong></li>
  </ol>
</div>`, [
        mc('Para calcular A ∩ B usa-se:', ['Máximo', 'Mínimo', 'Soma', 'Divisão'], 1, 'Interseção é min.'),
        mc('No exercício da prova, µ(A∩B)(x2) é:', ['0.7', '0.6', '1.3', '0.1'], 1, 'min(0.7,0.6)=0.6.'),
        mc('No exercício da prova, µ(A∩B)(x3) é:', ['1.0', '0.9', '0.1', '1.9'], 1, 'min(1.0,0.9)=0.9.'),
        mc('Para calcular A ∪ B usa-se:', ['Mínimo', 'Máximo', 'Produto obrigatório', 'Média sempre'], 1, 'União é max.'),
        mc('Se µA(x)=0.7, o complemento é:', ['0.7', '0.3', '1.7', '-0.7'], 1, '1 - 0.7 = 0.3.'),
        tf('Interseção fuzzy padrão se parece com o E lógico, porque pega o mais fraco.', true, 'O menor grau limita a força da conjunção.')
      ]),
      lesson('Inferência e funções de pertinência', 'Fuzzificador até defuzzificador', [
        'Fuzzificação converte entrada precisa em graus fuzzy.',
        'Inferência aplica regras SE-ENTÃO fuzzy.',
        'Defuzzificação transforma a saída fuzzy em valor numérico.'
      ], `<span class="code-block">Entrada crisp -> Fuzzificador -> Inferência -> Defuzzificador -> Saída crisp

Funções comuns:
triangular, trapezoidal, gaussiana, sigmoidal</span>`, [
        mc('Quem converte valor preciso em graus de pertinência?', ['Defuzzificador', 'Fuzzificador', 'Fila', 'nono'], 1, 'Fuzzificador cria os graus fuzzy.'),
        mc('Quem converte saída fuzzy em número preciso?', ['Defuzzificador', 'Fuzzificador', 'BFS', 'Backtracking'], 0, 'Defuzzificação produz a saída crisp.'),
        mc('Função triangular é definida por:', ['3 pontos', '1 ponto', '5 regras', 'Uma fila'], 0, 'Normalmente a, b e c.'),
        mc('Função trapezoidal se destaca por ter:', ['Topo plano', 'Apenas um ponto', 'Nenhum grau 1', 'Sem sobreposição'], 0, 'Ela pode ter um intervalo com pertinência máxima.'),
        tf('Sobreposição entre funções de pertinência é comum e útil.', true, 'Ela suaviza transições entre termos linguísticos.')
      ]),
      lesson('Funções e regras fuzzy em exercícios', 'Treine min, max, ativação e defuzzificação', [
        'Função de pertinência transforma um valor em grau entre 0 e 1.',
        'Em regras fuzzy, E costuma usar mínimo e OU costuma usar máximo.',
        'Defuzzificação transforma a conclusão fuzzy em um número final.'
      ], `${fuzzyMembershipFigure}
<span class="code-block">Regra:
SE temperatura é quente E umidade é alta
ENTÃO ventilador é forte

µquente(30)=0.8
µalta_umidade(30)=0.5

Ativação da regra com E:
min(0.8,0.5)=0.5</span>`, [
        mc('Se µquente(x)=0.8 e µumido(x)=0.5, o grau de quente E úmido é:', ['0.5', '0.8', '1.3', '0.3'], 0, 'E fuzzy padrão usa mínimo.'),
        mc('Se µbarato(x)=0.2 e µbom(x)=0.9, o grau de barato OU bom é:', ['0.2', '0.9', '1.1', '0.7'], 1, 'OU fuzzy padrão usa máximo.'),
        mc('Se µA(x)=0.25, o complemento padrão é:', ['0.75', '0.25', '1.25', '-0.25'], 0, '1 - 0.25 = 0.75.'),
        mc('Uma função triangular é normalmente definida por:', ['3 pontos', '4 pontos', 'uma fila FIFO', 'um predicado Prolog'], 0, 'Triangular usa a, b, c.'),
        mc('Uma função trapezoidal normalmente é definida por:', ['4 pontos', '1 ponto', 'somente mínimo', 'um corte !'], 0, 'Trapezoidal usa a, b, c, d.'),
        tf('Sobreposição entre funções de pertinência é comum para suavizar transições.', true, 'Um valor pode pertencer parcialmente a dois termos vizinhos.'),
        mc('Fuzzificação é:', ['converter entrada precisa em graus fuzzy', 'converter fuzzy em número final', 'fazer BFS', 'unificar termos'], 0, 'É a primeira etapa do sistema fuzzy.'),
        mc('Defuzzificação é:', ['converter saída fuzzy em valor crisp', 'converter número em graus', 'aplicar corte Prolog', 'expandir fila'], 0, 'Ela entrega um valor final utilizável.'),
        mc('No método do centróide, a ideia intuitiva é:', ['centro de massa da área fuzzy', 'menor valor da lista', 'primeiro nó da fila', 'negação como falha'], 0, 'Centróide calcula um ponto representativo da área.'),
        tf('Lógica fuzzy elimina completamente a lógica booleana.', false, 'Ela complementa a lógica clássica quando há conceitos graduais.')
      ]),
      lesson('Mamdani, Sugeno e pipeline fuzzy', 'Como reconhecer tipos de sistema fuzzy em prova', [
        'Mamdani costuma ter consequentes fuzzy, como ventilador=forte.',
        'Sugeno costuma ter consequentes numéricos ou funções, como z = ax + by + c.',
        'O pipeline geral é fuzzificar, inferir, agregar e defuzzificar.'
      ], `${fuzzyMembershipFigure}
<span class="code-block">Mamdani:
SE temperatura é quente ENTÃO ventilador é forte
saída ainda é fuzzy -> precisa defuzzificar

Sugeno:
SE temperatura é quente ENTÃO z = 0.5*x + 2
saída da regra já é função/número

Pipeline:
entrada crisp -> fuzzificação -> regras -> agregação -> defuzzificação</span>`, [
        mc('Em Mamdani, o consequente típico é:', ['um conjunto fuzzy', 'sempre uma fila FIFO', 'sempre uma lista Prolog', 'um nó expandido'], 0, 'Mamdani usa termos fuzzy na saída.'),
        mc('Em Sugeno, o consequente típico é:', ['uma função ou valor numérico', 'sempre um conjunto fuzzy triangular', 'uma árvore BFS', 'uma variável anônima'], 0, 'Sugeno usa consequentes funcionais ou constantes.'),
        mc('A ordem mais comum do pipeline fuzzy é:', ['fuzzificação -> inferência -> defuzzificação', 'defuzzificação -> BFS -> Prolog', 'unificação -> fila -> corte', 'DFS -> fuzzy -> fato'], 0, 'Primeiro converte entrada em graus; no fim gera valor crisp.'),
        mc('Agregação em sistemas fuzzy combina:', ['saídas de várias regras', 'cláusulas Prolog', 'nós visitados por DFS', 'fatos da memória de trabalho'], 0, 'Várias regras ativadas precisam ser combinadas.'),
        tf('Em Mamdani, geralmente ainda é necessária defuzzificação para obter saída numérica.', true, 'A saída agregada é fuzzy.'),
        tf('Em Sugeno, o consequente nunca pode ser numérico.', false, 'Justamente costuma ser número ou função.'),
        mc('Se uma regra diz "ENTÃO risco é alto", parece mais:', ['Mamdani', 'Sugeno', 'BFS', 'unificação'], 0, 'risco=alto é termo linguístico fuzzy.'),
        mc('Se uma regra diz "ENTÃO z = 3*x + 2", parece mais:', ['Sugeno', 'Mamdani', 'DFS', 'Prolog puro'], 0, 'Consequente funcional é típico de Sugeno.'),
        mc('A etapa que calcula graus como quente=0.7 é:', ['fuzzificação', 'defuzzificação', 'backtracking', 'custo uniforme'], 0, 'Ela transforma entrada crisp em pertinências.'),
        mc('A etapa que retorna, por exemplo, velocidade=63 km/h é:', ['defuzzificação', 'fuzzificação', 'unificação', 'fila FIFO'], 0, 'Ela retorna um valor preciso final.')
      ]),
      lesson('Maratona Fuzzy', 'Muitos cálculos rápidos de pertinência e regras', [
        'Treine operações básicas até ficarem automáticas.',
        'Interseção é mínimo; união é máximo; complemento é 1 menos o grau.',
        'Em regra fuzzy, E usa min e OU usa max no modelo mais cobrado.'
      ], `<span class="code-block">Tabela-relâmpago:
min(0.2,0.8)=0.2
max(0.2,0.8)=0.8
comp(0.2)=0.8

Regra com E:
grau = menor antecedente

Regra com OU:
grau = maior antecedente</span>`, [
        mc('min(0.4, 0.9) =', ['0.4', '0.9', '1.3', '0.5'], 0, 'Mínimo pega o menor.'),
        mc('max(0.4, 0.9) =', ['0.9', '0.4', '1.3', '0.5'], 0, 'Máximo pega o maior.'),
        mc('Complemento de 0.4 =', ['0.6', '0.4', '1.4', '-0.4'], 0, '1-0.4=0.6.'),
        mc('A interseção de 0.1 e 0.7 dá:', ['0.1', '0.7', '0.8', '0.6'], 0, 'A interseção padrão usa min.'),
        mc('A união de 0.1 e 0.7 dá:', ['0.7', '0.1', '0.8', '0.6'], 0, 'A união padrão usa max.'),
        mc('Se µbaixo=0.3 e µalto=0.8, baixo OU alto =', ['0.8', '0.3', '1.1', '0.5'], 0, 'OU usa max.'),
        mc('Se µfrio=0.3 e µumido=0.8, frio E úmido =', ['0.3', '0.8', '1.1', '0.5'], 0, 'E usa min.'),
        tf('Um mesmo valor pode pertencer parcialmente a dois conjuntos fuzzy.', true, 'Isso ocorre por sobreposição.'),
        tf('Em lógica booleana, valores intermediários como 0.6 são padrão.', false, 'Booleana usa falso/verdadeiro.'),
        mc('Se µA(x)=1.0, complemento A em x é:', ['0.0', '1.0', '2.0', '0.5'], 0, '1-1=0.'),
        mc('Se µA(x)=0.0, complemento A em x é:', ['1.0', '0.0', '-1.0', '0.5'], 0, '1-0=1.'),
        mc('Para x2 com A=0.7 e B=0.6, A inter B é:', ['0.6', '0.7', '1.3', '0.1'], 0, 'min(0.7,0.6)=0.6.'),
        mc('Para x2 com A=0.7 e B=0.6, A união B é:', ['0.7', '0.6', '1.3', '0.1'], 0, 'max(0.7,0.6)=0.7.'),
        mc('Uma variável linguística é melhor exemplo em:', ['temperatura={fria,morna,quente}', 'X=3+4', 'fila=[A,B]', 'pai(joao,maria)'], 0, 'Termos linguísticos representam conceitos graduais.'),
        mc('Uma situação ideal para fuzzy é:', ['controle de ar-condicionado por conforto térmico', 'verificar CPF exato', 'somar 2+2', 'testar senha igual'], 0, 'Conforto térmico é gradual.'),
        mc('Crisp significa:', ['valor preciso ou classificação rígida', 'lista com cauda', 'busca com heurística', 'regra Prolog'], 0, 'Crisp é não fuzzy, preciso/rígido.'),
        mc('µ(x) representa:', ['grau de pertinência', 'custo acumulado', 'functor Prolog', 'tamanho da fila'], 0, 'µ mede quanto x pertence ao conjunto.'),
        tf('µ(x) deve ficar entre 0 e 1.', true, 'Esse é o intervalo padrão de pertinência.'),
        mc('Se uma regra com três antecedentes em E tem graus 0.9, 0.4, 0.7, ativação =', ['0.4', '0.9', '0.7', '2.0'], 0, 'E pega o menor dos antecedentes.'),
        mc('Se uma regra com três antecedentes em OU tem graus 0.9, 0.4, 0.7, ativação =', ['0.9', '0.4', '0.7', '2.0'], 0, 'OU pega o maior dos antecedentes.')
      ])
    ]
  },
  {
    id:'exam', icon:'📝', title:'SIMULADO N1', subtitle:'Avaliação final com questões no estilo da prova', color:'exam',
    lessons:[
      {
        title:'Avaliação final completa',
        desc:'Mistura Prolog, BFS, SE, fuzzy e programa de média',
        intro:['Use esta avaliação depois de passar pelos módulos.', 'Primeiro leia a lista como se fosse a prova real; depois responda as 40 questões objetivas.', 'No final, você verá seus erros para revisar antes de tentar de novo.'],
        theory:`<div class="card"><h2>Antes de começar</h2><p>Tenha em mente quatro respostas-chave da prova: <strong>nana</strong> calcula interseção, <strong>BFS</strong> usa fila e visita por níveis, em SE a variável objetivo está no ENTÃO, e em fuzzy <strong>A ∩ B = mínimo</strong>. Esta versão também puxa estilos de listas brasileiras de IA: unificação, listas em Prolog, rotas, busca cega, busca heurística, regras e inferência.</p></div>
        <div class="exam-paper">
          <h3>Prova N1 - Lista de Treino - 40 questões</h3>
          <ol>
            <li>Observe o Programa 1 e responda:
              <div class="sub">
                <span>a) Qual o valor de L para nana([1,2,3,4,5], [5,6,1,8,3], L)?</span>
                <span>b) Quais seriam bons nomes para nana e nono?</span>
                <span>c) Faça a simulação passo a passo da busca.</span>
              </div>
            </li>
            <li>Observe o grafo da Figura 1 e responda:
              <div class="sub">
                <span>a) Descreva a busca em largura primeiro.</span>
                <span>b) Qual estrutura de dados ela usa? Dê exemplo.</span>
                <span>c) Apresente a sequência de estados examinados.</span>
              </div>
            </li>
            <li>Com base nas regras de Sistemas Especialistas:
              <div class="sub">
                <span>a) Qual é a variável objetivo?</span>
                <span>b) Existem variáveis univaloradas? Quais?</span>
                <span>c) Existem variáveis multivaloradas? Quais?</span>
                <span>d) Ter dinheiro é decisivo? Explique.</span>
              </div>
            </li>
            <li>Sobre lógica fuzzy:
              <div class="sub">
                <span>a) Explique lógica booleana vs fuzzy com exemplo.</span>
                <span>b) Calcule A ∩ B usando mínimo em cada elemento.</span>
              </div>
            </li>
            <li>Faça um programa Prolog para media(X, [0,5,10,15,20]) retornar X = 10.</li>
          </ol>
        </div>`,
        review:true,
        items:[
          mc('Na busca nana([1,2,3,4,5], [5,6,1,8,3], L), o valor de L é:', ['[1,3,5]', '[5,1,3]', '[1,2,3,4,5]', '[6,8]'], 0, 'Interseção na ordem da primeira lista.'),
          mc('Melhores nomes para os predicados nana e nono:', ['intersecao e membro/pertence', 'media e soma', 'fila e pilha', 'busca e heuristica'], 0, 'nana faz interseção; nono testa pertinência.'),
          mc('Qual é a estrutura de dados da busca em largura primeiro?', ['Pilha', 'Fila', 'Árvore AVL', 'Lista circular obrigatória'], 1, 'BFS usa fila FIFO.'),
          mc('No grafo da prova, a ordem BFS correta é:', ['A,B,C,D,E,F,G,H,I,J,K', 'A,B,F,G,C,H,D,I,E,J,K', 'A,E,J,K,D,I,C,H,B,F,G', 'F,G,H,I,J,K,A,B,C,D,E'], 0, 'BFS visita nível por nível.'),
          mc('Na Regra 1 da praia, as condições são ligadas por:', ['E', 'OU', 'NÃO', 'XOR'], 0, 'Todas precisam ser verdadeiras para ir à praia.'),
          mc('Na Regra 2 da praia, se tenho dinheiro suficiente = Não, então:', ['devo ir à praia = Não', 'devo ir à praia = Sim', 'a regra não se aplica', 'vira multivalorada'], 0, 'Uma condição da Regra 2 já basta pelo OU.'),
          mc('A variável objetivo nas regras da praia é:', ['amanhã pode chover', 'tenho dinheiro suficiente', 'tenho tempo suficiente', 'devo ir à praia'], 3, 'É a conclusão.'),
          mc('Existem variáveis multivaloradas nas regras da praia da prova?', ['Não, são Sim/Não', 'Sim, todas', 'Sim, só chuva', 'Sim, só praia'], 0, 'O enunciado usa apenas Sim/Não.'),
          mc('Explique por que dinheiro é decisivo. Melhor resposta:', ['Porque aparece nas duas regras e sua ausência leva a não ir', 'Porque é a única variável objetivo', 'Porque é fuzzy', 'Porque não aparece no sistema'], 0, 'Dinheiro=Não aciona a Regra 2; dinheiro=Sim é necessário na Regra 1.'),
          mc('Diferença entre booleana e fuzzy:', ['Booleana é 0/1; fuzzy aceita graus de 0 a 1', 'Fuzzy só aceita falso', 'Booleana usa min e max sempre', 'São iguais'], 0, 'Fuzzy modela gradação.'),
          mc('Para A={(x1,0.2),(x2,0.7),(x3,1.0),(x4,0.5)} e B={(x1,0.8),(x2,0.6),(x3,0.9),(x4,0.3)}, A∩B é:', ['{(x1,0.2),(x2,0.6),(x3,0.9),(x4,0.3)}', '{(x1,0.8),(x2,0.7),(x3,1.0),(x4,0.5)}', '{(x1,1.0),(x2,1.3),(x3,1.9),(x4,0.8)}', '{(x1,0.6),(x2,0.1),(x3,0.1),(x4,0.2)}'], 0, 'Interseção fuzzy usa mínimo de cada par.'),
          mc('Para media(X, [0,5,10,15,20]), X é:', ['10', '50', '5', '15'], 0, '50 dividido por 5.'),
          mc('No programa de média, por que se usa N > 0?', ['Para evitar divisão por zero', 'Para ordenar a lista', 'Para iniciar BFS', 'Para aplicar OU'], 0, 'Lista vazia teria tamanho 0.'),
          tf('DFS garante caminho mais curto em grafos sem peso.', false, 'Quem garante isso é BFS.'),
          tf('Forward chaining parte dos fatos; backward chaining parte do objetivo.', true, 'Essa é a distinção clássica.'),
          mc('Em Prolog, na unificação X = melancia, o que acontece?', ['X passa a valer melancia', 'Dá erro porque melancia é minúsculo', 'X vira lista vazia', 'Nada, pois = é comparação numérica'], 0, 'Variáveis podem ser instanciadas por átomos como melancia.'),
          mc('Na unificação f(X, 9) = f(a, Y), quais valores são obtidos?', ['X=a e Y=9', 'X=9 e Y=a', 'false', 'X=Y apenas'], 0, 'Os predicados e posições batem: primeiro argumento com primeiro, segundo com segundo.'),
          mc('Qual consulta representa melhor “X pertence à lista [2,4,6]”?', ['nono(X, [2,4,6]).', 'nana(X, [2,4,6]).', 'media(X, [2,4,6]).', 'bfs(X, [2,4,6]).'], 0, 'No seu programa, nono é membro/pertence.'),
          mc('Se nono(4, [2,4,6]) for executado, a resposta é:', ['true', 'false', 'L=[4]', 'X=2'], 0, '4 aparece na segunda posição da lista.'),
          mc('Se nono(5, [2,4,6]) for executado, a resposta é:', ['true', 'false', '5=6', '[5]'], 1, '5 não aparece em nenhuma posição.'),
          mc('Em nana([a,b,c], [d,e], L), qual é L?', ['[]', '[a,b,c]', '[d,e]', '[a,d]'], 0, 'Não há elementos em comum.'),
          mc('Em nana([a,b,c], [c,b,a], L), qual é L?', ['[a,b,c]', '[c,b,a]', '[a,c]', '[]'], 0, 'A interseção mantém a ordem da primeira lista.'),
          mc('Qual predicado seria caso base correto para somar lista?', ['soma([], 0).', 'soma([H|T], 0).', 'soma([], 1).', 'soma(X, []).'], 0, 'Lista vazia soma 0.'),
          mc('Para tamanho([7,8,9], N), o valor esperado de N é:', ['0', '2', '3', '7'], 2, 'A lista tem três elementos.'),
          mc('O corte ! em Prolog geralmente é usado para:', ['Controlar backtracking', 'Criar variável', 'Fazer divisão', 'Desenhar grafo'], 0, 'O corte impede que Prolog volte para alternativas anteriores em certos pontos.'),
          mc('Em uma árvore de busca, a fronteira é:', ['O conjunto de nós gerados ainda não expandidos', 'Apenas o nó objetivo', 'A lista de regras fuzzy', 'O valor de pertinência'], 0, 'A fronteira guarda candidatos que ainda podem ser visitados.'),
          mc('Se a fila BFS está [C,D,E,F,G] e visitamos C, que nó sai agora?', ['C', 'G', 'A', 'F'], 0, 'Fila FIFO: sai o primeiro.'),
          mc('Busca em largura é chamada de busca cega quando:', ['Não usa heurística para escolher o próximo nó', 'Usa sempre h(n)', 'Usa regras fuzzy', 'Depende de variável objetivo'], 0, 'BFS não usa informação de proximidade ao objetivo.'),
          mc('Uma vantagem de DFS sobre BFS em muitos grafos largos é:', ['Menor uso de memória', 'Sempre caminho mínimo', 'Sempre completa sem restrições', 'Não precisa de estado inicial'], 0, 'DFS guarda menos nós simultaneamente.'),
          mc('Em A*, se g(n)=6 e h(n)=4, então f(n)=', ['2', '4', '10', '24'], 2, 'A* usa f=g+h.'),
          mc('Uma heurística admissível para A* deve:', ['Nunca superestimar o custo real', 'Sempre superestimar', 'Ignorar o objetivo', 'Ser sempre zero obrigatoriamente'], 0, 'Admissível significa otimista.'),
          mc('Em Sistemas Especialistas, a base de conhecimento guarda principalmente:', ['Regras e fatos do domínio', 'A fila BFS', 'A função seno', 'Apenas imagens'], 0, 'SE representa conhecimento especializado por regras/fatos.'),
          mc('O motor de inferência de um SE serve para:', ['Aplicar regras aos fatos para chegar a conclusões', 'Tocar áudio lofi', 'Calcular média fuzzy apenas', 'Desenhar listas Prolog'], 0, 'É ele que raciocina com a base de conhecimento.'),
          mc('Na regra SE chuva=Não E dinheiro=Sim E tempo=Sim ENTÃO praia=Sim, se tempo=Não:', ['A Regra 1 não conclui praia=Sim', 'A Regra 1 conclui praia=Sim mesmo assim', 'A variável deixa de existir', 'Vira fuzzy automaticamente'], 0, 'Com E, todas as condições precisam ser verdadeiras.'),
          mc('Na Regra 2, chuva=Sim OU dinheiro=Não OU tempo=Não ENTÃO praia=Não. Se chuva=Sim e os outros forem Sim:', ['praia=Não', 'praia=Sim', 'não há conclusão', 'vira multivalorada'], 0, 'No OU, uma condição verdadeira basta.'),
          mc('Uma variável linguística fuzzy pode ser:', ['temperatura com termos fria, morna, quente', 'apenas X em Prolog', 'somente true/false', 'fila FIFO'], 0, 'Fuzzy usa termos linguísticos graduais.'),
          mc('Se µfrio(20)=0.6 e µumido(20)=0.8, então frio E umido pelo método mínimo é:', ['0.6', '0.8', '1.4', '0.2'], 0, 'E fuzzy padrão usa min.'),
          mc('Se µbarato(x)=0.3 e µbom(x)=0.7, então barato OU bom pelo método máximo é:', ['0.3', '0.7', '1.0', '0.4'], 1, 'OU fuzzy padrão usa max.'),
          mc('Na defuzzificação pelo centróide, a ideia é obter:', ['Um valor crisp representativo da saída fuzzy', 'Uma nova lista Prolog', 'A sequência BFS', 'A variável objetivo do SE'], 0, 'Defuzzificação transforma conjunto fuzzy em número preciso.'),
          mc('Qual resposta escrita seria melhor para explicar lógica fuzzy na prova?', ['Ela permite graus de verdade entre 0 e 1 para conceitos vagos, como temperatura quente', 'Ela só usa verdadeiro e falso', 'Ela é uma pilha LIFO', 'Ela substitui Prolog em qualquer lista'], 0, 'Essa explicação inclui definição e exemplo, do jeito que prova costuma pedir.')
        ]
      },
      {
        title:'Gabarito resolvido das imagens',
        desc:'Resolução comentada das questões 1 a 5 da prova fotografada',
        intro:[
          'Esta aula reúne as respostas prontas das duas páginas da prova enviada.',
          'Use como gabarito de revisão: leia a resolução, depois responda as perguntas curtas para fixar.',
          'A última questão usa o judge Prolog local para testar o predicado media/2.'
        ],
        theory:`<div class="card"><h2>Gabarito completo</h2><p>As respostas abaixo estão no formato ideal para copiar o raciocínio na folha: primeiro o resultado, depois a justificativa curta.</p></div>
        <div class="exam-paper">
          <h3>Questão 1 - Programa Prolog</h3>
          <ol>
            <li><strong>a)</strong> Para <strong>nana([1,2,3,4,5], [5,6,1,8,3], L)</strong>, o valor de <strong>L</strong> é <strong>[1,3,5]</strong>.</li>
            <li><strong>b)</strong> Bons nomes seriam <strong>nana = intersecao</strong> e <strong>nono = pertence</strong> ou <strong>membro</strong>.</li>
            <li><strong>c)</strong> Simulação: testa 1 na segunda lista e aceita; testa 2 e rejeita; testa 3 e aceita; testa 4 e rejeita; testa 5 e aceita. Portanto, L = [1,3,5].</li>
          </ol>
        </div>
        <span class="code-block">nono(1, [5,6,1,8,3]) -> true  -> entra 1
nono(2, [5,6,1,8,3]) -> false -> ignora 2
nono(3, [5,6,1,8,3]) -> true  -> entra 3
nono(4, [5,6,1,8,3]) -> false -> ignora 4
nono(5, [5,6,1,8,3]) -> true  -> entra 5

Resultado: L = [1,3,5]</span>
        <div class="exam-paper">
          <h3>Questão 2 - Busca em largura</h3>
          <ol>
            <li><strong>a)</strong> A busca em largura primeiro visita os estados por nível: primeiro a raiz, depois todos os filhos da raiz, depois os filhos desses nós.</li>
            <li><strong>b)</strong> A estrutura usada é uma <strong>fila FIFO</strong>. Exemplo: começa [A]; remove A e coloca B, C, D, E no final da fila.</li>
            <li><strong>c)</strong> No grafo da prova, a sequência examinada é <strong>A, B, C, D, E, F, G, H, I, J, K</strong>.</li>
          </ol>
        </div>
        ${graphFigure}
        <div class="exam-paper">
          <h3>Questão 3 - Sistema especialista</h3>
          <ol>
            <li><strong>a)</strong> A variável objetivo é <strong>devo ir à praia</strong>, pois aparece no ENTÃO das regras.</li>
            <li><strong>b)</strong> Sim. As variáveis univaloradas/binárias são: <strong>amanhã pode chover</strong>, <strong>tenho dinheiro suficiente</strong>, <strong>tenho tempo suficiente</strong> e <strong>devo ir à praia</strong>, todas com valores Sim/Não.</li>
            <li><strong>c)</strong> Não há variáveis multivaloradas nessas regras, pois nenhuma variável tem vários valores como baixo, médio, alto.</li>
            <li><strong>d)</strong> Sim. Dinheiro é decisivo porque dinheiro=Sim é necessário para concluir praia=Sim na Regra 1, e dinheiro=Não já basta para concluir praia=Não na Regra 2.</li>
          </ol>
        </div>
        <div class="exam-paper">
          <h3>Questão 4 - Lógica fuzzy</h3>
          <ol>
            <li><strong>a)</strong> A lógica booleana trabalha apenas com verdadeiro/falso, isto é, 0 ou 1. A lógica fuzzy permite graus de verdade entre 0 e 1, sendo mais adequada para conceitos vagos, como temperatura quente, febre alta ou conforto térmico.</li>
            <li><strong>b)</strong> Na interseção fuzzy, usa-se o menor grau de cada elemento. Assim, A ∩ B = <strong>{(x1,0.2),(x2,0.6),(x3,0.9),(x4,0.3)}</strong>.</li>
          </ol>
        </div>
        <span class="code-block">A = {(x1,0.2),(x2,0.7),(x3,1.0),(x4,0.5)}
B = {(x1,0.8),(x2,0.6),(x3,0.9),(x4,0.3)}

x1 -> min(0.2, 0.8) = 0.2
x2 -> min(0.7, 0.6) = 0.6
x3 -> min(1.0, 0.9) = 0.9
x4 -> min(0.5, 0.3) = 0.3</span>
        <div class="exam-paper">
          <h3>Questão 5 - Média em Prolog</h3>
          <ol>
            <li>O programa deve somar os elementos, contar a quantidade e dividir a soma pelo tamanho da lista.</li>
            <li>Para <strong>media(X, [0,5,10,15,20])</strong>, temos soma=50, tamanho=5 e <strong>X=10</strong>.</li>
          </ol>
        </div>
        <span class="code-block">soma([], 0).
soma([H|T], S) :-
    soma(T, S1),
    S is S1 + H.

tamanho([], 0).
tamanho([_|T], N) :-
    tamanho(T, N1),
    N is N1 + 1.

media(M, Lista) :-
    soma(Lista, S),
    tamanho(Lista, N),
    N > 0,
    M is S / N.</span>`,
        review:true,
        items:[
          mc('Segundo o gabarito da Questão 1, qual é o valor de L?', ['[1,3,5]', '[5,1,3]', '[2,4]', '[1,2,3,4,5]'], 0, 'nana calcula a interseção preservando a ordem da primeira lista.'),
          mc('Quais nomes explicam melhor nana e nono?', ['intersecao e pertence', 'media e tamanho', 'fila e pilha', 'fuzzy e crisp'], 0, 'nana calcula interseção; nono testa pertinência em lista.'),
          mc('Qual é a sequência BFS no grafo da prova?', ['A,B,C,D,E,F,G,H,I,J,K', 'A,B,F,G,C,H,D,I,E,J,K', 'F,G,H,I,J,K,A,B,C,D,E', 'A,E,D,C,B,K,J,I,H,G,F'], 0, 'Busca em largura visita por nível usando fila.'),
          mc('Na Questão 3, a variável objetivo é:', ['devo ir à praia', 'tenho dinheiro suficiente', 'amanhã pode chover', 'tenho tempo suficiente'], 0, 'A variável objetivo aparece no consequente, isto é, no ENTÃO.'),
          mc('Para os conjuntos fuzzy da prova, A ∩ B é:', ['{(x1,0.2),(x2,0.6),(x3,0.9),(x4,0.3)}', '{(x1,0.8),(x2,0.7),(x3,1.0),(x4,0.5)}', '{(x1,1.0),(x2,1.3),(x3,1.9),(x4,0.8)}', '{(x1,0.6),(x2,0.1),(x3,0.1),(x4,0.2)}'], 0, 'Interseção fuzzy padrão usa o mínimo em cada elemento.'),
          codeq(
            'Implemente em Prolog o predicado media(M, Lista). O judge deve aprovar media(X, [0,5,10,15,20]) com X = 10.',
            `% Complete a solução:
soma([], 0).

tamanho([], 0).

media(M, Lista) :-
    true.`,
            `soma([], 0).
soma([H|T], S) :-
    soma(T, S1),
    S is S1 + H.

tamanho([], 0).
tamanho([_|T], N) :-
    tamanho(T, N1),
    N is N1 + 1.

media(M, Lista) :-
    soma(Lista, S),
    tamanho(Lista, N),
    N > 0,
    M is S / N.`,
            [
              { label:'Define caso base da soma', regex:'soma\\s*\\(\\s*\\[\\s*\\]\\s*,\\s*0\\s*\\)' },
              { label:'Usa recursão com [H|T] ou padrão equivalente', regex:'\\[[A-Za-z_][A-Za-z0-9_]*\\s*\\|\\s*[A-Za-z_][A-Za-z0-9_]*\\]' },
              { label:'Usa is para calcular', regex:'\\bis\\b' },
              { label:'Calcula tamanho/quantidade', any:['tamanho','length','comprimento'] },
              { label:'Divide soma pela quantidade', regex:'\\/\\s*[A-Za-z_][A-Za-z0-9_]*' }
            ],
            'A solução correta precisa somar, contar e calcular M is Soma / Quantidade.',
            { runner:'prolog', exerciseId:'prolog-media' }
          )
        ]
      },
      {
        title:'Simulado estilo concurso - IA essencial',
        desc:'Questões extras de Prolog, busca, heurística, SE e fuzzy',
        intro:['Este simulado é para volume: responda rápido e use o feedback para corrigir padrão mental.', 'As questões são autorais, inspiradas em listas públicas universitárias e no estilo certo/errado de bancas.', 'Foco maior em Prolog, busca não informada, custo uniforme, gulosa e A*.'],
        theory:`<div class="card"><h2>Como usar este bloco</h2><p>Faça como treino de resistência: leia o enunciado, identifique a palavra-chave e responda. Em Prolog, procure unificação/lista/corte. Em busca, procure fila, pilha, custo ou heurística. Em fuzzy, procure min, max e complemento.</p></div>
        ${prologResolutionFigure}${weightedSearchFigure}${astarFormulaFigure}${fuzzyMembershipFigure}`,
        review:true,
        items:[
          mc('Em Prolog, variáveis normalmente começam com:', ['letra maiúscula ou _', 'letra minúscula apenas', 'número', 'ponto final'], 0, 'X, Lista e _Temp são variáveis.'),
          mc('Em Prolog, átomos normalmente começam com:', ['letra minúscula', 'letra maiúscula', 'colchete', 'interrogação'], 0, 'maria, praia e tenis são átomos.'),
          mc('A consulta ?- pai(joao, X). procura:', ['valores de X que tornam pai(joao,X) verdadeiro', 'apagar X', 'calcular média', 'fazer BFS'], 0, 'A variável X será instanciada com soluções possíveis.'),
          tf('Em Prolog, a ordem das cláusulas pode afetar a ordem das respostas.', true, 'Prolog tenta cláusulas de cima para baixo.'),
          mc('Na unificação [H|T]=[a,b,c], T vale:', ['[b,c]', 'b', '[a]', 'c'], 0, 'A cauda é uma lista com o restante.'),
          mc('Na unificação [A,B|R]=[1,2,3], R vale:', ['[3]', '3', '[1,2]', '[]'], 0, 'Depois de A e B, sobra [3].'),
          mc('Qual operador avalia expressão aritmética em Prolog?', ['is', '=', ':-', '|'], 0, 'is força o cálculo.'),
          mc('Qual operador compara igualdade aritmética?', ['=:=', '=', '\\=', ':-'], 0, '=:= avalia os dois lados.'),
          tf('f(X,X)=f(a,a) tem solução X=a.', true, 'A mesma variável recebe o mesmo átomo nas duas posições.'),
          tf('f(X,X)=f(a,b) tem solução X=a,b.', false, 'X não pode valer a e b ao mesmo tempo.'),
          mc('Um predicado recursivo de lista quase sempre precisa de:', ['caso base e caso recursivo', 'apenas corte', 'apenas interface', 'apenas heurística'], 0, 'Sem caso base a recursão não para.'),
          mc('Se tamanho([],N), o resultado esperado é:', ['N=0', 'N=1', 'false sempre', 'N=[]'], 0, 'Lista vazia tem tamanho zero.'),
          mc('Busca em largura usa:', ['fila FIFO', 'pilha LIFO', 'heurística h sempre', 'função fuzzy'], 0, 'BFS expande por níveis usando fila.'),
          mc('Busca em profundidade usa:', ['pilha LIFO ou recursão', 'fila FIFO obrigatória', 'centróide', 'base de regras'], 0, 'DFS desce por um ramo.'),
          tf('BFS é uma busca informada porque usa h(n).', false, 'BFS é busca não informada.'),
          tf('DFS pode não encontrar solução em árvore infinita sem controle de profundidade.', true, 'Pode ficar presa em um ramo infinito.'),
          mc('Custo uniforme escolhe o próximo nó pelo menor:', ['g(n)', 'h(n)', 'fuzzy max', 'número de variáveis'], 0, 'g(n) é o custo acumulado.'),
          mc('Busca gulosa escolhe o próximo nó pelo menor:', ['h(n)', 'g(n)', 'g(n)+h(n)', 'grau de negação'], 0, 'Greedy usa só a heurística.'),
          mc('A* escolhe o próximo nó pelo menor:', ['f(n)=g(n)+h(n)', 'h(n)-g(n)', 'g(n) apenas', 'min fuzzy'], 0, 'A* combina custo real e estimativa.'),
          mc('Se g(n)=7 e h(n)=5, então f(n)=', ['12', '2', '35', '7'], 0, '7+5=12.'),
          tf('Uma heurística admissível nunca superestima o custo real até o objetivo.', true, 'Ela é otimista.'),
          tf('Busca gulosa sempre garante caminho ótimo.', false, 'Ela pode ser enganada pela heurística.'),
          mc('No grafo ponderado da aula, o caminho S-A-D-G custa:', ['6', '8', '13', '4'], 0, '2+2+2=6.'),
          mc('Se h(n)=0 para todos os nós, A* vira:', ['custo uniforme', 'DFS', 'fuzzy', 'Prolog'], 0, 'f(n)=g(n).'),
          mc('Em SE, antecedente é:', ['parte SE', 'parte ENTÃO', 'saída crisp', 'fila de busca'], 0, 'Antecedente contém condições.'),
          mc('Em SE, consequente é:', ['parte ENTÃO', 'parte SE', 'fronteira', 'lista vazia'], 0, 'Consequente é a conclusão.'),
          mc('Forward chaining começa por:', ['fatos', 'objetivo', 'heurística', 'defuzzificador'], 0, 'É dirigido por dados.'),
          mc('Backward chaining começa por:', ['objetivo', 'todos os fatos', 'fila FIFO', 'mínimo fuzzy'], 0, 'É dirigido por meta.'),
          tf('Prolog se aproxima naturalmente de backward chaining.', true, 'A consulta vira objetivo a provar.'),
          mc('Na lógica fuzzy, interseção padrão usa:', ['mínimo', 'máximo', 'soma sempre', 'divisão'], 0, 'A ∩ B usa min.'),
          mc('Na lógica fuzzy, união padrão usa:', ['máximo', 'mínimo', 'média sempre', 'corte'], 0, 'A ∪ B usa max.'),
          mc('Se µA(x)=0.4, o complemento padrão é:', ['0.6', '0.4', '1.4', '-0.4'], 0, '1-0.4=0.6.'),
          mc('Se regra fuzzy usa E com graus 0.9 e 0.3, a ativação é:', ['0.3', '0.9', '1.2', '0.6'], 0, 'E usa mínimo.'),
          mc('Se regra fuzzy usa OU com graus 0.2 e 0.7, a ativação é:', ['0.7', '0.2', '0.9', '0.5'], 0, 'OU usa máximo.'),
          tf('Defuzzificação transforma uma saída fuzzy em valor numérico preciso.', true, 'Esse valor final é chamado crisp.'),
          mc('A melhor estratégia para prova discursiva de IA é:', ['nomear o conceito e aplicar no exemplo', 'responder só com uma palavra', 'decorar sem justificar', 'trocar Prolog por fuzzy'], 0, 'Conceito + aplicação costuma pontuar melhor.')
        ]
      },
      {
        title:'Prática corrigida estilo ENADE',
        desc:'Respostas abertas e código com correção por critérios',
        intro:[
          'Aqui você não escolhe alternativa: você escreve a resposta como faria numa prova.',
          'O app avalia critérios essenciais, marca o que apareceu, mostra o que faltou e dá pontuação parcial.',
          'As questões são autorais, inspiradas no escopo do ENADE para Computação: busca, linguagens simbólicas, representação de conhecimento, incerteza e lógica fuzzy.'
        ],
        theory:`<div class="card"><h2>Como a correção funciona</h2><p>Cada exercício tem critérios. Se sua resposta citar a ideia certa com outras palavras, o app tenta reconhecer por palavras-chave e padrões. Quando ficar parcial, use o checklist para ajustar a resposta.</p></div>
        <div class="exam-paper">
          <h3>Referência de estilo</h3>
          <ol>
            <li>O ENADE costuma usar situação-problema, interpretação e justificativa curta.</li>
            <li>Para IA em Computação, o escopo oficial inclui linguagens simbólicas, busca, representação de conhecimento, conhecimento incerto, algoritmos heurísticos e lógica fuzzy.</li>
            <li>Nas discursivas, ganhar ponto depende de nomear o conceito e aplicar no caso.</li>
          </ol>
        </div>`,
        review:true,
        items:[
          wr(
            'Explique, em poucas linhas, por que busca em largura é adequada para encontrar o menor caminho em um grafo sem pesos. Cite a estrutura de dados usada.',
            'Busca em largura expande os nós por nível, usando fila FIFO. Em grafo sem pesos, o primeiro objetivo encontrado está na menor profundidade, logo corresponde ao menor número de arestas.',
            [
              { label:'Cita busca por níveis ou menor profundidade', any:['nivel','niveis','profundidade','camada','camadas'] },
              { label:'Cita fila/FIFO', any:['fila','fifo'] },
              { label:'Relaciona grafo sem peso com menor número de arestas/passos', any:['sem peso','sem pesos','menor caminho','menor numero de arestas','menos arestas','menor quantidade de arestas','menor numero de passos'] }
            ],
            'A resposta forte tem três peças: níveis, fila FIFO e justificativa de menor número de arestas.'
          ),
          wr(
            'No Programa 1, responda como em uma prova: o que fazem nana e nono, e qual é o resultado de nana([1,2,3,4,5], [5,6,1,8,3], L)?',
            'nono testa se um elemento pertence a uma lista. nana calcula a interseção entre as listas, preservando a ordem da primeira. Para a consulta dada, L = [1,3,5].',
            [
              { label:'Identifica nono como membro/pertence', any:['nono pertence','nono testa','membro','pertence'] },
              { label:'Identifica nana como interseção', any:['intersecao','interseção'] },
              { label:'Informa o resultado L=[1,3,5]', any:['[1,3,5]','[1, 3, 5]','1,3,5','1, 3, 5'] },
              { label:'Menciona a ordem da primeira lista', any:['ordem da primeira','mantem a ordem','preserva a ordem'] }
            ],
            'O ponto que mais cai é perceber que a interseção sai na ordem da primeira lista, não na ordem da segunda.'
          ),
          codeq(
            'Escreva um predicado Prolog media(M, Lista) que calcule a média de uma lista numérica não vazia. Pode criar soma/2 e tamanho/2.',
            `% Complete os predicados:
soma([], 0).

tamanho([], 0).

media(M, Lista) :-
    % sua solução aqui
    true.`,
            `soma([], 0).
soma([H|T], S) :-
    soma(T, S1),
    S is S1 + H.

tamanho([], 0).
tamanho([_|T], N) :-
    tamanho(T, N1),
    N is N1 + 1.

media(M, Lista) :-
    soma(Lista, S),
    tamanho(Lista, N),
    N > 0,
    M is S / N.`,
            [
              { label:'Define caso base da soma', regex:'soma\\s*\\(\\s*\\[\\s*\\]\\s*,\\s*0\\s*\\)' },
              { label:'Percorre lista com [H|T] ou equivalente', regex:'\\[[A-Za-z_][A-Za-z0-9_]*\\s*\\|\\s*[A-Za-z_][A-Za-z0-9_]*\\]' },
              { label:'Usa is para calcular valores', regex:'\\bis\\b' },
              { label:'Calcula tamanho/quantidade da lista', any:['tamanho','comprimento','length'] },
              { label:'Evita divisão por zero', any:['n > 0','n>0','lista nao vazia','lista não vazia'] },
              { label:'Divide soma pela quantidade', regex:'\\/\\s*[A-Za-z_][A-Za-z0-9_]*' }
            ],
            'Se faltar tamanho ou o uso de is, a ideia pode estar no caminho, mas o Prolog não calcula corretamente.',
            { runner:'prolog', exerciseId:'prolog-media' }
          ),
          codeq(
            'Implemente em Python uma função bfs_order(graph, start) que retorne a ordem de visita da busca em largura.',
            `from collections import deque

def bfs_order(graph, start):
    # graph é um dicionário: {'A': ['B', 'C'], ...}
    # retorne uma lista com a ordem de visita
    return []`,
            `from collections import deque

def bfs_order(graph, start):
    visited = set([start])
    queue = deque([start])
    order = []
    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return order`,
            [
              { label:'Usa fila/deque ou comportamento FIFO', any:['deque','queue','fila','popleft'] },
              { label:'Controla visitados', any:['visited','visitados'] },
              { label:'Adiciona vizinhos na fila', any:['append'] }
            ],
            'BFS precisa guardar visitados e remover da fila na ordem FIFO.',
            { runner:'python', exerciseId:'python-bfs-order' }
          ),
          codeq(
            'Implemente em Python uma função fuzzy_ops(a, b) que retorne interseção, união e complemento de a.',
            `def fuzzy_ops(a, b):
    # a e b são graus entre 0 e 1
    # retorne (intersecao, uniao, complemento_de_a)
    return (0, 0, 0)`,
            `def fuzzy_ops(a, b):
    return (min(a, b), max(a, b), 1 - a)`,
            [
              { label:'Usa mínimo para interseção', any:['min'] },
              { label:'Usa máximo para união', any:['max'] },
              { label:'Calcula complemento como 1-a', any:['1 - a','1-a'] }
            ],
            'Interseção fuzzy padrão usa min, união usa max e complemento usa 1 menos o grau.',
            { runner:'python', exerciseId:'python-fuzzy-ops' }
          ),
          wr(
            'Classifique as variáveis das regras da praia: qual é a variável objetivo, quais são condições e por que dinheiro é decisivo?',
            'A variável objetivo é devo ir à praia. As condições são amanhã pode chover, tenho dinheiro suficiente e tenho tempo suficiente. Dinheiro é decisivo porque dinheiro=Sim é necessário para concluir praia=Sim na regra 1, e dinheiro=Não basta para concluir praia=Não na regra 2.',
            [
              { label:'Aponta "devo ir à praia" como objetivo', any:['devo ir a praia','devo ir à praia'] },
              { label:'Cita chuva como condição', any:['chuva','chover'] },
              { label:'Cita tempo como condição', any:['tempo'] },
              { label:'Cita dinheiro como condição', any:['dinheiro'] },
              { label:'Explica dinheiro=Não levando a praia=Não ou dinheiro=Sim necessário', any:['dinheiro nao','dinheiro não','necessario','necessário','decisivo','basta'] }
            ],
            'Separe sempre ENTÃO de SE: objetivo fica no consequente; condições ficam no antecedente.'
          ),
          wr(
            'Calcule e explique A ∩ B para A={(x1,0.2),(x2,0.7),(x3,1.0),(x4,0.5)} e B={(x1,0.8),(x2,0.6),(x3,0.9),(x4,0.3)}.',
            'A interseção fuzzy usa o mínimo em cada elemento: {(x1,0.2),(x2,0.6),(x3,0.9),(x4,0.3)}.',
            [
              { label:'Diz que interseção fuzzy usa mínimo', any:['minimo','mínimo','min'] },
              { label:'Acerta x1=0.2', any:['x1,0.2','x1=0.2','x1 0.2'] },
              { label:'Acerta x2=0.6', any:['x2,0.6','x2=0.6','x2 0.6'] },
              { label:'Acerta x3=0.9', any:['x3,0.9','x3=0.9','x3 0.9'] },
              { label:'Acerta x4=0.3', any:['x4,0.3','x4=0.3','x4 0.3'] }
            ],
            'Aqui não é soma nem média: para A ∩ B, pegue o menor grau de cada par.'
          ),
          wr(
            'Compare A* e busca gulosa em um exemplo curto. Sua resposta deve citar g(n), h(n) e a consequência para otimalidade.',
            'A busca gulosa prioriza h(n), a estimativa até o objetivo, e pode escolher um caminho não ótimo. A* prioriza f(n)=g(n)+h(n), combinando custo real e estimativa; com heurística admissível e custos adequados, preserva otimalidade.',
            [
              { label:'Diz que gulosa usa h(n)', any:['gulosa usa h','gulosa prioriza h','menor h','so h','só h'] },
              { label:'Diz que A* usa g(n)+h(n)', any:['g(n)+h(n)','g+h','f(n)'] },
              { label:'Explica g(n) como custo real/acumulado', any:['custo real','custo acumulado','custo ja pago','custo já pago'] },
              { label:'Explica h(n) como estimativa/heurística', any:['estimativa','heuristica','heurística'] },
              { label:'Cita otimalidade com heurística admissível ou risco da gulosa', any:['otimo','ótimo','otimalidade','admissivel','admissível','caminho ruim','nao otimo','não ótimo'] }
            ],
            'A comparação boa não é só fórmula: ela diz por que ignorar g(n) pode enganar a busca gulosa.'
          )
        ]
      }
    ]
  },
  {
    id:'prolog-lab', icon:'⚖', title:'LAB PROLOG', subtitle:'Treino estilo beecrowd: fatos, regras, consultas e judge local', color:'prolog',
    lessons:[
      {
        title:'Laboratório Prolog - 20 problemas',
        desc:'Escreva fatos, regras e consulta em campos separados, depois rode o judge',
        intro:[
          'Aqui a ideia é praticar como em um online judge: você recebe um problema, escreve o programa inteiro e testa.',
          'Cada exercício tem três áreas: Fatos, Regras e Consulta. O judge corrige com consultas escondidas, então não basta decorar uma única resposta.',
          'Os temas são inspirados no estilo ENADE e N1: representação simbólica, listas, recursão, sistemas especialistas e fuzzy.'
        ],
        theory:`<div class="card"><h2>Como resolver cada problema</h2><p>Comece pelos fatos, que são verdades simples terminadas com ponto. Depois escreva as regras com <strong>:-</strong>, lendo como "é verdade se". Por fim, escreva uma consulta para testar mentalmente o resultado esperado.</p></div>
        <span class="code-block">% FATOS
gosta(ana, praia).
tem_dinheiro(ana).

% REGRAS
pode_ir_praia(Pessoa) :-
    gosta(Pessoa, praia),
    tem_dinheiro(Pessoa).

% CONSULTA
pode_ir_praia(ana).</span>
        <div class="exam-paper">
          <h3>Ordem recomendada</h3>
          <ol>
            <li>Liste os fatos do enunciado.</li>
            <li>Escolha o nome do predicado principal pedido.</li>
            <li>Escreva o caso base se o problema envolver lista.</li>
            <li>Escreva a regra recursiva usando <strong>[H|T]</strong>.</li>
            <li>Monte uma consulta e veja se ela deveria retornar true, false ou um valor em uma variável.</li>
          </ol>
        </div>`,
        review:true,
        items:prologPracticeItems
      }
    ]
  }
];

export function lesson(title, desc, intro, theory, items) {
  return { title, desc, intro, theory, items };
}
export function mc(q, opts, correct, exp) { return { type:'mc', q, opts, correct, exp }; }
export function tf(q, correct, exp) { return { type:'tf', q, opts:['Verdadeiro','Falso'], correct: correct ? 0 : 1, exp }; }
export function wr(q, expected, criteria, exp, placeholder='Escreva sua resposta aqui...', extra={}) {
  return { type:'written', q, expected, criteria, exp, placeholder, ...extra };
}
export function plab(title, problem, writeGuide, tips, exerciseId, sections) {
  return codeq(
    title,
    '',
    `${sections.facts ? `% FATOS\n${sections.facts}\n\n` : ''}% REGRAS\n${sections.rules}\n\n% CONSULTA\n${sections.query}`,
    [],
    writeGuide,
    { runner:'prolog', exerciseId, workspace:'prolog', problem, writeGuide, tips, sections, hideExpected:true }
  );
}
export function codeq(q, starter, expected, criteria, exp, extra={}) {
  return { type:'code', q, starter, expected, criteria, exp, ...extra };
}



export const allModules = curriculum;

