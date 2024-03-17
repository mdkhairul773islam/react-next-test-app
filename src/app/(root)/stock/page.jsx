import Panel from "@/components/common/Panel";
import StockTable from "@/components/stock/StockTable";

export const metadata = {
  title: "Stock",
};

const StockPage = () => {
  return (
    <>
      <Panel title="All Md Stock">
        <StockTable />
      </Panel>
    </>
  );
};

export default StockPage;
