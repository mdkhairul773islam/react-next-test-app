import Panel from "@/components/common/Panel";
import AddDamageProductForm from "@/components/damageProduct/AddDamageProductForm";

export const metadata = {
  title: "Add DamageProduct",
};

const AddDamageProductPage = () => {
  return (
    <div>
      <Panel title="Add DamageProduct">
        <div className="max-w-md mx-auto">
          <AddDamageProductForm />
        </div>
      </Panel>
    </div>
  );
};

export default AddDamageProductPage;
