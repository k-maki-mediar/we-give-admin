"use client";
import React, { useMemo } from "react";
import {
    useTable,
    useSortBy,
    usePagination,
    useRowSelect,
    Column,
    FilterProps,
} from "react-table";
import { useRouter } from "next/navigation";
import ColumnFilter from "@/components/DataTables/ColumnFilter";
import CheckboxDonationSelect from "@/components/DonationFundsList/CheckboxDonationSelect";
import BadgeDonStatus from "@/components/DonList/BadgeDonStatus";
import DropdownDataTable from "@/components/Dropdowns/DropdownDataTable";

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

const menuItems = [
    {
        label: "詳細",
        href: "/donID", // 詳細画面への遷移先
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
                <DropdownDataTable menuItems={menuItems} />
            </div>
        ),
        disableSortBy: true,
    },
];

const DataTableBulkSendGroup = () => {
    const data = useMemo(() => dataOne, []);
    const defaultColumn = useMemo(
        () => ({
            Filter: ColumnFilter as React.FC<FilterProps<Employee>>,
        }),
        []
    );

    const router = useRouter();
    const handleEditMessage = () => {
        // メッセージ編集画面への遷移先を指定
        router.push("/messages/messagesEdit");
    };

    // CSVダウンロード処理（既存）

    const tableInstance = useTable(
        {
            columns,
            data,
            defaultColumn,
        },
        useSortBy,
        usePagination,
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((cols) => [
                {
                    id: "selection",
                    Header: ({ toggleAllRowsSelected, rows }) => {
                        return (
                            <div className="pl-2">
                                <CheckboxDonationSelect
                                    checked={false}
                                    indeterminate={rows.some((row: any) => row.isSelected)}
                                    onChange={() => {
                                        const anySelected = rows.some((row: any) => row.isSelected);
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
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        selectedFlatRows,
    } = tableInstance;

    const { pageIndex } = state;

    return (
        <section className="data-table-common rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">

            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    前回の寄付から1年以上経過した寄付者
                </h3>
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
                                        column.id !== "actions"
                                            ? column.getSortByToggleProps()
                                            : {}
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
                                >
                                    {/* ヘッダーに表示する内容は、チェックボックス（selection）とボタン（actions）のみ */}
                                    {column.id === "selection" && (
                                        <div className="pl-2">
                                            {column.render("Header")}
                                        </div>
                                    )}
                                    {column.id === "actions" && (
                                        <div className="flex justify-center gap-2">
                                            <button
                                                onClick={handleEditMessage}
                                                className="ml-auto inline-flex items-center gap-2.5 rounded bg-primary px-4 py-2.5 font-medium text-white hover:bg-opacity-90"
                                            >
                                                送信
                                            </button>
                                        </div>
                                    )}
                                    {/* それ以外のカラムはヘッダー内に何も表示しない */}
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

export default DataTableBulkSendGroup;
