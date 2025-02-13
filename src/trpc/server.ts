import "server-only";
import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { cache } from "react";
import { auth } from "@/auth";

//Query Client
import { makeQueryClient } from "./query-client";

//App router
import { appRouter } from "@/server";
import { createCallerFactory } from "@/server/trpc/server";

import { Context } from "@/server/trpc/context";

const createContext = cache(async (): Promise<Context> => {
    return {
        session: await auth(),
    };
});

export const getQueryClient = cache(makeQueryClient);
const caller = createCallerFactory(appRouter)(createContext);

export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
    caller,
    getQueryClient,
);