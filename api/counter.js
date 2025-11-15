// api/counter.js
export default async function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") {
    return response.status(200).end();
  }

  try {
    // Получаем IP посетителя
    const ip =
      request.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      request.headers["x-real-ip"] ||
      request.connection?.remoteAddress ||
      "unknown";

    console.log("Visitor IP:", ip);

    const redisUrl = process.env.REDIS_URL;
    const redisToken = process.env.REDIS_TOKEN;

    if (!redisUrl) {
      // Fallback - случайные данные для разработки
      const fallbackViews = Math.floor(Math.random() * 1000) + 100;
      return response.status(200).json({
        success: true,
        views: fallbackViews,
        type: "fallback",
      });
    }

    // Ключи для Redis
    const totalViewsKey = "site_unique_visitors";
    const ipKey = `visitor_ip:${ip}`;

    // Проверяем был ли уже этот IP сегодня
    const checkResult = await fetch(`${redisUrl}/get/${ipKey}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${redisToken}`,
        "Content-Type": "application/json",
      },
    });

    const checkData = await checkResult.json();
    const alreadyCounted = checkData.result !== null;

    let views;

    if (!alreadyCounted) {
      // НОВЫЙ посетитель - увеличиваем счётчик
      const incrResult = await fetch(`${redisUrl}/incr/${totalViewsKey}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${redisToken}`,
          "Content-Type": "application/json",
        },
      });

      const incrData = await incrResult.json();
      views = incrData.result;

      // Сохраняем IP на 24 часа (чтобы не считать повторно сегодня)
      await fetch(`${redisUrl}/set/${ipKey}/1`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${redisToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ex: 86400, // 24 часа в секундах
        }),
      });

      console.log("New visitor counted:", ip, "Total:", views);
    } else {
      // ПОВТОРНЫЙ посетитель - просто получаем текущее значение
      const getResult = await fetch(`${redisUrl}/get/${totalViewsKey}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${redisToken}`,
          "Content-Type": "application/json",
        },
      });

      const getData = await getResult.json();
      views = parseInt(getData.result) || 1;

      console.log("Returning visitor:", ip, "Total:", views);
    }

    response.status(200).json({
      success: true,
      views,
      unique: true,
      visitor: ip.substring(0, 8) + "...", // Частичный IP для логов
    });
  } catch (error) {
    console.error("Counter error:", error);
    // Fallback на случай ошибки
    const fallbackViews = Math.floor(Math.random() * 1000) + 100;
    response.status(200).json({
      success: true,
      views: fallbackViews,
      type: "error_fallback",
    });
  }
}
