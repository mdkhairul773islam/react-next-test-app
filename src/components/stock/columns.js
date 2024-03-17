export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Manufacturer",
    accessor: "manufacturer",
  },
  {
    Header: "QTY",
    accessor: "quantity",
    Cell: (props) => <span className="whitespace-nowrap">{props.value} pcs</span>,
  },
  {
    Header: "Purchase Price",
    accessor: "purchase_price",
    Cell: (props) => `$${props.value}`,
  },
  {
    Header: "Sell Price",
    accessor: "sell_price",
    Cell: (props) => `$${props.value}`,
  },
  {
    Header: "Amount",
    Cell: (props) =>
      `$${props.row.original.purchase_price + props.row.original.quantity}`,
  },
  {
    Header: "Showroom",
    accessor: "showroom",
  },
  {
    Header: "Username",
    accessor: "username",
  },
];
