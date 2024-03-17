import Panel from "@/components/common/Panel";
import AssetTable from "@/components/fixedAsset/AssetTable";

export const metadata = {
  title: "All Fixed Assets",
};

const AssetPage = () => {
  return (
    <>
      <Panel title="All Fixed Asset">
        <AssetTable />
      </Panel>
    </>
  );
};

export default AssetPage;
