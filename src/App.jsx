import { Fragment } from "react";
import { useSelector } from "react-redux";

import Auth from "./components/Auth/Auth";
import Loading from "./components/UI/Loading";
import WebAppBar from "./components/TopBottom/WebAppBar";
import Footer from "./components/TopBottom/Footer";

import Container from "@mui/material/Container";
import "./App.css";
import MainNews from "./components/News/MainNews";

function App() {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const newsVisible = useSelector((state) => state.ui.newsVisible);
  const authVisible = useSelector((state) => state.ui.authVisible);

  return (
    <Container>
      {authVisible && <Auth />}
      {isLoading && <Loading />}
      {newsVisible && (
        <Fragment>
          <WebAppBar />
          <MainNews />
          <Footer />
        </Fragment>
      )}
    </Container>
  );
}

export default App;
