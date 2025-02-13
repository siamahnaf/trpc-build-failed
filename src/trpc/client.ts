import { createTRPCReact } from "@trpc/react-query";

//App Router
import { AppRouter } from "@/server";

export const trpc = createTRPCReact<AppRouter>({});