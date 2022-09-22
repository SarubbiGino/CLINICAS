import * as React from 'react';
import useSWR from 'swr'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getMaxListeners } from 'process';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import estilos from '../infoAdmins/info.module.css'
import AddIcon from '../infoAdmins/modalAdd'
import { ClassNames } from '@emotion/react';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 20 },
  { field: 'firstName', headerName: 'Nombre', width: 110 },
  { field: 'lastName', headerName: 'Apellido', width: 120 },
  { field: 'mail', headerName: 'Mail', width: 190 },

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
  { id: 1, lastName: 'Fiorentino', firstName: 'Nazareno', mail: 'nazarenuski@gmailcom' },
  { id: 2, lastName: 'Gomez', firstName: 'German',  mail: 'germangomez@gmail.com'  },
  { id: 3, lastName: 'Rodriguez', firstName: 'Vera', mail: 'verarodr@gmail.com' },
  { id: 4, lastName: 'Collado', firstName: 'Carmen',mail: 'carmencollado@gmail.com'  },
  { id: 5, lastName: 'Chavez', firstName: 'Eulogio',  mail: 'eulochvz@gmail.com'  },
  { id: 6, lastName: 'Grau', firstName: 'Evangelina', mail: 'evagrau@gmail.com'  },
  { id: 7, lastName: 'Camacho', firstName: 'Manuel',mail: 'manucam@gmail.com'  },
  { id: 8, lastName: 'Pedraza', firstName: 'Monica',  mail: 'monipdrz@gmail.com'  },
  { id: 9, lastName: 'Miranda', firstName: 'Mariano',  mail: 'marianmrnd@gmail.com'  },
  { id: 10, lastName: 'Piñero', firstName: 'Maria', mail: 'mariapñro@gmail.com'  },
  /*{ id: 11, lastName: 'Valdes', firstName: 'Luis', age: 65, dni: 30254678, mail: 'luisvlades@gmail.com'  },
  { id: 12, lastName: '', firstName: '', age:, dni: , mail: ''  },
  { id: 13, lastName: '', firstName: '', age:, dni: , mail: ''  },
  { id: 14, lastName: '', firstName: '', age:, dni: , mail: ''  },
  { id: 15, lastName: '', firstName: '', age:, dni: , mail: ''  },*/
  
];
export default function DataTable() {
  return (
    <React.Fragment>
      <p>Lista de administradores</p>
      <div style={{ height: 500 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
      />
      
    </div>
    <AddIcon/>

    </React.Fragment>
    
  );
}