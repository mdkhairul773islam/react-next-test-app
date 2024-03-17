import Panel from "@/components/common/Panel";
import EditEmployeeForm from "@/components/employee/EditEmployeeForm";

export const metadata = {
  title: "Edit Employee",
};

const EditEmployeePage = () => {
  return (
    <div>
      <Panel title="Edit Employee">
        <div className="w-full">
          <EditEmployeeForm />
        </div>
      </Panel>
    </div>
  );
};

export default EditEmployeePage;
