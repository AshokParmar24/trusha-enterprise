import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import theme from "@/config/theme";
import "@mantine/core/styles.css";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
