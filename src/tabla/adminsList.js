import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteadmin } from "../features/admin/adminSlice";

function adminsList() {
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.admins);

  const handleDelete = (id) => {
    dispatch(deleteadmin(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>admins ({admins.length})</h1>

        <Link
          to="/create-admin"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm"
        >
          Create Admin
        </Link>
      </header>

      <div className="grid grid-cols-3 gap-3">
        {admins.map((admin) => (
          <div className="bg-neutral-800 p-4 rounded-md" key={admin.id}>
            <header className="flex justify-between">
              <h3 className="text-lg font-bold">{admin.first_name}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-admin/${admin.id}`}
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(admin.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                >
                  delete
                </button>
              </div>
            </header>
            <p>{admin.last_name}</p>
            <p className="text-xs text-slate-400">{admin.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default adminsList;