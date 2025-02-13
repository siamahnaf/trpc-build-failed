import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
            email: string;
            role: string;
        };
    }
    interface User extends DefaultUser {
        role: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        sub: string;
        email: string;
        role: string;
    }
}