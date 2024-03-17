import Panel from "@/components/common/Panel";
import SupplierDueTable from "@/components/dueList/supplier/SupplierTable";

export const metadata = {
  title: "Supplier Party Due",
};

const SupplierDuePage = () => {
  return (
    <>
      <Panel title="All Supplier Party Due">
        <SupplierDueTable />
      </Panel>
    </>
  );
};

export default SupplierDuePage;
