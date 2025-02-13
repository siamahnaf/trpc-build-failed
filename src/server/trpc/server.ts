import { initTRPC, TRPCError } from "@trpc/server";

//Context
import { Context } from "./context";

//Initialize TRPC
const t = initTRPC.context<Context>().create();

//Router
export const router = t.router;

//Procedure
export const procedure = t.procedure.use((opts) => {
    const { session } = opts.ctx;
    if (!session?.user) {
        throw new TRPCError({
            code: "UNAUTHORIZED"
        })
    }
    return opts.next({ ctx: { session } });
})

export const createCallerFactory = t.createCallerFactory;


