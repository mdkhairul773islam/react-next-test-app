import Panel from "@/components/common/Panel";
import AddPurchasePreOrderFilter from "@/components/purchase/preOrder/add/AddPurchasePreOrderFilter";
import AddPurchasePreOrderForm from "@/components/purchase/preOrder/add/AddPurchasePreOrderForm";

export const metadata = {
  title: "Add Purchase Pre Order",
};

const AddPurchasePreOrderPage = () => {
  return (
    <>
      <Panel title="Add Purchase">
        {/* Add Purchase Filter  */}
        <AddPurchasePreOrderFilter />

        {/* Add Purchase Form */}
        <AddPurchasePreOrderForm />
      </Panel>
    </>
  );
};

export default AddPurchasePreOrderPage;
