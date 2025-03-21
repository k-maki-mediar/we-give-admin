import React from "react";
import BackButton from "@/components/BackButton/BackButton";
import EditTemplate from "@/components/BulkMessages/BulkMessagesTemplate/EditTemplate";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title: "Next.js Messages | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js Messages page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
    // other metadata
};

const EditTemplatePage = () => {
    return (
        <DefaultLayout>
            <BackButton />
            <EditTemplate />
        </DefaultLayout>
    );
};

export default EditTemplatePage;