import React, { useState } from "react";
import ProjectSelectDropdown from "./ProjectSelectDropdwn";

interface DivideInfoPopupProps {
    popupOpen: boolean;
    setPopupOpen: (open: boolean) => void;
}

const projects = ["Project A", "Project B", "Project C", "間接費"]; // サンプルプロジェクト一覧

const DivideInfoPopup: React.FC<DivideInfoPopupProps> = (props) => {
    const [files, setFiles] = useState<FileList | null>(null);
    const [selectedProject, setSelectedProject] = useState(projects[0]);

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
                    <h2 className="mb-3 text-title-md2 font-semibold text-black dark:text-white">
                        寄付金額振り分け内容
                    </h2>
                    <h5 className="mb-6 text-xl font-bold text-primary dark:text-white">
                        寄付金額：2,000,000円
                    </h5>

                    <div className="mb-5">
                        <label
                            htmlFor="DivideList"
                            className="mb-2.5 block font-medium text-black dark:text-white"
                        >
                            振り分け先／金額
                        </label>
                        <div className="flex flex-col gap-3.5">
                            <div className="flex items-center gap-2.5">
                                <div
                                    className="rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary min-w-[200px] inline-flex items-center justify-between"
                                >
                                    <span>プロジェクトA</span>
                                </div>

                                <div
                                    className="flex-1 rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
                                >
                                    1,000,000円
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div
                                    className="rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary min-w-[200px] inline-flex items-center justify-between"
                                >
                                    <span>プロジェクトA</span>
                                </div>

                                <div
                                    className="flex-1 rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
                                >
                                    1,000,000円
                                </div>
                            </div>

                        </div>
                    </div>
                    <span className="mt-1.5 block">
                        <span className="font-medium text-black dark:text-white">
                            変更日時：{" "}
                        </span>
                        2025/3/6
                    </span>
                    <span className="mt-1.5 block">
                        <span className="font-medium text-black dark:text-white">
                            変更者：{" "}
                        </span>
                        山田太郎
                    </span>
                </form>
            </div>
        </div>
    );
};

export default DivideInfoPopup;