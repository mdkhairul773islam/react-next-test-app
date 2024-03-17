export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Sale Price",
    accessor: "sale_Price",
  },
  {
    Header: "Amount",
    Cell: (props) =>
      `$${(props.row.original.quantity * props.row.original.sale_Price).toFixed(
        2
      )}`,
  },
  {
    Header: "Remark",
    accessor: "remark",
  },
  {
    Header: "Username",
    accessor: "user",
  },
];
