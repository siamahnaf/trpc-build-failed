import { procedure, router } from "../trpc/server";

export const userRouter = router({
    getUser: procedure.query(() => {
        return {
            message: "Users Details"
        }
    }),
});