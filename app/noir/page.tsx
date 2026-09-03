import Image from "next/image";
import Reveal from "./Reveal";
import ServiceLink from "./ServiceLink";
import BookingForm from "./BookingForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://my-portfolio-xi-eight-eeoekutlpw.vercel.app"
  ),

  title: "NOIR — Barbershop Kazan",

  description:
    "NOIR — премиальный барбершоп в Казани. Стрижки, оформление бороды и полный уход за образом.",

  alternates: {
    canonical: "/noir",
  },
  keywords: [
    "барбершоп Казань",
    "мужская стрижка Казань",
    "барбер Казань",
    "оформление бороды",
    "NOIR barbershop",
  ],

  openGraph: {
    title: "NOIR — Barbershop Kazan",
    description:
      "Премиальный барбершоп в Казани. Стрижки, борода и полный уход за образом.",
    type: "website",
    locale: "ru_RU",
    siteName: "NOIR Barbershop",
    images: [
      {
        url: "/images/noir/hero.jpg",
        width: 1200,
        height: 1500,
        alt: "NOIR Barbershop",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NOIR — Barbershop Kazan",
    description:
      "Премиальный барбершоп в Казани.",
    images: ["/images/noir/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
const masters = [
  {
    name: "Алексей Морозов",
    specialty: "Классические стрижки",
    image: "/images/noir/master-1.jpg",
  },
  {
    name: "Максим Орлов",
    specialty: "Fades и современные формы",
    image: "/images/noir/master-2.jpg",
  },
  {
    name: "Илья Волков",
    specialty: "Борода и моделирование",
    image: "/images/noir/master-3.jpg",
  },
];

export default function NoirPage() {
  return (
    <main className="noir-page min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden px-6 py-8 sm:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="noir-hero-glow absolute right-[-5%] top-[-10%] h-[700px] w-[700px] rounded-full bg-amber-400/20 blur-[140px]" />

          <div className="noir-hero-glow absolute bottom-[-20%] left-[-5%] h-[500px] w-[500px] rounded-full bg-amber-700/15 blur-[120px]" />
        </div>

        <nav className="relative z-10 flex items-center justify-between">
          <div className="text-xl font-bold tracking-[0.2em]">
            NOIR
          </div>

          <a
            href="#booking"
            className="rounded-full border border-white/30 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
          >
            Записаться
          </a>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            <div className="max-w-3xl noir-hero-text">
              <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-400">
                Barbershop · Kazan
              </p>

              <h1 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
                Стиль,
                <br />
                который
                <br />
                говорит за тебя.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                Современный барбершоп для тех, кто ценит точность,
                характер и внимание к деталям.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#booking"
                  className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-zinc-200"
                >
                  Записаться →
                </a>

                <a
                  href="#services"
                  className="rounded-full border border-white/20 px-7 py-3 font-medium text-white transition hover:border-white/50"
                >
                  Услуги
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:ml-auto noir-hero-image">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/noir/hero.jpg"
                  alt="Барбершоп NOIR"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[2rem] border border-amber-200/20" />
            </div>
          </div>
        </div>
      </section>

    {/* SERVICES */}
<Reveal>
  <section
    id="services"
    className="border-t border-white/10 px-6 py-24 sm:px-12"
  >
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        {/* LEFT */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
            Услуги
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Всё необходимое
            <br />
            для твоего образа.
          </h2>

          <p className="mt-6 max-w-md leading-7 text-zinc-400">
            Подберём форму, которая подходит именно тебе.
            Работаем внимательно и без лишней суеты.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <div className="border-t border-white/15">
            <Reveal>
              <ServiceLink
                service="Мужская стрижка"
                serviceValue="haircut"
                price="1 800 ₽"
                description="Классическая или современная форма"
              />
            </Reveal>

            <Reveal delay={150}>
              <ServiceLink
                service="Стрижка + борода"
                serviceValue="haircut-beard"
                price="2 500 ₽"
                description="Полный образ за один визит"
              />
            </Reveal>

            <Reveal delay={300}>
              <ServiceLink
                service="Оформление бороды"
                serviceValue="beard"
                price="1 200 ₽"
                description="Форма, контуры и уход"
              />
            </Reveal>

            <Reveal delay={450}>
              <ServiceLink
                service="Комплекс"
                serviceValue="complex"
                price="3 000 ₽"
                description="Стрижка + борода + уход"
              />
            </Reveal>
          </div>

          <a
            href="#booking"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            Записаться →
          </a>
        </div>
      </div>
    </div>
  </section>
</Reveal>
      

      {/* MASTERS */}
      <section
        id="masters"
        className="border-t border-white/10 px-6 py-24 sm:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
                Команда
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Люди, которые
                <br />
                создают стиль.
              </h2>

              <p className="mt-6 leading-7 text-zinc-400">
                Каждый мастер NOIR специализируется на своём направлении
                и внимательно относится к деталям.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {masters.map((master, index) => (
              <Reveal key={master.name} delay={index * 150}>
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-zinc-900">
                    <Image
                      src={master.image}
                      alt={master.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="mt-5">
                    <h3 className="text-xl font-semibold">
                      {master.name}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-500">
                      {master.specialty}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NOIR */}
      <section className="border-t border-white/10 px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
                Почему NOIR
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Не просто
                <br />
                стрижка.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-zinc-400">
                Мы создаём образ, который подходит именно тебе —
                от первой консультации до финального штриха.
              </p>
            </div>

            <div>
              <div className="border-t border-white/15">
                <div className="grid gap-4 border-b border-white/15 py-8 sm:grid-cols-[80px_1fr]">
                  <span className="text-sm text-amber-200/70">
                    01
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      Точность
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-zinc-400">
                      Внимание к форме, пропорциям и деталям.
                      Каждый элемент образа имеет значение.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 border-b border-white/15 py-8 sm:grid-cols-[80px_1fr]">
                  <span className="text-sm text-amber-200/70">
                    02
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      Опыт
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-zinc-400">
                      Мастера с собственным стилем и внимательным
                      подходом к каждому клиенту.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 border-b border-white/15 py-8 sm:grid-cols-[80px_1fr]">
                  <span className="text-sm text-amber-200/70">
                    03
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      Атмосфера
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-zinc-400">
                      Пространство, где можно расслабиться,
                      выпить кофе и спокойно провести время.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 border-b border-white/15 py-8 sm:grid-cols-[80px_1fr]">
                  <span className="text-sm text-amber-200/70">
                    04
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      Без спешки
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-zinc-400">
                      Работаем на качество и результат,
                      а не на количество клиентов за день.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="border-t border-white/10 px-6 py-24 sm:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
                  Галерея
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Детали говорят
                  <br />
                  сами за себя.
                </h2>
              </div>

              <p className="max-w-md leading-7 text-zinc-400 sm:text-right">
                Несколько примеров работ наших мастеров —
                от классических форм до современных fades.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="group overflow-hidden rounded-[2rem]">
                <div className="relative h-full min-h-[520px]">
                  <Image
                    src="/images/noir/work-1.jpg"
                    alt="Работа мастера NOIR"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 md:col-span-5">
              <Reveal delay={150}>
                <div className="group overflow-hidden rounded-[2rem]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/noir/work-2.jpg"
                      alt="Стрижка fade в NOIR"
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="group overflow-hidden rounded-[2rem]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/noir/work-3.jpg"
                      alt="Работа барбера NOIR"
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={450} className="md:col-span-12">
              <div className="group overflow-hidden rounded-[2rem]">
                <div className="relative aspect-[16/6]">
                  <Image
                    src="/images/noir/work-4.jpg"
                    alt="Работа мастера NOIR"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <Reveal>
      <section
        id="reviews"
        className="border-t border-white/10 px-6 py-24 sm:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
                Отзывы
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Нам важно,
                <br />
                что ты думаешь.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-zinc-400">
                Не верьте нам на слово. Вот что говорят клиенты
                после визита в NOIR.
              </p>
            </div>

            <div className="border-t border-white/15">
              <div className="border-b border-white/15 py-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-lg leading-8 text-zinc-200">
                      «Наконец-то нашёл место, где действительно понимают,
                      какую стрижку я хочу. Максим сразу предложил форму,
                      которая мне подошла.»
                    </p>

                    <div className="mt-6">
                      <p className="font-medium">Артём</p>

                      <p className="mt-1 text-sm text-zinc-500">
                        Стрижка + борода · 2 недели назад
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 text-sm tracking-[0.2em] text-amber-200/70">
                    ★★★★★
                  </span>
                </div>
              </div>

              <div className="border-b border-white/15 py-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-lg leading-8 text-zinc-200">
                      «Очень приятная атмосфера. Без лишней суеты,
                      мастер всё объяснил и сделал именно то, что хотелось.
                      Теперь хожу только сюда.»
                    </p>

                    <div className="mt-6">
                      <p className="font-medium">Дмитрий</p>

                      <p className="mt-1 text-sm text-zinc-500">
                        Мужская стрижка · 1 месяц назад
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 text-sm tracking-[0.2em] text-amber-200/70">
                    ★★★★★
                  </span>
                </div>
              </div>

              <div className="border-b border-white/15 py-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-lg leading-8 text-zinc-200">
                      «Отдельное спасибо за работу с бородой.
                      Получилось аккуратно и естественно. Плюс отличный
                      сервис и очень стильное место.»
                    </p>

                    <div className="mt-6">
                      <p className="font-medium">Илья</p>

                      <p className="mt-1 text-sm text-zinc-500">
                        Оформление бороды · 3 недели назад
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 text-sm tracking-[0.2em] text-amber-200/70">
                    ★★★★★
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* BOOKING */}
      <Reveal>
      <section
        id="booking"
        className="border-t border-white/10 px-6 py-24 sm:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
                Запись
              </p>

              <h2 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
                Готов к новому
                <br />
                образу?
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400">
                Оставь контакты — мы свяжемся с тобой и подберём
                удобное время для визита.
              </p>

              <div className="mt-12 space-y-6">
                <div>
                  <p className="text-sm text-zinc-500">Адрес</p>

                  <p className="mt-1">
                    Казань, ул. Баумана, 42
                  </p>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Часы работы
                  </p>

                  <p className="mt-1">
                    Ежедневно · 10:00 — 22:00
                  </p>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Связаться
                  </p>

                  <p className="mt-1">
                    Telegram · +7 (900) 123-45-67
                  </p>
                </div>
              </div>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>
      </Reveal>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 sm:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-bold tracking-[0.2em]">
              NOIR
            </p>

            <p className="mt-2 text-sm text-zinc-600">
              Barbershop · Kazan
            </p>
          </div>

          <div className="flex gap-6 text-sm text-zinc-500">
            <a
              href="#services"
              className="transition hover:text-white"
            >
              Услуги
            </a>

            <a
              href="#masters"
              className="transition hover:text-white"
            >
              Мастера
            </a>

            <a
              href="#gallery"
              className="transition hover:text-white"
            >
              Галерея
            </a>

            <a
              href="#booking"
              className="transition hover:text-white"
            >
              Запись
            </a>
          </div>

          <p className="text-sm text-zinc-600">
            © 2026 NOIR
          </p>
        </div>
      </footer>
    </main>
  );
}