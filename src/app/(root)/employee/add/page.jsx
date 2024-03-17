import Panel from "@/components/common/Panel";
import AddEmployeeForm from "@/components/employee/AddEmployeeForm";

export const metadata = {
  title: "Add Employee",
};

const AddEmployeePage = () => {
  return (
    <div>
      <Panel title="Add Employee">
        <div className="w-full">
          <AddEmployeeForm />
        </div>
      </Panel>
    </div>
  );
};

export default AddEmployeePage;
