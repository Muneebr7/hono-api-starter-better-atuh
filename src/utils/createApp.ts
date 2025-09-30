import { Hono } from "hono";
import notFound from "../middlewares/notFound";
import onError from "../middlewares/errorHandling";
import { auth } from "./auth";
import { cors } from "hono/cors";
import { logger } from "hono/logger";


export function createRouter() {
  return new Hono({
    strict: false,
  });
}

export default function createApp() {
  const app = createRouter();
  app.use(logger())

  app.use(
	"/api/auth/*",
	cors({
		origin: "http://localhost:5173", 
		allowHeaders: ["Content-Type", "Authorization"],
		allowMethods: ["POST", "GET", "OPTIONS"],
		exposeHeaders: ["Content-Length"],
		maxAge: 600,
		credentials: true,
	}),
);

  app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));
  app.notFound(notFound);
  app.onError(onError);
  return app;
}