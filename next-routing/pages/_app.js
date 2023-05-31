import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  return <>
  {/* <NProgress/> */}
  <NextNProgress color="blue" options={{ easing: 'ease', speed: 100 }} ></NextNProgress>
    <Component {...pageProps} />
    </>
}

export default MyApp
