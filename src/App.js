import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import adminForm from "../src/tabla/adminForm";

function tabla() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/create-admin" element={<adminForm />} />
            <Route path="/edit-admin/:id" element={<adminForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default tabla;