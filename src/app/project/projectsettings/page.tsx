import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ProjectSetteings from "@/components/ProjectSettings/ProjectSettings";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title: "Next.js CRM Dashboard | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js CRM Dashboard page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
    // other metadata
};

const ProjectSettingsPage = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="プロジェクト設定" />
            <ProjectSetteings />
        </DefaultLayout>
    );
};

export default ProjectSettingsPage;