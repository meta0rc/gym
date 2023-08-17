"use client";

import { BiSolidHome, BiSolidInfoCircle, BiLogoTelegram } from "react-icons/bi";
import { MdClose, MdMenu } from "react-icons/md";
import { MenuList, MenuItem, Close } from "./style";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickoutside";

export const Menu = () => {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuRef = useRef(null);

  useClickOutside(menuRef, () => setMenuOpen(false));

  return (
    <MenuList ref={menuRef} className={menuOpen ? "open" : ""}>
      <Close onClick={toggleMenu}>
        {menuOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
      </Close>
      <MenuItem aria-checked={path === "/"}>
        <Link href="/">
          <BiSolidHome />
          Inicio
        </Link>
      </MenuItem>
      <MenuItem aria-checked={path === "/sobre"}>
        <Link href="/sobre">
          <BiSolidInfoCircle />
          Sobre a Full-life
        </Link>
      </MenuItem>
      <MenuItem aria-checked={path === "/contato"}>
        <Link href="/contato">
          <BiLogoTelegram />
          Contato
        </Link>
      </MenuItem>
    </MenuList>
  );
};
