"use client";

import Link from "next/link";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import logo from "@images/fumiwo-logo.png";
import logoColor from "@images/fmw-logo-color.png";
import dropdownImage from "@images/dropdown-image.png";
import { PrimaryButton } from "./Buttons";
import { useRouter, usePathname } from "next/navigation";
import { SideBar } from "./SideBar";
import { H5, P } from "./Typography";
import Divider from "./Divider";

// Dropdown.js
const Dropdown = () => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Options
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 hover:opacity-100 focus:outline-none group-hover:opacity-100"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            Account settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-1"
          >
            Support
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-2"
          >
            License
          </a>
        </div>
      </div>
    </div>
  );
};

type TNav = {
  title: string;
  link: string;
  description: string;
  image: StaticImageData | ReactNode;
};

export type TNavLinks = TNav & {
  dropDownLink?: TNav[];
};

export const navLinks: TNavLinks[] = [
  {
    title: "Solutions",
    link: "/solutions",
    description:
      "Explore our range of powerful solutions that resonate with your various business requirements.",
    image: dropdownImage,
    dropDownLink: [
      {
        title: "Credit scoring",
        link: "/solutions/credit-risk-score",
        description: "Make better lending decisions with credit scoring",
        image: (
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3 13C0.582029 13 -0.00673294 12.4165 0.0649452 11.7022C0.191566 10.4402 0.502426 9.20118 0.989567 8.02512C1.64288 6.44788 2.60045 5.01477 3.80761 3.80761C5.01477 2.60045 6.44788 1.64288 8.02512 0.989566C9.60235 0.336255 11.2928 -7.46234e-08 13 0C14.7072 7.46234e-08 16.3977 0.336255 17.9749 0.989566C19.5521 1.64288 20.9852 2.60045 22.1924 3.80761C23.3996 5.01477 24.3571 6.44788 25.0104 8.02512C25.4976 9.20118 25.8084 10.4402 25.9351 11.7022C26.0067 12.4165 25.418 13 24.7 13C23.982 13 23.4084 12.4157 23.3189 11.7034C23.2032 10.7831 22.9648 9.88056 22.6083 9.02009C22.0857 7.75831 21.3196 6.61182 20.3539 5.64609C19.3882 4.68036 18.2417 3.9143 16.9799 3.39165C15.7181 2.869 14.3657 2.6 13 2.6C11.6343 2.6 10.2819 2.869 9.02009 3.39165C7.75831 3.9143 6.61182 4.68036 5.64609 5.64609C4.68036 6.61182 3.9143 7.75831 3.39165 9.02009C3.03524 9.88055 2.79678 10.7831 2.68114 11.7034C2.59163 12.4157 2.01797 13 1.3 13Z"
              fill="currentColor"
            />
            <circle cx="11.3241" cy="17.8202" r="3.44125" fill="currentColor" />
            <path
              d="M19.0494 10.24L11.509 20.5526L8.29751 17.1396L19.0494 10.24Z"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        title: "Fraud",
        link: "/solutions/fraud-insights",
        description:
          "Identify potentially fraudulent borrowers with our solution",
        image: (
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.8281 8.71632C23.8281 16.8515 19.0556 22.4737 12.6953 24.0953C6.33499 22.4737 1.5625 16.8515 1.5625 8.71632C1.5625 7.0269 1.76832 5.39531 2.15144 3.85587C3.25813 4.62693 4.60361 5.07906 6.05469 5.07906C9.26867 5.07906 10.9254 0.404297 12.6953 0.404297C14.5754 0.404297 16.122 5.07906 19.3359 5.07906C20.787 5.07906 22.1325 4.62693 23.2392 3.85587C23.6223 5.39531 23.8281 7.0269 23.8281 8.71632Z"
              fill="#080341"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.5469 14.5767C9.37101 13.465 8.59375 11.6647 8.59375 10.1563C8.59375 7.78315 10.5175 5.85938 12.8906 5.85938C15.2637 5.85938 17.1875 7.78315 17.1875 10.1563C17.1875 11.6647 16.4102 13.465 15.2344 14.5767V17.1875C15.2344 17.1875 13.6455 17.7534 12.8906 17.7534C12.1357 17.7534 10.5469 17.1875 10.5469 17.1875V14.5767Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.76562 16.7969L12.8898 17.5305L9.76562 19.1406V16.7969Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.0473 16.7969L12.8906 17.5199L16.0473 19.1406"
              fill="white"
            />
            <path
              d="M9.375 13.2812C10.0222 13.2812 10.5469 12.7566 10.5469 12.1094C10.5469 11.4622 10.0222 10.9375 9.375 10.9375C8.72779 10.9375 8.20312 11.4622 8.20312 12.1094C8.20312 12.7566 8.72779 13.2812 9.375 13.2812Z"
              fill="white"
            />
            <path
              d="M16.4062 13.2812C17.0535 13.2812 17.5781 12.7566 17.5781 12.1094C17.5781 11.4622 17.0535 10.9375 16.4062 10.9375C15.759 10.9375 15.2344 11.4622 15.2344 12.1094C15.2344 12.7566 15.759 13.2812 16.4062 13.2812Z"
              fill="white"
            />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Company",
    link: "/about-us",
    description: "",
    image: dropdownImage,
  },
  {
    title: "Resources",
    link: "#",
    description:
      "Explore our range of powerful solutions that resonate with your various business requirements.",
    image: dropdownImage,
    dropDownLink: [
      {
        title: "Blog",
        link: "#",
        description: "Stay up to date with latest articles from Fumiwo",
        image: (
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3 13C0.582029 13 -0.00673294 12.4165 0.0649452 11.7022C0.191566 10.4402 0.502426 9.20118 0.989567 8.02512C1.64288 6.44788 2.60045 5.01477 3.80761 3.80761C5.01477 2.60045 6.44788 1.64288 8.02512 0.989566C9.60235 0.336255 11.2928 -7.46234e-08 13 0C14.7072 7.46234e-08 16.3977 0.336255 17.9749 0.989566C19.5521 1.64288 20.9852 2.60045 22.1924 3.80761C23.3996 5.01477 24.3571 6.44788 25.0104 8.02512C25.4976 9.20118 25.8084 10.4402 25.9351 11.7022C26.0067 12.4165 25.418 13 24.7 13C23.982 13 23.4084 12.4157 23.3189 11.7034C23.2032 10.7831 22.9648 9.88056 22.6083 9.02009C22.0857 7.75831 21.3196 6.61182 20.3539 5.64609C19.3882 4.68036 18.2417 3.9143 16.9799 3.39165C15.7181 2.869 14.3657 2.6 13 2.6C11.6343 2.6 10.2819 2.869 9.02009 3.39165C7.75831 3.9143 6.61182 4.68036 5.64609 5.64609C4.68036 6.61182 3.9143 7.75831 3.39165 9.02009C3.03524 9.88055 2.79678 10.7831 2.68114 11.7034C2.59163 12.4157 2.01797 13 1.3 13Z"
              fill="#011456"
            />
            <circle cx="11.3241" cy="17.8202" r="3.44125" fill="#011456" />
            <path
              d="M19.0494 10.24L11.509 20.5526L8.29751 17.1396L19.0494 10.24Z"
              fill="#011456"
            />
          </svg>
        ),
      },
      // {
      // 	title: 'Developers',
      // 	link: '#',
      // 	description: 'Explore our easy and concise developer documentations',
      // 	image: <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      // 		<path fill-rule="evenodd" clip-rule="evenodd" d="M23.8281 8.71632C23.8281 16.8515 19.0556 22.4737 12.6953 24.0953C6.33499 22.4737 1.5625 16.8515 1.5625 8.71632C1.5625 7.0269 1.76832 5.39531 2.15144 3.85587C3.25813 4.62693 4.60361 5.07906 6.05469 5.07906C9.26867 5.07906 10.9254 0.404297 12.6953 0.404297C14.5754 0.404297 16.122 5.07906 19.3359 5.07906C20.787 5.07906 22.1325 4.62693 23.2392 3.85587C23.6223 5.39531 23.8281 7.0269 23.8281 8.71632Z" fill="#080341" />
      // 		<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5469 14.5767C9.37101 13.465 8.59375 11.6647 8.59375 10.1563C8.59375 7.78315 10.5175 5.85938 12.8906 5.85938C15.2637 5.85938 17.1875 7.78315 17.1875 10.1563C17.1875 11.6647 16.4102 13.465 15.2344 14.5767V17.1875C15.2344 17.1875 13.6455 17.7534 12.8906 17.7534C12.1357 17.7534 10.5469 17.1875 10.5469 17.1875V14.5767Z" fill="white" />
      // 		<path fill-rule="evenodd" clip-rule="evenodd" d="M9.76562 16.7969L12.8898 17.5305L9.76562 19.1406V16.7969Z" fill="white" />
      // 		<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0473 16.7969L12.8906 17.5199L16.0473 19.1406" fill="white" />
      // 		<path d="M9.375 13.2812C10.0222 13.2812 10.5469 12.7566 10.5469 12.1094C10.5469 11.4622 10.0222 10.9375 9.375 10.9375C8.72779 10.9375 8.20312 11.4622 8.20312 12.1094C8.20312 12.7566 8.72779 13.2812 9.375 13.2812Z" fill="white" />
      // 		<path d="M16.4062 13.2812C17.0535 13.2812 17.5781 12.7566 17.5781 12.1094C17.5781 11.4622 17.0535 10.9375 16.4062 10.9375C15.759 10.9375 15.2344 11.4622 15.2344 12.1094C15.2344 12.7566 15.759 13.2812 16.4062 13.2812Z" fill="white" />
      // 	</svg>
      // }
    ],
  },
];

const NavBar = ({ dark }: { dark?: boolean }) => {
  const [toggleDropDownName, setToggleDropDownName] = useState("");
  const pathname = usePathname();
  const sideBarRef = useRef<HTMLDivElement>(null);

  const toggleName = (name: string) => {
    setToggleDropDownName((prev) => (prev === name ? "" : name));
    // setToggleDropDownName(prev => prev === name ? '' : name)
  };

  const toggleSideBar = () => {
    sideBarRef.current?.classList.toggle("!translate-x-[0%]");
  };

  // if (window !== undefined) {
  // 	window.addEventListener('click', () => {
  // 		setToggleDropDownName('')
  // 	})
  // }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      setToggleDropDownName("");
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <SideBar
        ref={sideBarRef}
        toggleSideBar={toggleSideBar}
        navLinks={navLinks}
      />
      <nav
        onMouseOut={() => setToggleDropDownName("")}
        className={`transition ${dark ? "bg-primaryBlack text-white" : "bg-white text-linkGray"}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="container mx-auto px-6 sm:px-0"
        >
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <Image
                src={dark ? logo : logoColor}
                alt="logo"
                className="max-w-[258px] cursor-pointer"
              />
            </Link>

            <ul
              className={`hidden space-x-8 md:flex ${dark ? "text-linkGray" : "text-primaryBlack"}`}
            >
              {navLinks.map((navLink, index) => (
                <li
                  onMouseOver={() => toggleName(navLink.title)}
                  key={index}
                  className="relative cursor-pointer"
                >
                  <div
                    className={`space-x-2 ${dark ? "hover:text-white" : "text-paraGray hover:text-black"} ${pathname.includes(navLink.link) ? "!text-primaryGreen" : ""}`}
                  >
                    <Link href={navLink.dropDownLink ? "#" : navLink.link}>
                      {navLink.title}
                    </Link>
                    {navLink.dropDownLink && (
                      <button>
                        <svg
                          width="14"
                          height="9"
                          viewBox="0 0 14 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.5 8.40625L13.5938 2.34375C13.875 2.03125 13.875 1.5625 13.5938 1.28125L12.875 0.5625C12.5938 0.28125 12.125 0.28125 11.8125 0.5625L7 5.375L2.15625 0.5625C1.84375 0.28125 1.375 0.28125 1.09375 0.5625L0.375 1.28125C0.09375 1.5625 0.09375 2.03125 0.375 2.34375L6.46875 8.40625C6.75 8.6875 7.21875 8.6875 7.5 8.40625Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {navLink.dropDownLink && (
                    <div className="absolute -left-1/2 top-6 z-10 -translate-x-1/3 pt-5">
                      <div
                        className={`flex cursor-default gap-6 rounded-md bg-white px-10 py-8 shadow-optionShadow ${[
                          toggleDropDownName === navLink.title
                            ? "block"
                            : "hidden",
                          navLink.title !== "Resources"
                            ? "min-w-[810px]"
                            : "min-w-[372px]",
                        ].join(" ")}`}
                      >
                        {navLink.title !== "Resources" && (
                          <section className="flex-1 items-center">
                            <H5 className="!text-[28px]">{navLink.title}</H5>
                            <Divider height={4} />
                            <P className="text-justify !text-base">
                              Explore Fumiwo’s range of powerful end-to-end
                              solutions that resonate with your various business
                              requirements.
                            </P>
                            {/* <Divider height={18} /> */}
                          </section>
                        )}
                        <section className="flex-1 space-y-7">
                          {navLink.dropDownLink.map((item, index) => (
                            <div key={index} className="">
                              <Link
                                key={index}
                                href={item.link}
                                className="flex flex-col gap-6 text-textHeader duration-200 hover:text-primaryGreen md:flex-row"
                              >
                                <div className="space-y-1">
                                  <h6 className="text-2xl font-semibold">
                                    {item.title}
                                  </h6>
                                  <P className="!text-base">
                                    {item.description}
                                  </P>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </section>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <Link href="/contact-us" className="hidden lg:block">
              <PrimaryButton>Contact Us</PrimaryButton>
            </Link>
            <button onClick={toggleSideBar} className="md:hidden">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H21M3 12H21M3 18H21"
                  stroke="#BAB7B7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* <div className="flex items-center justify-center h-screen bg-gray-100">
				<Dropdown />
			</div> */}
    </>
  );
};

export default NavBar;
