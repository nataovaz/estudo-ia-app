export function LessonList({ module, moduleIndex, completedLessons, onStartLesson }) {
  return (
    <section id="lesson-list" className="screen active">
      <div className="app-shell">
        <div className="page-title">
          <div className={`badge c-${module.color}`}>{module.icon}</div>
          <div><h1>{module.title}</h1><p>{module.subtitle}</p></div>
        </div>
        <div className="lesson-list">
          {module.lessons.map((lesson, lessonIndex) => {
            const done = completedLessons[`${module.id}-${lessonIndex}`];
            return (
              <button
                key={`${module.id}-${lessonIndex}`}
                className={`lesson-item ${done ? 'done' : ''}`}
                onClick={() => onStartLesson(moduleIndex, lessonIndex)}
              >
                <div className="lesson-num">{done ? '✓' : lessonIndex + 1}</div>
                <div className="lesson-info"><h3>{lesson.title}</h3><p>{lesson.desc}</p></div>
                <div className="lesson-arrow">→</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
