import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ListContextProvider } from "../context/ListContext";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ListContextProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </ListContextProvider>
    </>
  );
}
export default MyApp;
