"use client";
// Import Dependencies
import { Tooltip } from "flowbite-react";

const CreditTableTr = ({ row }) => {
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
      </tr>
    </>
  );
};

export default CreditTableTr;
