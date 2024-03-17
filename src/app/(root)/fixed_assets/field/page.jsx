import Panel from "@/components/common/Panel";
import FieldTable from "@/components/fixedAsset/field/FieldTable";

export const metadata = {
  title: "Fixed Of Asset Field",
};

const FixedAssetFieldPage = () => {
  return (
    <>
      <Panel title="All Field">
        <FieldTable />
      </Panel>
    </>
  );
};

export default FixedAssetFieldPage;
