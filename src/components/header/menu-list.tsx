"use client";

import {
  BiSolidHome,
  BiSolidInfoCircle,
  BiLogoTelegram,
  BiLogoWhatsapp,
} from "react-icons/bi";
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
      <MenuItem aria-checked={path === "/trabalhe-conosco"}>
        <Link href="/trabalhe-conosco">
          <BiSolidInfoCircle />
          Trablhe conosco
        </Link>
      </MenuItem>
      <MenuItem aria-checked={path === "/contato"}>
        <Link
          target={
            window && window.innerWidth && window.innerWidth > 768
              ? "_blank"
              : "_self"
          }
          href="https://api.whatsapp.com/send/?phone=5511987613063&text=Ol%C3%A1+vim+pelo+site+e+gostaria+de+saber+mais+sobre+os+servi%C3%A7os&type=phone_number&app_absent=0"
        >
          <BiLogoWhatsapp />
          Contato
        </Link>
      </MenuItem>
    </MenuList>
  );
};
