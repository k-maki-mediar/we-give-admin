import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DonID from "@/components/DonID/DonID";
import BackButton from "@/components/BackButton/BackButton";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title: "Next.js CRM Dashboard | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js CRM Dashboard page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
    // other metadata
};

const DonatiouIDPage = () => {
    return (
        <DefaultLayout>
            <BackButton />
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                {/* <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
                    <h3 className="font-medium text-black dark:text-white">寄付詳細</h3>
                </div> */}

                <div className="p-4 sm:p-6 xl:p-9">
                    <DonID />
                </div>
            </div>
        </DefaultLayout>
    );
};

export default DonatiouIDPage;