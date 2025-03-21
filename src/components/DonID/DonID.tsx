"use client";
import React, { useState } from "react";
import Link from "next/link";
import DividePopup from "./Popups/DividePopup";
// DropdownDefault の代わりに DropdownProStatus をインポート
import DropdownProStatus from "../ProjectStatus/DropdownsProStatus";
import DropdownDevideInfo from "./DropdownsDevideInfo";

interface Product {
    project: string;
    date: string;
    staff: string;
}

const productList: Product[] = [
    {
        project: "Techno",
        date: "2025/3/6",
        staff: "山田太郎",

    },
    {
        project: "Techno",
        date: "2025/3/6",
        staff: "山田太郎",

    },
    {
        project: "Techno",
        date: "2025/3/6",
        staff: "山田太郎",

    },
    {
        project: "Techno",
        date: "2025/3/6",
        staff: "山田太郎",

    },
    {
        project: "Techno",
        date: "2025/3/6",
        staff: "山田太郎",

    },

];

const DonID: React.FC = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    // DropdownProStatus用の状態管理
    const [projectStatus, setProjectStatus] = useState("Open");
    const statuses = ["送金エラー", "送金済み", "入金待ち", "振込先未通知"];

    return (
        <div>
            <div className="mb-10 flex flex-wrap items-center justify-end gap-3.5">
                <DropdownProStatus
                    statuses={statuses}
                    currentStatus={projectStatus}
                    onChangeStatus={(newStatus) => setProjectStatus(newStatus)}
                />
            </div>

            <div className="flex flex-wrap justify-flex gap-40">
                <div>
                    <p className="mb-1.5 font-medium text-black dark:text-white">
                        寄付者情報:
                    </p>
                    <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                        山田 太郎
                    </h4>
                    <Link href="#" className="block">
                        <span className="font-medium text-black dark:text-white">
                            メールアドレス:{" "}
                        </span>
                        contact@example.com
                    </Link>
                    <span className="mt-1.5 block">
                        <span className="font-medium text-black dark:text-white">
                            住所:{" "}
                        </span>
                        2972 Westheimer Rd. Santa Ana.
                    </span>
                </div>

                <div>
                    <p className="mb-1.5 font-medium text-black dark:text-white">
                        寄付情報:
                    </p>
                    <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                        寄付金額:{" "}
                        2,000,000円
                    </h4>
                    <Link href="#" className="block">
                        <span className="font-medium text-black dark:text-white">
                            希望寄付先:{" "}
                        </span>
                        contact@example.com
                    </Link>
                    <span className="mt-1.5 block">
                        <span className="font-medium text-black dark:text-white">
                            寄付申込日時:{" "}
                        </span>
                        New York, USA 2707 Davis Anenue
                    </span>
                </div>
            </div>

            <div className="my-7.5 grid grid-cols-1 border border-stroke dark:border-strokedark xsm:grid-cols-2 sm:grid-cols-1">
                {/* 1行目 */}
                <div className="flex items-center justify-between px-5 py-6 border-b border-stroke dark:border-strokedark">
                    <div>
                        <h5 className="mb-1.5 font-bold text-black dark:text-white">
                            プロジェクトA
                        </h5>
                    </div>
                    <span className="text-sm font-medium text-black dark:text-white">
                        1,000,000円
                    </span>
                </div>

                {/* 2行目 */}
                <div className="flex items-center justify-between px-5 py-6 border-b border-stroke dark:border-strokedark last:border-b-0">
                    <div>
                        <h5 className="mb-1.5 font-bold text-black dark:text-white">
                            間接費
                        </h5>
                    </div>
                    <span className="text-sm font-medium text-black dark:text-white">
                        1,000,000円
                    </span>
                </div>
            </div>

            <div className="p-4 md:p-6 xl:p-0 flex justify-end mb-20">
                <button
                    onClick={() => setPopupOpen(true)}
                    className="inline-flex items-center justify-center rounded-md border border-primary px-10 py-4 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                    寄付の振り分け先を変更する
                </button>
            </div>

            {popupOpen && (
                <DividePopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
            )}
            <div className="border border-stroke dark:border-strokedark mb-10">
                <div className="max-w-full overflow-x-auto">
                    {/* 最低幅を確保したい場合は、min-w を指定 */}
                    <div className="min-w-[600px]">
                        {/* ▼ ヘッダー行 ▼ */}
                        <div className="grid grid-cols-4 border-b border-stroke py-3.5 dark:border-strokedark">
                            {/* 1列目：寄付先 */}
                            <div className="px-5 font-medium text-black dark:text-white">寄付先</div>
                            {/* 2列目：変更日時 */}
                            <div className="px-5 font-medium text-black dark:text-white">変更日時</div>
                            {/* 3列目：変更者 */}
                            <div className="px-5 font-medium text-black dark:text-white">変更者</div>
                            {/* 4列目：ドロップダウン用(空ヘッダー) */}
                            <div className="px-5" />
                        </div>

                        {/* ▼ データ行 ▼ */}
                        {productList.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-4 border-b border-stroke py-6 dark:border-strokedark"
                            >
                                {/* 1列目：寄付先 */}
                                <div className="px-5 dark:text-white">
                                    {item.project}
                                </div>
                                {/* 2列目：変更日時 */}
                                <div className="px-5 dark:text-white">
                                    {item.date}
                                </div>
                                {/* 3列目：変更者 */}
                                <div className="px-5 dark:text-white">
                                    {item.staff}
                                </div>
                                {/* 4列目：ドロップダウンボタンを右寄せ */}
                                <div className="px-5 flex justify-end">
                                    <DropdownDevideInfo />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="flex justify-end gap-4.5">
                <button
                    className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                    type="submit"
                >
                    キャンセル
                </button>
                <button
                    className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                    type="submit"
                >
                    保存
                </button>
            </div>
        </div>
    );
};

export default DonID;
