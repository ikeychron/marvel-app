"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/Atoms/NavLink";
import Container from "@/components/Atoms/Container";
import Menu from "@/components/Molecules/Menu";

const nav = [
  { title: "Inicio", href: "/", dataCy: "nav-home" },
  { title: "Personajes", href: "/personajes", dataCy: "nav-characters" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navIcons = [
    {
      name: "notification",
      alt: "Notification icon",
      onClick: () => setOpenMenu(!openMenu),
      dataCy: "nav-notification",
    },
    {
      name: "setting",
      alt: "Setting icon",
      onClick: () => setOpenMenu(!openMenu),
      dataCy: "nav-setting",
    },
  ];

  return (
    <nav
      data-cy="navbar"
      className="w-screen bg-transparent relative border-b border-[#3C3C41]"
    >
      <Container className="flex justify-between h-[7.25rem]">
        <div className="flex items-center">
          <Link href="/" className="mr-4 sm:mr-5">
            <Image
              className="w-20 sm:w-32"
              src="/images/logo-marvel.png"
              alt="Marvel logo"
              width={130}
              height={50}
              data-cy="nav-logo"
            />
          </Link>

          {nav.map((item) => (
            <NavLink href={item.href} key={item.href} data-cy={item.dataCy}>
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center relative gap-1 sm:gap-2">
          {navIcons.map((item) => (
            <button
              key={item.name}
              className="rounded-full bg-transparent p-2 hover:bg-[#333333] transition-colors"
              onClick={item.onClick}
              data-cy={item.dataCy}
            >
              <Image
                src={`/svgs/${item.name}.svg`}
                alt={item.alt}
                width={16}
                height={16}
              />
            </button>
          ))}
          {openMenu && <Menu handleClose={() => setOpenMenu(false)} />}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

