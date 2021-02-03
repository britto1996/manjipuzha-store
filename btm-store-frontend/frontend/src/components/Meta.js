import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <Meta name="description" content={description} />
      <Meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to BTM-STORE",
  description: "We sell quality products with 1 year service warranty",
  keywords: "sarees, buy electronics, quality sarees",
};

export default Meta;
