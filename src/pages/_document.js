import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>Trusha Enterprise | Air Compressor Services</title>
        <meta name="description" content="Trusha Enterprise specializes in air compressor services, offering expert repair, maintenance, and installation for all compressor types." />
        <meta property="og:title" content="Trusha Enterprise | Air Compressor Services" />
        <meta property="og:description" content="Professional air compressor repair, maintenance, and installation services by Trusha Enterprise. Your trusted partner for all compressor needs." />
        <meta property="og:image" content="/path-to-your-image.jpg" /> {/* Replace with actual image path */}
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/stream-chat-react/dist/css/v2/index.css" />

      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
