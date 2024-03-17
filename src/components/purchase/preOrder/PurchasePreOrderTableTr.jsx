"use client";

// Import Dependencies
import { Tooltip } from "flowbite-react";
import { FaEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { LiaEdit } from "react-icons/lia";

const PurchasePreOrderTableTr = () => {
  return (
    <tr>
      <td>1</td>
      <td>
        <span className="whitespace-nowrap">2024-01-09</span>
      </td>
      <td>
        <span className="whitespace-nowrap">240142746</span>
      </td>
      <td>ACI MOTORS LTD SONALIKA</td>
      <td>01799993195</td>
      <td>Shohelmotors124 </td>
      <td>51,840.00 </td>
      <td>0.00 </td>
      <td>51,840.00 </td>
      <td>mq24000022</td>
      <td>M/S SHOHEL MOTORS </td>
      <td>
        <div className="grid grid-cols-2 gap-1 w-[60px]">
          <Tooltip content="Show" animation="duration-500">
            <div className="actionBtn actionBtnShow">
              <FaEye />
            </div>
          </Tooltip>

          <Tooltip content="Update" animation="duration-500">
            <div className="actionBtn actionBtnEdit">
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
  );
};

export default PurchasePreOrderTableTr;
