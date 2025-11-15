// api/counter.js
export default async function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") {
    return response.status(200).end();
  }

  try {
    const ip =
      request.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      request.headers["x-real-ip"] ||
      request.connection?.remoteAddress ||
      "unknown";

    console.log("Visitor IP:", ip);

    const redisUrl = process.env.KV_REST_API_URL;
    const redisToken = process.env.KV_REST_API_TOKEN;

    if (!redisUrl) {
      const fallbackViews = Math.floor(Math.random() * 1000) + 100;
      return response.status(200).json({
        success: true,
        views: fallbackViews,
        type: "fallback",
      });
    }

    //  Redis
    const totalViewsKey = "site_unique_visitors";
    const ipKey = `visitor_ip:${ip}`;

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
      const incrResult = await fetch(`${redisUrl}/incr/${totalViewsKey}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${redisToken}`,
          "Content-Type": "application/json",
        },
      });

      const incrData = await incrResult.json();
      views = incrData.result;

      await fetch(`${redisUrl}/set/${ipKey}/1`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${redisToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ex: 86400,
        }),
      });

      console.log("New visitor counted:", ip, "Total:", views);
    } else {
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
      visitor: ip.substring(0, 8) + "...",
    });
  } catch (error) {
    console.error("Counter error:", error);

    const fallbackViews = Math.floor(Math.random() * 1000) + 100;
    response.status(200).json({
      success: true,
      views: fallbackViews,
      type: "error_fallback",
    });
  }
}
