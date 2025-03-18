import BulkSendGroup from "./BulkSendGroup";
import DataTableDonors from "./DataTableDonors";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next.js CRM Dashboard | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js CRM Dashboard page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
    // other metadata
};

const BulkSend: React.FC = () => {
    // クリック時の処理例
    const handleGroupClick = (groupName: string) => {
        alert(`${groupName} がクリックされました`);
        // 必要に応じてルーティングや処理を追加
    };

    return (
        <div className="p-6">
            {/* グループ用のボタンを2つ表示 */}
            <div className="space-y-2 mb-10">
                <BulkSendGroup
                    groupName="前回の寄付から1年以上経過した寄付者"
                    count={100}
                    onClick={() => handleGroupClick("前回の寄付から1年以上経過した寄付者")}
                />
                <BulkSendGroup
                    groupName="別のグループ"
                    count={50}
                    onClick={() => handleGroupClick("別のグループ")}
                />
            </div>

            {/* 既存のテーブル */}
            <DataTableDonors />
        </div>
    );
};

export default BulkSend;