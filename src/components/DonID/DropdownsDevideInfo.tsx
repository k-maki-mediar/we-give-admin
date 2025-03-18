
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import DivideInfoPopup from "./Popups/DevideInfoPopup";

const DropdownDevideInfo = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    return (
        <div className="relative flex">
            <button
                className="text-[#98A6AD] hover:text-body"
                ref={trigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.25 11.25C3.49264 11.25 4.5 10.2426 4.5 9C4.5 7.75736 3.49264 6.75 2.25 6.75C1.00736 6.75 0 7.75736 0 9C0 10.2426 1.00736 11.25 2.25 11.25Z"
                        fill=""
                    />
                    <path
                        d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
                        fill=""
                    />
                    <path
                        d="M15.75 11.25C16.9926 11.25 18 10.2426 18 9C18 7.75736 16.9926 6.75 15.75 6.75C14.5074 6.75 13.5 7.75736 13.5 9C13.5 10.2426 14.5074 11.25 15.75 11.25Z"
                        fill=""
                    />
                </svg>
            </button>
            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute left right-0 top-0 z-40 w-20 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? "block" : "hidden"
                    }`}
            >
                <button
                    className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4"
                    onClick={() => {
                        setPopupOpen(true);
                        setDropdownOpen(false);
                    }}
                >
                    詳細
                </button>
            </div>
            {/* popupOpenがtrueの場合にDevideInfoPopupを表示 */}
            {popupOpen && (
                <DivideInfoPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
            )}
        </div >
    );
};

export default DropdownDevideInfo;




// import { useEffect, useRef, useState } from "react";
// import DivideInfoPopup from "./Popups/DevideInfoPopup";

// const DropdownDevideInfo = () => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [popupOpen, setPopupOpen] = useState(false);
//     const trigger = useRef<HTMLButtonElement>(null);
//     const dropdown = useRef<HTMLDivElement>(null);

//     // 外部クリックでドロップダウンを閉じる
//     useEffect(() => {
//         const clickHandler = ({ target }: MouseEvent) => {
//             if (!dropdown.current) return;
//             if (
//                 !dropdownOpen ||
//                 dropdown.current.contains(target as Node) ||
//                 trigger.current?.contains(target as Node)
//             )
//                 return;
//             setDropdownOpen(false);
//         };
//         document.addEventListener("click", clickHandler);
//         return () => document.removeEventListener("click", clickHandler);
//     }, [dropdownOpen]);

//     // Escキーで閉じる
//     useEffect(() => {
//         const keyHandler = ({ keyCode }: KeyboardEvent) => {
//             if (!dropdownOpen || keyCode !== 27) return;
//             setDropdownOpen(false);
//         };
//         document.addEventListener("keydown", keyHandler);
//         return () => document.removeEventListener("keydown", keyHandler);
//     }, [dropdownOpen]);

//     return (
//         <div className="relative flex">
//             <button
//                 className="text-[#98A6AD] hover:text-body"
//                 ref={trigger}
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//             >
//                 {/* アイコンなど */}
//                 <svg /* 省略 */></svg>
//             </button>

//             <div
//                 ref={dropdown}
//                 onFocus={() => setDropdownOpen(true)}
//                 onBlur={() => setDropdownOpen(false)}
//                 className={`absolute right-0 top-full z-40 w-20 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen ? "block" : "hidden"
//                     }`}
//             >
//                 <button
//                     className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4"
//                     onClick={() => {
//                         setPopupOpen(true);
//                         setDropdownOpen(false);
//                     }}
//                 >
//                     詳細
//                 </button>
//             </div>

//             {/* popupOpenがtrueの場合にDevideInfoPopupを表示 */}
//             {popupOpen && (
//                 <DivideInfoPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
//             )}
//         </div>
//     );
// };

// export default DropdownDevideInfo;
