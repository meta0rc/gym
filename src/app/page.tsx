import { Header } from "@/components/header";
import { Container, Content, Middle, Slider, Wrapper } from "./style";
import { Button } from "@/components/button";
import { Presentation } from "@/components/presentation";
import { Backdrop } from "@/components/presentation/style";
import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Markup } from "@/components/markup";
import { ContentDistanced, ContentSlider } from "@/components/content-animated";
import { Mark } from "./acessoria-esportiva-para-condominio/[slug]/style";

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
          <h2>Bem vindo a </h2>
          <h1 className="title">Full-life</h1>
          <ContentSlider>
            <p>
              Uma empresa que presta acessoria completa para o seu condominio
            </p>
          </ContentSlider>
          <Slider>
            <ContentSlider flow="left">
              <ContentDistanced>
                <Markup />
              </ContentDistanced>
            </ContentSlider>
            <ContentSlider flow="left">
              <ContentDistanced distance="-50%">
                <Markup />
              </ContentDistanced>
            </ContentSlider>
          </Slider>
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
