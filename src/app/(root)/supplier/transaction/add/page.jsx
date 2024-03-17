// Import Dependencies
import Panel from "@/components/common/Panel";
import AddTransactionForm from "@/components/transaction/AddTransactionForm";

export const metadata = {
  title: "Add Transaction",
};

const AddTransactionPage = () => {
  return (
    <div>
      <Panel title="Add Transaction">
        <div className="w-full">
          <AddTransactionForm />
        </div>
      </Panel>
    </div>
  );
};

export default AddTransactionPage;
