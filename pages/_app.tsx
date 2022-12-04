import { AppProps } from "next/dist/shared/lib/router/router";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/common/styles/globalStyles";
import Layout from "../src/components/common/layouts";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
