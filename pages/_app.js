import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="non-footer-container">
        <Navbar />
        <nav className="border-t-4 border-2 border-red-800">
            <div className="container flex items-center justify-between px-6 mx-auto"></div>
        </nav>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
