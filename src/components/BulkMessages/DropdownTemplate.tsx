"use client";
import React, { useState } from "react";

interface DropdownTemplateProps {
    templates: string[];
    onSelect: (template: string) => void;
    /** 先頭に表示するプレースホルダーのテキスト */
    placeholder?: string;
}

const DropdownTemplate: React.FC<DropdownTemplateProps> = ({
    templates,
    onSelect,
    // デフォルト値として "テンプレート" を設定
    placeholder = "テンプレート",
}) => {
    const [selectedTemplate, setSelectedTemplate] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedTemplate(value);
        onSelect(value);
    };

    return (
        <div className="relative inline-block text-left mt-2">
            {/* ▼ ボタン風の見た目にするためのクラスを付与 */}
            <select
                value={selectedTemplate}
                onChange={handleChange}
                className="
          appearance-none
          inline-flex
          items-center
          rounded-md
          border
          border-gray-300
          bg-white
          px-4
          py-2
          pr-8
          text-gray-700
          font-medium
          shadow-sm
          hover:bg-gray-50
          focus:outline-none
          focus:ring-1
          focus:ring-blue-500
          focus:border-blue-500
        "
            >
                {/* ▼ 先頭のオプションは disabled にして、選択不可かつグレーアウトさせる */}
                <option value="" disabled className="text-gray-400">
                    {placeholder}
                </option>

                {templates.map((template, index) => (
                    <option key={index} value={template}>
                        {template}
                    </option>
                ))}
            </select>

            {/* ▼ カスタム矢印アイコンを右側に重ねて表示 */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                    className="w-4 h-4 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 12l-3.5-3.5a1 1 0 011.414-1.414L10 9.172l2.086-2.086a1 1 0 011.414 1.414L10 12z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
};

export default DropdownTemplate;
