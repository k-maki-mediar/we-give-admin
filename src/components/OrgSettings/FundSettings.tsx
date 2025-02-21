"use client";
import IndirectUsageSelect from "./IndirectUsageSelect";
import CheckboxHighFund from "../Checkboxes/CheckboxHighFund";

const FundSettings = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-5">
                    <div>
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="orgNum"
                        >
                            間接費率
                        </label>
                        <div className="flex items-center gap-2">
                            <input
                                className="w-20 rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="text"
                                name="orgNum"
                                id="orgNum"
                                placeholder="0"
                                defaultValue="0"
                                maxLength={3}
                            />
                            <span className="text-black/60 dark:text-white/60">
                                %
                            </span>
                        </div>
                    </div>
                    <IndirectUsageSelect id="multiSelect" />
                    <div>
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="orgNum"
                        >
                            高額寄付基順金額
                        </label>
                        <div className="flex items-center gap-2">
                            <input
                                className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="text"
                                name="orgNum"
                                id="orgNum"
                                placeholder="0"
                                defaultValue="0"
                            />
                            <span className="whitespace-nowrap text-black/60 dark:text-white/60">
                                円以上
                            </span>
                        </div>
                    </div>
                    <CheckboxHighFund />

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

export default FundSettings;
