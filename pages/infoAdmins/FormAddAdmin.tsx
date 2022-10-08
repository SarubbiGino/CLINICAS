import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  Fragment,
  useState,
} from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import estilos from "../infoAdmins/info.module.css";
import { v4 as uuidv4 } from "uuid";
import type { RootState, AppDispatch } from "../../src/app/store";
import { addAdmin } from "../../src/features/admin/adminSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
import { useAppDispatch } from "./infoAdm";
import { useAppSelector } from "./infoAdm";

function FormAddAdmin(): JSX.Element {
  const dispatch = useAppDispatch();

  const [admin, setAdmin] = useState({
    first_name: "",
    last_name: "",
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
      addAdmin({
        ...admin,
        id: uuidv4(),
      })
    );
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
          type="text"
          label="Nombre"
          name="first_name"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          className={estilos.admin}
          type="text"
          name="last_name"
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
