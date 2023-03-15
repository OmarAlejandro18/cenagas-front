import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarLayout from "./layouts/SidebarLayout";
import InstalacionPagina from "./pages/private/InstalacionPagina";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Rutas publicas */}
          {/* Rutas privadas */}
          <Route path="/dash" element={<SidebarLayout />}>
            <Route index element={<InstalacionPagina />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
