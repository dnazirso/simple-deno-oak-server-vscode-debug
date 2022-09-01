import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const html = new Router();

html.get("/", (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
});

export default html;
