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
    Возможности
  </p>

  <h2 className="mt-3 text-3xl font-bold tracking-tight">
    Основные модули системы
  </h2>

  <div className="mt-8 grid gap-4 sm:grid-cols-2">
    {[
      {
        title: "Дневник",
        description:
          "Фиксация жизненных ситуаций, мыслей и эмоционального состояния пользователя.",
      },
      {
        title: "Упражнения КПТ",
        description:
          "Инструменты для работы с мыслями и эмоциональными реакциями на основе методов КПТ.",
      },
      {
        title: "История",
        description:
          "Просмотр предыдущих записей и отслеживание изменений эмоционального состояния.",
      },
      {
        title: "Аналитика",
        description:
          "Визуализация данных и анализ динамики эмоционального состояния пользователя.",
      },
      {
        title: "Достижения",
        description:
          "Система достижений, отражающая активность пользователя и прогресс в работе с приложением.",
      },
      {
        title: "Рекомендации",
        description:
          "Формирование рекомендаций на основе данных и результатов взаимодействия пользователя с системой.",
      },
      {
        title: "Чат-бот",
        description:
          "Интерактивный модуль для общения с пользователем и поддержки работы с системой.",
      },
      {
        title: "Профиль",
        description:
          "Персональный профиль пользователя с информацией и результатами его работы с приложением.",
      },
    ].map((feature) => (
      <div
        key={feature.title}
        className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:-translate-y-1 hover:border-violet-400/40"
      >
        <h3 className="text-lg font-semibold">
          {feature.title}
        </h3>

        <p className="mt-3 leading-7 text-zinc-400">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
</section>
        <section className="mt-12 border-t border-zinc-800 pt-10">
  <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
    Технологии
  </p>

  <h2 className="mt-3 text-3xl font-bold tracking-tight">
    Стек проекта
  </h2>

  <div className="mt-8 grid gap-4 sm:grid-cols-2">
    {[
      {
        name: "Python",
        description: "Основной язык разработки приложения.",
      },
      {
        name: "PyQt5",
        description: "Создание графического интерфейса приложения.",
      },
      {
        name: "SQLite",
        description: "Хранение пользовательских данных и записей.",
      },
      {
        name: "Matplotlib",
        description: "Визуализация данных и динамики показателей.",
      },
      {
        name: "scikit-learn",
        description: "Инструменты машинного обучения и анализа данных.",
      },
      {
        name: "TensorFlow",
        description: "Использование нейросетевых моделей.",
      },
      {
        name: "Pygame",
        description: "Работа с аудио и звуковыми компонентами.",
      },
    ].map((technology) => (
      <div
        key={technology.name}
        className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
      >
        <h3 className="text-lg font-semibold">
          {technology.name}
        </h3>

        <p className="mt-2 leading-7 text-zinc-400">
          {technology.description}
        </p>
      </div>
    ))}
  </div>
</section>

<section className="mt-12 border-t border-zinc-800 pt-10">
  <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
    Архитектура
  </p>

  <h2 className="mt-3 text-3xl font-bold tracking-tight">
    Как устроена система
  </h2>

  <div className="mt-8 space-y-4">
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div className="flex items-center gap-4">
        <span className="text-sm text-zinc-600">01</span>

        <h3 className="text-xl font-semibold">
          Пользовательский интерфейс
        </h3>
      </div>

      <p className="mt-4 leading-7 text-zinc-400">
        Графический интерфейс приложения объединяет основные функции
        системы: дневник, упражнения, историю, достижения, аналитику
        и другие пользовательские модули.
      </p>
    </div>

    <div className="flex justify-center text-2xl text-zinc-700">
      ↓
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div className="flex items-center gap-4">
        <span className="text-sm text-zinc-600">02</span>

        <h3 className="text-xl font-semibold">
          Логика приложения
        </h3>
      </div>

      <p className="mt-4 leading-7 text-zinc-400">
        Внутренние модули обрабатывают действия пользователя, работают
        с записями дневника, упражнениями, аналитикой и формируют
        результаты взаимодействия с системой.
      </p>
    </div>

    <div className="flex justify-center text-2xl text-zinc-700">
      ↓
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div className="flex items-center gap-4">
        <span className="text-sm text-zinc-600">03</span>

        <h3 className="text-xl font-semibold">
          Данные и интеллектуальные компоненты
        </h3>
      </div>

      <p className="mt-4 leading-7 text-zinc-400">
        Система работает с пользовательскими данными и использует
        инструменты анализа и интеллектуальной обработки для получения
        аналитических результатов и персонализированного взаимодействия.
      </p>
    </div>
  </div>
</section>

        <section className="mt-12 border-t border-zinc-800 pt-10">
          <a
            href="https://github.com/KoshkinNikita/mental-health-app"
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