import Link from "next/link";
const projects = [
  {
    title: "Тёплое убежище",
    description:
      "Интеллектуальная информационная система для поддержки ментального здоровья на основе методов КПТ.",
    technologies: "Python · FastAPI · SQL · JWT",
    href: "/projects/warm-shelter",
  },
  {
    title: "Support API Desk",
    description:
      "Backend-система для управления обращениями пользователей и работы службы поддержки.",
    technologies: "FastAPI · PostgreSQL · Docker · Redis",
    href: "/projects/support-api-desk",
  },
  {
    title: "HabitForge API",
    description:
      "Backend-приложение для управления привычками и отслеживания прогресса.",
    technologies: "Python · FastAPI · SQL",
    href: "/projects/habitforge",
  },
];
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

      <section className="relative mx-auto flex min-h-[80vh] max-w-6xl items-center overflow-hidden">
  <div className="relative z-10 max-w-4xl">

    <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
      Web Developer
    </p>

    <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
      Никита Кошкин
    </h1>

    <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
      Создаю современные сайты и цифровые продукты,
      которые помогают идеям становиться реальностью.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="#projects"
        className="rounded-full bg-violet-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-violet-400"
      >
        Смотреть проекты
      </a>

      <a
        href="#about"
        className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:-translate-y-0.5 hover:border-zinc-400"
      >
        Обо мне
      </a>
    </div>

  </div>

  <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
</section>

      <section id="projects" className="mx-auto max-w-6xl border-t border-zinc-800 py-16">
  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Избранные работы</p>

  <h2 className="mt-3 text-3xl font-bold">Проекты, над которыми я работал</h2>

  <div className="mt-10 grid gap-5 md:grid-cols-3">
  {projects.map((project, index) => (
    <Link
      key={project.title}
      href={project.href}
      className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-zinc-900"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-600">
            0{index + 1}
          </span>

          <span className="text-2xl text-zinc-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400">
            ↗
          </span>
        </div>

        <p className="mt-10 text-xs font-medium uppercase tracking-[0.15em] text-violet-400">
          {project.technologies}
        </p>

        <h3 className="mt-4 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 leading-7 text-zinc-400">
          {project.description}
        </p>
      </div>

      <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-violet-500/5 blur-3xl transition duration-500 group-hover:bg-violet-500/15" />
    </Link>
  ))}
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