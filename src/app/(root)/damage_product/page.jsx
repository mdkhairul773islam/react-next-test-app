import Panel from "@/components/common/Panel";
import DamageProductTable from "@/components/damageProduct/DamageProductTable";

export const metadata = {
  title: "DamageProduct",
};

const DamageProductPage = () => {
  return (
    <>
      <Panel title="All Damage Product">
        <DamageProductTable />
      </Panel>
    </>
  );
};

export default DamageProductPage;
