import { auth } from "../utils/auth";
import { createMiddleware } from 'hono/factory'

const authCheck = createMiddleware(async (c, next) => {

	
	const session = await auth.api.getSession({ headers: c.req.raw.headers });
	if (!session) {
		return c.json({ error: "You are not authorized" }, 401);
	}
	c.set("user", session.user);
	c.set("session", session.session);
	return next();
})

export default authCheck