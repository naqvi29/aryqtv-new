import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "../components/PageChange/PageChange.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
import '../styles/custom.css';
import Footer from "../components/Footers/Footer";
import IndexNavbar from "../components/Navbars/IndexNavbar.js";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>ARYQTV | ARY QTV is the 1st religious channel being broadcast from Pakistan. You Can Watch Scholors Programs, Naats , Hadeeth, Tilawat-e-Quran majid</title>
          <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
        </Head>
      
        <IndexNavbar fixed />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </React.Fragment>
    );
  }
}
