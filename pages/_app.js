import 'bootstrap/scss/bootstrap.scss'
import '@/styles/globals.scss'
import Layout from "../layout/layout"

export default function App({ Component, pageProps }) {
  return (<Layout><Component {...pageProps} /></Layout>)
}
