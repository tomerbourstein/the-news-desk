import { apiActions } from "./api-slice";
import NA from "../assets/not-available.jpg";
const weatherAPI = "a1de8b9cad7a634536975361a087ac97";
const newsAPI = "ecd3c224f6434c6b81fa5efd08585869";
const isDevelopment = process.env.NODE_ENV === "development";
const MOCK_DATA = [
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Daniel Cooper",
    title: "Who knew dogs enjoyed downtempo music?",
    description:
      "Here at CES 2024 in Las Vegas, a Japanese startup is worried about the mental health of all those dogs you bought during the pandemic. One By One Music believes those dogs who, while everyone was sheltering in place, got too used to their family being at home…",
    url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_5f45d7b5-d7bf-4e3c-9060-650b8f456048",
    urlToImage: "/the-news-desk/src/assets/not-available.jpg",
    publishedAt: "2024-01-11T00:47:14Z",
    content:
      "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]",
    category: "Music",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Andy Greenberg",
    title:
      "Child Abusers Are Getting Better at Using Crypto to Cover Their Tracks",
    description:
      "Crypto tracing firm Chainalysis found that sellers of child sexual abuse materials are successfully using “mixers” and “privacy coins” like Monero to launder their profits and evade law enforcement.",
    url: "https://www.wired.com/story/csam-sellers-monero-rise/",
    urlToImage:
      "https://media.wired.com/photos/659f246783a7239c87585c11/191:100/w_1280,c_limit/CSAM-report-sec-GettyImages-885630762.jpg",
    publishedAt: "2024-01-11T14:00:00Z",
    content:
      "For those who trade in child sexual exploitation images and videos in the darkest recesses of the internet, cryptocurrency has been both a powerful tool and a treacherous one. Bitcoin, for instance, … [+3836 chars]",
    category: "Cryptocurrency",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Peter Kafka",
    title: "RIP Sports Illustrated. And RIP, magazines.",
    description:
      "Sports Illustrated used to be an enormously powerful magazine. Now it looks like it's dying. And the rest of the magazine business is struggling to avoid the same fate.",
    url: "https://www.businessinsider.com/sports-illustrated-magazine-dying-breed-2024-1",
    urlToImage:
      "https://i.insider.com/65aad880dcdb354a98593ba0?width=1200&format=jpeg",
    publishedAt: "2024-01-19T20:51:14Z",
    content:
      "Sports Illustrated used to occupy a central place in American media.Getty Images/FREDERIC J. BROWN\r\n<ul><li>Sports Illustrated used to be an enormously powerful magazine.</li><li>Now it looks like it… [+3855 chars]",
    category: "Sports",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: null,
    title: "BBC Weather shares retro forecasts on its 70th anniversary",
    description:
      "See how presenting styles, technology and fashion have changed on BBC weather over the decades.",
    url: "https://www.bbc.co.uk/news/av/uk-67945557",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/42FB/production/_132274171_p0h4bf6q.jpg",
    publishedAt: "2024-01-11T11:08:51Z",
    content:
      "On 11 January 1954, the BBC broadcast its first televised weather forecast.\r\n70 years later, BBC Weather has shared some of its archive to show how presenting styles and technology have changed over … [+157 chars]",
    category: "Fashion",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Andy Greenberg",
    title:
      "How a 27-Year-Old Codebreaker Busted the Myth of Bitcoin’s Anonymity",
    description:
      "Once, drug dealers and money launderers saw cryptocurrency as perfectly untraceable. Then a grad student named Sarah Meiklejohn proved them all wrong—and set the stage for a decade-long crackdown.",
    url: "https://www.wired.com/story/27-year-old-codebreaker-busted-myth-bitcoins-anonymity/",
    urlToImage:
      "https://media.wired.com/photos/65a72695e5015b60480cbdf6/191:100/w_1280,c_limit/Meiklejohn_Final_Static2.jpg",
    publishedAt: "2024-01-17T11:00:00Z",
    content:
      "When Meiklejohn started college at Brown in 2004, she discovered cryptography. This branch of computer science appealed directly to her puzzle addictionwhat was an encryption system, after all, but a… [+5574 chars]",
    category: "Cryptocurrency",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: null,
    title:
      "Masters 2024: Jack Lisowski comfortably beats world champion Luca Brecel to advance",
    description:
      "Jack Lisowski claims a 6-2 win over world champion Luca Brecel as the 50th edition of the Masters gets under way in stunning fashion at Alexandra Palace.",
    url: "https://www.bbc.co.uk/sport/snooker/67906895",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/E1F2/production/_132224875_gettyimages-1914612531.jpg",
    publishedAt: "2024-01-07T15:28:28Z",
    content:
      "Jack Lisowski is widely regarded as the most talented player yet to win a title on the tour\r\n<table><tr><th>Mr Q Masters</th></tr>\r\n<tr><td>Venue: Alexandra Palace, London Dates: 7-14 January</td></t… [+790 chars]",
    category: "Fashion",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Maxwell Zeff",
    title: "Don Lemon and Other Controversial Hosts Score Exclusive Shows on X",
    description:
      "Elon Musk is trying his hand as a TV network executive, and he’s slated three shows with controversial hosts to lead X’s new venture into streaming. Former CNN anchor, Don Lemon, is partnering with X to create a new show covering politics, culture, sports, an…",
    url: "https://gizmodo.com/elon-musk-don-lemon-tulsi-gabbard-jim-rome-host-x-shows-1851152263",
    urlToImage:
      "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/be5a39ac0bb86c9e866ab5e39da5bde9.jpg",
    publishedAt: "2024-01-09T20:00:00Z",
    content:
      "Elon Musk is trying his hand as a TV network executive, and hes slated three shows with controversial hosts to lead Xs new venture into streaming. Former CNN anchor, Don Lemon, is partnering with X t… [+2924 chars]",
    category: "Sports",
  },
];

export const fetchWeatherData = (lat, lon) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${weatherAPI}`
      );
      const data = await response.json();

      const parsedData = {
        location: data.name,
        temp: data.main.temp,
        weather: data.weather[0].description,
        imgURL:
          "https://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@2x.png",
      };

      if (!response.ok) {
        throw new Error("Can't fetch the weather data");
      }

      return parsedData;
    };
    try {
      const weatherData = await fetchData();
      // console.log(weatherData);
      dispatch(apiActions.fetchWeatherData(weatherData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchNewsData = (q, initial) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${q}&pageSize=2&apiKey=${newsAPI}`
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error("The problem is " + data.code + ". " + data.message);
      }

      for (const article of data.articles) {
        article.category = q;
        if (!article.urlToImage) {
          article.urlToImage = NA;
        }
      }
      // console.log(data);
      return data.articles;
    };
    if (isDevelopment) {
      try {
        let newsData = await fetchData();
        console.log("THIS IS ACTUAL DATA");

        if (initial) {
          dispatch(apiActions.fetchNewsData(newsData));
        }
        if (!initial) {
          dispatch(apiActions.fetchNewsWithNewPreferences(newsData));
        }
      } catch (error) {
        console.log(error);
        console.log("THIS IS MOCK DATA");
        let newsData = MOCK_DATA;
        if (initial) {
          dispatch(apiActions.fetchNewsData(newsData));
        }
        if (!initial) {
          dispatch(apiActions.fetchNewsWithNewPreferences(newsData));
        }
      }
    } else {
      console.log("THIS IS MOCK DATA");
      let newsData = MOCK_DATA;
      if (initial) {
        dispatch(apiActions.fetchNewsData(newsData));
      }
      if (!initial) {
        dispatch(apiActions.fetchNewsWithNewPreferences(newsData));
      }
    }
  };
};

export const fetchNewsCategoriesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("/data/news-categories.json");
      const data = await response.json();
      if (!response.ok) {
        throw new Error("No categories to show.");
      }
      return data.categories;
    };
    try {
      const newsCategoriesData = await fetchData();
      dispatch(apiActions.fetchNewsCategoriesData(newsCategoriesData));
    } catch (error) {
      console.log(error);
    }
  };
};
