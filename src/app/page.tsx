import { Header } from "@/components/header";
import { Container, Content, Middle, Wrapper } from "./style";
import { Button } from "@/components/button";
import { Presentation } from "@/components/presentation";
import { Backdrop } from "@/components/presentation/style";
import { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Full-life - Acessoria Esportiva",
};

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Backdrop aria-readonly variant="medium" />
        <Header />
        <Content>
          <h1>Bem vindo a acessoria esportiva Full-life</h1>
          <p>
            Uma empresa repleta de soluções esportivas para o seu condominio
          </p>
          {/* <Button>Lorem ipsum dolor sit amet</Button> */}
        </Content>
      </Container>
      <Middle>
        <p>
          Veja abaixo alguns do serviços que prestamos com a nossa acessoria
          esportiva.
        </p>
      </Middle>
      <Presentation />
      <Footer />
    </Wrapper>
  );
}
