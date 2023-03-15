import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarLayout from "./layouts/SidebarLayout";
import ComponenteCrear from "./pages/private/ComponenteCrear";
import ComponenteEditar from "./pages/private/ComponenteEditar";
import ComponenteListar from "./pages/private/ComponenteListar";
import InstalacionPagina from "./pages/private/InstalacionPagina";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dash" element={<SidebarLayout />}>
            <Route index element={<InstalacionPagina />} />
            <Route path="/dash/crear" element={<ComponenteCrear />} />
            <Route path="/dash/editar" element={<ComponenteEditar />} />
            <Route path="/dash/listar" element={<ComponenteListar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
