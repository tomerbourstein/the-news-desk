import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiActions } from "../../store/api-slice";
import {
  fetchNewsCategoriesData,
  fetchNewsData,
} from "../../store/news-requests";
import { writeDataHandler } from "../../utils/firebase";

import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

import classes from "./Personalization.module.css";

const Personalization = (props) => {
  const newsCategories = useSelector((state) => state.api.categories);
  const preferences = useSelector((state) => state.api.preferences);
  const dispatch = useDispatch();

  const [clickedCategory, setClickedCategory] = useState([]);

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

  const setPrefHandler = (categories) => {
    if (!categories) return;
    console.log(categories);
    dispatch(apiActions.clearNewsData());
    writeDataHandler(categories);
  };

  useEffect(() => {
    dispatch(fetchNewsCategoriesData());
  }, [dispatch]);

  useEffect(() => {
    setClickedCategory(preferences);
  }, [preferences]);

  return (
    <Popover
      sx={{ pl: 100 }}
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
          mt: { md: -1, xs: 13.2 },
          width: "100%",
          maxWidth: { md: 500, xs: 400 },
          maxHeight: 320,
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "top" }}
    >
      <Box
        className={classes.preferredTopics}
        sx={{
          height: { md: 65, xs: 46 },
          whiteSpace: "nowrap",
          overflowX: "auto",
          scrollbarWidth: 1,
        }}
      >
        {clickedCategory.map((category) => (
          <Chip
            key={category}
            label={category}
            component="span"
            onDelete={() => removeCategoryHandler(category)}
            clickable
            sx={{ m: { md: 1, xs: 0.5 }, fontSize: { md: 13, xs: 10 } }}
          ></Chip>
        ))}
      </Box>
      <Divider />
      {newsCategories.map((category) => (
        <Chip
          key={category.name}
          label={category.name}
          component="span"
          clickable
          onClick={() => addCategoryHandler(category.name)}
          sx={{ m: { md: 1, xs: 0.5 }, fontSize: { md: 13, xs: 10 } }}
        ></Chip>
      ))}

      <Divider />
      <Box
        sx={{
          height: "100%",
          p: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "flex-end",
        }}
      >
        <Button
          sx={{ height: 40 }}
          variant="contained"
          onClick={() => setPrefHandler(clickedCategory)}
        >
          Set preferences
        </Button>
      </Box>
    </Popover>
  );
};

export default Personalization;
