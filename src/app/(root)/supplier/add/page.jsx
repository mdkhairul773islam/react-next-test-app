// Import Dependencies
import Panel from "@/components/common/Panel";
import AddSupplierForm from "@/components/supplier/AddSupplierForm";

export const metadata = {
  title: "Add Supplier",
};

const AddSupplierPage = () => {
  return (
    <div>
      <Panel title="Add Supplier">
        <div className="w-full">
          <AddSupplierForm />
        </div>
      </Panel>
    </div>
  );
};

export default AddSupplierPage;
