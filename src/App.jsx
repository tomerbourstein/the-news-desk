import { useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";
import Loading from "./components/UI/Loading";
import WebAppBar from "./components/TopBottom/WebAppBar";
import Footer from "./components/TopBottom/Footer";
import "./App.css";

function App() {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <div className="App">
      {/* <Auth /> */}
      {isLoading && <Loading />}
      <WebAppBar />
      <Footer />
    </div>
  );
}

export default App;
