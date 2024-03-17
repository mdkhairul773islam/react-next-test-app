const AddPurchasePreOrderFilter = () => {
  return (
    <div className="mb-5 md:mb-10">
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3">
          <input type="date" id="date" className="inputField text-sm" />
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
            value="234234234"
            name="voucher_no"
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
            <option value="">Select Product</option>
            {[
              "Product one",
              "Product two",
              "Product three",
              "Product four",
              "Product five",
              "Product six",
              "Product seven",
            ].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default AddPurchasePreOrderFilter;
