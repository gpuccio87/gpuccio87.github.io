// Riceve il codice da GitHub, lo scambia con un token e lo consegna a Decap CMS
// con il protocollo postMessage che il CMS si aspetta.
export async function onRequestGet(context) {
  const { env, request } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookieState = (request.headers.get("Cookie") || "").match(/decap_oauth_state=([^;]+)/)?.[1];

  let payload;
  if (!code || !state || state !== cookieState) {
    payload = { error: "Stato della richiesta non valido, riprova il login." };
  } else {
    const res = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", "User-Agent": "decap-cms-oauth" },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: `${url.origin}/api/callback`,
      }),
    });
    const data = await res.json();
    payload = data.access_token ? { token: data.access_token, provider: "github" } : { error: data.error_description || data.error || "Login fallito" };
  }

  const status = payload.error ? "error" : "success";
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>Login</title></head><body>
<p>${payload.error ? "Errore: " + payload.error : "Login riuscito, puoi chiudere questa finestra."}</p>
<script>
  (function () {
    function receive(e) {
      window.opener.postMessage(${JSON.stringify(message)}, e.origin);
      window.removeEventListener("message", receive, false);
    }
    window.addEventListener("message", receive, false);
    window.opener.postMessage("authorizing:github", "*");
  })();
</script></body></html>`;
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8", "Set-Cookie": "decap_oauth_state=; Path=/api; Max-Age=0" },
  });
}
