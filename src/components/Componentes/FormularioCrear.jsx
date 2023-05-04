import { useState } from "react";
import { Toaster, toast } from "sonner";

const FormularioCrear = ({ opcionesPozo, opcionesEmisiones, generarId }) => {
  const [nombreId, setNombreId] = useState("");
  const [tipoPozo, setTipoPozo] = useState("");
  const [fecha, setFecha] = useState("");
  const [estadoPozo, setEtadoPozo] = useState("");
  const [grados, setGrados] = useState("");
  const [psi, setPsi] = useState("");
  const [elementos, setElementos] = useState("");
  const [clasificacion, setClasificacion] = useState("");
  const [emisionMetano, setEmisionMetano] = useState("");
  const [error, setError] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();

    // validacion del formulario
    if (
      [
        nombreId,
        tipoPozo,
        fecha,
        estadoPozo,
        grados,
        psi,
        elementos,
        clasificacion,
        emisionMetano,
      ].includes("")
    ) {
      // console.log("hay al menos un campo vacio");
      setError(true);
      toast.error("Hay un elemento vacio");
    } else {
      setError(false);
      console.log(nombreId);
      console.log(tipoPozo);
      console.log(fecha);
      console.log(estadoPozo);
      console.log(grados);
      console.log(psi);
      console.log(elementos);
      console.log(clasificacion);
      console.log(emisionMetano);
      toast.success("CHECA CONSOLA");
      // console.log("todos llenos");
      setNombreId("");
      setTipoPozo("");
      setFecha("");
      setEtadoPozo("");
      setGrados("");
      setPsi("");
      setElementos("");
      setClasificacion("");
      setEmisionMetano("");
    }
  };

  return (
    <form onSubmit={handleSumbit}>
      {/* INPUTS  px-4 py-5 sm:p-6 */}
      <div className="bg-white">
        <div className="grid grid-cols-9 gap-3 border-gray-200">
          {/* Input de nombre de instalacion */}
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
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
              placeholder="Nombre"
              value={nombreId}
              onChange={(e) => setNombreId(e.target.value)}
            />
          </div>

          {/* Input de seleccion de "Tipo del pozo" */}
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
              className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
              value={tipoPozo}
              onChange={(e) => setTipoPozo(e.target.value)}
            >
              {opcionesPozo.map((op) => (
                <option
                  key={generarId()}
                  value={
                    op.opicion === "--Seleccione una opción--" ? "" : op.opicion
                  }
                >
                  {op.opicion}
                </option>
              ))}
            </select>
          </div>

          {/* Input de fecha */}
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
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          {/* Input de radio button "Estado del pozo, Equipo o Componente" */}
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
                  className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                  value="En ocupacion"
                  checked={estadoPozo === "En ocupacion"}
                  onChange={(e) => setEtadoPozo(e.target.value)}
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
                  className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                  value="Fuera de ocupacion"
                  checked={estadoPozo === "Fuera de ocupacion"}
                  onChange={(e) => setEtadoPozo(e.target.value)}
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
                  className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                  value="Por incorporar"
                  checked={estadoPozo === "Por incorporar"}
                  onChange={(e) => setEtadoPozo(e.target.value)}
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

          {/* Input de tipo text "PSI Y GRADOS" */}
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
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
              placeholder="Grados"
              value={grados}
              onChange={(e) => setGrados(e.target.value)}
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
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
              placeholder="PSI"
              value={psi}
              onChange={(e) => setPsi(e.target.value)}
            />
          </div>

          {/* Input de radio button "Elementos Utilizados" */}
          <fieldset className="col-span-full sm:col-span-3">
            <legend className="contents text-sm font-semibold leading-6 text-gray-900">
              Elementos utilizados
            </legend>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input
                  id="planos"
                  name="elementos-utilizados"
                  type="radio"
                  className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                  value="Planos"
                  onChange={(e) => setElementos(e.target.value)}
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
                  className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                  value="Revision en sitio"
                  onChange={(e) => setElementos(e.target.value)}
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
                  className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                  value="Otro"
                  onChange={(e) => setElementos(e.target.value)}
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

          {/* Input de radio button "Clasificacion (Tipo de emision de metano)" */}
          <fieldset className="col-span-full sm:col-span-3">
            <legend className="contents text-sm font-semibold leading-6 text-gray-900">
              Clasificacion (Tipo de emision de metano)
            </legend>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input
                  id="destruccion"
                  name="emision-metano"
                  type="radio"
                  className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                  value="Destrucción"
                  onChange={(e) => setClasificacion(e.target.value)}
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
                  className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                  value="Emiciones por fuga"
                  onChange={(e) => setClasificacion(e.target.value)}
                />
                <label
                  htmlFor="emiciones-fuga"
                  className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                >
                  Emiciones por fuga
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="venteo-hidrocarburos"
                  name="emision-metano"
                  type="radio"
                  className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                  value="Venteo de Hidrocarburos"
                  onChange={(e) => setClasificacion(e.target.value)}
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

          {/* Input de seleccion de clasificación */}
          <div className="col-span-full sm:col-span-3">
            <label
              htmlFor="emision-metano"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Clasificacion (Tipo de emision de metano)
            </label>
            <select
              id="tipo-pozo"
              name="tipo-pozo"
              className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
              value={emisionMetano}
              onChange={(e) => setEmisionMetano(e.target.value)}
            >
              {opcionesEmisiones.map((op) => (
                <option
                  key={generarId()}
                  value={
                    emisionMetano === "--Seleccione una opción--"
                      ? ""
                      : op.opicion
                  }
                >
                  {op.opicion}
                </option>
              ))}
            </select>
          </div>

          {/* Boton para enviar */}
          <div className="col-span-full sm:col-span-3 flex items-end justify-end">
            <button
              type="submit"
              className="transition duration-200 border inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-20 focus-visible:outline-none bg-green-500 text-white border-green-500 mr-2 shadow-md"
            >
              Añadir Nueva Instalación
            </button>
          </div>
          {error && <Toaster position="bottom-center" richColors />}
        </div>
      </div>
    </form>
  );
};

export default FormularioCrear;
