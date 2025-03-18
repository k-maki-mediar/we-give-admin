"use client";
import React from "react";
import ChartDonation from "./ChartDonation";
import ChartDonationTwo from "./ChartDonationTwo";
import DataStatsFunds from "./DataStatsFunds";

const DonationDashboard: React.FC = () => {
    return (
        <>
            <div className="mt-7.5 mb-10 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
                <div className="col-span-12 xl:col-span-7">
                    <ChartDonation />
                </div>

                <div className="col-span-12 xl:col-span-5">
                    <ChartDonationTwo />
                </div>
            </div>

            <DataStatsFunds />
        </>
    );
};

export default DonationDashboard;