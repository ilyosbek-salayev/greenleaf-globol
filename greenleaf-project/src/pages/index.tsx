import Head from "next/head";
import React from "react";
import Buttons from "~/components/Buttons";

const HeadPage = () => {
  return (
    <>
      <Head>
        <title>Greenleaf</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="main-container">
        <div className="left-side"></div>
        <div className="right-side">
          <img src="/logo.png" alt="Greenleaf Logo" className="logo" />
          <Buttons />
        </div>
      </div>
    </>
  );
};

export default HeadPage;
