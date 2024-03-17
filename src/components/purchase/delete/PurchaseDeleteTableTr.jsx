"use client";

// Import Dependencies
import { Tooltip } from "flowbite-react";
import { GoTrash } from "react-icons/go";

const PurchaseDeleteTableTr = () => {
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
        <Tooltip content="Delete" animation="duration-500">
          <div className="actionBtn actionBtnDelete">
            <GoTrash />
          </div>
        </Tooltip>
      </td>
    </tr>
  );
};

export default PurchaseDeleteTableTr;
