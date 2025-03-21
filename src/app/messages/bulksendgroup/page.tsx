import React from "react";
import BackButton from "@/components/BackButton/BackButton";
import DataTableBulkSendGroup from "@/components/BulkMessages/BulkSend/DataTableBulkSendGroup";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title: "Next.js Messages | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js Messages page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
    // other metadata
};

const BulkMessagePage = () => {
    return (
        <DefaultLayout>
            <BackButton />
            <DataTableBulkSendGroup />
        </DefaultLayout>
    );
};

export default BulkMessagePage;