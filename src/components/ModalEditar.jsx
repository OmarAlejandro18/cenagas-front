import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ModalEditar = ({
  abrirEditar,
  setAbrirEditar,
  instalacion,
  setInstalacion,
  instalaciones,
  setInstalaciones,
}) => {
  const { id, nombre } = instalacion;
  const [nombreEditar, setNombreEditar] = useState(nombre);

  console.log(nombreEditar);

  const handleEditar = (e) => {
    e.preventDefault();

    console.log(nombreEditar);

    const objetoNuevo = {
      id: id,
      nombre: nombreEditar,
    };
    console.log(objetoNuevo);
    setInstalacion(objetoNuevo);
    console.log(instalacion);
    const prueba = [];
    const instalacionesActualizadas = instalaciones.map(
      (objetoInstalacion, index) => {
        /*if (objetoInstalacion.id === objetoNuevo.id) {
          prueba.push(objetoNuevo);
        } else {
          prueba.push(objetoInstalacion);
        }*/
        index == objetoNuevo.id
          ? (objetoInstalacion = objetoNuevo)
          : instalaciones[index];
      }
    );
    console.log(instalacionesActualizadas);
    console.log(prueba);
    setInstalaciones(prueba);
    setAbrirEditar(false);
  };

  return (
    <Transition.Root show={abrirEditar} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setAbrirEditar}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setAbrirEditar(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <form onSubmit={handleEditar}>
                  <div className="sm:flex sm:flex-col sm:items-start">
                    <h3 className="block text-2xl font-bold">
                      Editar Instalación
                    </h3>
                    <div className="mt-3 text-center sm:mt-4 sm:text-left flex flex-grow gap-5 w-full">
                      {/* PRIMER CONTENEDOR */}
                      <div className="pb-3 w-full">
                        <label
                          htmlFor="nombre"
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
                            value={nombreEditar}
                            onChange={(e) => setNombreEditar(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 sm:ml-3 sm:w-auto"
                    >
                      Editar
                    </button>

                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setAbrirEditar(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalEditar;
