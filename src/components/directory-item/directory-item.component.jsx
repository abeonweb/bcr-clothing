import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ title, id, imageUrl }) => {
  return (
    <div key={id} className="directory-item-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="directory-body-container">
      <Link to={`shop/${title}`}>
          <h2>{title}</h2>
          <p>Shop now</p>
      </Link>
        </div>
    </div>
  );
};

export default DirectoryItem;
