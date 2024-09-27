import { useState } from "react";
import Header from "./components/Header/header";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
