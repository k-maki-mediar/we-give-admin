"use client";
import React, { useMemo, useState } from "react";
import {
    useTable,
    useSortBy,
    useGlobalFilter,
    useFilters,
    usePagination,
    useRowSelect,
    Column,
    FilterProps,
} from "react-table";
import ColumnFilter from "../DataTables/ColumnFilter";
import DropdownDonationEdit from "../DonID/DropdownDonationEdit";
import CheckboxDonationSelect from "./CheckboxDonationSelect";
import BadgeDonStatus from "./BadgeDonStatus";
import DropdownProStatus from "../ProjectStatus/DropdownsProStatus";

interface Employee {
    id: string;
    name: string;
    position: string;
    duration: string;
    birthDate: string;
    email: string;
    phone: string;
    address: string;
    status: string;
}

const dataOne: Employee[] = [
    {
        id: "155",
        name: "Brielle Kuphal",
        position: "Designer",
        duration: "3 years",
        birthDate: "25 Nov, 1977",
        email: "Brielle45@gmail.com",
        phone: "+323(29)-232-44-74",
        address: "Block A, Demo Park",
        status: "Full-time",
    },
    {
        id: "155",
        name: "Brielle Kuphal",
        position: "Designer",
        duration: "3 years",
        birthDate: "25 Nov, 1977",
        email: "Brielle45@gmail.com",
        phone: "+323(29)-232-44-74",
        address: "Block A, Demo Park",
        status: "Full-time",
    },
    {
        id: "155",
        name: "Brielle Kuphal",
        position: "Designer",
        duration: "3 years",
        birthDate: "25 Nov, 1977",
        email: "Brielle45@gmail.com",
        phone: "+323(29)-232-44-74",
        address: "Block A, Demo Park",
        status: "Full-time",
    },
    {
        id: "155",
        name: "Brielle Kuphal",
        position: "Designer",
        duration: "3 years",
        birthDate: "25 Nov, 1977",
        email: "Brielle45@gmail.com",
        phone: "+323(29)-232-44-74",
        address: "Block A, Demo Park",
        status: "Full-time",
    },
    // ...他のデータ
];

const columns: Column<Employee>[] = [
    {
        Header: "Name/Id",
        accessor: "name",
        Cell: ({ row }) => (
            <div>
                <p className="text-primary">{row.original.name}</p>
                <p className="text-sm text-gray-500">ID: {row.original.id}</p>
            </div>
        ),
    },
    {
        Header: "Position",
        accessor: "position",
    },
    {
        Header: "BDay",
        accessor: "birthDate",
    },
    {
        Header: "Email/Phone",
        accessor: "email",
    },
    {
        Header: "Address",
        accessor: "address",
    },
    {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }) => <BadgeDonStatus status={row.original.status} />,
    },
    {
        Header: "",
        id: "actions",
        Cell: () => (
            <div className="flex justify-center">
                <DropdownDonationEdit />
            </div>
        ),
        disableSortBy: true,
    },
];

const DataTableDonation = () => {
    const data = useMemo(() => dataOne, []);
    const defaultColumn = useMemo(
        () => ({
            Filter: ColumnFilter as React.FC<FilterProps<Employee>>,
        }),
        []
    );

    const [projectStatus, setProjectStatus] = useState("Open");
    const statuses = ["送金エラー", "送金済み", "入金待ち", "振込先未通知"];


    // CSVダウンロード処理（既存）
    const handleDownload = () => {
        // 選択行がない場合は何もしない
        if (!selectedFlatRows || selectedFlatRows.length === 0) return;
        const selectedData = selectedFlatRows.map((row) => row.original);
        const headers = Object.keys(selectedData[0]);
        const csvRows = [
            headers.join(","),
            ...selectedData.map((item) =>
                headers.map((header) => `${String(item[header as keyof typeof item])}`).join(",")
            ),
        ];
        const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "selected_data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const tableInstance = useTable(
        {
            columns,
            data,
            defaultColumn,
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((cols) => [
                {
                    id: "selection",
                    Header: ({ toggleAllRowsSelected, rows }) => {
                        const anySelected = rows.some((row: any) => row.isSelected);
                        return (
                            <div className="pl-2">
                                <CheckboxDonationSelect
                                    checked={false} // 常にfalse
                                    indeterminate={anySelected}
                                    onChange={() => {
                                        if (anySelected) {
                                            toggleAllRowsSelected(false);
                                        } else {
                                            toggleAllRowsSelected(true);
                                        }
                                    }}
                                />
                            </div>
                        );
                    },
                    Cell: ({ row }) => (
                        <div className="pl-2">
                            <CheckboxDonationSelect {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...cols,
            ]);
        }
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        setGlobalFilter,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        setPageSize,
        gotoPage,
        selectedFlatRows,
    } = tableInstance;

    const { globalFilter, pageIndex, pageSize } = state;
    const hasSelectedRows = selectedFlatRows && selectedFlatRows.length > 0;

    return (
        <section className="data-table-common rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex justify-between px-8 pb-4">
                <div className="w-100">
                    <input
                        type="text"
                        value={globalFilter ?? ""}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        className="w-full rounded-md border border-stroke bg-transparent px-5 py-2.5 outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                        placeholder="検索する"
                    />
                </div>
                <div className="flex items-center font-medium">
                    <select
                        value={pageSize}
                        onChange={(e) => setPageSize(Number(e.target.value))}
                        className="bg-transparent pl-2"
                    >
                        {[5, 10, 20, 50].map((page) => (
                            <option key={page} value={page}>
                                {page}
                            </option>
                        ))}
                    </select>
                    <p className="pl-2 text-black dark:text-white">Entries Per Page</p>
                </div>
            </div>

            <table
                {...getTableProps()}
                className="datatable-table datatable-one w-full table-auto !border-collapse overflow-hidden break-words px-4 md:table-fixed md:overflow-auto md:px-8"
            >
                <thead className="border-separate px-4">
                    {headerGroups.map((headerGroup, hgKey) => (
                        <tr
                            className="border-t border-stroke dark:border-strokedark"
                            {...headerGroup.getHeaderGroupProps()}
                            key={hgKey}
                        >
                            {headerGroup.headers.map((column, colKey) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.id !== "actions" ? column.getSortByToggleProps() : {}
                                    )}
                                    key={colKey}
                                    className={
                                        column.id === "actions"
                                            ? "w-40"
                                            : column.id === "selection"
                                                ? "w-20"
                                                : column.id === "status"
                                                    ? "w-40"
                                                    : ""
                                    }
                                    style={
                                        hasSelectedRows && column.id !== "selection" && colKey !== 5 && colKey !== 6
                                            ? { pointerEvents: "none" }
                                            : {}
                                    }
                                >
                                    <div className="flex items-center">
                                        {column.id === "selection" && column.render("Header")}
                                        {column.id !== "selection" &&
                                            (!hasSelectedRows ? (
                                                <>
                                                    <span>{column.render("Header")}</span>
                                                    {column.id !== "actions" && (
                                                        <div className="ml-2 inline-flex flex-col space-y-[2px]">
                                                            <span className="inline-block">
                                                                <svg
                                                                    className="fill-current"
                                                                    width="10"
                                                                    height="5"
                                                                    viewBox="0 0 10 5"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M5 0L0 5H10L5 0Z" />
                                                                </svg>
                                                            </span>
                                                            <span className="inline-block">
                                                                <svg
                                                                    className="fill-current"
                                                                    width="10"
                                                                    height="5"
                                                                    viewBox="0 0 10 5"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M5 5L10 0L0 0L5 5Z" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                // フィルター非表示時の処理：各対象カラムに応じたボタンを表示
                                                <>
                                                    {colKey === 6 && (
                                                        <div className="w-full flex">
                                                            <DropdownProStatus
                                                                statuses={statuses}
                                                                currentStatus={projectStatus}
                                                                onChangeStatus={(newStatus) => setProjectStatus(newStatus)}
                                                            />
                                                        </div>
                                                    )}
                                                    {colKey === 7 && (
                                                        <div className="w-full flex">
                                                            <button
                                                                onClick={handleDownload}
                                                                className="ml-auto inline-flex items-center gap-2.5 rounded bg-primary px-4 py-2.5 font-medium text-white hover:bg-opacity-90"
                                                            >
                                                                Download
                                                                <svg
                                                                    className="fill-current"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 18 18"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g clipPath="url(#clip0_1878_13706)">
                                                                        <path d="M16.8754 12.375C16.5379 12.375 16.2285 12.6562 16.2285 13.0219V15.525C16.2285 15.7781 16.0316 15.975 15.7785 15.975H2.22227C1.96914 15.975 1.77227 15.7781 1.77227 15.525V13.0219C1.77227 12.6562 1.46289 12.375 1.12539 12.375C0.787891 12.375 0.478516 12.6562 0.478516 13.0219V15.525C0.478516 16.4812 1.23789 17.2406 2.19414 17.2406H15.7785C16.7348 17.2406 17.4941 16.4812 17.4941 15.525V13.0219C17.5223 12.6562 17.2129 12.375 16.8754 12.375Z" />
                                                                        <path d="M8.55055 13.078C8.66305 13.1905 8.8318 13.2468 9.00055 13.2468C9.1693 13.2468 9.30992 13.1905 9.45054 13.078L13.5287 9.1124C13.7818 8.85928 13.7818 8.46553 13.5287 8.2124C13.2755 7.95928 12.8818 7.95928 12.6287 8.2124L9.64742 11.1374V1.40615C9.64742 1.06865 9.36617 0.759277 9.00055 0.759277C8.66305 0.759277 8.35367 1.04053 8.35367 1.40615V11.1374L5.37242 8.2124C5.1193 7.95928 4.72555 7.9874 4.47242 8.2124C4.2193 8.46553 4.24742 8.85928 4.47242 9.1124L8.55055 13.078Z" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_1878_13706">
                                                                            <rect width="18" height="18" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    )}
                                                </>
                                            ))}
                                    </div>
                                    {/* フィルターはhasSelectedRowsがfalseの場合のみ表示 */}
                                    {!hasSelectedRows && column.id !== "selection" && column.canFilter
                                        ? column.render("Filter")
                                        : null}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row, rowKey) => {
                        prepareRow(row);
                        return (
                            <tr
                                className="border-t border-stroke dark:border-strokedark"
                                {...row.getRowProps()}
                                key={rowKey}
                            >
                                {row.cells.map((cell, cellKey) => (
                                    <td
                                        {...cell.getCellProps()}
                                        key={cellKey}
                                        className={cell.column.id === "status" ? "text-center" : ""}
                                    >
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="flex justify-between border-t border-stroke px-6 pt-5 dark:border-strokedark">
                <div className="flex">
                    <button
                        className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12.1777 16.1156C12.009 16.1156 11.8402 16.0593 11.7277 15.9187L5.37148 9.44995C5.11836 9.19683 5.11836 8.80308 5.37148 8.54995L11.7277 2.0812C11.9809 1.82808 12.3746 1.82808 12.6277 2.0812C12.8809 2.33433 12.8809 2.72808 12.6277 2.9812L6.72148 8.99995L12.6559 15.0187C12.909 15.2718 12.909 15.6656 12.6559 15.9187C12.4871 16.0312 12.3465 16.1156 12.1777 16.1156Z" />
                        </svg>
                    </button>

                    {pageOptions.map((_page, index) => (
                        <button
                            key={index}
                            onClick={() => gotoPage(index)}
                            className={`${pageIndex === index && "bg-primary text-white"} mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-primary hover:text-white`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                    >
                        <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5.82148 16.1156C5.65273 16.1156 5.51211 16.0593 5.37148 15.9468C5.11836 15.6937 5.11836 15.3 5.37148 15.0468L11.2777 8.99995L5.37148 2.9812C5.11836 2.72808 5.11836 2.33433 5.37148 2.0812C5.62461 1.82808 6.01836 1.82808 6.27148 2.0812L12.6277 8.54995C12.8809 8.80308 12.8809 9.19683 12.6277 9.44995L6.27148 15.9187C6.15898 16.0312 5.99023 16.1156 5.82148 16.1156Z" />
                        </svg>
                    </button>
                </div>
                <p className="font-medium">
                    Showing {pageIndex + 1} of {pageOptions.length} pages
                </p>
            </div>
        </section>
    );
};

export default DataTableDonation;
