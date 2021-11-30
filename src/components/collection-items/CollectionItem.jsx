import React from "react";
import { useNavigate } from "react-router";
import "./CollectionItem.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  const navigate = useNavigate();
  return (
    <div className="collection-item">
      <div
        className="collection-item__background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div
        className="collection-item__call-to-action"
        onClick={() => {
          navigate(`${id}`);
        }}
      >
        Add to Card
      </div>
      <div className="collection-footer">
        <span className="collection-footer__name">{name}</span>
        <span className="collection-footer__price">{`${price}$`}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
