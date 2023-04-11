import { Menu, Transition } from "@headlessui/react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import FormularioEditar from "./FormularioEditar";

const pages = [{ name: "Editar Instalacion", href: "#" }];

const opcionesPozo = [{ opicion: "Equipo" }, { opicion: "Componente" }];

const opcionesEmisiones = [
  { opicion: "Gramos" },
  { opicion: "Kilogramos" },
  { opicion: "Toneladas" },
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

const Editar = () => {
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };
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
          <div className="flex flex-wrap items-start col-span-12 intro-y sm:flex-nowrap">
            <div className="hidden mx-auto md:block text-slate-500">
              Editar Instalaciones
            </div>
          </div>
          <div className="rounded-md p-6 mt-2 bg-white">
            <FormularioEditar
              opcionesPozo={opcionesPozo}
              opcionesEmisiones={opcionesEmisiones}
              generarId={generarId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editar;
