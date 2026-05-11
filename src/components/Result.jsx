export function Result({ module, lesson, result, onNextLesson, onBackToModule }) {
  return (
    <section id="result" className="screen active">
      <div className="app-shell">
        <div className="result-hero">
          <div className="trophy">{module.id === 'exam' ? '📝' : '🏆'}</div>
          <h1>{module.id === 'exam' ? 'Avaliação concluída' : 'Aula concluída!'}</h1>
          <p>{lesson.title} · {result.accuracy}% de acertos</p>
          <div className="result-grid">
            <div className="result-stat"><strong>{result.xp}</strong><span>XP ganho</span></div>
            <div className="result-stat"><strong>{result.accuracy}%</strong><span>acertos</span></div>
            <div className="result-stat"><strong>{result.total}</strong><span>questões</span></div>
          </div>
          <div className="action-row" style={{ justifyContent: 'center' }}>
            <button className="primary-btn" onClick={onNextLesson}>Próxima aula</button>
            <button className="secondary-btn" style={{ background: '#1b2230' }} onClick={onBackToModule}>Voltar ao módulo</button>
          </div>
        </div>
        {result.mistakes.length ? (
          <>
            <h2 style={{ marginBottom: 12 }}>Revisar erros</h2>
            <div className="mistake-list">
              {result.mistakes.map((mistake, index) => (
                <div className="card" key={`${mistake.q}-${index}`}>
                  <strong>{mistake.q}</strong>
                  <p style={{ marginTop: 8, color: 'var(--red-dark)' }}>Sua resposta: {mistake.chosen}</p>
                  <p style={{ color: 'var(--green-dark)' }}>Correta: {mistake.correct}</p>
                  <p style={{ marginTop: 6, color: 'var(--muted)' }} dangerouslySetInnerHTML={{ __html: mistake.exp }} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="card" style={{ textAlign: 'center' }}>
            <strong>Perfeito.</strong>
            <p style={{ marginTop: 6, color: 'var(--muted)' }}>Você não errou nenhuma questão desta rodada.</p>
          </div>
        )}
        {module.id === 'exam' && (
          <div className="exam-paper" style={{ marginTop: 18 }}>
            <h3>Gabarito comentado - modelo de resposta escrita</h3>
            <ol>
              <li><strong>Prolog:</strong> L = [1, 3, 5]. nono é membro/pertence; nana é interseção.</li>
              <li><strong>Busca:</strong> BFS usa fila FIFO e visita A, B, C, D, E, F, G, H, I, J, K.</li>
              <li><strong>SE:</strong> objetivo é devo ir à praia; chuva, dinheiro e tempo são condições.</li>
              <li><strong>Fuzzy:</strong> A ∩ B usa mínimo: x1=0.2, x2=0.6, x3=0.9, x4=0.3.</li>
              <li><strong>Programação:</strong> Prolog/Python agora podem ser corrigidos pelo judge local quando os runtimes estiverem instalados.</li>
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
