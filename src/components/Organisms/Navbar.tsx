import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/Atoms/NavLink";
import Container from "@/components/Atoms/Container";

const nav = [
  { title: "Inicio", href: "/" },
  { title: "Personajes", href: "/personajes" },
];

const navIcons = [
  {
    name: "notification",
    alt: "Notification icon",
  },
  { name: "setting", alt: "Setting icon" },
];

const Navbar = () => {
  return (
    <nav
      data-cy="navbar"
      className="w-screen bg-transparent relative border-b border-[#3C3C41]"
    >
      <Container className="flex justify-between h-[7.25rem]">
        <div className="flex items-center">
          <Link href="/" className="mr-5">
            <Image
              src="/images/logo-marvel.png"
              alt="Marvel logo"
              width={130}
              height={50}
            />
          </Link>

          {nav.map((item) => (
            <NavLink href={item.href} key={item.href}>
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center">
          {navIcons.map((item) => (
            <button
              key={item.name}
              className="rounded-full bg-transparent p-2 hover:bg-[#333333] transition-colors mr-2 last:mr-0"
            >
              <Image
                src={`/svgs/${item.name}.svg`}
                alt={item.alt}
                width={16}
                height={16}
              />
            </button>
          ))}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

