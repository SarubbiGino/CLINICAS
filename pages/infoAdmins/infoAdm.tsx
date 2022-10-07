import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import AddIcon from "../infoAdmins/modalAdd";

import type { RootState, AppDispatch } from "../../src/app/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 20 },
  { field: "first_name", headerName: "Nombre", width: 110 },
  { field: "last_name", headerName: "Apellido", width: 120 },
  { field: "email", headerName: "Mail", width: 190 },

  {
    field: "fullName",
    headerName: "Nombre Completo",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.first_name || ""} ${params.row.last_name || ""}`,
  },
];

export default function DataTable() {
  const admins = useAppSelector((state) => state.admins);

  return (
    <React.Fragment>
      <p>Lista de administradores</p>
      <div style={{ height: 500 }}>
        <DataGrid
          rows={admins}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
        />
      </div>
      <AddIcon />
    </React.Fragment>
  );
}
