import Image from "next/image";
import Link from "next/link";

export default function WarmShelterPage() {
  return (
    <main className="min-h-screen bg-[#F1F0E9] px-5 py-6 pb-28 text-[#111111] sm:px-8 sm:py-8 sm:pb-28 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        {/* NAVIGATION */}
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

        {/* HERO */}
        <section className="border-b border-[#111111]/15 pb-20 pt-20 sm:pb-28 sm:pt-28 lg:pt-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.4fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#1F4D3A] sm:text-sm">
                Python · PyQt5 · SQLite · TensorFlow
              </p>

              <h1 className="mt-7 max-w-5xl text-[clamp(4rem,9vw,9rem)] font-bold leading-[0.82] tracking-[-0.07em]">
                Тёплое
                <br />
                <span className="text-[#1F4D3A]">убежище</span>
              </h1>
            </div>

            <div className="max-w-md lg:pb-2">
              <p className="text-lg leading-8 text-[#111111]/60 sm:text-xl">
                Интеллектуальная информационная система для поддержки
                ментального здоровья на основе методов КПТ.
              </p>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-[#111111]/15 pt-4 text-[10px] uppercase tracking-[0.18em] text-[#111111]/35 sm:mt-20 sm:text-xs">
            <span>01 / Проект</span>

            <span className="hidden sm:block">
              Python · Desktop · ML
            </span>

            <span>2026</span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="border-b border-[#111111]/15 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#111111]/45">
                О проекте
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[#111111]/25">
                01 / 05
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-3xl font-medium leading-[1.12] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Десктопное приложение, объединяющее дневник мыслей, упражнения
                КПТ и интеллектуальный анализ эмоционального состояния.
              </h2>

              <div className="mt-10 max-w-3xl space-y-6 text-base leading-7 text-[#111111]/60 sm:text-lg sm:leading-8">
                <p>
                  «Тёплое убежище» — дипломный проект, разработанный как единая
                  среда для самостоятельной работы с эмоциональным состоянием.
                  Пользователь может фиксировать ситуации и мысли, оценивать
                  эмоции, выполнять упражнения и отслеживать изменения своего
                  состояния.
                </p>

                <p>
                  Приложение работает в офлайн-режиме, а пользовательские данные
                  хранятся локально в SQLite. Это позволяет использовать систему
                  без постоянного подключения к интернету и не требует передачи
                  записей на внешние серверы.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-b border-[#111111]/15 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#111111]/45">
                Возможности
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[#111111]/25">
                02 / 05
              </p>
            </div>

            <div className="border-t border-[#111111]/15">
              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Дневник
                </p>

                <p className="text-xl tracking-[-0.02em] sm:text-2xl">
                  Ситуации · эмоции · автоматические мысли · когнитивные
                  искажения
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Упражнения
                </p>

                <p className="text-xl tracking-[-0.02em] sm:text-2xl">
                  Дыхание · мышление · релаксация · осознанность
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Аналитика
                </p>

                <p className="text-xl tracking-[-0.02em] sm:text-2xl">
                  Динамика настроения · рекомендации · анализ записей
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Профиль
                </p>

                <p className="text-xl tracking-[-0.02em] sm:text-2xl">
                  ДНК-профиль · эмоциональные паттерны · статистика
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Дополнительно
                </p>

                <p className="text-xl tracking-[-0.02em] sm:text-2xl">
                  Чат-бот · достижения · экспорт данных · музыкальный плеер
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTELLIGENT ANALYSIS */}
        <section className="border-b border-[#111111]/15 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#111111]/45">
                Интеллектуальный анализ
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[#111111]/25">
                03 / 05
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-3xl font-medium leading-[1.12] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Система анализирует записи пользователя и помогает увидеть
                закономерности в его состоянии.
              </h2>

              <div className="mt-12 border-t border-[#111111]/15">
                <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                    Тональность
                  </p>

                  <p className="text-xl tracking-[-0.02em] sm:text-2xl">
                    Анализ эмоциональной окраски текста
                  </p>
                </div>

                <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                    Похожие ситуации
                  </p>

                  <p className="text-xl tracking-[-0.02em] sm:text-2xl">
                    TF-IDF · косинусная близость
                  </p>
                </div>

                <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                    Прогноз
                  </p>

                  <p className="text-xl tracking-[-0.02em] sm:text-2xl">
                    Прогнозирование тренда настроения
                  </p>
                </div>

                <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                    Маркеры
                  </p>

                  <p className="text-xl tracking-[-0.02em] sm:text-2xl">
                    Выявление признаков кризисных состояний
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERFACE */}
        <section className="border-b border-[#111111]/15 py-20 sm:py-28">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#111111]/45">
                Интерфейс
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[#111111]/25">
                04 / 05
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Приложение в работе.
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-[#111111]/50">
              Несколько основных экранов приложения и сценариев
              взаимодействия.
            </p>
          </div>

          <div className="mt-12 space-y-8 sm:mt-16 sm:space-y-12">
            {/* Main screen */}
            <figure className="overflow-hidden rounded-[2rem] border border-[#111111]/10 bg-[#E7E5DC]">
              <div className="overflow-x-auto">
                <div className="min-w-[760px] sm:min-w-0">
                  <Image
                    src="/images/projects/warm-shelter/main.png"
                    alt="Главный экран приложения Тёплое убежище"
                    width={1600}
                    height={900}
                    className="block h-auto w-full"
                  />
                </div>
              </div>

              <figcaption className="border-t border-[#111111]/10 px-5 py-5 sm:px-7 sm:py-6">
                <h3 className="text-lg font-medium tracking-[-0.02em] sm:text-xl">
                  Главный экран
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#111111]/55 sm:text-base">
                  Мониторинг эмоционального состояния, динамики настроения и
                  основных показателей пользователя.
                </p>
              </figcaption>
            </figure>

            {/* Diary + DNA */}
            <div className="grid gap-8 md:grid-cols-2">
              <figure className="overflow-hidden rounded-[2rem] border border-[#111111]/10 bg-[#E7E5DC]">
                <div className="overflow-x-auto">
                  <div className="min-w-[760px] md:min-w-0">
                    <Image
                      src="/images/projects/warm-shelter/diary.png"
                      alt="Дневник мыслей в приложении Тёплое убежище"
                      width={1600}
                      height={900}
                      className="block h-auto w-full"
                    />
                  </div>
                </div>

                <figcaption className="border-t border-[#111111]/10 px-5 py-5 sm:px-7 sm:py-6">
                  <h3 className="text-lg font-medium tracking-[-0.02em] sm:text-xl">
                    Дневник мыслей
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#111111]/55 sm:text-base">
                    Фиксация ситуаций, эмоций и автоматических мыслей для
                    последующего анализа.
                  </p>
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-[2rem] border border-[#111111]/10 bg-[#E7E5DC]">
                <div className="overflow-x-auto">
                  <div className="min-w-[760px] md:min-w-0">
                    <Image
                      src="/images/projects/warm-shelter/dnk_profile.png"
                      alt="Профиль ДНК ментального здоровья"
                      width={1600}
                      height={900}
                      className="block h-auto w-full"
                    />
                  </div>
                </div>

                <figcaption className="border-t border-[#111111]/10 px-5 py-5 sm:px-7 sm:py-6">
                  <h3 className="text-lg font-medium tracking-[-0.02em] sm:text-xl">
                    Профиль ДНК
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#111111]/55 sm:text-base">
                    Анализ повторяющихся паттернов мышления и эмоциональных
                    реакций.
                  </p>
                </figcaption>
              </figure>
            </div>

            {/* Exercises */}
            <figure className="overflow-hidden rounded-[2rem] border border-[#111111]/10 bg-[#E7E5DC]">
              <div className="overflow-x-auto">
                <div className="min-w-[760px] sm:min-w-0">
                  <Image
                    src="/images/projects/warm-shelter/exersises.png"
                    alt="Упражнения КПТ в приложении Тёплое убежище"
                    width={1600}
                    height={900}
                    className="block h-auto w-full"
                  />
                </div>
              </div>

              <figcaption className="border-t border-[#111111]/10 px-5 py-5 sm:px-7 sm:py-6">
                <h3 className="text-lg font-medium tracking-[-0.02em] sm:text-xl">
                  Упражнения КПТ
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#111111]/55 sm:text-base">
                  Каталог практик с категориями и пошаговым выполнением
                  упражнений.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="border-b border-[#111111]/15 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#111111]/45">
                Технологии
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[#111111]/25">
                05 / 05
              </p>
            </div>

            <div className="border-t border-[#111111]/15">
              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Язык
                </p>

                <p className="text-2xl tracking-[-0.03em] sm:text-3xl">
                  Python 3.11
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Интерфейс
                </p>

                <p className="text-2xl tracking-[-0.03em] sm:text-3xl">
                  PyQt5
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Данные
                </p>

                <p className="text-2xl tracking-[-0.03em] sm:text-3xl">
                  SQLite
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Анализ
                </p>

                <p className="text-2xl tracking-[-0.03em] sm:text-3xl">
                  scikit-learn · TensorFlow
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Визуализация
                </p>

                <p className="text-2xl tracking-[-0.03em] sm:text-3xl">
                  matplotlib
                </p>
              </div>

              <div className="grid gap-4 border-b border-[#111111]/15 py-7 sm:grid-cols-[220px_1fr] sm:items-center sm:py-9">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1F4D3A]">
                  Дополнительно
                </p>

                <p className="text-2xl tracking-[-0.03em] sm:text-3xl">
                  pygame
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GITHUB / FOOTER */}
        <section className="py-16 sm:py-20">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="https://github.com/KoshkinNikita/mental-health-app"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 text-sm font-medium transition-colors hover:text-[#1F4D3A]"
            >
              Исходный код на GitHub
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <div className="flex flex-col gap-4 sm:items-end">
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
          </div>
        </section>
      </div>
    </main>
  );
}