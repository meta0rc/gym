import Link from "next/link";
import { Backdrop, ContentImage, Container, Wrapper } from "./style";
import data from "@/data.json";
import { Loader } from "../loader";

export const Presentation = () => {
  return (
    <main>
      <Container>
        {data.pages.map((page) => (
          <Wrapper key={page.name}>
            <Link
              href={`/acessoria-esportiva-para-condominio/[slug]`}
              as={`/acessoria-esportiva-para-condominio/${page.name}`}
            >
              <ContentImage>
                <Backdrop>
                  <h2>{page.label}</h2>
                </Backdrop>
                <img src={`/assets/images/pages/${page.name}/image1.jpg`} />
              </ContentImage>
            </Link>
          </Wrapper>
        ))}
      </Container>
      <Loader />
    </main>
  );
};
