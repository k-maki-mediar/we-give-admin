"use client";
import { useEffect, useRef, useState } from "react";
import AddSendSettingsPopup from "./AddSendSettings";
import SelectGroupDefault from "@/components/SelectGroup/SelectGroupDefault";
import ProjectSelect from "@/components/OrgSettings/ProjectSelect";
import CheckboxFlag from "@/components/Checkboxes/CheckboxFlag";

const BulkSendSettings = () => {


    const [popupOpen, setPopupOpen] = useState(false);

    const trigger = useRef<any>(null);
    const popup = useRef<any>(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!popup.current) return;
            if (
                !popupOpen ||
                popup.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setPopupOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!popupOpen || keyCode !== 27) return;
            setPopupOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

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
        <>
            <div className="flex justify-end mb-5.5">
                <button
                    ref={trigger}
                    onClick={() => setPopupOpen(!popupOpen)}
                    className="flex items-center gap-2 rounded bg-primary px-4.5 py-2 font-medium text-white hover:bg-opacity-80"
                >
                    <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_60_9740)">
                            <path
                                d="M18.75 9.3125H10.7187V1.25C10.7187 0.875 10.4062 0.53125 10 0.53125C9.625 0.53125 9.28125 0.84375 9.28125 1.25V9.3125H1.25C0.875 9.3125 0.53125 9.625 0.53125 10.0312C0.53125 10.4062 0.84375 10.75 1.25 10.75H9.3125V18.75C9.3125 19.125 9.625 19.4687 10.0312 19.4687C10.4062 19.4687 10.75 19.1562 10.75 18.75V10.7187H18.75C19.125 10.7187 19.4687 10.4062 19.4687 10C19.4687 9.625 19.125 9.3125 18.75 9.3125Z"
                                fill=""
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_60_9740">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    送信設定追加
                </button>

                {/* <!-- ===== AddAccountPopup Start ===== --> */}
                <AddSendSettingsPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
                {/* <!-- ===== AddAccountPopup End ===== --> */}
            </div>

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    {/* <!-- 登録口座　1 --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label className="mb-3 block text-medium font-medium text-black dark:text-white">
                                    送信設定名
                                </label>
                                <input
                                    type="text"
                                    placeholder="送信設定名"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-gray px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="flex flex-col gap-5.5 sm:flex-row">
                                {/* <SelectGroupAccountType /> */}
                                <SelectGroupDefault
                                    label="テンプレート"
                                    options={anotherMenuOptions}
                                    onChange={handleAnotherMenuChange}
                                />
                            </div>

                            <div className="flex flex-col gap-5.5 sm:flex-row">
                                {/* <SelectGroupAccountType /> */}
                                <SelectGroupDefault
                                    label="送信頻度"
                                    options={frequencyOptions}
                                    onChange={handleFrequencyChange}
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
                    </div>
                </div>

                <div className="flex flex-col gap-9">
                    {/* <!-- 登録口座　2 --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label className="mb-3 block text-medium font-medium text-black dark:text-white">
                                    送信設定名
                                </label>
                                <input
                                    type="text"
                                    placeholder="送信設定名"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-gray px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="flex flex-col gap-5.5 sm:flex-row">
                                {/* <SelectGroupAccountType /> */}
                                <SelectGroupDefault
                                    label="送信頻度"
                                    options={anotherMenuOptions}
                                    onChange={handleAnotherMenuChange}
                                />
                            </div>

                            <div className="flex flex-col gap-5.5 sm:flex-row">
                                {/* <SelectGroupAccountType /> */}
                                <SelectGroupDefault
                                    label="送信頻度"
                                    options={frequencyOptions}
                                    onChange={handleFrequencyChange}
                                />
                            </div>

                            <ProjectSelect id="multiSelect" />
                            <div className="mb-5.5">
                                <CheckboxFlag
                                    id="checkbox2"
                                    label="自動でメッセージを送信する"
                                    isChecked={checkboxStates.checkbox2}
                                    onChange={(checked) => handleCheckboxChange("checkbox2", checked)}
                                />
                            </div>
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

export default BulkSendSettings;
