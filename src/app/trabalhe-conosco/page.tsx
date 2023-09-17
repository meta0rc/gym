import { Container, Wrapper } from "@/app/style";
import { Header } from "@/components/header";
import { Backdrop } from "@/components/presentation/style";
import { Metadata, NextPage } from "next";
import { BsEnvelopeFill, BsWhatsapp } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import {
  ContentDescription,
  ContentImage,
  Form,
  Info,
  Mark,
  Paragraph,
  WrapperContent,
  WrapperForm,
  WrapperFormInfo,
  WrapperInput,
  WrapperMain,
} from "./style";
import { Footer } from "@/components/footer";
import { Loader } from "@/components/loader";
import { BiChat, BiPhone, BiUser } from "react-icons/bi";

type Props = {
  params: {
    slug: string;
  };
};

export const metadata: Metadata = {
  title: "Full life - Trabalhe Conosco",
  description: `Nossa assessoria esportiva está à procura de profissionais
  talentosos e dedicados para se juntarem à nossa equipe e
  trabalharem em condomínios, proporcionando um serviço de
  excelência aos nossos clientes.`,
};

const PageWorkus: NextPage<Props> = ({ params }) => {
  return (
    <Wrapper>
      <Loader />
      <Container background="/assets/images/pages/work-with-us/trabalhe-conosco.jpg">
        <Backdrop aria-readonly />
        <Header />
        <WrapperMain>
          <WrapperContent>
            <div>
              <h1>
                <b>Trabalhe conosco</b>
              </h1>
              <Paragraph>
                A sua oportunidade de brilhar como personal trainer em
                condomínios
              </Paragraph>
            </div>
          </WrapperContent>
        </WrapperMain>
      </Container>
      <main>
        <section>
          <ContentDescription>
            <Wrapper>
              <h2>Seja um parceiro Full-life</h2>
              <p>
                Se você é um personal trainer apaixonado por ajudar pessoas a
                alcançarem seus objetivos de condicionamento físico e busca uma
                nova oportunidade empolgante, temos a solução perfeita para
                você! Nossa assessoria esportiva está à procura de profissionais
                talentosos e dedicados para se juntarem à nossa equipe e
                trabalharem em condomínios, proporcionando um serviço de
                excelência aos nossos clientes. Se você quer agregar valor ao
                seu condominio aderindo a esportes dos mais variados tipos,
                contratar uma acessoria esportiva especilizada é o caminho
                ideal.
              </p>
              <p>
                Trabalhar em condomínios é uma das tendências mais promissoras
                na indústria do fitness atualmente. Com a vida agitada que
                muitos levam, as pessoas estão buscando cada vez mais a
                comodidade de ter um personal trainer diretamente em seu
                ambiente residencial. É aí que você entra! Oferecendo
                treinamentos personalizados e um atendimento exclusivo, você
                será capaz de conquistar o coração de nossos clientes e
                ajudá-los a alcançar seus objetivos de forma eficiente e
                motivadora.
              </p>

              <p>
                Além disso, nossa assessoria esportiva cuida de toda a logística
                e administração, permitindo que você se concentre apenas no que
                faz de melhor: treinar e transformar vidas. Nosso suporte
                abrangente inclui o agendamento das sessões, o fornecimento de
                equipamentos e materiais necessários, bem como a atração de
                clientes por meio de estratégias de marketing eficazes.
              </p>
              <p>
                Não perca tempo! Envie-nos seu currículo hoje mesmo e venha
                fazer parte de nossa equipe de personal trainers em condomínios.
                Juntos, vamos alcançar grandes conquistas e fazer a diferença na
                vida de muitas pessoas!
              </p>
            </Wrapper>
            <ContentImage>
              <img src="/assets/images/pages/work-with-us/trabalhe-conosco-acessoria-para-condominio.jpg" />
            </ContentImage>
          </ContentDescription>
        </section>
        <section>
          <WrapperForm>
            <WrapperFormInfo>
              <h2>
                Faça parte do nosso time de <b>acessoria esportiva</b>
              </h2>
              <Info>
                <BsEnvelopeFill />
                contato@acessoriaflife.com.br
              </Info>
              <Info>
                <BsWhatsapp />
                (11) 98761-3063
              </Info>
              <Info>
                <HiLocationMarker />
                São Paulo - SP
              </Info>
            </WrapperFormInfo>
            <Form>
              <h2>Entre em contato conosco</h2>
              <WrapperInput>
                <input placeholder="Seu nome" />
                <BiUser />
              </WrapperInput>
              <WrapperInput>
                <input placeholder="Telefone" />
                <BiPhone />
              </WrapperInput>
              <WrapperInput>
                <textarea placeholder="Deixe sua mensagem" />
                <BiChat />
              </WrapperInput>
              <button>Enviar</button>
            </Form>
          </WrapperForm>
        </section>
      </main>
      <Footer />
    </Wrapper>
  );
};

export default PageWorkus;
