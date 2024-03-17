import Panel from "@/components/common/Panel";
import SupplierTable from "@/components/supplier/SupplierTable";

export const metadata = {
  title: "Supplier",
};

const SupplierPage = () => {
  return (
    <>
      <Panel title="All Supplier">
        <SupplierTable />
      </Panel>
    </>
  );
};

export default SupplierPage;
