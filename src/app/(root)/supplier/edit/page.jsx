import Panel from "@/components/common/Panel";
import EditSupplierForm from "@/components/supplier/EditSupplierForm";

export const metadata = {
  title: "Edit Supplier",
};

const EditSupplierPage = () => {
  return (
    <div>
      <Panel title="Edit Supplier">
        <div className="w-full">
          <EditSupplierForm />
        </div>
      </Panel>
    </div>
  );
};

export default EditSupplierPage;
