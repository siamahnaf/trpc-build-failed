import { auth } from "@/auth";

export const createContext = async () => {
    const session = await auth();
    return {
        session
    }
}

export type Context = Awaited<ReturnType<typeof createContext>>;