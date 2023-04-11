import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  Bars4Icon,
  ChartBarIcon,
  ChevronUpDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const BarraLateral = ({
  classNames,
  navigation,
  currentNavItem,
  setCurrentNavItem,
}) => {
  return (
    <>
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#CF1350] px-6">
        <div className="flex h-16 shrink-0 items-center pt-10">
          <img
            className="h-16 mx-auto"
            src="../src/assets/LOGO IKTAN STRATEGIES blanco.png"
            alt="Your Company"
          />
        </div>
        <div className="w-full h-px bg-white/[0.8] z-10 relative my-3"></div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    {!item.children ? (
                      <Link
                        className={classNames(
                          item.name === currentNavItem
                            ? "bg-slate-100 text-[#8A0C35] before:content-[''] before:w-[30px] before:h-[30px] before:-mt-[30px] before:rotate-90 before:scale-[1.04] before:bg-[length:100%] before:bg-[url('/img/curva.svg')] before:absolute before:top-0 before:right-0 before:-mr-[15.5px] after:content-[''] after:w-[30px] after:h-[30px] after:mt-[50px] after:scale-[1.04] after:bg-[length:100%] after:bg-[url('/img/curva.svg')] after:absolute after:top-0 after:right-0 after:-mr-[15.5px]"
                            : "text-slate-200 hover:text-[#8A0C35] hover:bg-slate-100",
                          "group cursor-pointer h-[50px] flex items-center gap-x-3 pl-5 mb-1 relative rounded-full z-10"
                        )}
                        onClick={() => setCurrentNavItem(item.name)}
                        to={item.href}
                      >
                        <div
                          className={`${
                            item.name === currentNavItem
                              ? "before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:-mr-4 before:w-12 before:h-full before:bg-slate-100"
                              : ""
                          }`}
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
                        </div>
                        {item.name}
                      </Link>
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
                            <Disclosure.Panel as="ul" className="mt-1 pl-8">
                              {item.children.map((subItem) => (
                                <li key={subItem.name}>
                                  {/* 44px */}
                                  <Link
                                    to={subItem.href}
                                    className={classNames(
                                      subItem.name === currentNavItem
                                        ? "bg-slate-100 text-[#8A0C35] before:content-[''] before:w-[30px] before:h-[30px] before:-mt-[30px] before:rotate-90 before:scale-[1.04] before:bg-[length:100%] before:bg-[url('/img/curva.svg')] before:absolute before:top-0 before:right-0 before:-mr-[15.5px] after:content-[''] after:w-[30px] after:h-[30px] after:mt-[50px] after:scale-[1.04] after:bg-[length:100%] after:bg-[url('/img/curva.svg')] after:absolute after:top-0 after:right-0 after:-mr-[15.5px]"
                                        : "text-slate-200 hover:text-[#8A0C35] hover:bg-slate-100",
                                      "group cursor-pointer h-[50px] flex items-center gap-x-3 pl-5 mb-1 relative rounded-full z-10"
                                    )}
                                    onClick={() =>
                                      setCurrentNavItem(subItem.name)
                                    }
                                  >
                                    <div
                                      className={`${
                                        subItem.name === currentNavItem
                                          ? "before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:-mr-4 before:w-12 before:h-full before:bg-slate-100"
                                          : ""
                                      }`}
                                    >
                                      {subItem.name}
                                    </div>
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
    </>
  );
};

export default BarraLateral;
