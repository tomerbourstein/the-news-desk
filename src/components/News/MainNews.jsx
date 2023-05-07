import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";
import { getUserId } from "../../utils/firebase";
import { fetchNewsData } from "../../store/news-requests";
import Headline from "./Headline";
import NewsCard from "./NewsCard";
import { apiActions } from "../../store/api-slice";

const MainNews = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = getUserId();
    const db = getDatabase();
    const initial = false;
    const preferencesRef = ref(db, "users/" + userId + "/preferences");
    let categories = ["Sports", "Music", "Cryptocurrency", "Fashion"];

    onValue(preferencesRef, (snapshot) => {
      if (snapshot.exists()) {
        categories = snapshot.val();
      }
      console.log(categories);
      dispatch(apiActions.updatePreferences(categories));
      categories.map((category) => {
        dispatch(fetchNewsData(category, initial));
      });
    });
  }, []);

  return (
    <Fragment>
      <Headline />
      <NewsCard />
    </Fragment>
  );
};

export default MainNews;
