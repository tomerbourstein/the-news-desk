import { useEffect } from "react";
import { useSelector } from "react-redux";
import Weather from "./Weather";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

import classes from "./NewsCard.module.css";

const NewsCard = () => {
  const newsData = useSelector((state) => state.api.newsData);

  return (
    <main className={classes.mainDesktop}>
      <ImageList variant="quilted" cols={4} gap={8} rowHeight={187}>
        <ImageListItem key="weather" cols={1} rows={1} width={282}>
          <Weather />
        </ImageListItem>
        {newsData.map((item, index) => {
          const NA =
            item.urlToImage === "/src/assets/not-available.jpg"
              ? classes.NA
              : null;
          return (
            <ImageListItem
              key={index}
              cols={item.cols || 1}
              rows={item.rows || 1}
              width={282}
              sx={
                item.highBox && { position: "relative", bottom: 48, right: 0 }
              }
            >
              <img
                src={item.urlToImage}
                // {...srcset(item.urlToImage, 187, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                className={NA}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.source.name}
                actionIcon={
                  <IconButton
                    href={item.url}
                    target="_blank"
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
          );
        })}
      </ImageList>
    </main>
  );
};

export default NewsCard;
