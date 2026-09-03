import Image from "next/image";
export default function WarmShelterPage() {
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
            Тёплое убежище
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-400">
            Интеллектуальная информационная система для поддержки
            ментального здоровья на основе методов КПТ.
          </p>
        </section>

        <section className="mt-16 border-t border-zinc-800 pt-10">
  <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
    О проекте
  </p>

  <h2 className="mt-3 text-3xl font-bold tracking-tight">
    Интеллектуальная система поддержки
  </h2>

  <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
    «Тёплое убежище» — дипломный проект, представляющий собой
    интеллектуальную информационную систему для поддержки ментального
    здоровья на основе методов когнитивно-поведенческой терапии.
  </p>

  <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
    Система позволяет пользователю работать с эмоциональным состоянием,
    фиксировать ситуации и эмоции, выполнять специализированные упражнения,
    отслеживать динамику и получать персональные рекомендации.
  </p>
</section>

<section className="mt-12 border-t border-zinc-800 pt-10">
  <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
    Интерфейс
  </p>

  <h2 className="mt-3 text-3xl font-bold tracking-tight">
    Приложение в работе
  </h2>

  <div className="mt-8 space-y-6">
    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
      <figure className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
  <Image
    src="/images/projects/warm-shelter/main.png"
    alt="Главный экран приложения Тёплое убежище"
    width={1600}
    height={900}
    className="h-auto w-full"
  />

  <figcaption className="border-t border-zinc-800 px-6 py-5">
    <h3 className="font-semibold">Главный экран</h3>
    <p className="mt-1 text-sm leading-6 text-zinc-400">
      Мониторинг эмоционального состояния и динамики настроения пользователя.
    </p>
  </figcaption>
</figure>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
        <figure className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
  <Image
    src="/images/projects/warm-shelter/diary.png"
    alt="Дневник мыслей в приложении Тёплое убежище"
    width={1600}
    height={900}
    className="h-auto w-full"
  />

  <figcaption className="border-t border-zinc-800 px-6 py-5">
    <h3 className="font-semibold">Дневник мыслей</h3>
    <p className="mt-1 text-sm leading-6 text-zinc-400">
      Фиксация ситуаций, эмоций и автоматических мыслей.
    </p>
  </figcaption>
</figure>
      </div>

      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
        <figure className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
  <Image
    src="/images/projects/warm-shelter/dnk_profile.png"
    alt="Профиль ДНК ментального здоровья"
    width={1600}
    height={900}
    className="h-auto w-full"
  />

  <figcaption className="border-t border-zinc-800 px-6 py-5">
    <h3 className="font-semibold">Профиль ДНК</h3>
    <p className="mt-1 text-sm leading-6 text-zinc-400">
      Анализ повторяющихся паттернов мышления и эмоциональных реакций.
    </p>
  </figcaption>
</figure>
      </div>
    </div>

    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
      <figure className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
  <Image
    src="/images/projects/warm-shelter/exersises.png"
    alt="Упражнения КПТ в приложении Тёплое убежище"
    width={1600}
    height={900}
    className="h-auto w-full"
  />

  <figcaption className="border-t border-zinc-800 px-6 py-5">
    <h3 className="font-semibold">Упражнения КПТ</h3>
    <p className="mt-1 text-sm leading-6 text-zinc-400">
      Каталог практик с категориями и пошаговым выполнением упражнений.
    </p>
  </figcaption>
</figure>
    </div>
  </div>
</section>

<section className="mt-16 border-t border-zinc-800 pt-10">
  <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
    Архитектура
  </p>

  <h2 className="mt-3 text-3xl font-bold tracking-tight">
    Как устроен проект
  </h2>

  <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
    Приложение построено как десктопная система с графическим интерфейсом,
    модульной бизнес-логикой, аналитическими компонентами и локальным
    хранением данных.
  </p>

  <div className="mt-8 grid gap-4 md:grid-cols-2">
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-violet-400">UI</p>
      <h3 className="mt-3 text-xl font-bold">PyQt5</h3>
      <p className="mt-2 leading-7 text-zinc-400">
        Графический интерфейс приложения, окна и пользовательские виджеты.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-violet-400">Data</p>
      <h3 className="mt-3 text-xl font-bold">SQLite</h3>
      <p className="mt-2 leading-7 text-zinc-400">
        Локальное хранение пользовательских записей и данных приложения.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-violet-400">Analytics</p>
      <h3 className="mt-3 text-xl font-bold">scikit-learn · TensorFlow</h3>
      <p className="mt-2 leading-7 text-zinc-400">
        Анализ данных и интеллектуальные компоненты системы.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-violet-400">Visualization</p>
      <h3 className="mt-3 text-xl font-bold">Matplotlib</h3>
      <p className="mt-2 leading-7 text-zinc-400">
        Построение графиков и визуализация динамики эмоционального состояния.
      </p>
    </div>
  </div>
</section>

<section className="mt-16 border-t border-zinc-800 pt-10">
  <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
    Возможности
  </p>

  <h2 className="mt-3 text-3xl font-bold tracking-tight">
    Ключевая функциональность
  </h2>

  <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
    Основные функции системы, которые пользователь может использовать
    для работы с эмоциональным состоянием и отслеживания личного прогресса.
  </p>

  <div className="mt-8 grid gap-4 md:grid-cols-2">
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-violet-400">01</p>
      <h3 className="mt-3 text-xl font-bold">Дневник мыслей</h3>
      <p className="mt-2 leading-7 text-zinc-400">
        Фиксация ситуаций, эмоций и автоматических мыслей пользователя
        для последующего анализа.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-violet-400">02</p>
      <h3 className="mt-3 text-xl font-bold">Упражнения КПТ</h3>
      <p className="mt-2 leading-7 text-zinc-400">
        Набор практик для работы с дыханием, мышлением, расслаблением
        и осознанностью.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-violet-400">03</p>
      <h3 className="mt-3 text-xl font-bold">Аналитика состояния</h3>
      <p className="mt-2 leading-7 text-zinc-400">
        Визуализация динамики настроения и анализ эмоционального
        состояния пользователя.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-violet-400">04</p>
      <h3 className="mt-3 text-xl font-bold">Профиль ДНК</h3>
      <p className="mt-2 leading-7 text-zinc-400">
        Выявление повторяющихся паттернов мышления, эмоциональных реакций
        и потенциальных триггеров.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-violet-400">05</p>
      <h3 className="mt-3 text-xl font-bold">Система достижений</h3>
      <p className="mt-2 leading-7 text-zinc-400">
        Отслеживание активности пользователя, прогресса и достижений
        в процессе работы с приложением.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-violet-400">06</p>
      <h3 className="mt-3 text-xl font-bold">Чат-бот</h3>
      <p className="mt-2 leading-7 text-zinc-400">
        Интерактивное взаимодействие с пользователем и эмоциональная
        поддержка в рамках возможностей приложения.
      </p>
    </div>
  </div>
</section>

<section className="mt-16 border-t border-zinc-800 pt-10">
  <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
    Результат
  </p>

  <h2 className="mt-3 text-3xl font-bold tracking-tight">
    Что было реализовано
  </h2>

  <div className="mt-8 grid gap-4 md:grid-cols-2">
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-bold">
        Полноценное desktop-приложение
      </h3>
      <p className="mt-3 leading-7 text-zinc-400">
        Реализован графический интерфейс с отдельными окнами, виджетами
        и модулями для разных сценариев взаимодействия пользователя.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-bold">
        Работа с пользовательскими данными
      </h3>
      <p className="mt-3 leading-7 text-zinc-400">
        Реализовано локальное хранение записей, истории активности
        и данных пользователя с использованием SQLite.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-bold">
        Анализ и визуализация
      </h3>
      <p className="mt-3 leading-7 text-zinc-400">
        Система анализирует накопленные данные и представляет результаты
        в виде графиков, статистики и аналитического профиля.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-bold">
        Модульная структура
      </h3>
      <p className="mt-3 leading-7 text-zinc-400">
        Проект разделён на отдельные компоненты интерфейса, работы
        с данными, аналитики и вспомогательной логики.
      </p>
    </div>
  </div>

  <div className="mt-10 flex flex-wrap gap-4">
    <a
      href="https://github.com/KoshkinNikita/mental-health-app"
      target="_blank"
      rel="noreferrer"
      className="rounded-full bg-violet-500 px-6 py-3 font-medium text-white transition hover:bg-violet-400"
    >
      Посмотреть исходный код →
    </a>

    <a
      href="/#projects"
      className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
    >
      ← Все проекты
    </a>
  </div>
</section>

        
      </div>
    </main>
  );
}