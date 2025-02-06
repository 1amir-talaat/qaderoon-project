import { useState, useEffect } from "react";
import LinksData from "../../data/LinksData";
import Dropdown from "./Dropdown";
import SocialMediaLinks from "./SocialMediaLinks";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 1);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const closeMenu = (hasSubItems) => {
    if (!hasSubItems) {
      setNavMenuOpen(false);
    }
  };

  return (
    <header
      className={`navbar sticky top-0 z-50 flex w-full justify-between bg-white px-6 py-2 transition-all duration-500 ease-out md:px-16 md:py-4 xl:px-24 xl:py-6 ${scrolled ? "shadow-md md:h-24" : "shadow-sm md:h-30"}`}>
      {/* Logo Section */}
      <div className="z-50 flex items-center justify-center">
        <Link to={"/"} className="flex flex-col items-center">
          <img
            loading="lazy"
            src="/images/logo.png"
            alt="Logo"
            className={`transition-transform duration-300 md:opacity-100 ${
              scrolled ?
                "h-14 w-14 scale-90 transform opacity-85 md:h-12 md:w-12"
              : "h-10 w-10 scale-100 transform opacity-100 md:h-16 md:w-16"
            }`}
          />
          <h1
            className={`logo ease-[cubic-bezier(0.25, 1, 0.5, 1)] bg-clip-text pt-2 text-transparent transition-all duration-300 md:max-h-[100px] md:scale-100 md:opacity-100 ${
              scrolled ?
                "max-h-0 scale-90 overflow-hidden opacity-0 md:text-base"
              : "max-h-[100px] scale-100 text-base opacity-100 md:text-xl"
            }`}>
            شباب قادرون
          </h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="z-50 hidden items-center justify-center space-x-5 text-lg font-black lg:flex">
        <ul className="flex space-x-10">
          {LinksData.map((item, index) => (
            <li key={index} className="group relative z-50">
              <Link
                to={item.link}
                className="flex items-center text-primary hover:text-[#262e30]">
                {item.label}
                {item.subItems && (
                  <FaCaretDown className="mt-1 mr-2 transition-all duration-400 group-hover:rotate-90" />
                )}
              </Link>
              {item.subItems && <Dropdown subItems={item.subItems} />}
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Media Links */}
      <SocialMediaLinks />

      {/* Mobile Nav */}
      <div className="z-50 flex cursor-pointer flex-col items-center justify-center lg:hidden">
        <div onClick={() => setNavMenuOpen(!navMenuOpen)} className="space-y-1">
          <div
            className={`h-1 w-10 rounded-full bg-[#262e30]/90 transition-all duration-300 ease-in-out ${navMenuOpen ? "translate-y-2 rotate-45" : ""}`}></div>
          <div
            className={`h-1 w-10 rounded-full bg-[#262e30]/90 transition-all duration-300 ease-in-out ${navMenuOpen ? "opacity-0" : ""}`}></div>
          <div
            className={`h-1 w-10 rounded-full bg-[#262e30]/90 transition-all duration-300 ease-in-out ${navMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}></div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full right-0 flex w-screen flex-col items-center space-y-4 overflow-hidden bg-white px-5 shadow-lg transition-all duration-500 ease-in-out ${
            navMenuOpen ? "max-h-96 p-4 opacity-100" : "max-h-0 p-0 opacity-0"
          }`}>
          <ul className="w-full space-y-3">
            <li>
              {LinksData.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className="group relative w-full">
                  <button
                    className="mt-3 flex w-full cursor-pointer items-center justify-between text-lg text-[#262e30] hover:text-primary"
                    onClick={() => {
                      if (item.subItems) {
                        toggleDropdown(item.label);
                        setNavMenuOpen(true);
                      } else {
                        closeMenu(false);
                      }
                    }}>
                    {item.label}
                    {item.subItems && (
                      <FaCaretDown
                        className={`mt-1 mr-2 transition-transform duration-400 ${
                          openDropdown === item.label ?
                            "rotate-180"
                          : "rotate-0"
                        }`}
                      />
                    )}
                  </button>
                  {item.subItems && (
                    <ul
                      className={`ease-[cubic-bezier(0.25, 1, 0.5, 1)] w-full overflow-hidden bg-white px-6 text-base transition-all duration-500 ${
                        openDropdown === item.label ?
                          "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                      }`}
                      style={{
                        transitionProperty: "max-height, opacity",
                      }}>
                      <li>
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            to={subItem.link}
                            key={subIndex}
                            onClick={() => {
                              setNavMenuOpen(false);
                              toggleDropdown(item.label);
                            }}
                            className="border-b text-gray-200">
                            <h1 className="mt-2 flex cursor-pointer items-center text-base text-[#414e52] hover:text-secondary">
                              {subItem.label}
                            </h1>
                          </Link>
                        ))}
                      </li>
                    </ul>
                  )}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
