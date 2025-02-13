import { router } from "./trpc/server";

//Routers
import { userRouter } from "./user/user.router";
import { phoneRouter } from "./phone/phone.router";

export const appRouter = router({
    users: userRouter,
    wdgp: phoneRouter,
});

export type AppRouter = typeof appRouter;