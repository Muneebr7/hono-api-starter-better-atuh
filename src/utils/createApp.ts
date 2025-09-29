import { Hono } from "hono";
import notFound from "../middlewares/notFound";
import onError from "../middlewares/errorHandling";
import { auth } from "./auth";


export function createRouter() {
  return new Hono({
    strict: false,
  });
}

export default function createApp() {
  const app = createRouter();

  app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));
  app.notFound(notFound);
  app.onError(onError);
  return app;
}