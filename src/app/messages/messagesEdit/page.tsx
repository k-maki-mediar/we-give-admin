import React from "react";
import BackButton from "@/components/BackButton/BackButton";
import BulkSendMessageEdit from "@/components/BulkMessages/BulkSend/BulkSendMessageEdit";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title: "Next.js Messages | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js Messages page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
    // other metadata
};

const EditMessagePage = () => {
    return (
        <DefaultLayout>
            <BackButton />
            <BulkSendMessageEdit />
        </DefaultLayout>
    );
};

export default EditMessagePage;