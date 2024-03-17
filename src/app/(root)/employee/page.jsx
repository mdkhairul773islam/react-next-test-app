import Panel from "@/components/common/Panel";
import EmployeeTable from "@/components/employee/EmployeeTable";

export const metadata = {
  title: "Employee",
};

const EmployeePage = () => {
  return (
    <>
      <Panel title="All Employee">
        <EmployeeTable />
      </Panel>
    </>
  );
};

export default EmployeePage;
