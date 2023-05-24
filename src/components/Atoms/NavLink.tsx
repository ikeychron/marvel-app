"use client";
import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface INavlink extends LinkProps {
  children: ReactNode;
  className?: string;
}

const NavLink: React.FC<INavlink> = ({
  children,
  href,
  className,
  ...rest
}) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`relative font-medium h-full w-[7.125rem] flex items-center justify-center uppercase tracking-[2px] text-sm ${
        active ? "bg-gradientNavLink text-golden-3" : "text-golden-1"
      } ${className ? className : ""}`}
      {...rest}
    >
      {active && (
        <Image
          src="/svgs/active-navlink.svg"
          alt="link selected icon"
          width={39}
          height={19}
          className="absolute top-0"
        />
      )}
      {children}
    </Link>
  );
};

export default NavLink;

