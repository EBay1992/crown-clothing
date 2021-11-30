import React from "react";
import shopData from "./shop.data";
import "./shop.styles.scss";

import PreviewCollection from "../../components/preview-collection/PreviewCollection";

const Shoppage = () => {
  const renderedCollection = shopData.map((c) => {
    return (
      <PreviewCollection
        key={c.id}
        title={c.title}
        routeName={c.routeName}
        items={c.items}
      />
    );
  });

  return (
    <div className="shop-page">
      <h1 className="shop-page__title">Collections</h1>
      {renderedCollection}
    </div>
  );
};

export default Shoppage;
