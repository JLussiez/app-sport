import { useState } from "react";
import Header from "./components/Header/header";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
}
