import "./css/Navbar.css";
import "./css/Hero.css";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "#hero", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Experiences", href: "#experience", current: false },
  { name: "Projects", href: "#project", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Footer", href: "#footer", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Disclosure
      as="nav"
      className={`navbar z-50 max-md:backdrop-blur-[15px]  ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      {({ open }) => (
        <>
          <div className="">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex sm:items-center justify-between ">
                <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center sm:justify-center  md:items-stretch ">
                  <div className="flex flex-shrink-0 sm:items-center ">
                    <h2 className="text-[24px] font-semibold max-sm:font-normal text-white">
                      DICO AJI
                    </h2>
                  </div>
                  <div className="hidden md:ml-6 md:block w-full backdrop-blur-[15px]">
                    <div className="ml-auto"></div>
                    <div className="flex space-x-4 menu_navbar  content-end w-full">
                      <div className="mr-auto"></div>
                      <div
                        className={`menu_nav rounded-full space-x-9  shadow-sm z-50 max-md:backdrop-blur-[15px] ${
                          isScrolled ? "scrolled" : ""
                        }`}
                      >
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "hover:bg-custom-gradient  text-white rounded-[40px] py-[15px] px-[15px] "
                                : " hover:bg-custom-gradient  rounded-[40px] hover:text-white py-[15px] px-[15px]",
                              " px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "hover:bg-custom-gradient  text-white rounded-[40px] text-center"
                        : "hover:bg-custom-gradient hover:text-white rounded-[40px] text-center",
                      "block  px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
