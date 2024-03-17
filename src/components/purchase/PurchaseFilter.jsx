"use client";
// Import Dependencies

const PurchaseFilter = () => {
  return (
    <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 md:gap-3">
      <select type="text" id="showroom" className="inputField text-sm">
        <option value="">Select Showroom</option>
        {[
          "Showroom one",
          "Showroom two",
          "Showroom three",
          "Showroom four",
          "Showroom five",
          "Showroom six",
          "Showroom seven",
        ].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="voucher_no"
        placeholder="Voucher No"
        className="inputField text-sm"
      />

      <select id="supplier" className="inputField text-sm">
        <option value="">Select Supplier</option>
        {[
          "Supplier one",
          "Supplier two",
          "Supplier three",
          "Supplier four",
          "Supplier five",
          "Supplier six",
          "Supplier seven",
        ].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <select id="supplier" className="inputField text-sm">
        <option value="">Select User Name</option>
        {[
          "User one",
          "User two",
          "User three",
          "User four",
          "User five",
          "User six",
          "User seven",
        ].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <input type="date" name="from" className="inputField text-sm" />

      <input type="date" name="to" className="inputField text-sm" />
    </div>
  );
};

export default PurchaseFilter;
