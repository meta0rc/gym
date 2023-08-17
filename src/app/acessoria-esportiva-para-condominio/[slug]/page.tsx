import { Container, Content, Middle, Wrapper } from "@/app/style";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Backdrop } from "@/components/presentation/style";
import data from "@/data.json";
import { NextPage } from "next";
import { Main, WrapperContent, WrapperForm, WrapperMain } from "./style";
import { PresentationCategory } from "@/components/presentation-category";
import { Footer } from "@/components/footer";
import { FaWhatsapp } from "react-icons/fa"

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
          <Main>
            <WrapperContent>
              <div>
                <h1>
                  Está procurando por <b>{category.label}?</b>
                </h1>
              </div>
              <div>
                <h2>
                  O que é <b>{category.label}?</b>
                </h2>
                <p>{category.description}</p>
              </div>
            </WrapperContent>
            <WrapperForm>
              <div>
                <h2>
                  Entre em contato <img src="/notification.png" width="30" />
                </h2>
                <p>
                  Venha e conheça todas soluções que oferecemos para o seu
                  condominio.
                </p>
                <Button>Saiba mais <FaWhatsapp color="#fff" /></Button>
              </div>
            </WrapperForm>
          </Main>
        </WrapperMain>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default PageService;
