import { procedure, router } from "../trpc/server";

export const phoneRouter = router({
    list: procedure.query(() => {
        return [{
            message: "from phone list"
        }]
    }),
});