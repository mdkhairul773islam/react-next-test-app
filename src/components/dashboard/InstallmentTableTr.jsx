"use client";
// Import Dependencies
import { GoTrash } from "react-icons/go";
import { LiaEdit } from "react-icons/lia";
import { Table, Tooltip } from "flowbite-react";

const InstallmentTableTr = ({ category }) => {
  return (
    <>
      <Table.Row className="bg-white ">
        <Table.Cell className="!px-2">{category}</Table.Cell>
        <Table.Cell className="!px-3 whitespace-nowrap font-medium text-gray-900">
          John Doe
        </Table.Cell>
        <Table.Cell className="!px-3 whitespace-nowrap font-medium text-gray-900">
          01700000000
        </Table.Cell>
        <Table.Cell className="!px-3 whitespace-nowrap font-medium text-gray-900">
          Sirajgong, Rajshahi
        </Table.Cell>

        <Table.Cell className="!px-3 whitespace-nowrap font-medium text-gray-900">
          716000
        </Table.Cell>
        <Table.Cell className="!px-3 whitespace-nowrap font-medium text-gray-900">
          10 Jan, 2024
        </Table.Cell>
        <Table.Cell className="!px-3 whitespace-nowrap font-medium text-gray-900">
          43000
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default InstallmentTableTr;
