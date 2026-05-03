// components/Main.js
import Header from "./Header";
import Footer from "./Footer";
// import styles from "@/styles/Home.module.css";

export default function Main({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
