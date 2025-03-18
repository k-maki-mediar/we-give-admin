import React from "react";

const DataStatsFunds: React.FC = () => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 2xl:gap-7.5">
                <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
                    <h4 className="mb-2 mt-5 font-medium">寄付総額</h4>
                    <h3 className="mb-2 text-title-md font-bold text-black dark:text-white">
                        20,000,000円
                    </h3>
                </div>

                <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
                    <h4 className="mb-2 mt-5 font-medium">間接費への寄付総額</h4>
                    <h3 className="mb-2 text-title-md font-bold text-black dark:text-white">
                        18,000,000円
                    </h3>
                </div>

                <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
                    <h4 className="mb-2 mt-5 font-medium">受付可能寄付金額</h4>
                    <h3 className="mb-2 text-title-md font-bold text-black dark:text-white">
                        2,000,000円
                    </h3>
                </div>

                <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
                    <h4 className="mb-2 mt-5 font-medium">送金済み寄付金額</h4>
                    <h3 className="mb-2 text-title-md font-bold text-black dark:text-white">
                        2,000,000円
                    </h3>
                </div>

                <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
                    <h4 className="mb-2 mt-5 font-medium">送金予定金額</h4>
                    <h3 className="mb-2 text-title-md font-bold text-black dark:text-white">
                        18,000,000円
                    </h3>
                </div>

                <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
                    <h4 className="mb-2 mt-5 font-medium">入金予定寄付金額</h4>
                    <h3 className="mb-2 text-title-md font-bold text-black dark:text-white">
                        2,000,000円
                    </h3>
                </div>

            </div>
        </div>
    );
};

export default DataStatsFunds;
