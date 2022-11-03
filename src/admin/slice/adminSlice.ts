import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Admin } from "../interfaces/index";
import { add, set, remove } from "../thunks/index";
import { StatusStateAdmins } from "../interfaces/index";

export type AdminsState = {
  values: Admin[];
  selected: number[];
  status: string;
};

const initialValues: Admin[] = [
  {
    id: 1,
    nombre: "Edmund",
    apellido: "Clitheroe",
    email: "eclitheroe0@php.net",
    url: "",
  },
  {
    id: 2,
    nombre: "Tana",
    apellido: "Whitley",
    email: "twhitley1@diigo.com",
    url: "",
  },
  {
    id: 3,
    nombre: "Crystie",
    apellido: "Pape",
    email: "cpape2@artisteer.com",
    url: "",
  },
];
const initialState: AdminsState = {
  values: initialValues,
  selected: [],
  status: "loading", //can be "loading", "online", "error"
};

const adminsSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {
    addAdmin: (state, action) => {
      state.values.push(action.payload);
    },
    deleteAdmin: (state, action) => {
      const foundAdmin = state.values.find(
        (admin) => admin.id === action.payload
      );
      if (foundAdmin) {
        state.values.splice(state.values.indexOf(foundAdmin), 1);
      }
    },
    removeSelected: (state) => {
      return {
        ...state,
        values: state.values.filter(
          (value) => !state.selected.includes(value.id)
        ),
      };
    },
    selectAdmins: (state, action) => {
      return {
        ...state,
        selected: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(set.fulfilled, (state, action: PayloadAction<Admin[]>) => {
      const { payload: admins } = action;
      return {
        ...state,
        values: admins,
        status: StatusStateAdmins.online,
      };
    });
    builder.addCase(set.rejected, (state) => {
      return {
        ...state,
        status: StatusStateAdmins.error,
      };
    });
    builder.addCase(set.pending, (state) => {
      return {
        ...state,
        status: StatusStateAdmins.loading,
      };
    });
    builder.addCase(add.fulfilled, (state, action: PayloadAction<Admin>) => {
      const { payload: admin } = action;
      const exist = state.values.some((a) => a.id === admin.id);
      return {
        ...state,
        values: exist ? state.values : [admin, ...state.values],
      };
    });
    builder.addCase(
      remove.fulfilled,
      (state, action: PayloadAction<number>) => {
        const { payload: removed } = action;
        const { values, selected } = state;
        const opCompleted = removed === state.selected.length;
        return opCompleted
          ? {
              ...state,
              values: values.filter((admin) => !selected.includes(admin.id)),
              selected: [],
            }
          : {
              ...state,
              status: StatusStateAdmins.error,
            };
      }
    );
  },
});

export const { addAdmin, deleteAdmin, removeSelected, selectAdmins } =
  adminsSlice.actions;
export const adminsReducer = adminsSlice.reducer;
