import { Footer } from "@/components/footer";
import StyledComponentsRegistry from "./lib/registry";
import { Providers } from "./providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full life - Acessoria esportiva",
  icons: "/assets/images/logos/logo-rounded.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
