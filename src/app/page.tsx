import { Header } from "@/components/header";
import { Container, Content, Middle, Wrapper } from "./style";
import { Button } from "@/components/button";
import { Presentation } from "@/components/presentation";
import { Backdrop } from "@/components/presentation/style";
import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Markup } from "@/components/markup";
import { ContentSlider } from "@/components/content-animated";

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
          <Markup />
          <Markup flow="bottom" />
          <h1>Bem vindo a Full-life</h1>
          <ContentSlider>
            <p>
              Uma empresa que presta acessoria completa para o seu condominio
            </p>
          </ContentSlider>
          <ContentSlider>
            <Button>Saiba mais</Button>
          </ContentSlider>
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
