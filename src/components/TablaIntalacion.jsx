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
    <table className="w-full text-left border-spacing-y-[10px] border-separate -mt-2">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="font-medium px-5 py-3 border-b-0 whitespace-nowrap text-left"
          >
            Nombre
          </th>
          <th
            scope="col"
            className="font-medium px-5 py-3 text-center border-b-0 whitespace-nowrap"
          >
            Acciones
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {instalaciones.map((dato) => (
          <tr key={dato.id}>
            <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-white border-b-0 shadow-[20px_3px_20px_#0000000b]">
              {dato.nombre}
            </td>
            <td className="px-5 first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto">
              <div className="flex items-center justify-center">
                <a
                  className="flex items-center mr-3 text-blue-500 hover:cursor-pointer hover:text-blue-700"
                  onClick={(e) => handleEditar(e, dato)}
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
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  Editar
                </a>
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
                <a
                  className="flex items-center text-red-500 hover:cursor-pointer hover:text-red-700"
                  // onClick={(e) => handleEditar(e, dato)}
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  Eliminar
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaIntalacion;
