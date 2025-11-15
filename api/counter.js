// api/counter.js - ПРОСТАЯ РАБОЧАЯ ВЕРСИЯ
let views = 0;

export default async function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (request.method === "OPTIONS") {
    return response.status(200).end();
  }

  try {
    views += 1;
    console.log("Current views:", views);

    response.status(200).json({
      success: true,
      views,
    });
  } catch (error) {
    console.error("Counter error:", error);
    response.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
