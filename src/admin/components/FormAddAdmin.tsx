import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  Fragment,
  useState,
} from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import estilos from "./info.module.css";
import { v4 as uuidv4 } from "uuid";
import { addAdmin } from "../slice/adminSlice";
import { useAppDispatch } from "../../store/hooks";
import { add } from "../thunks/index";

function FormAddAdmin({ close }: { close: () => void }): JSX.Element {
  const dispatch = useAppDispatch();

  const [admin, setAdmin] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdmin({
      ...admin,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      add({
        ...admin,
        id: uuidv4(),
      })
    );
    close();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Typography
          className={estilos.tituloAdmin}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Informacion de administradores
        </Typography>
        <TextField
          className={estilos.admin}
          type="text"
          label="Nombre"
          name="nombre"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          className={estilos.admin}
          type="text"
          name="apellido"
          label="Apellido"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          className={estilos.admin}
          type="email"
          name="email"
          label="Mail"
          variant="outlined"
          onChange={handleChange}
        />

        <div className={estilos.boton2}>
          <button>Añadir</button>
        </div>
      </form>
    </Fragment>
  );
}

export default FormAddAdmin;
