import { useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";
import Loading from "./components/UI/Loading";
import WebAppBar from "./components/TopBottom/WebAppBar";
import Footer from "./components/TopBottom/Footer";
import Weather from "./components/News/Weather";
import Headline from "./components/News/Headline";

import Container from "@mui/material/Container";
import "./App.css";
import NewsCard from "./components/News/NewsCard";

function App() {
  const isLoading = useSelector((state) => state.ui.isLoading);

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
