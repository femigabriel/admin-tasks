import React, { useState } from "react";
import { Layout } from "../layout/Layout";
import { DashboardTable } from "../dashboard/DashboardTable";
import { ResponseFetchUsers } from "../services/Services";
import { clientList } from "../services/clientsList";
import { Modal } from "../dashboard/Modal";
import { Button } from "antd";

export const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState<ResponseFetchUsers[]>(clientList);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, index) => index !== targetIndex));
  };

  const handleEditRow = (index) => {
    setRowToEdit(index);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };
  return (
    <Layout title="Admin Dashboard" description="">
      <div className="bg-white">
        <div className="flex justify-between px-10 pt-5">
          <div></div>
          <Button
            onClick={() => setModalOpen(true)}
            className="btn px-5 bg-slate-950 rounded-md text-white h-[35px]"
          >
            Add
          </Button>
        </div>
        <DashboardTable
          rows={rows}
          deleteRow={handleDeleteRow}
          editRow={handleEditRow}
        />
      </div>

      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </Layout>
  );
};
