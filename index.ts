import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import html from "./html.ts";

const app = new Application();

app.use(html.routes());

await app.listen({ port: 8080 });
