"use client";
// Import Dependencies

import PurchaseDeleteFilter from "./PurchaseDeleteFilter";
import PurchaseDeleteTableTr from "./PurchaseDeleteTableTr";

const PurchaseDeleteTable = () => {
  return (
    <>
      {/* Purchase Delete Filter */}
      <PurchaseDeleteFilter />

      {/* Purchase Delete Table */}
      <div className="table overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Date</th>
              <th>Voucher No</th>
              <th>Supplier Name</th>
              <th>Mobile</th>
              <th>User Name</th>
              <th>Total (TK)</th>
              <th>Paid (TK)</th>
              <th>Due (TK)</th>
              <th>Remark</th>
              <th>Showroom</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
              <PurchaseDeleteTableTr key={row} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PurchaseDeleteTable;
