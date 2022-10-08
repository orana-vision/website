import React from "react";
import Footer from "../components/Footer/Footer";
import ThankYou from "../components/ThankYou/ThankYou";

export default function ThankYouContactScreen({ language }) {
  console.log(language);
  return (
    <>
      <ThankYou language={language} />
      <Footer language={language} />
    </>
  );
}
