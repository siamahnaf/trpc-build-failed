import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

//App Router
import { appRouter } from "@/server";
import { createContext } from "@/server/trpc/context";

const handler = (req: Request) => {
    return fetchRequestHandler({
        endpoint: "/api/trpc",
        router: appRouter,
        req,
        createContext
    });
};

export { handler as GET, handler as POST };