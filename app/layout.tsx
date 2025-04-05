import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import "./globals.css";
import { CssVarsProvider } from "@mui/joy/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <CssVarsProvider>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </CssVarsProvider>
      </body>
    </html>
  );
}
