import BackButton from "@/components/BackButton/BackButton";
import ProjectID from "@/components/ProjectID/ProjectID";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title: "Next.js CRM Dashboard | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js CRM Dashboard page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
    // other metadata
};

const ProjectListPage = () => {
    return (
        <DefaultLayout>
            <BackButton />
            <ProjectID />
        </DefaultLayout>
    );
};

export default ProjectListPage;