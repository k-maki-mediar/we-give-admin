"use client";
import React, { useMemo } from "react";
import {
    useTable,
    useSortBy,
    useGlobalFilter,
    useFilters,
    usePagination,
    Column,
    FilterProps,
} from "react-table";
import ColumnFilter from "@/components/DataTables/ColumnFilter";
import DropdownDataTable from "@/components/Dropdowns/DropdownDataTable";

// インターフェースの修正
interface MessageData {
    sendDate: string;
    recipientCount: number;
    sender: string;
    message: string;
}

const dataOne: MessageData[] = [
    {
        sendDate: "2025-03-18 10:30",
        recipientCount: 15,
        sender: "山田太郎",
        message: "お知らせのメッセージ内容です。",
    },
    {
        sendDate: "2025-03-18 11:15",
        recipientCount: 20,
        sender: "鈴木一郎",
        message: "別のお知らせメッセージ内容です。",
    },
    {
        sendDate: "2025-03-18 11:15",
        recipientCount: 20,
        sender: "鈴木一郎",
        message: "別のお知らせメッセージ内容です。",
    },
    // ...他のデータ
];

const menuItems = [
    {
        label: "詳細",
        href: "/messages/bulksendgroup", // 詳細画面への遷移先
    },
    {
        label: "編集",
        onClick: () => {
            console.log("編集ボタンがクリックされました");
        },
    },
    {
        label: "削除",
        onClick: () => {
            console.log("削除ボタンがクリックされました");
        },
    },
];

const columns: Column<MessageData>[] = [
    {
        Header: "送信日時",
        accessor: "sendDate",
        id: "sendDate",
        Cell: ({ row }) => (
            <div>
                <p className="text-primary">{row.original.sendDate}</p>
            </div>
        ),
    },
    {
        Header: "宛先件数",
        accessor: "recipientCount",
        id: "recipientCount"
    },
    {
        Header: "送信者",
        accessor: "sender",
        id: "sender"
    },
    {
        Header: "メッセージ",
        accessor: "message",
        id: "message",
    },
    {
        Header: "",
        id: "actions",
        Cell: () => (
            <div className="flex justify-center">
                <DropdownDataTable menuItems={menuItems} />
            </div>
        ),
        disableSortBy: true,
    },
];

const DataTableBulkSendHistory = () => {
    const data = useMemo(() => dataOne, []);
    const defaultColumn = useMemo(
        () => ({
            Filter: ColumnFilter as React.FC<FilterProps<MessageData>>,
        }),
        []
    );

    const tableInstance = useTable(
        {
            columns,
            data,
            defaultColumn,
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
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
    } = tableInstance;

    const { globalFilter, pageIndex, pageSize } = state;

    return (
        <section className="data-table-common rounded-sm border-stroke bg-white py-4 dark:border-strokedark dark:bg-boxdark">
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
                            {headerGroup.headers.map((column, colKey) => {
                                // actions列は既にw-40、message列はw-96を追加
                                const thClass =
                                    column.id === "actions"
                                        ? "w-30" :
                                        column.id === "sendDate"
                                            ? "w-40" :
                                            column.id === "recipientCount"
                                                ? "w-40" :
                                                column.id === "sender"
                                                    ? "w-40"
                                                    : column.id === "message"
                                                        ? "w-100"
                                                        : "";
                                return (
                                    <th
                                        {...column.getHeaderProps(
                                            column.id !== "actions" ? column.getSortByToggleProps() : {}
                                        )}
                                        key={colKey}
                                        className={thClass}
                                    >
                                        <div className="flex items-center">
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
                                        </div>
                                        {column.canFilter ? column.render("Filter") : null}
                                    </th>
                                );
                            })}
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
                                {row.cells.map((cell, cellKey) => {
                                    // actions列は text-center、message列は w-96 を追加
                                    const tdClass =
                                        cell.column.id === "actions"
                                            ? "text-center"
                                            : cell.column.id === "message"
                                                ? "w-100"
                                                : "";
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            key={cellKey}
                                            className={tdClass}
                                        >
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
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
                            className={`${pageIndex === index && "bg-primary text-white"
                                } mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-primary hover:text-white`}
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

export default DataTableBulkSendHistory;
