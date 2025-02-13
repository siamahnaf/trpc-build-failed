import { ReactNode } from "react";
import { trpc, HydrateClient } from "@/trpc/server";

const Layout = async ({ children }: { children: ReactNode }) => {
    await trpc.users.getUser.prefetch();
    return (
        <HydrateClient>
            <div>
                {children}
            </div>
        </HydrateClient>
    );
};

export default Layout;