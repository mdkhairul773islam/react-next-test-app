import Panel from "@/components/common/Panel";
import DueListTable from "@/components/dueList/DueListTable";

export const metadata = {
  title: "Cash Party Due",
};

const DueListPage = () => {
  return (
    <>
      <Panel title="All DueList">
        <DueListTable />
      </Panel>
    </>
  );
};

export default DueListPage;
