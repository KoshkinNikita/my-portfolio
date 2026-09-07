import Link from "next/link";

export default function SupportApiDeskPage() {
  return (
    <main className="min-h-screen bg-[#F1F0E9] px-5 py-6 pb-28 text-[#111111] sm:px-8 sm:py-8 sm:pb-28 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <nav className="flex items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#111111]/55 transition-colors hover:text-[#1F4D3A]"
          >
            <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Назад к проектам
          </Link>
        </nav>

        <section className="border-b border-[#111111]/15 pb-20 pt-20 sm:pb-28 sm:pt-28 lg:pt-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.4fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#1F4D3A] sm:text-sm">
                FastAPI · PostgreSQL · Docker · Redis
              </p>

              <h1 className="mt-7 max-w-5xl text-[clamp(4rem,9vw,9rem)] font-bold leading-[0.82] tracking-[-0.07em]">
                Support
                <br />
                <span className="text-[#1F4D3A]">Desk</span>
              </h1>
            </div>

            <div className="max-w-md lg:pb-2">
              <p className="text-lg leading-8 text-[#111111]/60 sm:text-xl">
                Система для создания, обработки и управления обращениями
                пользователей в службе поддержки.
              </p>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-[#111111]/15 pt-4 text-[10px] uppercase tracking-[0.18em] text-[#111111]/35 sm:mt-20 sm:text-xs">
            <span>03 / Проект</span>

            <span className="hidden sm:block">
              Backend · API · Support
            </span>

            <span>2026</span>
          </div>
        </section>

        <section className="border-b border-[#111111]/15 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#111111]/45">
                О проекте
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[#111111]/25">
                01 / 04
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-medium leading-[1.12] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Система для работы с обращениями пользователей — от создания
                тикета до его обработки и обсуждения.
              </h2>

              <div className="mt-10 max-w-3xl space-y-6 text-base leading-7 text-[#111111]/60 sm:text-lg sm:leading-8">
                <p>
                  Support Desk объединяет основные процессы службы поддержки в
                  одной системе. Пользователь может создать обращение, а
                  сотрудники поддержки — просматривать его, изменять данные,
                  обновлять статус и вести обсуждение в комментариях.
                </p>

                <p>
                  Backend построен на FastAPI и предоставляет API для работы
                  с обращениями и пользователями. Данные хранятся в
                  PostgreSQL, а отдельные инфраструктурные задачи вынесены в
                  Redis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#111111]/15 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#111111]/45">
                Возможности
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[#111111]/25">
                02 / 04
              </p>
            </div>

            <div className="border-t border-[#111111]/15">
              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Обращения
                </p>

                <p className="text-xl tracking-[-0.02em] sm:text-2xl">
                  Создание · просмотр · редактирование · удаление
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Обработка
                </p>

                <p className="text-xl tracking-[-0.02em] sm:text-2xl">
                  Изменение статуса · работа с комментариями
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Пользователи
                </p>

                <p className="text-xl tracking-[-0.02em] sm:text-2xl">
                  Регистрация · авторизация · текущий пользователь
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  API
                </p>

                <p className="text-xl tracking-[-0.02em] sm:text-2xl">
                  FastAPI · JWT · защищённые маршруты
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#111111]/15 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#111111]/45">
                Технологии
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[#111111]/25">
                03 / 04
              </p>
            </div>

            <div className="border-t border-[#111111]/15">
              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Backend
                </p>

                <p className="text-2xl tracking-[-0.03em] sm:text-3xl">
                  Python · FastAPI
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  База данных
                </p>

                <p className="text-2xl tracking-[-0.03em] sm:text-3xl">
                  PostgreSQL
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Инфраструктура
                </p>

                <p className="text-2xl tracking-[-0.03em] sm:text-3xl">
                  Docker · Redis
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Авторизация
                </p>

                <p className="text-2xl tracking-[-0.03em] sm:text-3xl">
                  JWT
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#111111]/15 py-20 sm:py-28">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#111111]/45">
                Интерфейс
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Работа с обращением.
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-[#111111]/50">
              Обращение можно открыть, изменить, удалить и дополнить
              комментариями.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-[2rem] border border-[#111111]/10 bg-[#E7E5DC] sm:mt-16">
            <div className="min-w-[760px] sm:min-w-0">
              <img
                src="/projects/support-desk.png"
                alt="Интерфейс Support Desk с обращением и комментариями"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-[#111111]/15 py-20 sm:py-28">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#111111]/45">
                API
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Серверная часть.
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-[#111111]/50">
              Документация API с основными маршрутами для работы с системой.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-[2rem] border border-[#111111]/10 bg-white sm:mt-16">
            <div className="min-w-[760px] sm:min-w-0">
              <img
                src="/projects/support-swagger.png"
                alt="Swagger-документация API Support Desk"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-3 text-sm font-medium transition-colors hover:text-[#1F4D3A]"
            >
              <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Все проекты
            </Link>

            <span className="text-xs uppercase tracking-[0.16em] text-[#111111]/30">
              NK. · 2026
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}