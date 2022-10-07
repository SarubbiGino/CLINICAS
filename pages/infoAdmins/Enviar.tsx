import React, {Fragment, useState} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import estilos from '../infoAdmins/info.module.css'
import Button from '@mui/material/Button';
import type { RootState, AppDispatch } from '../../src/app/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
export const useAppDispatch: () => AppDispatch = useDispatch
import { addAdmin, editAdmin } from "../../src/features/admin/adminSlice";
import { v4 as uuid } from "uuid";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const FormElement = React.FormEvent<HTMLFormElement>;
interface ITask{
    name: string;
    ap: string;
    em: string;
    done: boolean;
}

function App(): JSX.Element{
    const [newTask, setNewTask] = useState<string>(''); 
    const [tasks, setTasks] = useState([])
    const [newTaskap, setNewTaskap] = useState<string>(''); 
    const [tasksap, setTasksap] = useState([])
    const [newTaskem, setNewTaskem] = useState<string>(''); 
    const [tasksem, setTasksem] = useState([])
    //const admins = useAppSelector((state) => state.admins);
    const dispatch = useAppDispatch(); 
    const useSelector = useAppSelector();
    const navigate = useNavigate();
    const params = useParams();
        
    const handleSubmit = (e: FormElement) => {
        e.preventDefault();
        if (params.id) {
      dispatch(editAdmin({ ...admin, id: params.id }));
    } else {
      dispatch(
        addAdmin({
          ...admin,
          id: uuid()
        })
      );
    }
        navigate("/");
        
        addTask(newTask);
        setNewTask('');
        addTaskap(newTaskap);
        setNewTaskap('');
        addTaskem(newTaskem);
        setNewTaskem('');
        
    }
    
    const addTask = (name: string) =>{
        const newTasks: ITask[] = [...tasks, {name}]
        setTasks(newTasks)
    }
    const addTaskap = ( ap: string) =>{
        const newTasksap: ITask[] = [...tasksap, {ap}]
        setTasksap(newTasksap)
    }
    const addTaskem = ( em: string) =>{
        const newTasksem: ITask[] = [...tasksem, {em}]
        setTasksem(newTasksem)
    }
    
return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Typography className={estilos.tituloAdmin} id="modal-modal-title" variant="h6" component="h2">
            Informacion de administradores
          </Typography>
            <TextField onChange={e => setNewTask(e.target.value)} value={newTask}className={estilos.admin} type='text' label='Nombre' name='name' variant="outlined" />
            <TextField onChange={e => setNewTaskap(e.target.value)} value={newTaskap}className={estilos.admin} type='text' name='ap' label="Apellido"variant="outlined" />
            <TextField onChange={e => setNewTaskem(e.target.value)} value={newTaskem}className={estilos.admin} type='email' name='em' label="Mail" variant="outlined" />
                         
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
                tasksap.map((t: ITask, i: number) => {
                    return <h1 key={i}>{t.ap}</h1>
                })
            }
                       {
                tasksem.map((t: ITask, i: number) => {
                    return <h1 key={i}>{t.em}</h1>
                })
            }
        </Fragment>
    );
}

export default App;