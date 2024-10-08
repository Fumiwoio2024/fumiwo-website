import React, { forwardRef, useRef, useState } from 'react'
import { TNavLinks } from './NavBar';
import Accordion from './Accordion';
import Link from 'next/link';
import logoColor from '@images/fmw-logo-color.png'
import Image from 'next/image';
import Divider from './Divider';
import { PrimaryButton } from "./Buttons";

type TSideBar = {
  toggleSideBar: () => void;
  navLinks: TNavLinks[];
};

export const SideBar = forwardRef<HTMLDivElement, TSideBar>(
  ({ toggleSideBar, navLinks }, ref) => {
    const [selected, setSelected] = useState("");

    return (
      <nav
        ref={ref}
        className="right- fixed top-0 z-10 flex h-screen w-screen translate-x-[100%] flex-col justify-between bg-white px-6 py-5 pb-10 shadow-xl transition lg:hidden"
      >
        <div>
          <div className="flex items-baseline justify-between">
            <Link href="/">
              <Image
                src={logoColor}
                alt="logo"
                className="max-w-[158px] cursor-pointer"
              />
            </Link>

            <button onClick={toggleSideBar} className="px-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.88281 20.1165L13.9996 13.9996L20.1165 20.1165M20.1165 7.88281L13.9985 13.9996L7.88281 7.88281"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <Divider height={16} />

          <ul
            onClick={(e) => e.stopPropagation()}
            className="w-fit text-paraGray"
          >
            {navLinks.map((link, index) =>
              link.dropDownLink ? (
                <Accordion
                  small
                  name={link.title}
                  headerTextComp={
                    <li className="text-lg font-normal text-paraGray">
                      {link.title}
                    </li>
                  }
                  selected={selected}
                  setSelected={setSelected}
                  key={index}
                >
                  <div className="text-sm">
                    {link.dropDownLink.map((link, index) => (
                      <li
                        onClick={toggleSideBar}
                        key={index}
                        className="my- rounded px-4 py-2"
                      >
                        <Link href={link.link}>{link.title}</Link>
                      </li>
                    ))}
                  </div>
                </Accordion>
              ) : (
                <li
                  key={index}
                  onClick={toggleSideBar}
                  className="rounded py-2 text-lg font-normal text-paraGray"
                >
                  <Link href={link.link}>{link.title}</Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <Link
          href="https://calendly.com/hello-fumiwo/a-new-way-to-assess-creditworthiness"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryButton className="">Book a demo</PrimaryButton>
        </Link>
      </nav>
    );
  },
);

SideBar.displayName = 'SideBar';

// export default SideBar
