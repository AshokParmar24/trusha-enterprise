import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import theme from "@/config/theme";
import '@mantine/core/styles.css';


export default function App({ Component, pageProps }) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
