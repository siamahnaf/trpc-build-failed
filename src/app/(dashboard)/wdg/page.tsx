import ClientHM from "@/components/ClientHM";

import { trpc, HydrateClient } from "@/trpc/server";

const Page = async () => {
    await trpc.wdgp.list.prefetch();
    return (
        <HydrateClient>
            <ClientHM />
        </HydrateClient>
    );
};

export default Page;