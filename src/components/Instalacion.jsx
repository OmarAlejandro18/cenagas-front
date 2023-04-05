import { Fragment, useState } from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

import ModalCrear from "./ModalCrear";
import TablaInstalacion from "./TablaIntalacion";
import { Menu, Transition } from "@headlessui/react";

const pages = [
  { name: "Instalaciones", href: "#", current: false },
  // { name: "Project Nero", href: "#", current: true },
];

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Tu Perfil", href: "#" },
  { name: "Configuración", href: "#" },
  { name: "Cerrar sesión", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Instalacion = () => {
  const [abrirCrear, setAbrirCrear] = useState(false);
  const [abrirEditar, setAbrirEditar] = useState(false);
  const [instalaciones, setInstalaciones] = useState([]);
  const [instalacion, setInstalacion] = useState({});

  return (
    <div className="bg-slate-100 rounded-3xl h-[90vh]">
      {/* Page title & actions */}
      <div className="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1 border-b border-gray-200 pb-4">
          {/* Navegacion Interna */}
          <nav className="flex justify-between" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <a className="text-[#8A0C35]/[0.8]">
                    <HomeIcon
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              {pages.map((page) => (
                <li key={page.name}>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="h-5 w-5 flex-shrink-0 text-[#8A0C35]/[0.8]"
                      aria-hidden="true"
                    />
                    <a
                      href={page.href}
                      className="ml-4 text-sm font-medium text-[#8A0C35]/[0.8]"
                      aria-current={page.current ? "page" : undefined}
                    >
                      {page.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
            {/* Perfil */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8A0C35] focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#8A0C35] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? "bg-[#c2104c]" : "",
                            "block px-4 py-2 text-sm text-white"
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </nav>

          {/* <!-- TABLA --> */}
          {/* <TablaIntalacion /> */}
          {/* <div className="rounded-md mx-8 my-8 p-6 bg-white">
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
                    onClick={() => setAbrirCrear(true)}
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
                  {abrirCrear && (
                    <ModalCrear
                      abrirCrear={abrirCrear}
                      setAbrirCrear={setAbrirCrear}
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
                        abrirEditar={abrirEditar} //La primera vez esta en false cuando se da click true
                        setAbrirEditar={setAbrirEditar}
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
          </div> */}
          <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
              <button class="transition duration-200 border inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-20 focus-visible:outline-none bg-green-500 text-white border-green-500 mr-2 shadow-md">
                Añadir Nueva Instalación
              </button>
              <div class="hidden mx-auto md:block text-slate-500">
                Mostrando 1 a 10 de 150 entradas
              </div>
              <div class="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
                <div class="relative w-56 text-slate-500">
                  <input
                    class="transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 w-56 pr-10 !box"
                    type="text"
                    placeholder="Buscar Instalación..."
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="stroke-1.5 absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
            </div>
            <div class="col-span-12 overflow-auto intro-y lg:overflow-visible">
              <table class="w-full text-left border-spacing-y-[10px] border-separate -mt-2">
                <thead></thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instalacion;
