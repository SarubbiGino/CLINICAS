import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addAdmin, editAdmin } from "../../src/features/admin/adminSlice";
import { v4 as uuid } from "uuid";

function adminForm() {
  const [admin, setAdmin] = useState({
    first_name: "",
    last_name: "",
    email:""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const admins = useSelector((state) => state.admins);

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
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
  };

  useEffect(() => {
    if (params.id) {
      setAdmin(admins.find((admin) => admin.id === params.id));
    }
  }, [params, admins]);

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label className="block text-sm font-bold">Nombre:</label>
      <input
        type="text"
        name="first_name"
        onChange={handleChange}
        value={admin.first_name}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        placeholder="Write a title"
        autoFocus
      />
      <label>
        Apellido:<textarea
          type="text"
          name="last_name"
          onChange={handleChange}
          value={admin.last_name}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          placeholder="Write a description"
        />
      </label>
      <button type="submit" className="bg-indigo-600 px-2 py-1">
        Submit
      </button>
    </form>
  );
}

export default adminForm;