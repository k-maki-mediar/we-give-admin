"use client";
import { useState } from "react";
import CheckboxOrgType from "./CheckboxOrgtype";

const OrgType = () => {
    const [selectedType, setSelectedType] = useState<string>('type3');

    const orgTypes = [
        {
            id: 'type1',
            label: '寄付総額優先',
            description: '「できるだけ多くの寄付を集める」ことを重視し、寄付の金額設定を高めに誘導する仕様になります。'
        },
        {
            id: 'type2',
            label: '寄付の自由度優先',
            description: '寄付者が自由に金額や方法を選択できることを重視し、寄付フォームの選択肢を広げます。'
        },
        {
            id: 'type3',
            label: 'バランス',
            description: '「寄付総額」と「寄付者の自由度」の両方を考慮し、最適な設定を自動適用します。'
        }
    ];

    return (
        <>
            <div className="grid grid-cols-1 gap-9">
                <div className="flex flex-col gap-5">
                    <div>
                        <label
                            className="mb-3 block text-sm font-medium dark:text-white"
                            htmlFor="orgNum"
                        >
                            寄付の受付に関する方針を設定します。選択した内容に応じて、寄付フォームのスクリプトが調整されます。<br />
                            ※どの設定を選択するか迷った場合は、バランス型を推奨します。
                        </label>
                    </div>

                    <div className="mb-4">
                        <div className="flex flex-col gap-5">
                            {orgTypes.map((type) => (
                                <CheckboxOrgType
                                    key={type.id}
                                    id={type.id}
                                    label={
                                        <div className="flex flex-col">
                                            <span className="font-medium text-black dark:text-white">
                                                {type.label}
                                            </span>
                                            <span className="mt-1 text-sm text-black/60 dark:text-white/60">
                                                {type.description}
                                            </span>
                                        </div>
                                    }
                                    isSelected={selectedType === type.id}
                                    onSelect={() => setSelectedType(type.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4.5 pt-8">
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
        </>
    );
};

export default OrgType;
