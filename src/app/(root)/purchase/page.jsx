import Panel from "@/components/common/Panel";
import PurchaseTable from "@/components/purchase/PurchaseTable";

export const metadata = {
  title: "Purchase",
};

const PurchasePage = () => {
  return (
    <>
      <Panel title="All Purchase">
        <PurchaseTable />
      </Panel>
    </>
  );
};

export default PurchasePage;
