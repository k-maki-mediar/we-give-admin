import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DonationDashboard from "@/components/DonationDashboard/DonationDashboard";
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
                <DonationDashboard />
            </DefaultLayout>
        </>
    );
}