import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import axios from "axios";
export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_LOCAL_API}/api`
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
}
