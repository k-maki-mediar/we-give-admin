import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DataTableDonation from "@/components/DonList/DataTableDonation";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title: "Next.js CRM Dashboard | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js CRM Dashboard page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
    // other metadata
};

const DonatiouListPage = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="寄付一覧" />
            <DataTableDonation />
        </DefaultLayout>
    );
};

export default DonatiouListPage;