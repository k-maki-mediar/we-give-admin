import BulkSendGroupButton from "./BulkSendGroupButton";
import DataTableDonors from "./DataTableDonors";
import { Metadata } from "next";
import { useRouter } from "next/navigation";


export const metadata: Metadata = {
    title: "Next.js CRM Dashboard | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js CRM Dashboard page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
    // other metadata
};

const BulkSend: React.FC = () => {

    const router = useRouter();

    const groupRouteMap: { [key: string]: string } = {
        "前回の寄付から1年以上経過した寄付者": "/messages/bulksendgroup",
        "別のグループ": "/anotherpath",
        "グループ3": "/group3path",
        // 必要に応じて追加
    };

    const handleGroupClick = (groupName: string) => {
        const path = groupRouteMap[groupName] || `/bulk-send/${encodeURIComponent(groupName)}`;
        router.push(path);
    };

    return (
        <div className="p-6">
            {/* グループ用のボタンを2つ表示 */}
            <div className="space-y-2 mb-10">
                <BulkSendGroupButton
                    groupName="前回の寄付から1年以上経過した寄付者"
                    count={100}
                    onClick={() => handleGroupClick("前回の寄付から1年以上経過した寄付者")}
                />
                <BulkSendGroupButton
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