addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  if (url.pathname === "/paywall-check") {
    return new Response("content", { status: 200 });
  }
  if (url.pathname === "/generate-data") {
    return new Response("content", { status: 200 });
  }
  if (url.pathname === "/dashboard") {
    return new Response("<html><body><h1>Dashboard OK</h1></body></html>", { status: 200, headers: { "Content-Type": "text/html" } });
  }
  return new Response("Hello", { status: 200 })
}
