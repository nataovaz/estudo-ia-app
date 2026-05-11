export function Home({ curriculum, state, onOpenModule }) {
  return (
    <main id="home" className="screen active">
      <section className="hero">
        <div>
          <h1>Treino N1 de Inteligência Artificial</h1>
          <p>
            Um app estilo Duolingo para estudar Prolog, busca em IA, sistemas especialistas e lógica fuzzy, com revisão
            guiada, questões rápidas e judge local para programação.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => onOpenModule(0)}>Começar Prolog</button>
            <button className="secondary-btn" onClick={() => onOpenModule(4)}>Fazer Simulado</button>
          </div>
        </div>
        <div className="hero-card">
          <h2>Seu progresso</h2>
          <div className="stat-grid">
            <div className="stat"><div className="val">{state.xp}</div><div className="lbl">XP</div></div>
            <div className="stat"><div className="val">{state.lessonsCompleted}</div><div className="lbl">Aulas</div></div>
            <div className="stat"><div className="val">{state.streak}</div><div className="lbl">Sequência</div></div>
          </div>
          <div className="quick-sheet">
            <div><strong>Vidas:</strong> ilimitadas para estudar sem travar.</div>
            <div><strong>Pomodoro:</strong> 25 minutos de foco + pausa curta.</div>
            <div><strong>Judge:</strong> exercícios guiados de Prolog e Python com testes locais.</div>
          </div>
        </div>
      </section>
      <section className="module-grid">
        {curriculum.map((module, moduleIndex) => {
          const done = module.lessons.filter((_, lessonIndex) => state.completedLessons[`${module.id}-${lessonIndex}`]).length;
          const percent = Math.round((done / module.lessons.length) * 100);
          return (
            <button key={module.id} className={`module-card m-${module.color}`} onClick={() => onOpenModule(moduleIndex)}>
              <div className="mod-head">
                <div className="mod-icon">{module.icon}</div>
                <div><h2>{module.title}</h2><p>{module.subtitle}</p></div>
              </div>
              <div className="progress-meta"><span>{done}/{module.lessons.length} aulas</span><span>{percent}%</span></div>
              <div className="bar"><div className="fill" style={{ width: `${percent}%` }} /></div>
            </button>
          );
        })}
      </section>
    </main>
  );
}
