import Image from "next/image";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Showroom",
    accessor: "showroom",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Employee ID",
    accessor: "employee_id",
  },
  {
    Header: "Image",
    accessor: "image",
    Cell: (props) => (
      <Image src={props.value} height={50} width={50} alt="Image" />
    ),
  },

  {
    Header: "Mobile",
    accessor: "mobile",
  },
  {
    Header: "Designation",
    accessor: "designation",
  },
  {
    Header: "Salary",
    accessor: "salary",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: (props) => (props.value ? "Enable" : "Disabled"),
  },
];
