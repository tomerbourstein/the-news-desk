import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

import classes from "./NewsCard.module.css";
const NewsCard = () => {
  const items = [
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      // cols: 0,
      rows: 0.75,
    },
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      // cols: 1,
      // rows: 2,
    },
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      // cols: 1,
      // rows: 1,
    },
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      // cols: 1,
      rows: 0.75,
    },
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      // cols: 1,
      rows: 1.25,
      highBox: true,
    },
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      // cols: 1,
      // rows: 2,
    },
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      // cols: 1,
      // rows: 2,
    },
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      // cols: 1,
      rows: 1.25,
      highBox: true,
    },
  ];

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <main>
      <ImageList
        variant="quilted"
        // sx={{ height: 383 }}
        cols={4}
        gap={8}
        rowHeight={187}
      >
        {items.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            width={282}
            sx={item.highBox && { position: "relative", bottom: 48, right: 0 }}
          >
            <img
              {...srcset(item.img, 187, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
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
    </main>
  );
};

export default NewsCard;
