import Panel from "@/components/common/Panel";
import DeleteDamageProductTable from "@/components/damageProduct/delete/DeleteDamageProductTable";

export const metadata = {
  title: "Delete Damage Product",
};

const DamageProductPage = () => {
  return (
    <>
      <Panel title="Delete Damage Product">
        <DeleteDamageProductTable />
      </Panel>
    </>
  );
};

export default DamageProductPage;
