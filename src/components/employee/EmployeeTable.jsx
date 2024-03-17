"use client";
// Import Dependencies
import { COLUMNS } from "./columns";
import employeeData from "./employeeData.json";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
} from "react-table";
import EmployeeFilter from "./EmployeeFilter";
import EmployeePagination from "./EmployeePagination";
import { GoSortAsc, GoSortDesc, GoTrash } from "react-icons/go";
import EmployeeTableTr from "./EmployeeTableTr";

const EmployeeTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => employeeData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    setPageSize,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      {/* Employee Filter */}
      <EmployeeFilter filter={globalFilter} setFilter={setGlobalFilter} />

      {/* Employee Table */}
      <div className="table overflow-x-auto">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => {
              return (
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      className="whitespace-nowrap"
                      key={index}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-2xl">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <GoSortAsc />
                            ) : (
                              <GoSortDesc />
                            )
                          ) : (
                            ""
                          )}
                        </span>
                        {column.render("Header")}
                      </div>
                    </th>
                  ))}
                  <th className="text-right">Action</th>
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return <EmployeeTableTr key={index} row={row} />;
            })}
          </tbody>
        </table>
      </div>

      {/* Employee Pagination */}
      <EmployeePagination
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        nextPage={nextPage}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </>
  );
};

export default EmployeeTable;
