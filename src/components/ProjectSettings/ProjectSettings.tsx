"use client";
import React, { useEffect, useState } from "react";
import Drag from "@/js/drag";
import BadgeProjectStatus from "@/components/BadgeProjectStatus/BadgeProjectStatus";

interface Project {
    id: number;
    name: string;
    status: string;
}

const ProjectSettings: React.FC = () => {
    // プロジェクトデータの例
    const [projects, setProjects] = useState<Project[]>([
        { id: 1, name: "Project Alpha", status: "open" },
        { id: 2, name: "Project Beta", status: "closed" },
        { id: 3, name: "Project Gamma", status: "pending" }
    ]);

    useEffect(() => {
        Drag();
    }, []);

    return (
        <div className="mx-auto">

            <div className="flex flex-col mb-9 gap-y-4 rounded-sm border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark sm:flex-row sm:items-center sm:justify-between">
                <label
                    className="px-4 py-4 block text-sm font-medium dark:text-white"
                    htmlFor="orgNum"
                >
                    プロジェクトの優先度を設定することができます。<br />
                    寄付者が、プロジェクトに直接寄付することを希望した場合、優先度に応じてプロジェクトへ寄付金を振り分けします。
                </label>
            </div>

            <div className="flex flex-col gap-9">


                {/* プロジェクト一覧 */}
                <div className="swim-lane flex flex-col gap-5.5">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            draggable="true"
                            className="task relative flex cursor-move rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
                        >

                            {/* 横並びにして左はプロジェクト名、右はステータス */}
                            <div className="flex w-full justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <svg
                                        width="12"
                                        height="20"
                                        viewBox="0 0 12 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="2" cy="2" r="2" fill="#C5C7CB" />
                                        <circle cx="2" cy="10" r="2" fill="#C5C7CB" />
                                        <circle cx="2" cy="18" r="2" fill="#C5C7CB" />
                                        <circle cx="10" cy="2" r="2" fill="#C5C7CB" />
                                        <circle cx="10" cy="10" r="2" fill="#C5C7CB" />
                                        <circle cx="10" cy="18" r="2" fill="#C5C7CB" />
                                    </svg>
                                    <h5 className="text-lg font-medium text-black dark:text-white">
                                        {project.name}
                                    </h5>
                                </div>
                                <div className="text-right">
                                    <BadgeProjectStatus status={project.status} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSettings;