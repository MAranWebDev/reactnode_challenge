import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Header } from "./Header";
import { Footer } from "./Footer";

type BodyType = {
  title?: string;
  blank?: true;
};

const Body = ({
  children,
  title = "App | react.js",
  blank,
}: React.PropsWithChildren<BodyType>) => {
  return (
    <HelmetProvider>
      {/* head */}
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {/* body */}
      <div className="min-vh-100 d-flex flex-column">
        {!blank ? <Header /> : null}
        {children}
        {!blank ? <Footer /> : null}
      </div>
    </HelmetProvider>
  );
};

export { Body };
