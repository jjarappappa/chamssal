import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import SnackBar from "../components/alert/SnackBar";
import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { QueryClient, QueryClientProvider } from "react-query";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  useEffect(() => {
    const start = () => {
      NProgress.start();
    };
    const end = () => {
      NProgress.done();
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <SnackBar />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
