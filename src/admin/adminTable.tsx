import { Container } from "@mui/material";
import AddButton from "./components/buttonAdd";
import DeleteButton from "./components/DeleteButton";
import Table from "./components/infoAdm";

const AdminTable = () => {
  return (
    <Container sx={{ my: 7 }}>
      <DeleteButton />
      <AddButton />
      <Table />
    </Container>
  );
};

export default AdminTable;
