import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewsCategoriesData } from "../../store/news-requests";

import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const Personalization = (props) => {
  const newsCategories = useSelector((state) => state.api.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsCategoriesData());
  }, [dispatch]);

  useEffect(() => {
    console.log(newsCategories);
  }, [newsCategories]);
  return (
    <Menu
      anchorEl={props.anchorPersonal}
      id="account-selections"
      open={props.openPersonal}
      onClose={props.handleClosePersonal}
      onClick={props.handleClosePersonal}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          ml: -0.2,
          mt: -1,
          maxWidth: 390,
          maxHeight: 200,
          height: 200,
          // "& .MuiAvatar-root": {
          //   width: 32,
          //   height: 32,
          //   ml: -2.5,
          //   mr: 4,
          // },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "top" }}
    >
      <Chip
        label="sports"
        component="span"
        onDelete
        clickable
        sx={{ m: 1 }}
      ></Chip>
      <Chip
        label="sports"
        component="span"
        onDelete
        clickable
        sx={{ m: 1 }}
      ></Chip>
      <Chip
        label="sports"
        component="span"
        onDelete
        clickable
        sx={{ m: 1 }}
      ></Chip>
      <Chip
        label="sports"
        component="span"
        onDelete
        clickable
        sx={{ m: 1 }}
      ></Chip>

      {/* <Chip>music</Chip>
      <Chip>politics</Chip>
      <Chip>celebrities</Chip> */}

      <Divider />
      {newsCategories.map((category) => (
        <Chip
          label={category.name}
          component="span"
          clickable
          sx={{ m: 1 }}
        ></Chip>
      ))}
      {/* <Chip label="sports" component="span" clickable sx={{ m: 1 }}></Chip>
      <Chip label="sports" component="span" clickable sx={{ m: 1 }}></Chip>
      <Chip label="sports" component="span" clickable sx={{ m: 1 }}></Chip>
      <Chip label="sports" component="span" clickable sx={{ m: 1 }}></Chip>
      <Chip label="sports" component="span" clickable sx={{ m: 1 }}></Chip>
      <Chip label="sports" component="span" clickable sx={{ m: 1 }}></Chip>
      <Chip label="sports" component="span" clickable sx={{ m: 1 }}></Chip> */}

      {/* <Chip>sports</Chip>
      <Chip>music</Chip>
      <Chip>politics</Chip>
      <Chip>celebrities</Chip> */}
    </Menu>
  );
};

export default Personalization;
