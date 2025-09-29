import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/index"
import * as schema from "../db/schema"
import { admin, openAPI } from "better-auth/plugins";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema
    }),
    emailAndPassword: { 
    enabled: true, 
    },
    plugins : [
        openAPI(),
        admin()
    ]
});