import React, {Fragment, useState} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import estilos from '../infoAdmins/info.module.css'
import Button from '@mui/material/Button';
import { addAdmin, editAdmin } from "../../src/features/admin/adminSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type {RootState, AppDispatch} from '../../src/app/store'
import { v4 as uuid } from "uuid";

export const useAppDispatch: () => AppDispatch = useDispatch

const FormElement = React.FormEvent<HTMLFormElement>;
interface ITask{
    name: string;
    apellido: string;
    email: string;
    done: boolean;
}

function App(): JSX.Element{
    const [newTask, setNewTask] = useState<string>(''); 
    const [tasks, setTasks] = useState([])
    const [newTaskapellido, setNewTaskapellido] = useState<string>(''); 
    const [tasksapellido, setTasksapellido] = useState([])
    const [newTaskemail, setNewTaskemail] = useState<string>(''); 
    const [tasksemail, setTasksemail] = useState([])
    
      const dispatch = useAppDispatch();

    
    const handleSubmit = (e: FormElement) => {
        e.preventDefault();
        dispatch(
        addAdmin({
          ...admin,
          id: uuid(),
        })
      );
        addTask(newTask);
        setNewTask('');
        addTaskapellido(newTaskapellido);
        setNewTaskapellido('');
        addTaskemail(newTaskemail);
        setNewTaskemail('');
        
    }
    
    const addTask = (name: string) =>{
        const newTasks: ITask[] = [...tasks, {name}]
        setTasks(newTasks)
    }
    const addTaskapellido = ( apellido: string) =>{
        const newTasksapellido: ITask[] = [...tasksapellido, {apellido}]
        setTasksapellido(newTasksapellido)
    }
    const addTaskemail = ( email: string) =>{
        const newTasksemail: ITask[] = [...tasksemail, {email}]
        setTasksemail(newTasksemail)
    }
    
return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Typography className={estilos.tituloAdmin} id="modal-modal-title" variant="h6" component="h2">
            Informacion de administradores
          </Typography>
            <TextField onChange={e => setNewTask(e.target.value)} value={newTask}className={estilos.admin} type='text' label='Nombre' name='name' variant="outlined" />
            <TextField onChange={e => setNewTaskapellido(e.target.value)} value={newTaskapellido}className={estilos.admin} type='text' name='ap' label="Apellido"variant="outlined" />
            <TextField onChange={e => setNewTaskemail(e.target.value)} value={newTaskemail}className={estilos.admin} type='email' name='em' label="Mail" variant="outlined" />
                         
                      <div className={estilos.boton2}> 
                        <button>
            Añadir</button>
           </div>
            </form>
            {
                tasks.map((t: ITask, i: number) => {
                    return <h1 key={i}>{t.name}</h1>
                })
            }
            {
                tasksapellido.map((t: ITask, i: number) => {
                    return <h1 key={i}>{t.apellido}</h1>
                })
            }
                       {
                tasksemail.map((t: ITask, i: number) => {
                    return <h1 key={i}>{t.email}</h1>
                })
            }
        </Fragment>
    );
}

export default App;