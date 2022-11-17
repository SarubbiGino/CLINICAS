import { Delete } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { removeSelected } from "../slice/adminSlice";
import { useAppSelector } from "../../store/hooks"
import { remove } from "../thunks/index";

const DeleteButton = () => {
  const dispatch = useAppDispatch();

  const selected = useAppSelector((state)=>state.admins.selected)

  const handleClick = () => {
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) {
      dispatch(remove(selected));
    }
  };
  return (
    <Box display={"inline"} color={"gray"}>
    <Button
      startIcon={<Delete />}
      className="button button-text"
      onClick={handleClick}
      disabled={selected.length === 0}
      >
      Eliminar
    </Button>
    </Box>
  );
};

export default DeleteButton;
