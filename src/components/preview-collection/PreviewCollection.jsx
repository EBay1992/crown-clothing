import React from "react";
import { useNavigate } from "react-router";
import CollectionItem from "../collection-items/CollectionItem";
import "./PreviewCollection.styles.scss";

const PreviewCollection = ({ title, routeName, items }) => {
  const navigate = useNavigate();
  const renderedItems = items
    .filter((item, idx) => idx < 4)
    .map((item) => {
      return (
        <CollectionItem
          key={item.id}
          id={item.id}
          name={item.name}
          imageUrl={item.imageUrl}
          price={item.price}
        />
      );
    });

  return (
    <div className="collection-preview">
      <h2
        className="title-collection"
        onClick={() => {
          navigate(`${routeName}`);
        }}
      >
        {title.toUpperCase()}
      </h2>
      <div className="preview-row">{renderedItems}</div>
    </div>
  );
};

export default PreviewCollection;
