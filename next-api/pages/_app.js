import '../styles/globals.css'
import NProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  return <>
  {/* <NProgress colour='blue' /> */}
  <Component {...pageProps} />
  </>
}

export default MyApp
