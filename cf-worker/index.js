const LOG_URL = "https://meowing-api.chu.mk/httprequests";
const PUBLIC_URL = "https://meowingdalmatian.chu.mk/public/";

async function postLog(data) {
    return fetch(LOG_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
}

async function handleRequest(event) {
  const request = event.request;
  const public = request.url.startsWith(PUBLIC_URL);
  const userAgent = request.headers.get("User-Agent") || "";

  if (!userAgent.includes("Valve/Steam HTTP Client") && !public) {
    return new Response("Invalid Request", { status: 403 });
  }

  let url;
  if (public) {
    // Always add ?dl=1 to the end of the url and remove all other parameters
    let newRequestUrl = request.url.replace(
      PUBLIC_URL,
      "https://www.dropbox.com/s/"
    );
    newRequestUrl = newRequestUrl.split("?")[0] += "?dl=1";
    url = newRequestUrl;
  } else {
    url = request;
  }


  let response = await fetch(url, {
    ...request.headers,
    cf: {
      cacheTtl: 2628000,
      cacheEverything: true,
    },
  });

  // Reconstruct the Response object to make its headers mutable.
  response = new Response(response.body, response);
  //Set cache control headers to cache on browser for 25 minutes
  response.headers.set("Cache-Control", "max-age=2628000");

  // Try logging request if from gmod
  if (userAgent.includes("Valve/Steam HTTP Client")) {
    try {
      let loggableRequest = JSON.parse(JSON.stringify(request));
      const headerMap = [...request.headers];

      // Make request with headers as mapped entities
      const requestWithHeaderMap = loggableRequest;
      requestWithHeaderMap.headers = headerMap;

      // Log approximate size of request
      loggableRequest.contentLength = response.headers.get("content-length");

      // Send log for ASP .NET client
      event.waitUntil(postLog(requestWithHeaderMap));
    } catch (e) {
      console.log("Logging error");
      console.log(e);
    }
  }


  return response;
}

addEventListener("fetch", (event) => {
  return event.respondWith(handleRequest(event));
});
