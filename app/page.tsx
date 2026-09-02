export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100 sm:px-12">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <p className="text-lg font-bold tracking-tight">NK.</p>

        <a
          href="#contact"
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm transition hover:border-zinc-400"
        >
          Связаться
        </a>
      </nav>

      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
          Web Developer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Никита Кошкин
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
          Создаю современные сайты и цифровые продукты, которые помогают идеям
          становиться реальностью.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-violet-500 px-6 py-3 font-medium text-white transition hover:bg-violet-400"
          >
            Смотреть проекты
          </a>

          <a
            href="#about"
            className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-400"
          >
            Обо мне
          </a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl border-t border-zinc-800 py-16">
  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Проекты</p>

  <h2 className="mt-3 text-3xl font-bold">Работы и учебные проекты</h2>

  <div className="mt-8 grid gap-5 md:grid-cols-3">
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-violet-400">
      <p className="text-sm text-violet-400">Next.js · TypeScript · Tailwind CSS</p>
      <h3 className="mt-4 text-xl font-bold">Личное портфолио</h3>
      <p className="mt-3 leading-7 text-zinc-400">
        Сайт-визитка с проектами, навыками и способами связи.
      </p>
    </article>

    <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-violet-400">
      <p className="text-sm text-violet-400">Python · FastAPI · SQL</p>
      <h3 className="mt-4 text-xl font-bold">HabitForge API</h3>
      <p className="mt-3 leading-7 text-zinc-400">
        Backend-приложение для управления привычками и отслеживания прогресса.
      </p>
    </article>

    <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-violet-400">
      <p className="text-sm text-violet-400">Python · FastAPI · SQL · JWT</p>
      <h3 className="mt-4 text-xl font-bold">Тёплое убежище</h3>
      <p className="mt-3 leading-7 text-zinc-400">
        Дипломный проект, созданный для поддержки ментального здоровья.
      </p>
    </article>
  </div>
</section>

      <section id="about" className="mx-auto max-w-6xl border-t border-zinc-800 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Обо мне</p>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-zinc-400">
          Начинающий веб-разработчик. Учусь создавать быстрые, понятные и красивые
          веб-приложения.
        </p>
      </section>

      <section className="mx-auto max-w-6xl border-t border-zinc-800 py-16">
  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Навыки</p>

  <h2 className="mt-3 text-3xl font-bold">Технологии, с которыми я работаю</h2>

  <div className="mt-8 flex flex-wrap gap-3">
    {["Python", "FastAPI", "SQL", "Git", "TypeScript", "React", "Next.js", "Tailwind CSS"].map(
      (skill) => (
        <span
          key={skill}
          className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
        >
          {skill}
        </span>
      )
    )}
  </div>
</section>

      <footer id="contact" className="mx-auto max-w-6xl border-t border-zinc-800 py-12">
  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Контакты</p>

  <h2 className="mt-3 text-3xl font-bold">
    Есть идея для сайта? Давай обсудим.
  </h2>

  <div className="mt-6 flex flex-wrap gap-4">
    <a
      href="https://t.me/duxuhye"
      target="_blank"
      rel="noreferrer"
      className="rounded-full bg-violet-500 px-6 py-3 font-medium text-white transition hover:bg-violet-400"
    >
      Написать в Telegram
    </a>

    <a
      href="https://github.com/KoshkinNikita"
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-400"
    >
      GitHub
    </a>

    <a
      href="mailto:nkoshkinweb@gmail.com"
      className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-400"
    >
      Написать на почту
    </a>
  </div>
</footer>
    </main>
  );
}