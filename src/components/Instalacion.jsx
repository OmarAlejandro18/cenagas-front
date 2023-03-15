import { useState } from "react";
import Modal from "./Modal";
import TablaInstalacion from "./TablaIntalacion";

const Instalacion = () => {
  // const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [opcion, setOpcion] = useState(1);

  return (
    <>
      {/* Page title & actions */}
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Intalación
          </h1>
        </div>
      </div>
      <div className="w-72 mx-8 mt-10 mb-12 rounded-md pr-6 pl-6 pt-8 pb-6 shadow-2xl">
        <label
          htmlFor="Nombre"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Nombre
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
            placeholder="Nombre de la Instalación"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
      </div>

      {/* <!-- TABLA --> */}
      {/* <TablaIntalacion /> */}
      <div className="rounded-md mx-8 mb-12 pr-6 pl-6 pt-8 pb-6 shadow-2xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                Users
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                Una lista de todas las instalaciones
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => setOpen(true)}
              >
                Crear
              </button>
              {open && <Modal open={open} setOpen={setOpen} opcion={opcion} />}
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <TablaInstalacion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instalacion;
