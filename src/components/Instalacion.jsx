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
    <div className="bg-slate-100 rounded-3xl">
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
          <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
              <button
                className="transition duration-200 border inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-20 focus-visible:outline-none bg-green-500 text-white border-green-500 mr-2 shadow-md"
                onClick={() => setAbrirCrear(true)}
              >
                Añadir Nueva Instalación
              </button>
              {abrirCrear && (
                <ModalCrear
                  abrirCrear={abrirCrear}
                  setAbrirCrear={setAbrirCrear}
                  instalaciones={instalaciones}
                  setInstalaciones={setInstalaciones}
                />
              )}
              <div className="hidden mx-auto md:block text-slate-500">
                Mostrando 1 a 5 de 150 entradas
              </div>
              <div className="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
                <div className="relative w-56 text-slate-500">
                  <input
                    className="transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 w-56 pr-10 !box"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-1.5 absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-span-12 intro-y h-[57vh]">
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
          <div className="flex flex-1 justify-between">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            >
              Atras
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            >
              Siguiente
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instalacion;
