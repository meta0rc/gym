import Link from "next/link";
import { Backdrop, ContentImage, Container, Wrapper } from "./style";
import data from "@/data.json";

export const Presentation = () => {
  return (
    <main>
      <Container>
        {data.pages.map((page) => (
          <Wrapper key={page.name}>
            <ContentImage>
              <Backdrop>
                <h2>
                  <Link
                    href={`/acessoria-esportiva-para-condominio/[slug]`}
                    as={`/acessoria-esportiva-para-condominio/${page.name}`}
                  >
                    {page.label}
                  </Link>
                </h2>
              </Backdrop>
              <img src={`/assets/images/pages/${page.name}/image1.jpg`} />
            </ContentImage>
          </Wrapper>
        ))}
      </Container>
    </main>
  );
};
