import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import MemberList from "@/components/OrgMember";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title: "Next.js CRM Dashboard | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js CRM Dashboard page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
    // other metadata
};

const CrmPage = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="メンバー管理" />
            <MemberList />
        </DefaultLayout>
    );
};

export default CrmPage;
