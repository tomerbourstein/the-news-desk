import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewsCategoriesData } from "../../store/news-requests";
import { apiActions } from "../../store/api-slice";

import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const clickedCategories = ["Sports", "Music", "Cryptocurrency", "Fashion"];

const Personalization = (props) => {
  const newsCategories = useSelector((state) => state.api.categories);
  const dispatch = useDispatch();

  const [clickedCategory, setClickedCategory] = useState([...clickedCategories]);

  const addCategoryHandler = (categoryName) => {
    if (clickedCategory.length >= 4) return;
    console.log(categoryName);
    setClickedCategory((prevState) => [...prevState, categoryName]);
    dispatch(apiActions.updateCategories(categoryName));
  };

  const removeCategoryHandler = (categoryName) => {
    const newArray = clickedCategory.filter((item) => item != categoryName);
    setClickedCategory(newArray);
  };
  useEffect(() => {
    dispatch(fetchNewsCategoriesData());
  }, [dispatch]);

  return (
    <Menu
      anchorEl={props.anchorPersonal}
      id="account-selections"
      open={props.openPersonal}
      onClose={props.handleClosePersonal}
      // onClick={props.handleClosePersonal}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          ml: -0.2,
          mt: -1,
          width: "100%",
          maxWidth: 500,
          maxHeight: 300,
          height: 300,
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "top" }}
    >
      {clickedCategory.map((category) => (
        <Chip
          key={category}
          label={category}
          component="span"
          onDelete={() => removeCategoryHandler(category)}
          clickable
          sx={{ m: 1 }}
        ></Chip>
      ))}

      <Divider />
      {newsCategories.map((category) => (
        <Chip
          key={category.name}
          label={category.name}
          component="span"
          clickable
          onClick={() => addCategoryHandler(category.name)}
          sx={{ m: 1 }}
        ></Chip>
      ))}
    </Menu>
  );
};

export default Personalization;
