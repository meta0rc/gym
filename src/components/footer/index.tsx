import Link from "next/link";
import { Contact, Copy, Menu, Wrapper } from "./style";
import data from "@/data.json";
import { Whatsapp } from "../whats";

export const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <div>
          <img src="/assets/images/logos/logo (14).png" width={200} />
          <Contact>
            <p>Full-life acessoria esportiva</p>
            <p>Telefone: 119405511067</p>
            <p>Atendimento limitado apenas para residentes em São Paulo - SP</p>
          </Contact>
        </div>
        <div>
          <Menu>
            {data.pages.map((page) => (
              <li key={page.name}>
                <Link
                  href={`/acessoria-esportiva-para-condominio/${page.name}`}
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </Menu>
        </div>
      </Wrapper>

      <Copy>
        Full-life acessoria esportiva - {new Date().getFullYear()} - Copyright -
        Todos os direitos reservados. - (11) 9405511067
      </Copy>
      <Whatsapp />
    </footer>
  );
};
