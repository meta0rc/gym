import { Header } from "@/components/header";
import { Container, Content, Middle, Wrapper } from "./style";
import { Button } from "@/components/button";
import { MotivationCard } from "@/components/cards/motivation-card";
import { Presentation } from "@/components/presentation";
import { Backdrop } from "@/components/presentation/style";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-life - Acessoria Esportiva",
};

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Backdrop aria-readonly />
        <Header />
        <Content>
          <h1>
            Bem vindo a <strong>Full Life</strong> uma acessoria de respeito
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquam
            soluta quam sequi saepe labore commodi rem, laboriosam sunt, incidud
          </p>
          <Button>Lorem ipsum dolor sit amet</Button>
        </Content>
      </Container>
      <Middle>
        <h3>
          A fulllife conta com uma ampla variedade de serviços para você tornar
          a sua vida melhor e agregar valor ao seu condominio.
        </h3>
        <p>
          Veja abaixo alguns do serviços que prestamos com a nossa acessoria
          esportiva.
        </p>
      </Middle>
      <Presentation />
    </Wrapper>
  );
}
