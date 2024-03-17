import Panel from "@/components/common/Panel";
import PurchaseDeleteTable from "@/components/purchase/delete/PurchaseDeleteTable";

export const metadata = {
  title: "Purchase Delete",
};

const PurchasePage = () => {
  return (
    <>
      <Panel title="All Purchase Delete">
        <PurchaseDeleteTable />
      </Panel>
    </>
  );
};

export default PurchasePage;
