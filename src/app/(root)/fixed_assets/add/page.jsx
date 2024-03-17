import Panel from "@/components/common/Panel";
import AddAssetForm from "@/components/fixedAsset/AddAssetForm";

export const metadata = {
  title: "Add Fixed Asset",
};

const AddAssetPage = () => {
  return (
    <div>
      <Panel title="Add Asset">
        <div>
          <AddAssetForm />
        </div>
      </Panel>
    </div>
  );
};

export default AddAssetPage;
