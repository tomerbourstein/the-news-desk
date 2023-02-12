import { apiActions } from "./api-slice";

export const fetchNewsData = (category) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=7&apiKey=ecd3c224f6434c6b81fa5efd08585869`
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error("The problem is " + data.code + ". " + data.message);
      }

      for (const article of data.articles) {
        article.category = category;
      }

      return data.articles;
    };
    try {
      const newsData = await fetchData();
      dispatch(apiActions.fetchNewsData(newsData));
    } catch (error) {
      console.log(error);
    }
  };
};
