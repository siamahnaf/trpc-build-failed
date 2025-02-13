"use server";
import { signIn as authSignIn, signOut as authSignOut } from ".";


export interface LoginProps {
    email: string;
    password: string;
}

export const signIn = async ({ email, password }: LoginProps) => {
    try {
        await authSignIn("login", {
            email: email,
            password: password,
            redirect: false,
        });
        return { error: null }
    } catch {
        return { error: "Invalid email or password" }
    }
}

export const signOut = async () => {
    await authSignOut({ redirect: false });
}