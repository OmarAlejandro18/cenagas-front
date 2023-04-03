import ModalEditar from "./ModalEditar";

const TablaIntalacion = ({
  abrirEditar,
  setAbrirEditar,
  instalaciones,
  setInstalaciones,
  instalacion,
  setInstalacion,
}) => {
  const handleEditar = (e, dato) => {
    e.preventDefault();
    setAbrirEditar(true);
    setInstalacion(dato);
  };

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            Nombre
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
          >
            Acciones
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {instalaciones.map((dato) => (
          <tr key={dato.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
              {dato.nombre}
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
              <button
                className="inline-flex items-center justify-center p-3 mr-2 text-pink-100 transition-colors duration-150 bg-blue-500 rounded-full focus:shadow-outline hover:bg-blue-800"
                onClick={(e) => handleEditar(e, dato)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                <span className="pl-2 font-bold">Editar</span>
              </button>
              {abrirEditar && (
                <ModalEditar
                  abrirEditar={abrirEditar}
                  setAbrirEditar={setAbrirEditar}
                  instalacion={instalacion}
                  setInstalacion={setInstalacion}
                  instalaciones={instalaciones}
                  setInstalaciones={setInstalaciones}
                />
              )}

              <button
                className="inline-flex items-center justify-center p-3 mr-2 text-pink-100 transition-colors duration-150 bg-red-500 rounded-full focus:shadow-outline hover:bg-red-800"
                // onClick={handleEliminar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <span className="pl-2 font-bold">Eliminar</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaIntalacion;
