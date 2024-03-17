import { ImCross } from "react-icons/im";

const AddPurchaseForm = () => {
  return (
    <form>
      <div className="overflow-x-auto mb-5">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Product Name</th>
              <th className="w-24">Unit</th>
              <th className="w-24">Quantity</th>
              <th className="w-32">Purchase Price</th>
              <th className="w-32">Total</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <input
                  type="text"
                  value="AC PUMP KIT CIKON J26"
                  name="name"
                  readOnly
                  className="inputField"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="Set"
                  name="unit"
                  readOnly
                  className="inputField"
                />
              </td>
              <td>
                <input type="number" name="qty" className="inputField" />
              </td>
              <td>
                <input type="number" name="price" className="inputField" />
              </td>
              <td>
                <input
                  type="number"
                  name="total"
                  value="0"
                  readOnly
                  className="inputField"
                />
              </td>
              <td>
                <button className="ml-auto h-9 w-9 flex items-center bg-red-600 hover:bg-red-700 text-white justify-center">
                  <ImCross />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="inputGroup">
          <label htmlhtmlFor="remark" className="inputLabel required">
            Remark
          </label>
          <textarea
            name="remark"
            id="remark"
            className="inputField  h-52"
          ></textarea>
        </div>

        <div className="flex flex-col gap-6">
          <div className="inputGroup">
            <label htmlhtmlFor="total" className="inputLabel required">
              Total
            </label>
            <input type="number" id="total" readOnly className="inputField" />
          </div>

          <div className="inputGroup">
            <label htmlhtmlFor="discount" className="inputLabel required">
              Total Discount
            </label>
            <input type="number" id="discount" className="inputField" />
          </div>

          <div className="inputGroup">
            <label htmlhtmlFor="transport" className="inputLabel required">
              Transport Cost
            </label>
            <input type="number" id="transport" className="inputField" />
          </div>

          <div className="inputGroup">
            <label htmlhtmlFor="grand_total" className="inputLabel required">
              Grand Total
            </label>
            <input
              type="number"
              id="grand_total"
              readOnly
              className="inputField"
            />
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div className="inputGroup col-span-2">
              <label htmlhtmlFor="previous_balance" className="inputLabel required">
                Previous Balance
              </label>
              <input
                type="number"
                id="previous_balance"
                readOnly
                className="inputField"
              />
            </div>
            <div className="inputGroup">
              <input
                type="text"
                readOnly
                value="Receivable"
                className="inputField"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div className="inputGroup col-span-2">
              <label htmlhtmlFor="paid" className="inputLabel required">
                Paid
              </label>
              <input type="number" id="paid" readOnly className="inputField" />
            </div>

            <div className="inputGroup">
              <select className="inputField" name="method">
                <option value="cash">Cash</option>
                <option value="cheque">Cheque</option>
                <option value="bkash">Bkash</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div className="inputGroup col-span-2">
              <label htmlhtmlFor="current_balance" className="inputLabel required">
                Current Balance
              </label>
              <input
                type="number"
                id="current_balance"
                readOnly
                className="inputField"
              />
            </div>
            <div className="inputGroup">
              <input
                type="text"
                readOnly
                value="Receivable"
                className="inputField"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-right mt-5">
        <button type="submit" className="inputBtn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddPurchaseForm;
