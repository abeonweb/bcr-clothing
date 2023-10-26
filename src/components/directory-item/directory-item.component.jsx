import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryBodyContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ title, id, imageUrl, route }) => {

  const navigate = useNavigate();

  const onRouteChangeHandler = () => navigate(route);
  return (
    <DirectoryItemContainer key={id} onClick={onRouteChangeHandler}>
      <BackgroundImage $imageurl={imageUrl} />
      <DirectoryBodyContainer>
            <h2>{title}</h2>
            <p>Shop now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
