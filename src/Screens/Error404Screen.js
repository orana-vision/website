import React from "react";
import Footer from "../components/Footer/Footer";
import Error404 from "../components/Error404/Error404";

const Error404Screenjs = ({ language }) => {
    return (
        <>
            <Error404 language={"en"} />
            <Footer language={"en"} />
        </>
    );
};

export default Error404Screenjs;
