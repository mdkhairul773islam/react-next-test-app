import Panel from "@/components/common/Panel";
import PurchaseView from "@/components/purchase/view/PurchaseView";

export const metadata = {
  title: "Purchase Invoice",
};

const PurchasePage = () => {
  return (
    <>
      <Panel title="All Purchase">
        <PurchaseView />
      </Panel>
    </>
  );
};

export default PurchasePage;
