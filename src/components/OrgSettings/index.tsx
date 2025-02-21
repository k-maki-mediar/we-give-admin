
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DonProSettings from "./DonProSettings";
import DonAccountSettings from "./DonAccountSettings";
import FinancialInfo from "./FinancialInfo";
import FundSettings from "./FundSettings";
import OrgType from "./OrgType";

const OrgSettings: React.FC = () => {
    const [openTab, setOpenTab] = useState(1);

    const activeClasses = "text-primary border-primary";
    const inactiveClasses = "border-transparent";

    return (

        <>
            <Breadcrumb pageName="設定" />
            <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="mb-6 flex flex-wrap gap-5 border-b border-stroke dark:border-strokedark sm:gap-10">
                    <Link
                        href="#"
                        className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${openTab === 1 ? activeClasses : inactiveClasses
                            }`}
                        onClick={() => setOpenTab(1)}
                    >
                        寄付受付
                    </Link>
                    <Link
                        href="#"
                        className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${openTab === 2 ? activeClasses : inactiveClasses
                            }`}
                        onClick={() => setOpenTab(2)}
                    >
                        寄付振込先口座
                    </Link>
                    <Link
                        href="#"
                        className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${openTab === 3 ? activeClasses : inactiveClasses
                            }`}
                        onClick={() => setOpenTab(3)}
                    >
                        団体運営資金情報
                    </Link>
                    <Link
                        href="#"
                        className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${openTab === 4 ? activeClasses : inactiveClasses
                            }`}
                        onClick={() => setOpenTab(4)}
                    >
                        寄付金管理
                    </Link>
                    <Link
                        href="#"
                        className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${openTab === 5 ? activeClasses : inactiveClasses
                            }`}
                        onClick={() => setOpenTab(5)}
                    >
                        団体属性
                    </Link>
                </div>

                <div>
                    <div
                        className={`leading-relaxed ${openTab === 1 ? "block" : "hidden"}`}
                    >
                        <DonProSettings />
                    </div>
                    <div
                        className={`leading-relaxed ${openTab === 2 ? "block" : "hidden"}`}
                    >
                        <DonAccountSettings />
                    </div>
                    <div
                        className={`leading-relaxed ${openTab === 3 ? "block" : "hidden"}`}
                    >
                        <FinancialInfo />
                    </div>
                    <div
                        className={`leading-relaxed ${openTab === 4 ? "block" : "hidden"}`}
                    >
                        <FundSettings />
                    </div>
                    <div
                        className={`leading-relaxed ${openTab === 5 ? "block" : "hidden"}`}
                    >
                        <OrgType />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrgSettings;

