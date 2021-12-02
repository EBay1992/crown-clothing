import React from "react";
import { useNavigate } from "react-router";
import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => {
        navigate(`${linkUrl}`);
      }}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now!</span>
      </div>
    </div>
  );
};

export default MenuItem;
