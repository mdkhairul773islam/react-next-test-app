import Panel from "@/components/common/Panel";
import EditTransactionForm from "@/components/transaction/EditTransactionForm";

export const metadata = {
  title: "Edit Transaction",
};

const EditTransactionPage = () => {
  return (
    <div>
      <Panel title="Edit Transaction">
        <div className="w-full">
          <EditTransactionForm />
        </div>
      </Panel>
    </div>
  );
};

export default EditTransactionPage;
