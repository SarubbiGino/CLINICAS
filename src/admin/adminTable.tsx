import { Container } from "@mui/material";
import AddButton from "./components/buttonAdd";
import DeleteButton from "./components/DeleteButton";
import Table from "./components/infoAdm";
import { set } from "../admin/thunks/index";
import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";

const AdminTable = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(set());
  },[]);

  return (
    <Container sx={{ my: 7 }}>
      <DeleteButton />
      <AddButton />
      <Table />
    </Container>
  );
};

export default AdminTable;
