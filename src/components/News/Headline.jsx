import { useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

import classes from "./Headline.module.css";
const Headline = () => {
  const newsData = useSelector((state) => state.api.newsData);

  return (
    <ImageList cols={1} gap={20} rowHeight="auto">
      {newsData.map((item) => (
        <ImageListItem
          key={item.urlToImage}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            src={`${item.urlToImage}?w=248&h=192&fit=crop&auto=format`}
            srcSet={`${item.urlToImage}?w=248&h=192&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.source.name}
            actionIcon={
              <IconButton
                sx={{ color: "#008037" }}
                aria-label={`read more about ${item.title}`}
              >
                <ExpandCircleDownIcon className={classes.arrowIcon} />
              </IconButton>
            }
            sx={{ mb: 1, backgroundColor: "2E2E2A0" }}
          ></ImageListItemBar>
          <Chip
            label={item.category}
            size="small"
            color="success"
            sx={{ position: "absolute", bottom: 68, zIndex: 2, m: 0.5 }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Headline;
