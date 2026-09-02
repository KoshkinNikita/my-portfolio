export default function HabitForgePage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100 sm:px-12">
      <div className="mx-auto max-w-4xl">

        <a
          href="/#projects"
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          ← Назад к проектам
        </a>

        <section className="mt-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Python · FastAPI · SQL · JWT
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
            HabitForge API
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-400">
            Backend-приложение для управления привычками и отслеживания
            прогресса.
          </p>
        </section>

        <section className="mt-16 border-t border-zinc-800 pt-10">
          <h2 className="text-2xl font-bold">О проекте</h2>

          <p className="mt-4 leading-8 text-zinc-400">
            HabitForge — учебный backend-проект, созданный для практики
            разработки REST API. Приложение позволяет пользователям
            регистрироваться, авторизовываться и управлять своими привычками.
          </p>
        </section>

        <section className="mt-12 border-t border-zinc-800 pt-10">
          <h2 className="text-2xl font-bold">Что реализовано</h2>

          <ul className="mt-5 space-y-3 text-zinc-400">
            <li>• Регистрация и авторизация пользователей</li>
            <li>• JWT-аутентификация</li>
            <li>• Создание и управление привычками</li>
            <li>• Работа с базой данных</li>
            <li>• REST API</li>
            <li>• Документация API через Swagger</li>
          </ul>
        </section>

        <section className="mt-12 border-t border-zinc-800 pt-10">
          <h2 className="text-2xl font-bold">Технологии</h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {["Python", "FastAPI", "SQLAlchemy", "SQLite", "JWT", "Pydantic"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </section>

        <section className="mt-12 border-t border-zinc-800 pt-10">
          <a
            href="https://github.com/KoshkinNikita/HabitForge-API"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-violet-500 px-6 py-3 font-medium text-white transition hover:bg-violet-400"
          >
            Посмотреть на GitHub →
          </a>
        </section>

      </div>
    </main>
  );
}