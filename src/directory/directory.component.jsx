import "./directory.styles.scss";
import CategoryItem from "../components/category-item/category-item.component";

import React from "react";

const Directory = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} {...category} />;
      })}
    </div>
  );
};

export default Directory;
