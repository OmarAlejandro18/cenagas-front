import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarLayout from "./layouts/SidebarLayout";
import Dashboard from "./pages/private/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Rutas publicas */}
          {/* Rutas privadas */}
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
