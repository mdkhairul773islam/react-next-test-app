"use client";
// Import Dependencies
import { useState } from "react";
import Modal from "../common/Modal";
import { GoTrash } from "react-icons/go";
import { Tooltip } from "flowbite-react";
import { LiaEdit } from "react-icons/lia";
import EditCategoryForm from "./EditCategoryForm";

const CategoryTableTr = ({ row }) => {
  const [openModal, setOpenModal] = useState(false);

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
            <Tooltip content="Update" animation="duration-500">
              <div
                onClick={() => {
                  console.log(row.original.id);
                  setOpenModal(true);
                }}
                className="actionBtn actionBtnEdit"
              >
                <LiaEdit />
              </div>
            </Tooltip>

            <Tooltip content="Delete" animation="duration-500">
              <div className="actionBtn actionBtnDelete">
                <GoTrash />
              </div>
            </Tooltip>
          </div>
        </td>
      </tr>

      {/* Edit Category Modal */}
      <Modal
        title="Edit Category"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <EditCategoryForm setOpenModal={setOpenModal} />
      </Modal>
    </>
  );
};

export default CategoryTableTr;
