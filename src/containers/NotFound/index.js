import React from "react";
import { Helmet } from "react-helmet";
import H1 from "../../components/H1";

const NotFound = () => (
  <section>
    <Helmet>
      <title>Styleguide - NotFound</title>
      <meta name="description" content="Styleguide - NotFound" />
      <meta name="theme-color" content="#000000" />
    </Helmet>
    <H1>404 - Page Not Found</H1>
  </section>
);

export default NotFound;
