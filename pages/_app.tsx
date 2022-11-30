import { AppProps } from "next/dist/shared/lib/router/router";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/common/styles/globalStyles";
import Layout from "../src/components/common/layouts";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { createContext, useState } from "react";
config.autoAddCss = false;

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const [isShow, setIsShow] = useState(true);

  const myValue = {
    isShow: isShow,
    setIsShow: setIsShow,
  };

  return (
    <GlobalContext.Provider value={myValue}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  );
}

export default MyApp;
