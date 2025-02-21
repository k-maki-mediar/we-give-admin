"use client";

const FinancialInfo = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-5">
                    <div>
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="orgNum"
                        >
                            総収入額
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
                            <span className="text-black/60 dark:text-white/60">
                                円
                            </span>
                        </div>
                    </div>

                    <div>
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="orgNum"
                        >
                            寄付金収入額
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
                            <span className="text-black/60 dark:text-white/60">
                                円
                            </span>
                        </div>
                    </div>

                    <div>
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="orgNum"
                        >
                            助成金/補助金収入額
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
                            <span className="text-black/60 dark:text-white/60">
                                円
                            </span>
                        </div>
                    </div>

                    <div>
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="orgNum"
                        >
                            事業収入額
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
                            <span className="text-black/60 dark:text-white/60">
                                円
                            </span>
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

export default FinancialInfo;
