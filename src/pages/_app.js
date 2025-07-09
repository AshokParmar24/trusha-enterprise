import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import theme from "@/config/theme";
import "@mantine/core/styles.css";
import Layout from "@/components/Layout/Layout";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <>
      {" "}
      <ToastContainer position="top-right" autoClose={3000} />
      <MantineProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>{" "}
        <ScrollToTop />
      </MantineProvider>
    </>
  );
}
