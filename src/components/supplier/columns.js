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
    Header: "Showroom",
    accessor: "showroom",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Contact Person",
    accessor: "contact_person",
  },
  {
    Header: "Mobile",
    accessor: "mobile",
  },
  {
    Header: "Initial Balance",
    accessor: "balance",
    Cell: (props) => (
      <span
        className={`${
          props.row.original.type === true
            ? "text-indigo-600"
            : "text-amber-600"
        } font-bold`}
      >
        {props.value}
      </span>
    ),
  },
  {
    Header: "Type",
    accessor: "type",
    Cell: (props) => (
      <span
        className={`${
          props.value === true
            ? "bg-indigo-600/10 text-indigo-600"
            : "bg-amber-600/10 text-amber-600"
        } font-medium px-2 py-1 rounded-full text-sm`}
        dangerouslySetInnerHTML={{
          __html: props.value === true ? "Receivable" : "Payable",
        }}
      />
    ),
  },
];
