import { useState } from "react";

const opcionesPozo = [{ opicion: "Equipo" }, { opicion: "Componente" }];
const opcionesEmisiones = [
  { opicion: "Gramos" },
  { opicion: "Kilogramos" },
  { opicion: "Toneladas" },
];

const Editar = () => {
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };
  return (
    <>
      <div className="bg-neutral-50 h-screen">
        {/* Pagina titulo */}
        <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
              Editar
            </h1>
          </div>
        </div>

        <div className="rounded-md mx-8 my-8 p-6 shadow-2xl bg-white">
          <div className="px-4 sm:px-6 lg:px-8 w-full h-full">
            <form action="#" method="POST">
              {/* INPUTS */}
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-9 gap-6 border-b-2 border-gray-200 pb-5">
                  <div className="col-span-full sm:col-span-3 pb-5">
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nombre (ID)
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      autoComplete="given-name"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-full sm:col-span-3 pb-5">
                    <label
                      htmlFor="tipo-pozo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Tipo del pozo
                    </label>
                    <select
                      id="tipo-pozo"
                      name="tipo-pozo"
                      className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      {opcionesPozo.map((op) => (
                        <option key={generarId()}>{op.opicion}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-full sm:col-span-3 pb-5">
                    <label
                      htmlFor="fecha-identificacion"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Fecha de Identificacion
                    </label>
                    <input
                      type="date"
                      name="fecha-identificacion"
                      id="fecha-identificacion"
                      autoComplete="family-name"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <fieldset className="col-span-full sm:col-span-3 pb-5">
                    <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                      Estado del pozo, Equipo o Componente
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="en-ocupacion"
                          name="estado-pozo"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="en-ocupacion"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          En ocupacion
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="fuera-ocupacion"
                          name="estado-pozo"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="fuera-ocupacion"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Fuera de ocupacion
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="por-incorporar"
                          name="estado-pozo"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="por-incorporar"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Por incorporar
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <div className="col-span-full sm:col-span-3 pb-5">
                    <label
                      htmlFor="grados"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Grados
                    </label>
                    <input
                      type="text"
                      name="grados"
                      id="grados"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <label
                      htmlFor="psi"
                      className="block text-sm font-medium leading-6 text-gray-900 mt-2"
                    >
                      PSI
                    </label>
                    <input
                      type="text"
                      name="psi"
                      id="psi"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <fieldset className="col-span-full sm:col-span-3 pb-5">
                    <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                      Elementos utilizados
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="planos"
                          name="elementos-utilizados"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="planos"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Planos
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="revision-sitio"
                          name="elementos-utilizados"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="revision-sitio"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Revision en sitio
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="otro"
                          name="elementos-utilizados"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="otro"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Otro
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="col-span-full sm:col-span-3 pb-5">
                    <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                      Clasificacion (Tipo de emision de metano)
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="destruccion"
                          name="emision-metano"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="destruccion"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Destrucción
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="emiciones-fuga"
                          name="emision-metano"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="emiciones-fuga"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Emiciones por fuja
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="venteo-hidrocarburos"
                          name="emision-metano"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="venteo-hidrocarburos"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Venteo de Hidrocarburos
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <div className="col-span-full sm:col-span-3 pb-5">
                    <label
                      htmlFor="emision-metano"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Clasificacion (Tipo de emision de metano)
                    </label>
                    <select
                      id="tipo-pozo"
                      name="tipo-pozo"
                      className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      {opcionesEmisiones.map((op) => (
                        <option key={generarId()}>{op.opicion}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              {/* BOTON */}
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Editar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editar;
