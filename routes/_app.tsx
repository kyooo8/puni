import { type PageProps } from "$fresh/server.ts";
import Footer from "../islands/Footer.tsx";

export default function App({ Component, url }: PageProps) {
  const pathname = url.pathname;
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>puni</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Chango&family=Mochiy+Pop+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body class="bg-grape-light min-h-screen">
        {pathname !== "/" && (
          <header class="bg-grape fixed top-0 w-screen h-14 rounded-b-xl">
          </header>
        )}
        <div class="pt-14 pb-20 container mx-auto px-4">
          <Component />
        </div>
        {pathname !== "/" && <Footer />}
      </body>
    </html>
  );
}
