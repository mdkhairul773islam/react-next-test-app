import Panel from "@/components/common/Panel";
// import ReferenceTable from "@/components/reference/ReferenceTable";
import AddDocumentForm from "@/components/document/AddDocumentForm";

export const metadata = {
  title: "Document",
};

const DocumentPage = () => {
  return (
    <>
      <Panel title="All Document">
        {/* <ReferenceTable /> */}

        <AddDocumentForm />
      </Panel>
    </>
  );
};

export default DocumentPage;
