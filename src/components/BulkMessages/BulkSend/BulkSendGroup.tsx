"use client";
import React from "react";

type GroupButtonProps = {
    /** グループ名（例: "前回の寄付から1年以上経過した寄付者"） */
    groupName: string;
    /** バッジに表示する数字（例: 100） */
    count: number;
    /** クリック時の処理（任意） */
    onClick?: () => void;
};

const BulkSendGroup: React.FC<GroupButtonProps> = ({ groupName, count, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-5 py-5 text-left hover:bg-gray-50"
        >
            <span className="font-medium">{groupName}</span>
            <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                {count}
            </span>
        </button>
    );
};

export default BulkSendGroup;