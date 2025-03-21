
"use client";
import React, { useState } from "react";
import Link from "next/link";
import BulkSend from "./BulkSend/BulkSend";
import DataTableBulkSendHistory from "./BulkSendHistory/DataTableBulkSendHistory";
import BulkSendSettings from "./BulkSendSettings/BulkSendSettings";
import DataTableTemplate from "./BulkMessagesTemplate/DataTableTemplate";


const BulkMessages: React.FC = () => {
    const [openTab, setOpenTab] = useState(1);

    const activeClasses = "text-primary border-primary";
    const inactiveClasses = "border-transparent";

    return (

        <>
            <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="mb-6 flex flex-wrap gap-5 border-b border-stroke dark:border-strokedark sm:gap-10">
                    <Link
                        href="#"
                        className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${openTab === 1 ? activeClasses : inactiveClasses
                            }`}
                        onClick={() => setOpenTab(1)}
                    >
                        メッセージ一括送信
                    </Link>
                    <Link
                        href="#"
                        className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${openTab === 2 ? activeClasses : inactiveClasses
                            }`}
                        onClick={() => setOpenTab(2)}
                    >
                        一括送信履歴
                    </Link>
                    <Link
                        href="#"
                        className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${openTab === 3 ? activeClasses : inactiveClasses
                            }`}
                        onClick={() => setOpenTab(3)}
                    >
                        送信設定
                    </Link>
                    <Link
                        href="#"
                        className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${openTab === 4 ? activeClasses : inactiveClasses
                            }`}
                        onClick={() => setOpenTab(4)}
                    >
                        メッセージテンプレート
                    </Link>

                </div>

                <div>
                    <div
                        className={`leading-relaxed ${openTab === 1 ? "block" : "hidden"}`}
                    >
                        <BulkSend />
                    </div>
                    <div
                        className={`leading-relaxed ${openTab === 2 ? "block" : "hidden"}`}
                    >
                        <DataTableBulkSendHistory />
                    </div>
                    <div
                        className={`leading-relaxed ${openTab === 3 ? "block" : "hidden"}`}
                    >
                        <BulkSendSettings />
                    </div>
                    <div
                        className={`leading-relaxed ${openTab === 4 ? "block" : "hidden"}`}
                    >
                        <DataTableTemplate />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BulkMessages;

