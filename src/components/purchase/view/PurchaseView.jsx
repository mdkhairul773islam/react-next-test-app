const PurchaseView = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-5">
        <table className="w-full">
          <tbody>
            <tr>
              <th className="text-left whitespace-nowrap w-32">
                Supplier Name :
              </th>
              <td>ACI MOTORS LTD SONALIKA</td>
            </tr>
            <tr>
              <th className="text-left whitespace-nowrap w-32">Address :</th>
              <td>
                TEKNAF PARA,GAZIPUR,DHAKA. ACI MOTORS DBBL 1011100027991 ISLAMI
                BANK 20502760100155114
              </td>
            </tr>
            <tr>
              <th className="text-left whitespace-nowrap w-32">Mobile :</th>
              <td>01799993195</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full ">
          <tbody>
            <tr>
              <th className="text-left whitespace-nowrap w-32">Date :</th>
              <td>2024-01-09</td>
            </tr>
            <tr>
              <th className="text-left whitespace-nowrap w-32">Voucher No :</th>
              <td>240142746</td>
            </tr>
            <tr>
              <th className="text-left whitespace-nowrap w-32">Remark :</th>
              <td>Mq24000022</td>
            </tr>
          </tbody>
        </table>
      </div>

      <table className="w-full mt-10">
        <tbody>
          <tr>
            <th className="border px-2 py-1 text-left">Sl</th>
            <th className="border px-2 py-1 text-left">Product Name</th>
            <th className="border px-2 py-1 text-left">Unit</th>
            <th className="border px-2 py-1 text-left">Quantity</th>
            <th className="border px-2 py-1 text-left">Price (TK)</th>
            <th className="border px-2 py-1 text-left">Total (TK)</th>
          </tr>
          <tr>
            <td className="border px-2 py-1 text-left">1</td>
            <td className="border px-2 py-1 text-left">
              0079 - SONALLIKA MAXIMA 8.5L (11000540AAE) C511
            </td>
            <td className="border px-2 py-1 text-left">Pcs</td>
            <td className="border px-2 py-1 text-left">12.000</td>
            <td className="border px-2 py-1 text-left">4320.00</td>
            <td className="border px-2 py-1 text-left">51840</td>
          </tr>
          <tr>
            <td className="border px-2 py-1 text-left">2</td>
            <td className="border px-2 py-1 text-left">
              0079 - SONALLIKA MAXIMA 8.5L (11000540AAE) C511
            </td>
            <td className="border px-2 py-1 text-left">Pcs</td>
            <td className="border px-2 py-1 text-left">12.000</td>
            <td className="border px-2 py-1 text-left">4320.00</td>
            <td className="border px-2 py-1 text-left">51840</td>
          </tr>
        </tbody>
      </table>

      <div className="grid grid-cols-12 mt-5">
        <div className="col-start-8 col-end-13">
          <table className="w-full">
            <tbody>
              <tr>
                <th className="text-left">Total Amount :</th>
                <td className="text-right">
                  <b>51,840.00</b>
                </td>
              </tr>
              <tr>
                <th className="text-left">Total Discount :</th>
                <td className="text-right">
                  <b>0.00</b>
                </td>
              </tr>
              <tr>
                <th className="text-left">Transport Cost :</th>
                <td className="text-right">
                  <b>0.00</b>
                </td>
              </tr>
              <tr>
                <th className="text-left">Grand Total:</th>
                <td className="text-right">
                  <b>51,840.00</b>
                </td>
              </tr>
              <tr>
                <th className="text-left">Paid :</th>
                <td className="text-right">
                  <b>0.00</b>
                </td>
              </tr>
              <tr>
                <th className="text-left">Due :</th>
                <td className="text-right">
                  <b>51,840.00</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchaseView;
