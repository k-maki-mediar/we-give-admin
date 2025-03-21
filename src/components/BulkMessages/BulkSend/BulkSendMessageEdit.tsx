"use client"; // App Routerの場合に必要（Pages Routerの場合は不要です）
import React, { useState } from "react";
import DropdownTemplate from "../DropdownTemplate";



const BulkSendMessageEdit: React.FC = () => {
    // テキストエリアに入力されたメッセージを保持
    const [message, setMessage] = useState("");

    // テンプレートのリスト（必要に応じて動的に取得も可能）
    const templates = ["テンプレート1", "テンプレート2", "テンプレート3"];

    // テンプレートを選択したときにメッセージに反映
    const handleTemplateSelect = (template: string) => {
        // ここでは簡易的にテンプレートをメッセージに上書きする例
        setMessage(template + "の文面です。\nここにテンプレートの内容を入れます。");
    };

    const handleSendMessage = () => {
        // 「メッセージを送信する」ボタンが押されたときの処理
        // 例: API呼び出しなど
        alert("メッセージを送信しました:\n\n" + message);
    };

    return (

        <div className="data-table-common rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex w-full items-center justify-between border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="text-title-md2 font-semibold text-black dark:text-white">
                    メッセージ送信
                </h3>
                <span className="rounded-sm bg-gray px-2 py-2 text-m font-medium text-gray-700">
                    選択中:100
                </span>
            </div>
            <div className="mt-7 px-7 flex justify-end">
                <DropdownTemplate templates={templates} onSelect={handleTemplateSelect} placeholder="テンプレートを選択" />
            </div>
            <div className="p-7">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded border border-gray-300 p-2"
                    rows={6}
                ></textarea>
                <div className="flex justify-center">
                    <button
                        onClick={handleSendMessage}
                        className="mt-4 inline-flex items-center rounded bg-primary px-8 py-2 font-medium text-white hover:bg-opacity-90"
                    >
                        メッセージを送信
                    </button>
                </div>
            </div>

        </div>
    );
};

export default BulkSendMessageEdit;
