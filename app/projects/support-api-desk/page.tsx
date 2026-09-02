export default function SupportApiDeskPage() {
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
            FastAPI · PostgreSQL · Docker · Redis
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Support API Desk
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-400">
            Backend-система для управления обращениями пользователей
            и работы службы поддержки.
          </p>
        </section>
      </div>
    </main>
  );
}