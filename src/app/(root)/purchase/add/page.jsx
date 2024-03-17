import Panel from "@/components/common/Panel";
import AddPurchaseFilter from "@/components/purchase/add/AddPurchaseFilter";
import AddPurchaseForm from "@/components/purchase/add/AddPurchaseForm";

export const metadata = {
  title: "Add Purchase",
};

const AddPurchasePage = () => {
  return (
    <>
      <Panel title="Add Purchase">
        {/* Add Purchase Filter  */}
        <AddPurchaseFilter />

        {/* Add Purchase Form */}
        <AddPurchaseForm />
      </Panel>
    </>
  );
};

export default AddPurchasePage;
