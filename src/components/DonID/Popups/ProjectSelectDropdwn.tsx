import React, { useState, useRef, useEffect } from "react";

interface ProjectSelectDropdownProps {
    projects: string[];
    selectedProject: string;
    onSelect: (project: string) => void;
}

const ProjectSelectDropdown: React.FC<ProjectSelectDropdownProps> = ({
    projects,
    selectedProject,
    onSelect,
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // クリックアウトサイドでドロップダウンを閉じる
    useEffect(() => {
        const clickHandler = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node) &&
                triggerRef.current &&
                !triggerRef.current.contains(e.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    }, []);

    // Escキーで閉じる
    useEffect(() => {
        const keyHandler = (e: KeyboardEvent) => {
            if (dropdownOpen && e.key === "Escape") {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    }, [dropdownOpen]);

    return (
        <div className="relative inline-block">
            {/* ▼ ドロップダウン開閉ボタン ▼ */}
            <button
                type="button"
                ref={triggerRef}
                onClick={() => setDropdownOpen((prev) => !prev)}
                // ★ input と同じクラスをベースに、幅調整用のクラスを追加しています
                className={`
          // input と同じクラス群
          rounded-sm border border-stroke bg-white px-4.5 py-3 text-black
          focus:border-primary focus-visible:outline-none
          dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary
          
          // 幅に関する指定
          min-w-[200px] w-auto

          // inline-flex でアイコンなどを横並びに
          inline-flex items-center justify-between
        `}
            >
                <span>{selectedProject}</span>
                {/* ▼ 下向き矢印アイコン ▼ */}
                <svg
                    className={`ml-2 h-4 w-4 fill-current transition-transform duration-200 ease-linear ${dropdownOpen ? "rotate-180" : ""
                        }`}
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.564864 0.879232C0.564864 0.808624 0.600168 0.720364 0.653125 0.667408C0.776689 0.543843 0.970861 0.543844 1.09443 0.649756L5.82517 5.09807C5.91343 5.18633 6.07229 5.18633 6.17821 5.09807L10.9089 0.649756C11.0325 0.526192 11.2267 0.543844 11.3502 0.667408C11.4738 0.790972 11.4562 0.985145 11.3326 1.10871L6.60185 5.55702C6.26647 5.85711 5.73691 5.85711 5.41917 5.55702L0.670776 1.10871C0.600168 1.0381 0.564864 0.967492 0.564864 0.879232Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.4719 0.229332L6.00169 4.48868L10.5171 0.24288C10.9015 -0.133119 11.4504 -0.0312785 11.7497 0.267983C12.1344 0.652758 12.0332 1.2069 11.732 1.50812L11.7197 1.52041L6.97862 5.9781C6.43509 6.46442 5.57339 6.47872 5.03222 5.96853C5.03192 5.96825 5.03252 5.96881 5.03222 5.96853L0.271144 1.50833C0.123314 1.3605 0 1.15353 0 0.879226C0 0.660517 0.0936127 0.428074 0.253705 0.267982C0.593641 -0.0719548 1.12269 -0.0699964 1.46204 0.220873L1.4719 0.229332ZM5.41917 5.55702C5.73691 5.85711 6.26647 5.85711 6.60185 5.55702L11.3326 1.10871C11.4562 0.985145 11.4738 0.790972 11.3502 0.667408C11.2267 0.543844 11.0325 0.526192 10.9089 0.649756L6.17821 5.09807C6.07229 5.18633 5.91343 5.18633 5.82517 5.09807L1.09443 0.649756C0.970861 0.543843 0.776689 0.543843 0.653125 0.667408C0.600168 0.720364 0.564864 0.808624 0.564864 0.879232C0.564864 0.967492 0.600168 1.0381 0.670776 1.10871L5.41917 5.55702Z"
                    />
                </svg>
            </button>

            {/* ▼ ドロップダウンリスト ▼ */}
            {dropdownOpen && (
                <div
                    ref={dropdownRef}
                    className={`
            absolute left-0 top-full z-40 mt-2
            w-auto
            rounded-sm border border-stroke bg-white py-2 shadow-card
            dark:border-strokedark dark:bg-boxdark
          `}
                    style={{
                        // ボタンより小さくならないよう、最低幅200pxを指定
                        minWidth: "200px",
                    }}
                >
                    <ul className="flex flex-col">
                        {projects.map((project, index) => (
                            <li key={index}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        onSelect(project);
                                        setDropdownOpen(false);
                                    }}
                                    className="flex w-full px-4.5 py-2 text-left text-black text-sm font-medium hover:bg-gray-100 dark:text-white dark:hover:bg-meta-4 focus:outline-none"
                                >
                                    {project}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProjectSelectDropdown;
