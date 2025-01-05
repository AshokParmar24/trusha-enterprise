import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import theme from "@/config/theme";
import "@mantine/core/styles.css";
  import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>{" "}
    </MantineProvider>
  );
}
