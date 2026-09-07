import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Тёплое убежище",
    description:
      "Десктопное приложение для ведения дневника мыслей, упражнений КПТ и анализа эмоционального состояния.",
    technologies: "Python · PyQt5 · SQLite · TensorFlow",
    href: "/projects/warm-shelter",
    image: "/projects/warm-shelter.png",
    type: "shelter",
  },
  {
    number: "02",
    title: "NOIR",
    description:
      "Сайт барбершопа с акцентом на визуальную подачу, атмосферу и взаимодействие с пользователем.",
    technologies: "Next.js · React · TypeScript · Tailwind CSS",
    href: "/noir",
    image: "/projects/noir.png",
    type: "noir",
  },
  {
    number: "03",
    title: "Support Desk",
    description:
      "Система для создания, обработки и управления обращениями пользователей в службе поддержки.",
    technologies: "FastAPI · PostgreSQL · Docker · Redis",
    href: "/projects/support-api-desk",
    image: "/projects/support-desk.png",
    type: "support",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F1F0E9] px-5 py-6 text-[#111111] sm:px-8 sm:py-8 lg:px-10">
      {/* NAV */}
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-[-0.04em]"
        >
          NK.
        </Link>

        <a
          href="#contact"
          className="rounded-full border border-[#111111]/20 px-5 py-2.5 text-sm font-medium transition duration-300 hover:bg-[#111111] hover:text-[#F1F0E9]"
        >
          Связаться
        </a>
      </nav>

      {/* HERO */}
      <section className="relative mx-auto flex min-h-[calc(100vh-90px)] max-w-[1600px] flex-col justify-between overflow-hidden pt-16 sm:pt-24 lg:pt-20">
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#111111]">
              Веб-разработчик
            </p>

            <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#111111]/50">
              <span className="h-2 w-2 rounded-full bg-[#1F4D3A]" />
              Открыт к предложениям
            </span>
          </div>

          <h1 className="mt-10 max-w-[1450px] text-[clamp(4.5rem,13vw,13.5rem)] font-bold leading-[0.78] tracking-[-0.075em]">
            Никита
            <br />
            <span className="ml-[7vw] text-[#1F4D3A]">
              Кошкин
            </span>
          </h1>
        </div>

        <div className="relative z-10 mt-16 grid gap-10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-xl">
            <p className="text-lg leading-7 text-[#111111]/65 sm:text-xl sm:leading-8">
              Разрабатываю сайты, интерфейсы и цифровые продукты —
              от идеи до работающего проекта.
            </p>

            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="#projects"
                className="group inline-flex items-center gap-4 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-medium text-[#F1F0E9] transition duration-300 hover:bg-[#1F4D3A] hover:text-[#111111]"
              >
                Смотреть проекты

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#about"
                className="text-sm font-medium underline decoration-[#111111]/25 underline-offset-4 transition hover:decoration-[#111111]"
              >
                Немного обо мне
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 border-t border-[#111111]/15 pt-4 text-xs uppercase tracking-[0.16em] text-[#111111]/45 sm:grid-cols-3 sm:border-t-0 sm:pt-0 lg:min-w-[390px]">
            <div>
              <span className="block text-[#111111]/30">
                Город
              </span>

              <span className="mt-1 block text-[#111111]">
                Казань
              </span>
            </div>

            <div>
              <span className="block text-[#111111]/30">
                Направление
              </span>

              <span className="mt-1 block text-[#111111]">
                Web / Frontend
              </span>
            </div>

            <div>
              <span className="block text-[#111111]/30">
                Год
              </span>

              <span className="mt-1 block text-[#111111]">
                2026
              </span>
            </div>
          </div>
        </div>

        {/* нижняя служебная строка */}
        <div className="flex items-center justify-between border-t border-[#111111]/15 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#111111]/40 sm:text-xs">
          <span>01 / Портфолио</span>

          <span className="hidden sm:block">
            Web · Frontend · Digital Products
          </span>

          <span>Scroll ↓</span>
        </div>

        {/* маленький графический акцент */}
        <div className="pointer-events-none absolute right-[3%] top-[42%] hidden h-32 w-32 rounded-full border border-[#1F4D3A]/60 lg:block">
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1F4D3A]" />
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-[1600px] border-t border-[#111111]/15 py-24 sm:py-32"
      >
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#111111]/45">
              01 / Избранные работы
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              То, что я уже сделал.
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-[#111111]/50">
            Несколько проектов, на которых можно посмотреть мой подход к разработке.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {/* ТЁПЛОЕ УБЕЖИЩЕ */}
          <Link
            href="/projects/warm-shelter"
            className="group block"
          >
            <article className="overflow-hidden rounded-[2rem] border border-[#111111]/10 bg-white/35 transition-all duration-500 hover:-translate-y-1 hover:border-[#1F4D3A]/50">
              <div className="lg:grid lg:grid-cols-[1.5fr_0.75fr]">
                {/* Превью */}
                <div className="relative overflow-hidden bg-[#E7E5DC]">
                  <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                    <img
                      src="/projects/warm-shelter.png"
                      alt="Главный экран приложения Тёплое убежище"
                      className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="absolute left-5 top-5 z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-[#111111]/45 sm:left-6 sm:top-6">
                    <span>01</span>

                    <span className="h-px w-6 bg-[#111111]/20" />

                    <span>Проект</span>
                  </div>

                  <div className="absolute bottom-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#111111]/15 bg-[#F1F0E9]/75 text-xl text-[#111111] backdrop-blur-sm transition duration-300 group-hover:border-[#1F4D3A] group-hover:bg-[#1F4D3A] group-hover:text-[#F1F0E9] sm:bottom-6 sm:right-6">
                    ↗
                  </div>
                </div>

                {/* Текст */}
                <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                      Python · PyQt5 · SQLite · TensorFlow
                    </p>

                    <h3 className="mt-6 max-w-xl text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                      Тёплое убежище
                    </h3>

                    <p className="mt-5 max-w-lg text-base leading-7 text-[#111111]/60">
                      Десктопное приложение для ведения дневника мыслей,
                      упражнений КПТ и анализа эмоционального состояния.
                    </p>
                  </div>

                  <div className="mt-12 flex items-center justify-between border-t border-[#111111]/10 pt-5">
                    <span className="text-xs uppercase tracking-[0.16em] text-[#111111]/35">
                      Посмотреть проект
                    </span>

                    <span className="text-sm text-[#111111]/40 transition duration-300 group-hover:translate-x-1 group-hover:text-[#1F4D3A]">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>

          {/* NOIR */}
          <Link
            href="/noir"
            className="group block lg:ml-[12%] lg:w-[88%]"
          >
            <article className="overflow-hidden rounded-[2rem] border border-[#111111]/10 bg-[#080808] text-[#F1F0E9] transition-all duration-500 hover:-translate-y-1 hover:border-[#1F4D3A]/70">
              <div className="lg:grid lg:grid-cols-[0.72fr_1.55fr]">
                {/* Текст */}
                <div className="order-1 flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#B9C9B8]">
                      Next.js · React · TypeScript · Tailwind CSS
                    </p>

                    <h3 className="mt-6 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                      NOIR
                    </h3>

                    <p className="mt-5 max-w-lg text-base leading-7 text-white/55">
                      Современный сайт барбершопа с акцентом на визуальную
                      подачу, типографику и взаимодействие с пользователем.
                    </p>
                  </div>

                  <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs uppercase tracking-[0.16em] text-white/35">
                      Посмотреть проект
                    </span>

                    <span className="text-sm text-white/40 transition duration-300 group-hover:translate-x-1 group-hover:text-[#B9C9B8]">
                      →
                    </span>
                  </div>
                </div>

                {/* Превью */}
                <div className="relative order-2 overflow-hidden bg-[#080808]">
                  <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                    <img
                      src="/projects/noir.png"
                      alt="Главный экран сайта NOIR"
                      className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="absolute left-5 top-5 z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-white/60 sm:left-6 sm:top-6">
                    <span>02</span>

                    <span className="h-px w-6 bg-white/30" />

                    <span>Проект</span>
                  </div>

                  <div className="absolute bottom-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-xl text-white backdrop-blur-sm transition duration-300 group-hover:border-[#1F4D3A] group-hover:bg-[#1F4D3A] sm:bottom-6 sm:right-6">
                    ↗
                  </div>
                </div>
              </div>
            </article>
          </Link>

          {/* SUPPORT DESK */}
          <Link
            href="/projects/support-api-desk"
            className="group block"
          >
            <article className="overflow-hidden rounded-[2rem] border border-[#111111]/10 bg-white/35 transition-all duration-500 hover:-translate-y-1 hover:border-[#1F4D3A]/50">
              <div className="lg:grid lg:grid-cols-[1.35fr_0.9fr]">
                {/* Превью */}
                <div className="relative overflow-hidden bg-[#E7E5DC]">
                  <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                    <img
                      src="/projects/support-desk.png"
                      alt="Интерфейс Support Desk"
                      className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="absolute left-5 top-5 z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-[#111111]/45 sm:left-6 sm:top-6">
                    <span>03</span>

                    <span className="h-px w-6 bg-[#111111]/20" />

                    <span>Проект</span>
                  </div>

                  <div className="absolute bottom-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#111111]/15 bg-[#F1F0E9]/75 text-xl text-[#111111] backdrop-blur-sm transition duration-300 group-hover:border-[#1F4D3A] group-hover:bg-[#1F4D3A] group-hover:text-[#F1F0E9] sm:bottom-6 sm:right-6">
                    ↗
                  </div>
                </div>

                {/* Текст */}
                <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                      FastAPI · PostgreSQL · Docker · Redis
                    </p>

                    <h3 className="mt-6 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                      Support Desk
                    </h3>

                    <p className="mt-5 max-w-lg text-base leading-7 text-[#111111]/60">
                      Система для создания, обработки и управления обращениями
                      пользователей в службе поддержки.
                    </p>
                  </div>

                  <div className="mt-12 flex items-center justify-between border-t border-[#111111]/10 pt-5">
                    <span className="text-xs uppercase tracking-[0.16em] text-[#111111]/35">
                      Посмотреть проект
                    </span>

                    <span className="text-sm text-[#111111]/40 transition duration-300 group-hover:translate-x-1 group-hover:text-[#1F4D3A]">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-[1600px] border-t border-[#111111]/15 py-24 sm:py-32"
      >
        <div className="grid gap-14 lg:grid-cols-[0.3fr_1fr_0.45fr] lg:gap-16">
          {/* Заголовок */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#111111]/45">
              Обо мне
            </p>

            <span className="mt-6 block text-xs uppercase tracking-[0.16em] text-[#111111]/25">
              03 / 04
            </span>
          </div>

          {/* Основной текст */}
          <div>
            <h2 className="max-w-4xl text-3xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Разработка для меня — это способ превращать идеи в{" "}
              <span className="text-[#1F4D3A]">
                работающие цифровые продукты.
              </span>
            </h2>

            <div className="mt-10 max-w-2xl space-y-6 text-base leading-7 text-[#111111]/60 sm:text-lg sm:leading-8">
              <p>
                По образованию я специалист по информационным системам.
                Начинал с Python и backend-разработки, а сейчас всё больше
                занимаюсь вебом — интерфейсами, архитектурой и тем, как
                всё это соединяется в один цельный продукт.
              </p>

              <p>
                Мне интересно не просто написать код, а разобраться в задаче,
                продумать структуру и сделать результат, которым действительно
                удобно пользоваться.
              </p>
            </div>
          </div>

          {/* Факты */}
          <div className="border-t border-[#111111]/15 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/35">
                  Образование
                </p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-[#111111]/75">
                  Информационные системы и технологии
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/35">
                  Профессиональная переподготовка
                </p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-[#111111]/75">
                  Разработка киберфизических систем
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/35">
                  Направление
                </p>

                <p className="mt-2 text-sm text-[#111111]/75">
                  Web · Frontend
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/35">
                  Работаю с
                </p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-[#111111]/75">
                  React · Next.js · TypeScript
                  <br />
                  Python · FastAPI
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="mt-20 border-y border-[#111111]/15 py-7 sm:mt-24 sm:py-9">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xl font-medium tracking-[-0.02em] sm:text-2xl">
              Идея
              <span className="mx-3 text-[#1F4D3A]">→</span>
              Структура
              <span className="mx-3 text-[#1F4D3A]">→</span>
              Интерфейс
              <span className="mx-3 text-[#1F4D3A]">→</span>
              Продукт
            </p>

            <span className="text-xs uppercase tracking-[0.18em] text-[#111111]/30">
              Мой подход к разработке
            </span>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-[1600px] border-t border-[#111111]/15 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* Левая колонка */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#111111]/45">
              Навыки
            </p>

            <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[#111111]/35">
              04 / 04
            </p>
          </div>

          {/* Правая часть */}
          <div>
            <h2 className="max-w-4xl text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.06em]">
              Инструменты, которые использую{" "}
              <span className="text-[#1F4D3A]">
                в работе.
              </span>
            </h2>

            <div className="mt-20 border-t border-[#111111]/15">
              {/* WEB */}
              <div className="grid grid-cols-[180px_1fr] items-center border-b border-[#111111]/15 py-8 sm:grid-cols-[220px_1fr] sm:py-10">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  01 / Веб
                </p>

                <p className="text-2xl tracking-[-0.03em] sm:text-3xl">
                  Next.js · React · TypeScript · Tailwind CSS
                </p>
              </div>

              {/* BACKEND */}
              <div className="grid grid-cols-[180px_1fr] items-center border-b border-[#111111]/15 py-8 sm:grid-cols-[220px_1fr] sm:py-10">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  02 / Backend
                </p>

                <p className="text-2xl tracking-[-0.03em] sm:text-3xl">
                  Python · FastAPI · SQL
                </p>
              </div>

              {/* TOOLS */}
              <div className="grid grid-cols-[180px_1fr] items-center border-b border-[#111111]/15 py-8 sm:grid-cols-[220px_1fr] sm:py-10">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  03 / Инструменты
                </p>

                <p className="text-2xl tracking-[-0.03em] sm:text-3xl">
                  Git · GitHub · Docker
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="mx-auto max-w-[1600px] border-t border-[#111111]/15 py-24 sm:py-32"
      >
        <div className="grid gap-16 lg:grid-cols-[1.5fr_0.5fr] lg:gap-24">
          {/* Заголовок */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#111111]/45">
              Контакты
            </p>

            <h2 className="mt-10 max-w-4xl text-[clamp(3.5rem,7vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.065em]">
              Если есть задача —
              <br />
              <span className="text-[#1F4D3A]">
                расскажи о ней.
              </span>
            </h2>
          </div>

          {/* Контакты */}
          <div className="flex flex-col justify-end">
            <p className="max-w-sm text-base leading-7 text-[#111111]/55">
              Если у тебя есть идея, задача или просто хочется обсудить проект —
              напиши мне удобным способом.
            </p>

            <div className="mt-10 border-t border-[#111111]/15">
              <a
                href="https://t.me/duxuhye"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-[#111111]/15 py-5 transition-colors hover:text-[#1F4D3A]"
              >
                <span className="text-sm font-medium">
                  Telegram
                </span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://github.com/KoshkinNikita"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-[#111111]/15 py-5 transition-colors hover:text-[#1F4D3A]"
              >
                <span className="text-sm font-medium">
                  GitHub
                </span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="mailto:nkoshkinweb@gmail.com"
                className="group flex items-center justify-between border-b border-[#111111]/15 py-5 transition-colors hover:text-[#1F4D3A]"
              >
                <span className="text-sm font-medium">
                  Почта
                </span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="mt-24 flex items-center justify-between border-t border-[#111111]/15 pt-5 text-xs uppercase tracking-[0.16em] text-[#111111]/40">
          <span>NK.</span>
          <span>2026</span>
        </div>
      </footer>
    </main>
  );
}