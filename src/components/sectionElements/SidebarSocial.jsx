import { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import { Cog } from "lucide-react";
import { Store } from "lucide-react";
import { Factory } from "lucide-react";
import { Scale } from "lucide-react";
import { Cpu } from "lucide-react";
import { MessageCircleMore } from "lucide-react";

import "primeicons/primeicons.css";
import {
  HelpCircle,
  HomeIcon,
  ServerIcon,
  UserSearch,
  AlignJustify,
} from "lucide-react";
import { Link } from "react-scroll";
import content from "../../content/content";
import ButtonWithIconNavbar from "../interactives/ButtonWithIconNavbar";

export default function SidebarSocial({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(true);
  const [reportsSubmenuVisible, setReportsSubmenuVisible] = useState(false);
  const [revenueSubmenuVisible, setRevenueSubmenuVisible] = useState(false);
  const [aplicationSubmenuVisible, setAplicationSubmenuVisible] =
    useState(true);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="inset-0 z-10 flex">
      <div
        className={`${
          visible ? "block" : "hidden"
        } fixed inset-0 bg-darker opacity-50 lg:hidden`}
        onClick={toggleSidebar}
      />

      <div className="flex justify-center card">
        {/* <<<<<<<<<<<<<<< Cor do hamburger >>>>>>>>>>>>>> */}

        <AlignJustify
          className={`p-button-rounded p-button-outlined lg:hidden ${
            colorMode
              ? scrolled
                ? "text-primary"
                : "text-primary"
              : "text-primary"
          } w-[40px] h-[40px]`}
          onClick={() => setVisible(true)}
        />

        {/* <<<<<<<<<<<<<<< Cor do hamburger >>>>>>>>>>>>>> */}

        <Sidebar
          visible={visible}
          className="w-[280px]"
          onHide={() => setVisible(false)}
          content={({ closeIconRef, hide }) => (
            <div
              id="app-sidebar-2"
              className={`${
                colorMode
                  ? "bg-bgSectionDark"
                  : "absolute top-0 left-0 flex-shrink-0 h-screen border-r-[1px] select-none bg-bgSectionDark surface-section lg:hidden lg:static z-1 surface-border border-neutral-700"
              }`}
              style={{ width: "280px" }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between flex-shrink-0 px-4 pt-6 ">
                  <span className="inline-flex items-center gap-2">
                    <img
                      src={content.texts.navbar.solidLogo.img}
                      alt={content.texts.navbar.solidLogo.alt}
                      className="w-auto h-auto p-[5px]"
                    />
                  </span>
                  <span>
                    <Button
                      type="button"
                      ref={closeIconRef}
                      onClick={(e) => hide(e)}
                      icon="pi pi-times"
                      rounded
                      outlined
                      className={`${
                        colorMode
                          ? "text-primary"
                          : "h-2rem w-2rem p-[5px] text-white"
                      }`}
                    ></Button>
                  </span>
                </div>
                <div className="h-screen overflow-y-auto">
                  <hr className="m-5 mx-3 border-top-1 surface-border border-primary" />
                  <ul className="p-3 m-0 list-none">
                    <li>
                      {submenuVisible && (
                        <ul
                          className={`${
                            colorMode
                              ? "text-primary"
                              : "p-0 m-0 -mt-[16px] overflow-hidden font-medium text-white"
                          } list-none text-paragraph3 font-mainFont`}
                        >
                          <li>
                            <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                              <HomeIcon />
                              <span className="ml-[8px] ">
                                <Link
                                  to="home"
                                  className="align-text-top cursor-pointer"
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  offset={-100}
                                  href="#"
                                >
                                  {content.texts.navbar.menuItems[0]}
                                </Link>
                              </span>
                              <Ripple />
                            </a>
                          </li>
                          <ul className="p-0 m-0 list-none">
                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <MessageCircleMore />
                                <span className="ml-[8px]">
                                  <Link
                                    to="work"
                                    className="align-text-top cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    href="#"
                                  >
                                    {content.texts.navbar.menuItems[1]}
                                  </Link>
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <Cog />
                                <span className="ml-[8px]">
                                  <Link
                                    to="industry"
                                    className="align-text-top cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-50}
                                    href="#"
                                  >
                                    {content.texts.navbar.menuItems[2]}
                                  </Link>
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <Cpu />
                                <span className="ml-[8px]">
                                  <Link
                                    to="cores"
                                    className="align-text-top cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-50}
                                    href="#"
                                  >
                                    {content.texts.navbar.menuItems[3]}
                                  </Link>
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <Scale />
                                <span className="ml-[8px]">
                                  <Link
                                    to="products"
                                    className="align-text-top cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-50}
                                    href="#"
                                  >
                                    {content.texts.navbar.menuItems[4]}
                                  </Link>
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <UserSearch />
                                <span className="ml-[8px]">
                                  <Link
                                    to="about"
                                    className="align-text-top cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-50}
                                    href="#"
                                  >
                                    {content.texts.navbar.menuItems[5]}
                                  </Link>
                                </span>
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        </ul>
                      )}
                    </li>

                    {/* Início Foto do About */}
                  </ul>
                </div>
              </div>
            </div>
          )}
        ></Sidebar>
      </div>
    </div>
  );
}
