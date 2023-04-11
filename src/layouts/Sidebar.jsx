import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import BarraResponsive from "../components/BarraResponsive";
import BarraLateral from "../components/BarraLateral";

const navigation = [
  {
    name: "Instalaciones",
    href: "/dashboard",
    icon: HomeIcon,
    current: true,
  },
  {
    name: "Componentes",
    icon: UsersIcon,
    current: false,
    children: [
      { name: "Crear", href: "/dashboard/crear" },
      { name: "Editar", href: "/dashboard/editar" },
      { name: "Listar", href: "/dashboard/listar" },
    ],
  },
  {
    name: "Anexo 2",
    href: "/dashboard/anexo2",
    icon: FolderIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentNavItem, setCurrentNavItem] = useState(
    navigation.find((item) => item.current)?.name
  );
  return (
    <>
      <div>
        <BarraResponsive
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          classNames={classNames}
          navigation={navigation}
          currentNavItem={currentNavItem}
          setCurrentNavItem={setCurrentNavItem}
        />

        {/* Barra lateral estática para escritorio */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Componente de barra lateral, intercambie este elemento con otra barra lateral si lo desea */}
          <BarraLateral
            classNames={classNames}
            navigation={navigation}
            currentNavItem={currentNavItem}
            setCurrentNavItem={setCurrentNavItem}
          />
        </div>

        {/* MENU RESPOSIVO */}
        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-[#CF1350] px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            Dashboard
          </div>
          <button
            type="button"
            className="-m-2.5 p-2.5 text-white lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <main className="py-8  lg:pl-72 bg-[#CF1350]">
          <div className="px-2 lg:pl-0 lg:pr-4">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default Sidebar;
