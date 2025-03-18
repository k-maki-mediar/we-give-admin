"use client";
import React, { useState } from "react";
import SelectGroupAccountType from "../SelectGroup/SelectGroupAccountType";
import Image from "next/image";


const ProjectID: React.FC = () => {

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
                <h3 className="font-medium text-black dark:text-white">プロジェクト詳細</h3>
            </div>
            <div className="relative w-full px-8 py-8 z-20 h-35 md:h-65">
                <Image
                    src={"/images/cover/cover-01.png"}
                    alt="profile cover"
                    className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
                    width={970}
                    height={600}
                />
                <div className="absolute px-8 py-8 bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
                    <label
                        htmlFor="cover"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary px-2 py-1 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
                    >
                        <input
                            type="file"
                            name="cover"
                            id="cover"
                            className="sr-only"
                        />
                        <span>
                            <svg
                                className="fill-current"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.99992 5.83329C6.03342 5.83329 5.24992 6.61679 5.24992 7.58329C5.24992 8.54979 6.03342 9.33329 6.99992 9.33329C7.96642 9.33329 8.74992 8.54979 8.74992 7.58329C8.74992 6.61679 7.96642 5.83329 6.99992 5.83329ZM4.08325 7.58329C4.08325 5.97246 5.38909 4.66663 6.99992 4.66663C8.61075 4.66663 9.91659 5.97246 9.91659 7.58329C9.91659 9.19412 8.61075 10.5 6.99992 10.5C5.38909 10.5 4.08325 9.19412 4.08325 7.58329Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                        <span>Edit</span>
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 px-8 py-8">
                <div className="flex flex-col gap-5.5">
                    <div className="mb-0">
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="orgNum"
                        >
                            プロジェクト名
                        </label>
                        <input
                            className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="orgNum"
                            id="orgNum"
                            placeholder="0011223344556"
                            defaultValue="0011223344556"
                        />
                    </div>
                    <div className="mb-0">
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="orgNum"
                        >
                            目標寄付金額
                        </label>
                        <input
                            className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="orgNum"
                            id="orgNum"
                            placeholder="0011223344556"
                            defaultValue="0011223344556"
                        />
                    </div>
                    <div className="mb-0">
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="orgNum"
                        >
                            現状金額
                        </label>
                        <input
                            className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="orgNum"
                            id="orgNum"
                            placeholder="0011223344556"
                            defaultValue="0011223344556"
                        />
                    </div>
                    <div className="mb-0">
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="orgNum"
                        >
                            登録日
                        </label>
                        <input
                            className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="orgNum"
                            id="orgNum"
                            placeholder="0011223344556"
                            defaultValue="0011223344556"
                        />
                    </div>
                    <div className="mb-0">
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="orgNum"
                        >
                            メールアドレス
                        </label>
                        <input
                            className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="orgNum"
                            id="orgNum"
                            placeholder="0011223344556"
                            defaultValue="0011223344556"
                        />
                    </div>
                    <div className="mb-0">
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="orgNum"
                        >
                            連絡先電話番号
                        </label>
                        <input
                            className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="orgNum"
                            id="orgNum"
                            placeholder="0011223344556"
                            defaultValue="0011223344556"
                        />
                    </div>
                    <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            プロジェクト概要
                        </label>
                        <textarea
                            placeholder="テキストを入力してください"
                            className="w-full rounded border-[1.5px] border-stroke bg-gray px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                        ></textarea>
                    </div>

                </div>

                <div className="flex flex-col gap-9">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
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
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4.5 px-8 py-8">
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

        </div>



    );
};

export default ProjectID;
