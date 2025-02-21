"use client";
import { useEffect, useRef, useState } from "react";
import SwitcherThree from "@/components/Switchers/SwitcherThree";
import FormConnectPopup from "./Popups/FormConnectPopup";

const DonProSettings = () => {

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
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            寄付受付
                        </label>
                        <div
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black/60 dark:border-form-strokedark dark:bg-form-input dark:text-white/60 flex items-center justify-between"
                        >
                            <span>ういきふチャットフォームでの寄付受付</span>
                            <SwitcherThree />
                        </div>
                    </div>

                    <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            埋め込みタグ
                        </label>
                        <div
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-gray px-5 py-3 text-black/60 dark:border-form-strokedark dark:bg-form-input dark:text-white/60 flex items-center justify-between"
                        >
                            <span>※スクリプトが表示されます※</span>
                            <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.6875 4.125L14.4062 0.875C14.1875 0.65625 13.875 0.53125 13.5625 0.53125H7.875C6.96875 0.53125 6.21875 1.28125 6.21875 2.1875V13.5937C6.21875 14.5 6.96875 15.25 7.875 15.25H16.375C17.2812 15.25 18.0312 14.5 18.0312 13.5937V4.96875C18.0312 4.65625 17.9062 4.34375 17.6875 4.125ZM14.4687 2.9375L15.6562 4.125H14.4687V2.9375ZM16.375 13.8437H7.875C7.75 13.8437 7.625 13.7187 7.625 13.5937V2.1875C7.625 2.0625 7.75 1.9375 7.875 1.9375H13.0625V4.8125C13.0625 5.1875 13.375 5.53125 13.7812 5.53125H16.625V13.625C16.625 13.75 16.5 13.8437 16.375 13.8437Z" fill="currentColor" />
                                <path d="M13.7812 7.03125H9.65625C9.28125 7.03125 8.9375 7.34375 8.9375 7.75C8.9375 8.15625 9.25 8.46875 9.65625 8.46875H13.7812C14.1562 8.46875 14.5 8.15625 14.5 7.75C14.5 7.34375 14.1562 7.03125 13.7812 7.03125Z" fill="currentColor" />
                                <path d="M13.7812 9.65625H9.65625C9.28125 9.65625 8.9375 9.96875 8.9375 10.375C8.9375 10.75 9.25 11.0937 9.65625 11.0937H13.7812C14.1562 11.0937 14.5 10.7813 14.5 10.375C14.4687 9.96875 14.1562 9.65625 13.7812 9.65625Z" fill="currentColor" />
                                <path d="M13.0625 16.25C12.6875 16.25 12.3438 16.5625 12.3438 16.9687V17.8125C12.3438 17.9375 12.2188 18.0625 12.0938 18.0625H3.625C3.5 18.0625 3.375 17.9375 3.375 17.8125V6.375C3.375 6.25 3.5 6.125 3.625 6.125H4.6875C5.0625 6.125 5.40625 5.8125 5.40625 5.40625C5.40625 5 5.09375 4.6875 4.6875 4.6875H3.625C2.71875 4.6875 1.96875 5.4375 1.96875 6.34375V17.8125C1.96875 18.7188 2.71875 19.4687 3.625 19.4687H12.125C13.0313 19.4687 13.7812 18.7188 13.7812 17.8125V16.9687C13.7812 16.5625 13.4687 16.25 13.0625 16.25Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>

                    <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            既存フォーム連携
                        </label>
                        <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-20">
                            <button
                                ref={trigger}
                                onClick={() => setPopupOpen(!popupOpen)}
                                className="inline-flex items-center justify-center rounded-md border border-primary px-10 py-4 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                            >
                                既存フォーム連携設定を行う
                            </button>

                            {/* <!-- ===== FormConect Popup Start ===== --> */}
                            <FormConnectPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
                            {/* <!-- ===== FormConect Popup End ===== --> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4.5">
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

export default DonProSettings;
