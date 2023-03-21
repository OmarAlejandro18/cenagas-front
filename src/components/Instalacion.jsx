import { useState } from "react";
import Modal from "./Modal";
import ModalCrear from "./ModalCrear";
import TablaInstalacion from "./TablaIntalacion";

const Instalacion = () => {
  const [open, setOpen] = useState(false);
  const [instalaciones, setInstalaciones] = useState([]);
  const [instalacion, setInstalacion] = useState({});

  return (
    <div className="bg-neutral-50 h-screen">
      {/* Page title & actions */}
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Intalación
          </h1>
        </div>
      </div>

      {/* <!-- TABLA --> */}
      {/* <TablaIntalacion /> */}
      <div className="rounded-md mx-8 my-8 p-6 shadow-2xl bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <p className="mt-2 text-sm text-gray-700">
                Aqui se presentan todas las intalaciones.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-green-500 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <span className="pl-2 font-bold">Crear</span>
              </button>
              {open && (
                <ModalCrear
                  open={open}
                  setOpen={setOpen}
                  instalaciones={instalaciones}
                  setInstalaciones={setInstalaciones}
                />
              )}
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <TablaInstalacion
                    open={open} //La primera vez esta en false cuando se da click true
                    setOpen={setOpen}
                    instalaciones={instalaciones} //Son todas las intalaciones esta vacio la primera vez
                    setInstalaciones={setInstalaciones}
                    instalacion={instalacion} //En este caso siempre es {} vacio
                    setInstalacion={setInstalacion}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instalacion;
