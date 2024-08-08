import React from "react";
import Image from "next/image";
import { H4, P } from "../global/Typography";
import Divider from "../global/Divider";

import member1 from "@images/member1.png";
import member5 from "@images/leslie.png";
import member2 from "@images/kayode.png";
import member3 from "@images/dedonker.png";
import member4 from "@images/sebastian2.png";
import kainy from "@images/kainy.png";
import prosper from "@images/prosper.png";

import Link from "next/link";

const team = [
  {
    name: "Olu-Kayodé Karim AMADOU",
    role: "CEO & Founder",
    linkedIn: "https://www.linkedin.com/in/olu-kayodekarim/",
    image: member2,
  },
  {
    name: "Cedric Artigue",
    role: "Chief Technology Officer",
    linkedIn: "https://www.linkedin.com/in/cedricartigue/",
    image: member3,
  },
  // {
  //   name: "Sébastien Dumas",
  //   role: "Chief Marketing Officer",
  //   linkedIn: "https://www.linkedin.com/in/sdu/",
  //   image: member4,
  // },
  {
    name: "Prosper Eravwuvieke",
    role: "Backend Engineering Lead",
    linkedIn: "https://www.linkedin.com/in/prosper-eravwuvieke/",
    image: prosper,
  },
  {
    name: "Kainy Chike-Onyechi",
    role: "Frontend Engineering Lead",
    linkedIn: "https://www.linkedin.com/in/kaine-chike-onyechi/",
    image: kainy,
  },
];

const Team = () => {
  return (
    <section>
      <div className="container px-6 py-20 sm:mx-auto sm:px-0 md:py-32 md:text-center">
        <div className="max-w-xl md:mx-auto">
          <H4>
            Meet our <span className="text-primaryGreen">team</span>
          </H4>
          <Divider height={16} />
          <P className="">
            Our team brings together decades of experience across credit
            infrastructure, financial services, and technology.
          </P>
        </div>
        <Divider height={68} />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((item, index) => (
            <div key={index} className="mx-auto w-fit text-center">
              <div>
                <Image
                  src={item.image}
                  alt="team member"
                  className="mx-auto h-[200px] w-[200px]"
                />
              </div>
              <Divider height={30} />

              <P className="text-xl font-bold text-primaryBlack">{item.name}</P>
              <P className="">{item.role}</P>
              <button>
                <Link
                  href={item.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1952_7419)">
                      <path
                        d="M31.9951 32.0008V32H32.0001V24.665C32.0001 21.0767 31.2276 18.3125 27.0326 18.3125C25.0159 18.3125 23.6626 19.4192 23.1101 20.4683H23.0517V18.6475H19.0742V32H23.2159V25.3883C23.2159 23.6475 23.5459 21.9642 25.7017 21.9642C27.8259 21.9642 27.8576 23.9508 27.8576 25.5V32.0008H31.9951Z"
                        fill="#0E76A8"
                      />
                      <path
                        d="M12.3281 18.6484H16.4748V32.0009H12.3281V18.6484Z"
                        fill="#0E76A8"
                      />
                      <path
                        d="M14.4017 12C13.0758 12 12 13.0758 12 14.4017C12 15.7275 13.0758 16.8258 14.4017 16.8258C15.7275 16.8258 16.8033 15.7275 16.8033 14.4017C16.8025 13.0758 15.7267 12 14.4017 12V12Z"
                        fill="#0E76A8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1952_7419">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(12 12)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
