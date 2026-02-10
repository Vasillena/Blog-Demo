import "./globals.css";

import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "./lib/constants";
import { getAllCategories, getAllPosts } from "./lib/actions/post.action";

import { CategoriesProvider } from "./lib/providers/categoriesProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { PhenomenaLight } from "./lib/fonts";
import { PostsProvider } from "./lib/providers/postsProvider";
// import StyledComponentsRegistry from "./lib/styled-components-registry";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    template: `%s | Demo Blog`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  keywords: ["demo blog"],
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categoriesPromise = getAllCategories();
  const postsPromise = getAllPosts();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${PhenomenaLight.className} antialiased`}>
        {/* <StyledComponentsRegistry> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CategoriesProvider categoriesPromise={categoriesPromise}>
            <PostsProvider postsPromise={postsPromise}>
              <div className="max-w-360 mx-auto min-h-screen px-2 flex flex-col justify-between">
                <Header />
                <main className="flex-1 wrapper">{children} </main>
                <Toaster position="top-right" />
                <Footer />
              </div>
            </PostsProvider>
          </CategoriesProvider>
        </ThemeProvider>
        {/* </StyledComponentsRegistry> */}
      </body>
    </html>
  );
}
