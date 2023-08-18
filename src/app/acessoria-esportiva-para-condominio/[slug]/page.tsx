import { Container, Content, Middle, Wrapper } from "@/app/style";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Backdrop } from "@/components/presentation/style";
import data from "@/data.json";
import { NextPage } from "next";
import {
  ContentDescription,
  ContentImage,
  Main,
  Mark,
  Paragraph,
  WrapperContent,
  WrapperForm,
  WrapperMain,
} from "./style";
import { PresentationCategory } from "@/components/presentation-category";
import { Footer } from "@/components/footer";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  params: {
    slug: string;
  };
};

const PageService: NextPage<Props> = ({ params }) => {
  const category = data.pages.find((page) => page.name === params.slug);
  const image1 = `/assets/images/pages/${params.slug}/image1.jpg`;
  const image = `/assets/images/pages/${params.slug}/image2.jpg`;

  if (!category) return "carregando...";

  return (
    <Wrapper>
      <Container background={image}>
        <Backdrop aria-readonly />
        <Header />
        <WrapperMain>
          <WrapperContent>
            <div>
              <h1>
                <b>{category.label}</b>
              </h1>
              <Paragraph>
                Nossa acessoria pode fornecer soluções especificas que você
                precisa para o seu condominio.
              </Paragraph>
            </div>
          </WrapperContent>
        </WrapperMain>
      </Container>
      <main>
        <section>
          <ContentDescription>
            <Mark />
            <Mark />
            <Wrapper>
              <h2>
                Um pouco sobre <b>{category.label}</b>
              </h2>
              <p>{category.description} </p>
            </Wrapper>
            <ContentImage>
              <img src={image1} />
            </ContentImage>
          </ContentDescription>
          <ContentDescription reverse>
            <Mark />
            <Mark />
            <Wrapper>
              <h2>
                <b>{category.label} </b> para o seu condominio
              </h2>
              <p>
                Se você quer agregar valor ao seu condominio aderindo a esportes
                dos mais variados tipos, contratar uma acessoria esportiva
                especilizada é o caminho ideal.
              </p>
              <p>
                Por isso, se você estiver em busca serviços como{" "}
                <strong>{category.label}</strong> para o seu condominio fale
                conosco agora mesmo. Nossas soluções atendem a todas as regiões
                da capital de São Paulo.
              </p>
            </Wrapper>
            <ContentImage>
              <img src={image} />
            </ContentImage>
          </ContentDescription>
        </section>
      </main>
      <Footer />
    </Wrapper>
  );
};

export default PageService;
