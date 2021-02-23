import { AnimatePresence } from "framer-motion";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
