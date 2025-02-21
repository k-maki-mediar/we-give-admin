"use client";
import { useEffect, useRef, useState } from "react";
import AddAccountPopup from "./Popups/AddAccountPopup";
import SelectGroupAccountType from "../SelectGroup/SelectGroupAccountType";
import ProjectSelect from "./ProjectSelect";
import CheckboxIndirect from "../Checkboxes/CheckboxIndirect";

const DonAccountSettings = () => {
    // 各チェックボックスに独立した状態を持たせる
    const [isIndirectAccount1, setIsIndirectAccount1] = useState<boolean>(false);
    const [isIndirectAccount2, setIsIndirectAccount2] = useState<boolean>(false);

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
                    振込先口座追加
                </button>

                {/* <!-- ===== AddAccountPopup Start ===== --> */}
                <AddAccountPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
                {/* <!-- ===== AddAccountPopup End ===== --> */}
            </div>

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    {/* <!-- 登録口座　1 --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                口座1
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    銀行名
                                </label>
                                <input
                                    type="text"
                                    placeholder="銀行名"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-gray px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="flex flex-col gap-5.5 sm:flex-row">
                                <div className="w-full sm:w-1/2">
                                    <label
                                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                                        htmlFor="orgName"
                                    >
                                        支店名
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                            type="text"
                                            name="orgName"
                                            id="orgName"
                                            placeholder="支店名"
                                            defaultValue=""
                                        />
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2">
                                    <label
                                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                                        htmlFor="orgID"
                                    >
                                        支店コード
                                    </label>
                                    <input
                                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        type="text"
                                        name="orgID"
                                        id="orgID"
                                        placeholder="000"
                                        defaultValue=""
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-5.5 sm:flex-row">
                                <div className="w-full sm:w-1/2">
                                    <SelectGroupAccountType />
                                </div>

                                <div className="w-full sm:w-1/2">
                                    <label
                                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                                        htmlFor="orgID"
                                    >
                                        口座番号
                                    </label>
                                    <input
                                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        type="text"
                                        name="orgID"
                                        id="orgID"
                                        placeholder="0000000"
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    口座名義
                                </label>
                                <input
                                    type="text"
                                    placeholder="TARO YAMDA"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-gray px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                />
                            </div>
                            <ProjectSelect id="multiSelect" />
                            <div className="mb-5.5">
                                <CheckboxIndirect
                                    isChecked={isIndirectAccount1}
                                    onChange={setIsIndirectAccount1}
                                    id="indirectAccount1"
                                    label="間接費の振込先に指定する"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-9">
                    {/* <!-- 登録口座　2 --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                口座2
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    銀行名
                                </label>
                                <input
                                    type="text"
                                    placeholder="銀行名"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-gray px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="flex flex-col gap-5.5 sm:flex-row">
                                <div className="w-full sm:w-1/2">
                                    <label
                                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                                        htmlFor="orgName"
                                    >
                                        支店名
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                            type="text"
                                            name="orgName"
                                            id="orgName"
                                            placeholder="支店名"
                                            defaultValue=""
                                        />
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2">
                                    <label
                                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                                        htmlFor="orgID"
                                    >
                                        支店コード
                                    </label>
                                    <input
                                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        type="text"
                                        name="orgID"
                                        id="orgID"
                                        placeholder="000"
                                        defaultValue=""
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-5.5 sm:flex-row">
                                <div className="w-full sm:w-1/2">
                                    <SelectGroupAccountType />
                                </div>

                                <div className="w-full sm:w-1/2">
                                    <label
                                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                                        htmlFor="orgID"
                                    >
                                        口座番号
                                    </label>
                                    <input
                                        className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        type="text"
                                        name="orgID"
                                        id="orgID"
                                        placeholder="0000000"
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    口座名義
                                </label>
                                <input
                                    type="text"
                                    placeholder="TARO YAMDA"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-gray px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                />
                            </div>
                            <ProjectSelect id="multiSelect" />
                            <div className="mb-5.5">
                                <CheckboxIndirect
                                    isChecked={isIndirectAccount2}
                                    onChange={setIsIndirectAccount2}
                                    id="indirectAccount2"
                                    label="間接費の振込先に指定する"
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

export default DonAccountSettings;
