import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewsData } from "./store/news-requests";

import Auth from "./components/Auth/Auth";
import Loading from "./components/UI/Loading";
import WebAppBar from "./components/TopBottom/WebAppBar";
import Footer from "./components/TopBottom/Footer";
import Weather from "./components/News/Weather";
import Headline from "./components/News/Headline";
import NewsCard from "./components/News/NewsCard";

import Container from "@mui/material/Container";
import "./App.css";

function App() {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const category = "sports";
    dispatch(fetchNewsData(category));
  }, [dispatch]);

  return (
    <Container>
      {/* <Auth /> */}
      {isLoading && <Loading />}
      <WebAppBar />
      {/* <Weather /> */}
      {/* <Headline /> */}
      <NewsCard />
      <Footer />
    </Container>
  );
}

export default App;
