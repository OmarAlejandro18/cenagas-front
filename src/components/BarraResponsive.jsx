import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const BarraResponsive = ({
  sidebarOpen,
  setSidebarOpen,
  classNames,
  navigation,
  currentNavItem,
  setCurrentNavItem,
}) => {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Componente de barra lateral */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#CF1350] px-6 pb-2">
                  <div className="flex h-16 shrink-0 items-center">
                    <img
                      className="h-16 w-auto"
                      src="../src/assets/LOGO IKTAN STRATEGIES blanco.png"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              {!item.children ? (
                                <a
                                  className={classNames(
                                    item.name === currentNavItem
                                      ? "bg-slate-100 text-[#8A0C35]"
                                      : "text-slate-200 hover:text-[#8A0C35] hover:bg-slate-100",
                                    "group cursor-pointer h-[50px] flex items-center gap-x-3 pl-5 mb-1 relative rounded-full z-10"
                                  )}
                                  onClick={() => setCurrentNavItem(item.name)}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.name === currentNavItem
                                        ? "text-[#8A0C35]"
                                        : "text-slate-200 group-hover:text-[#8A0C35]",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              ) : (
                                <Disclosure as="div">
                                  {({ open }) => (
                                    <>
                                      <Disclosure.Button
                                        className={classNames(
                                          item.name === currentNavItem
                                            ? "bg-slate-100 text-[#8A0C35]"
                                            : "text-slate-200 hover:text-[#8A0C35] hover:bg-slate-100",
                                          "group cursor-pointer h-[50px] w-full flex items-center gap-x-3 pl-5 mb-1 relative rounded-full z-10"
                                        )}
                                      >
                                        <item.icon
                                          className={classNames(
                                            item.name === currentNavItem
                                              ? "text-[#8A0C35]"
                                              : "text-slate-200 group-hover:text-[#8A0C35]",
                                            "h-6 w-6 shrink-0"
                                          )}
                                          aria-hidden="true"
                                        />
                                        {item.name}
                                        <ChevronRightIcon
                                          className={classNames(
                                            open
                                              ? "transition ease-in duration-100 ml-auto mr-5 hidden xl:block transform rotate-90"
                                              : "",
                                            "text-slate-200 group-hover:text-[#8A0C35] ml-auto h-5 w-5 shrink-0 mr-5"
                                          )}
                                          aria-hidden="true"
                                        />
                                      </Disclosure.Button>
                                      <Disclosure.Panel
                                        as="ul"
                                        className="mt-1 pl-8"
                                      >
                                        {item.children.map((subItem) => (
                                          <li key={subItem.name}>
                                            {/* 44px */}
                                            <Link
                                              to={subItem.href}
                                              className={classNames(
                                                subItem.name === currentNavItem
                                                  ? "bg-slate-100 text-[#8A0C35]"
                                                  : "text-slate-200 hover:text-[#8A0C35] hover:bg-slate-100",
                                                "group cursor-pointer h-[50px] flex items-center gap-x-3 pl-5 mb-1 relative rounded-full z-10"
                                              )}
                                              onClick={() =>
                                                setCurrentNavItem(subItem.name)
                                              }
                                            >
                                              {subItem.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </Disclosure.Panel>
                                    </>
                                  )}
                                </Disclosure>
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default BarraResponsive;
