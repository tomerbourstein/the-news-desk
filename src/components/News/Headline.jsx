import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

import classes from "./Headline.module.css";
const Headline = () => {
  const items = [
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      cols: 12,
      rows: 1,
    },
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      cols: 12,
      rows: 1,
    },
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      cols: 12,
      rows: 1,
    },
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      cols: 12,
      rows: 1,
    },
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      cols: 12,
      rows: 1,
    },
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      cols: 12,
      rows: 1,
    },
    {
      category: "Sports",
      img: "https://i2-prod.liverpoolecho.co.uk/incoming/article25995235.ece/ALTERNATES/s458/0_GettyImages-1437548454.jpg",
      title:
        "Liverpool transfer news LIVE - Jude Bellingham plan, Moises Caicedo update, Sofyan Amrabat boost",
      author: "LIVERPOOL FC",
      cols: 12,
      rows: 1,
    },
  ];

  return (
    <ImageList cols={1} gap={20} rowHeight="auto">
      {items.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
  );
};

export default Headline;
