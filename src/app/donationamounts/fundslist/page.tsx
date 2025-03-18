import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DataTableFunds from "@/components/DonationFundsList/DataTableFunds";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title:
        "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
    description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="寄付一覧" />
                <DataTableFunds />
            </DefaultLayout>
        </>
    );
}