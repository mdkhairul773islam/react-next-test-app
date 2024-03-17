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
    Header: "Mobile",
    accessor: "mobile",
  },
  {
    Header: "Address",
    accessor: "address",
  },

  {
    Header: "Balance",
    accessor: "balance",
  },
  {
    Header: "Type",
    Cell: (props) => "Payable",
  },
];
