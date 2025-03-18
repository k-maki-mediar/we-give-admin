import React from "react";
import BulkMessages from "@/components/BulkMessages";

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
            <BulkMessages />
        </DefaultLayout>
    );
};

export default BulkMessagePage;