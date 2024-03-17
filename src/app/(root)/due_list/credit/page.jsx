import Panel from "@/components/common/Panel";
import CreditDueTable from "@/components/dueList/credit/CreditTable";

export const metadata = {
  title: "Credit Party Due",
};

const CreditDuePage = () => {
  return (
    <>
      <Panel title="All Credit Party Due">
        <CreditDueTable />
      </Panel>
    </>
  );
};

export default CreditDuePage;
