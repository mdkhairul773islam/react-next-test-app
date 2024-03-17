"use client";
// Import Dependencies
import { GoTrash } from "react-icons/go";
import { Tooltip } from "flowbite-react";
import { LiaEdit } from "react-icons/lia";

const DeleteDamageProductTableTr = ({ row }) => {
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

export default DeleteDamageProductTableTr;
