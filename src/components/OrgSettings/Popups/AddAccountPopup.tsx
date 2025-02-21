import React, { useState } from "react";

import SelectGroupAccountType from "@/components/SelectGroup/SelectGroupAccountType";
import ProjectSelect from "../ProjectSelect";
import CheckboxIndirect from "@/components/Checkboxes/CheckboxIndirect";
import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";

interface AddAccountPopupProps {
    popupOpen: boolean;
    setPopupOpen: (open: boolean) => void;
}

const AddAccountPopup: React.FC<AddAccountPopupProps> = (props) => {
    const [files, setFiles] = useState<FileList | null>(null);
    const [isIndirectChecked, setIsIndirectChecked] = useState(false);

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
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                銀行名
                            </label>
                            <input
                                type="text"
                                placeholder="銀行名"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-white px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
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
                                        className="w-full rounded border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
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
                                    className="w-full rounded border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
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
                                <SelectGroupAccountType bgColor="bg-white" />
                            </div>

                            <div className="w-full sm:w-1/2">
                                <label
                                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                                    htmlFor="orgID"
                                >
                                    口座番号
                                </label>
                                <input
                                    className="w-full rounded border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
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
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-white px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <ProjectSelect
                            id="multiSelect"
                        />
                        <div className="mb-5.5">
                            <CheckboxIndirect
                                isChecked={isIndirectChecked}
                                onChange={setIsIndirectChecked}
                                id="popupIndirectAccount"
                                label="間接費の振込先に指定する"
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

export default AddAccountPopup;
