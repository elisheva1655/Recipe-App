import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext } from "react";
//import { UserContext } from "../pages/ProductPage";
import { LikedContext } from "./favoritesContext";
export function LikedHeart({ favoriteItem }) {
  const { favorites, addFavorites } = useContext(LikedContext);
  //const { buttonClick, setButtonClick } = useContext(UserContext);
  let likeButton;
  let isFav = favorites.some((fav) => fav.id === favoriteItem.id);
  if (!isFav) {
    likeButton = <FavoriteBorderIcon color="error" />;
  } else {
    likeButton = <FavoriteIcon color="error" />;
  }
  return (
    <div
      onClick={() => {
        //setButtonClick(!buttonClick);
        addFavorites(favoriteItem);
      }}
    >
      {likeButton}
    </div>
  );
}
