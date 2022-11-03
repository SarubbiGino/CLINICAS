import React from "react";
import {
  DataGrid,
  GridCellEditCommitParams,
  GridColDef,
  GridValueGetterParams,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectAdmins } from "../slice/adminSlice";

export default function DataTable() {
  const dispatch = useAppDispatch();
  const handleEditRow = (params: GridCellEditCommitParams) => {
    console.log(params);
  };

  const columns: GridColDef[] = [
    { field: "nombre", headerName: "Nombre", editable: true, width: 110 },
    { field: "apellido", headerName: "Apellido", editable: true, width: 120 },
    { field: "email", headerName: "Mail", editable: true, width: 190 },
    {
      field: "nombre completo",
      headerName: "Nombre Completo",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.nombre || ""} ${params.row.last_name || ""}`,
    },
  ];

  const entities = useAppSelector((state) => state.admins.values);

  const handleSelectRow = (selection: GridSelectionModel) => {
    dispatch(selectAdmins(selection as string[]));
  };

  return (
    <React.Fragment>
      <p>Lista de administradores</p>

      <div style={{ height: 500 }}>
        <DataGrid
          rows={entities}
          columns={columns}
          autoHeight
          checkboxSelection
          onCellEditCommit={handleEditRow}
          onSelectionModelChange={handleSelectRow}
        />
      </div>
    </React.Fragment>
  );
}
