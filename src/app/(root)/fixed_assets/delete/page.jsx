import Panel from "@/components/common/Panel";
import DeleteAssetTable from "@/components/fixedAsset/DeleteAssetTable";

export const metadata = {
  title: "All Deleted Fixed Assets",
};

const AssetPage = () => {
  return (
    <>
      <Panel title="All Deleted Fixed Asset">
        <DeleteAssetTable />
      </Panel>
    </>
  );
};

export default AssetPage;
