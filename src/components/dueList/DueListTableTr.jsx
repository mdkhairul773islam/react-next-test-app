"use client";
// Import Dependencies
import { Tooltip } from "flowbite-react";

const DueListTableTr = ({ row }) => {
  return (
    <>
      <tr {...row.getRowProps()}>
        {row.cells.map((cell, index) => {
          return (
            <td key={index} {...cell.getCellProps()}>
              {cell.render("Cell")}
            </td>
          );
        })}

        <td>
          <div className="flex items-center justify-end gap-2">
            <Tooltip content="Due Collect" animation="duration-500">
              <div className="primaryBtn">Due Collect</div>
            </Tooltip>
          </div>
        </td>
      </tr>
    </>
  );
};

export default DueListTableTr;
