import * as React from 'react';
import useSWR from 'swr'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getMaxListeners } from 'process';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import estilos from '../infoAdmins/info.module.css'


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Nombre', width: 130 },
  { field: 'lastName', headerName: 'Apellido', width: 130 },
  { field: 'mail', headerName: 'Mail', width: 180 },
    
  {
    field: 'perm',
    headerName: 'Permisos',
    type: 'TextField',
    width: 190,
  },
  {
    field: 'dni',
    headerName: 'DNI',
    type: 'number',
    width: 110,
  },

  {
    field: 'fullName',
    headerName: 'Nombre Completo',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Fiorentino', firstName: 'Nazareno', perm: 'Super Administrador', dni: 44568284, mail: 'nazarenuski@gmailcom' },
  { id: 2, lastName: 'Gomez', firstName: 'German', perm: 'Cancelar y Agregar turnos', dni: 88235410, mail: 'germangomez@gmail.com'  },
  { id: 3, lastName: 'Rodriguez', firstName: 'Vera', perm: 'Agregar y borrar donadores', dni: 332574198, mail: 'verarodr@gmail.com' },
  { id: 4, lastName: 'Collado', firstName: 'Carmen', perm: 'Cancelar y reasignar turnos', dni: 44125639, mail: 'carmencollado@gmail.com'  },
  { id: 5, lastName: 'Chavez', firstName: 'Eulogio', perm: 'Modificar turnos', dni: 26584235, mail: 'eulochvz@gmail.com'  },
  { id: 6, lastName: 'Grau', firstName: 'Evangelina', perm: 'Modificar turnos', dni: 59841239, mail: 'evagrau@gmail.com'  },
  { id: 7, lastName: 'Camacho', firstName: 'Manuel', perm: '-', dni: 23569871, mail: 'manucam@gmail.com'  },
  { id: 8, lastName: 'Pedraza', firstName: 'Monica', perm: '-', dni: 26784132, mail: 'monipdrz@gmail.com'  },
  { id: 9, lastName: 'Miranda', firstName: 'Mariano', perm: '-', dni: 45328943, mail: 'marianmrnd@gmail.com'  },
  { id: 10, lastName: 'Piñero', firstName: 'Maria', perm: '-', dni: 36985245, mail: 'mariapñro@gmail.com'  },
  /*{ id: 11, lastName: 'Valdes', firstName: 'Luis', age: 65, dni: 30254678, mail: 'luisvlades@gmail.com'  },
  { id: 12, lastName: '', firstName: '', age:, dni: , mail: ''  },
  { id: 13, lastName: '', firstName: '', age:, dni: , mail: ''  },
  { id: 14, lastName: '', firstName: '', age:, dni: , mail: ''  },
  { id: 15, lastName: '', firstName: '', age:, dni: , mail: ''  },*/
  
];
export default function DataTable() {
  return (
    <React.Fragment>
      <div style={{ height: 500 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>

    <Button className={estilos.botonAdd} color="secondary" aria-label="add">
            <AddIcon />
          </Button>
    </React.Fragment>
    
  );
}