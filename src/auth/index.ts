import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import { cache } from "react";

export const { handlers, auth: uncachedAuth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            id: "login",
            name: "login",
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                console.log(credentials);
                return {
                    id: "1",
                    email: "info@wedogreetings.co.uk",
                    role: "admin"
                }
            }
        })
    ],
    callbacks: {
        session: async ({ token, session }) => {
            session.user.id = token.sub;
            session.user.role = token.role;
            return session;
        },
        jwt: async ({ token, user }) => {
            if (user) token.role = user.role || "USER";
            return token;
        }
    }
})

export const auth = cache(uncachedAuth);