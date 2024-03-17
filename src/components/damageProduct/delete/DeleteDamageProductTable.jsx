"use client";
// Import Dependencies
import { COLUMNS } from "./columns";
import React, { useMemo } from "react";
import deleteDamageProductData from "./deleteDamageProductData.json";
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
} from "react-table";
import DeleteDamageProductFilter from "./DeleteDamageProductFilter";
import DeleteDamageProductTableTr from "./DeleteDamageProductTableTr";
import DeleteDamageProductPagination from "./DeleteDamageProductPagination";
import { GoSortAsc, GoSortDesc, GoTrash } from "react-icons/go";

const DeleteDamageProductTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => deleteDamageProductData, []);

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
      {/* DeleteDamageProduct Filter */}
      <DeleteDamageProductFilter
        filter={globalFilter}
        setFilter={setGlobalFilter}
      />

      {/* DeleteDamageProduct Table */}
      <div className="table overflow-x-auto">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => {
              return (
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <th
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
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return <DeleteDamageProductTableTr key={index} row={row} />;
            })}
          </tbody>
        </table>
      </div>

      {/* DeleteDamageProduct Pagination */}
      <DeleteDamageProductPagination
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

export default DeleteDamageProductTable;
