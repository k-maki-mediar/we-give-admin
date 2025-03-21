"use client";
import React, { useState } from "react";


const AddTemplate: React.FC = () => {
    // テキストエリアに入力されたメッセージを保持
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        // 「メッセージを送信する」ボタンが押されたときの処理
        // 例: API呼び出しなど
        alert("テンプレートを登録しました:\n\n" + message);
    };

    return (

        <div className="data-table-common rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex w-full items-center justify-between border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="text-title-md2 font-semibold text-black dark:text-white">
                    メッセージテンプレート
                </h3>
            </div>
            <div className="w-full mt-8 items-center px-7 py-0 dark:border-strokedark">
                <label className="mb-3 block text-medium font-medium text-black dark:text-white">
                    テンプレート名
                </label>
                <input
                    type="text"
                    placeholder="テンプレート名"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-white px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                />
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
                        テンプレートを登録する
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AddTemplate;