import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";

import React from "react";

const Directory = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <DirectoryItem key={category.id} {...category} />;
      })}
    </div>
  );
};

export default Directory;
