"use client";

import { FormEvent, useEffect, useState } from "react";

export default function BookingForm() {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    const handleServiceSelect = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setService(customEvent.detail);
    };

    window.addEventListener(
      "noir-service-select",
      handleServiceSelect
    );

    return () => {
      window.removeEventListener(
        "noir-service-select",
        handleServiceSelect
      );
    };
  }, []);

  const handleSubmit = async (
  event: FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  setError("");

  if (!name.trim()) {
    setError("Введите ваше имя");
    return;
  }

  if (!phone.trim()) {
    setError("Введите номер телефона");
    return;
  }

  if (!service) {
    setError("Выберите услугу");
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        service,
        comment,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "Не удалось отправить заявку"
      );
    }

    setIsSubmitted(true);

    setName("");
    setPhone("");
    setService("");
    setComment("");
  } catch (error) {
    console.error(error);

    setError(
      "Не удалось отправить заявку. Попробуйте ещё раз."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  if (isSubmitted) {
    return (
      <div className="flex min-h-[520px] items-center justify-center rounded-[2rem] border border-white/10 bg-zinc-950 p-8 text-center">
        <div>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-300/10 text-2xl text-amber-200">
            ✓
          </div>

          <h3 className="mt-6 text-2xl font-semibold">
            Заявка отправлена
          </h3>

          <p className="mx-auto mt-3 max-w-sm leading-7 text-zinc-400">
            Спасибо! Мы свяжемся с вами в ближайшее время
            и подтвердим запись.
          </p>

          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="mt-8 rounded-full border border-white/15 px-6 py-3 text-sm transition hover:border-white/30 hover:bg-white/5"
          >
            Оставить ещё одну заявку
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* NAME */}
        <div>
          <label
            htmlFor="booking-name"
            className="text-sm text-zinc-400"
          >
            Имя
          </label>

          <input
            id="booking-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Как к тебе обращаться?"
            className="mt-2 w-full border-b border-white/15 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-200"
          />
        </div>

        {/* PHONE */}
        <div>
          <label
            htmlFor="booking-phone"
            className="text-sm text-zinc-400"
          >
            Телефон
          </label>

          <input
            id="booking-phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="+7 (___) ___-__-__"
            className="mt-2 w-full border-b border-white/15 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-200"
          />
        </div>

        {/* SERVICE */}
        <div>
          <label
            htmlFor="booking-service"
            className="text-sm text-zinc-400"
          >
            Услуга
          </label>

          <select
            id="booking-service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="mt-2 w-full border-b border-white/15 bg-zinc-950 px-0 py-3 text-white outline-none transition focus:border-amber-200"
          >
            <option value="" disabled>
              Выберите услугу
            </option>

            <option value="haircut">
              Мужская стрижка
            </option>

            <option value="haircut-beard">
              Стрижка + борода
            </option>

            <option value="beard">
              Оформление бороды
            </option>

            <option value="complex">
              Комплекс
            </option>
          </select>
        </div>

        {/* COMMENT */}
        <div>
          <label
            htmlFor="booking-comment"
            className="text-sm text-zinc-400"
          >
            Комментарий
          </label>

          <textarea
            id="booking-comment"
            rows={3}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Например, удобное время для записи"
            className="mt-2 w-full resize-none border-b border-white/15 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-200"
          />
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-white px-7 py-4 font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Отправляем..." : "Записаться →"}
        </button>

        <p className="text-center text-xs leading-5 text-zinc-600">
          Нажимая кнопку, вы соглашаетесь на обработку
          персональных данных.
        </p>
      </form>
    </div>
  );
}