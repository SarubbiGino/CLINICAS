import { createSlice } from "@reduxjs/toolkit";

const initialState =   [{"id":1,"first_name":"Edmund","last_name":"Clitheroe","email":"eclitheroe0@php.net"},
{"id":2,"first_name":"Tana","last_name":"Whitley","email":"twhitley1@diigo.com"},
{"id":3,"first_name":"Crystie","last_name":"Pape","email":"cpape2@artisteer.com"},
{"id":4,"first_name":"Moe","last_name":"Fouracres","email":"mfouracres3@is.gd"},
{"id":5,"first_name":"Ellwood","last_name":"Averies","email":"eaveries4@gnu.org"},
{"id":6,"first_name":"Fleurette","last_name":"Treagust","email":"ftreagust5@hp.com"},
{"id":7,"first_name":"Brewer","last_name":"Beer","email":"bbeer6@canalblog.com"},
{"id":8,"first_name":"Lalo","last_name":"Pickett","email":"lpickett7@buzzfeed.com"},
{"id":9,"first_name":"Michelle","last_name":"Sisey","email":"msisey8@deliciousdays.com"},
{"id":10,"first_name":"Lanie","last_name":"Exrol","email":"lexrol9@feedburner.com"}]


const userSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {
    addAdmin: (state, action) => {
      state.push(action.payload);
    },
    editAdmin: (state, action) => {
      const { id, first_name, last_name, email} = action.payload;
      const foundAdmin = state.find((admin) => admin.id === id);
      if (foundAdmin) {
        foundAdmin.first_name = first_name;
        foundAdmin.last_name = last_name;
        foundAdmin.email = email;
      }
    },
    deleteAdmin: (state, action) => {
      const foundAdmin = state.find((admin) => admin.id === action.payload);
      if (foundAdmin) {
        state.splice(state.indexOf(foundAdmin), 1);
      }
    }
  }
});

export const { addAdmin, editAdmin, deleteAdmin } = userSlice.actions;
export default userSlice.reducer;