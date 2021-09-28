import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ListContextProvider } from "../context/ListContext";
import { FavContextProvider } from "../context/FavContext";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ListContextProvider>
        <FavContextProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyle />
          </ThemeProvider>
        </FavContextProvider>
      </ListContextProvider>
    </>
  );
}
export default MyApp;
