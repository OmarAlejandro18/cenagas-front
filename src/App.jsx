import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarLayout from "./layouts/SidebarLayout";
import Sidebar from "./layouts/Sidebar";
import ComponenteCrear from "./pages/private/ComponenteCrear";
import ComponenteEditar from "./pages/private/ComponenteEditar";
import ComponenteListar from "./pages/private/ComponenteListar";
import InstalacionPagina from "./pages/private/InstalacionPagina";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Sidebar />}>
            <Route index element={<InstalacionPagina />} />
            <Route path="/dashboard/crear" element={<ComponenteCrear />} />
            <Route path="/dashboard/editar" element={<ComponenteEditar />} />
            <Route path="/dashboard/listar" element={<ComponenteListar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
