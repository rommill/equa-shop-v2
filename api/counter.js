import { kv } from "@vercel/kv";

export default async function handler(request, response) {
  // Разрешаем CORS
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (request.method === "OPTIONS") {
    return response.status(200).end();
  }

  try {
    const views = await kv.incr("site_views");

    response.status(200).json({
      success: true,
      views,
    });
  } catch (error) {
    console.error("Counter error:", error);
    response.status(500).json({
      success: false,
      error: "Failed to update counter",
    });
  }
}
