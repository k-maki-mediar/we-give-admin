import React from "react";

interface BadgeDonStatusProps {
    status: string;
}

const BadgeDonStatus: React.FC<BadgeDonStatusProps> = ({ status }) => {
    let classes = "";
    switch (status.toLowerCase()) {
        case "full-time":
            classes =
                "inline-flex rounded-full border border-[#3CA745] px-3 py-1 text-sm font-medium text-[#3CA745] hover:opacity-80";
            break;
        case "part-time":
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

export default BadgeDonStatus;
