import Panel from "@/components/common/Panel";
import PurchasePreOrderTable from "@/components/purchase/preOrder/PurchasePreOrderTable";

export const metadata = {
  title: "Pre Order Purchase",
};

const PurchasePreOrderPage = () => {
  return (
    <>
      <Panel title="All Pre Order Purchase">
        <PurchasePreOrderTable />
      </Panel>
    </>
  );
};

export default PurchasePreOrderPage;
