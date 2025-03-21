import React, { useState } from "react";

import SelectGroupDefault from "@/components/SelectGroup/SelectGroupDefault";
import CheckboxFlag from "@/components/Checkboxes/CheckboxFlag";
import ProjectSelect from "@/components/OrgSettings/ProjectSelect";

interface AddSendSettingsPopupProps {
    popupOpen: boolean;
    setPopupOpen: (open: boolean) => void;
}

const AddSendSettingsPopup: React.FC<AddSendSettingsPopupProps> = (props) => {

    const frequencyOptions = [
        { label: "3ヶ月に1回", value: "1" },
        { label: "半年に1回", value: "2" },
        { label: "1年に1回", value: "3" },
        { label: "2年に1回", value: "4" },
    ];

    // ここでは送信頻度用の onChange
    const handleFrequencyChange = (value: string) => {
        console.log("送信頻度が選択されました:", value);
    };

    // もう1つのドロップダウン例：例えば別のメニュー選択用
    const anotherMenuOptions = [
        { label: "テンプレート1", value: "A" },
        { label: "テンプレート2", value: "B" },
        { label: "テンプレート3", value: "C" },
    ];

    const handleAnotherMenuChange = (value: string) => {
        console.log("テンプレートが選択されました:", value);
    };

    const [checkboxStates, setCheckboxStates] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    });

    const handleCheckboxChange = (id: string, checked: boolean) => {
        setCheckboxStates((prev) => ({
            ...prev,
            [id]: checked,
        }));
        // DBへの登録など、チェック時の追加処理をここで実行
        console.log(`チェックボックス ${id} の状態:`, checked);
    };

    return (
        <div
            className={`fixed left-0 top-0 z-99999 flex h-screen w-full justify-center overflow-y-scroll bg-black/80 px-4 py-5 ${props.popupOpen === true ? "block" : "hidden"
                }`}
        >
            <div className="relative m-auto w-full max-w-180 rounded-sm border border-stroke bg-gray p-4 shadow-default dark:border-strokedark dark:bg-meta-4 sm:p-8 xl:p-10">
                <button
                    onClick={() => props.setPopupOpen(false)}
                    className="absolute right-1 top-1 sm:right-5 sm:top-5"
                >
                    <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.8913 9.99599L19.5043 2.38635C20.032 1.85888 20.032 1.02306 19.5043 0.495589C18.9768 -0.0317329 18.141 -0.0317329 17.6135 0.495589L10.0001 8.10559L2.38673 0.495589C1.85917 -0.0317329 1.02343 -0.0317329 0.495873 0.495589C-0.0318274 1.02306 -0.0318274 1.85888 0.495873 2.38635L8.10887 9.99599L0.495873 17.6056C-0.0318274 18.1331 -0.0318274 18.9689 0.495873 19.4964C0.717307 19.7177 1.05898 19.9001 1.4413 19.9001C1.75372 19.9001 2.13282 19.7971 2.40606 19.4771L10.0001 11.8864L17.6135 19.4964C17.8349 19.7177 18.1766 19.9001 18.5589 19.9001C18.8724 19.9001 19.2531 19.7964 19.5265 19.4737C20.0319 18.9452 20.0245 18.1256 19.5043 17.6056L11.8913 9.99599Z"
                            fill=""
                        />
                    </svg>
                </button>

                <form action="#">


                    <div className="flex flex-col gap-5.5 p-6.5">
                        <div>
                            <label className="mb-3 block text-medium font-medium text-black dark:text-white">
                                送信設定名
                            </label>
                            <input
                                type="text"
                                placeholder="送信設定名"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-white px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="flex flex-col gap-5.5 sm:flex-row">
                            {/* <SelectGroupAccountType /> */}
                            <SelectGroupDefault
                                label="テンプレート"
                                options={anotherMenuOptions}
                                onChange={handleAnotherMenuChange}
                                dropdownBgClass="bg-white"
                            />
                        </div>

                        <div className="flex flex-col gap-5.5 sm:flex-row">
                            {/* <SelectGroupAccountType /> */}
                            <SelectGroupDefault
                                label="送信頻度"
                                options={frequencyOptions}
                                onChange={handleFrequencyChange}
                                dropdownBgClass="bg-white"
                            />
                        </div>

                        <ProjectSelect id="multiSelect" />
                        <div className="mb-5.5">
                            <CheckboxFlag
                                id="checkbox1"
                                label="自動でメッセージを送信する"
                                isChecked={checkboxStates.checkbox1}
                                onChange={(checked) => handleCheckboxChange("checkbox1", checked)}
                            />
                        </div>
                    </div>
                    <button className="flex w-full items-center justify-center gap-2 rounded bg-primary px-4.5 py-2.5 font-medium text-white hover:bg-opacity-90">
                        登録する
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddSendSettingsPopup;
