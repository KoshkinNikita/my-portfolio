import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, service, comment } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Заполните обязательные поля" },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram environment variables are missing");

      return NextResponse.json(
        { error: "Ошибка конфигурации сервера" },
        { status: 500 }
      );
    }

    const serviceNames: Record<string, string> = {
      haircut: "Мужская стрижка",
      "haircut-beard": "Стрижка + борода",
      beard: "Оформление бороды",
      complex: "Комплекс",
    };

    const message = `
✂️ НОВАЯ ЗАЯВКА NOIR

👤 Имя: ${name}
📞 Телефон: ${phone}
💈 Услуга: ${serviceNames[service] || service}

💬 Комментарий:
${comment || "Без комментария"}
    `.trim();

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    if (!telegramResponse.ok) {
      const telegramError = await telegramResponse.text();

      console.error("Telegram API error:", telegramError);

      return NextResponse.json(
        { error: "Не удалось отправить заявку в Telegram" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Booking error:", error);

    return NextResponse.json(
      { error: "Ошибка сервера" },
      { status: 500 }
    );
  }
}