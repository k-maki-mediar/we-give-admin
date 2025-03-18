import React from "react";

interface BadgeProjectStatusProps {
    status: string;
}

const BadgeProjectStatus: React.FC<BadgeProjectStatusProps> = ({ status }) => {
    let classes = "";
    switch (status.toLowerCase()) {
        case "open":
            classes =
                "inline-flex rounded-full border border-[#3CA745] px-3 py-1 text-sm font-medium text-[#3CA745] hover:opacity-80";
            break;
        case "closed":
            classes =
                "inline-flex rounded-full border border-[#F9C107] px-3 py-1 text-sm font-medium text-[#F9C107] hover:opacity-80";
            break;
        case "pending":
            classes =
                "inline-flex rounded-full border border-[#F9C107] px-3 py-1 text-sm font-medium text-[#F9C107] hover:opacity-80";
            break;
        // 他のステータスの場合も必要に応じて分岐を追加
        default:
            classes =
                "inline-flex rounded-full border border-[#637381] px-3 py-1 text-sm font-medium text-[#637381] hover:opacity-80";
            break;
    }

    return <span className={classes}>{status}</span>;
};

export default BadgeProjectStatus;
