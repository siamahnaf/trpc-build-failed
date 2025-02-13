"use client"

import { trpc } from "@/trpc/client";

const ClientHM = () => {
    const { data } = trpc.wdgp.list.useQuery();

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default ClientHM;