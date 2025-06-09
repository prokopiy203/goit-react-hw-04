import axios from "axios";

const initialKey = "HAvHXEZ0KtNXxQOXDljw57wUb61ICv-qsBgFeic7jPY";

const API = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${initialKey}`,
  },
});

const fetchData = async (query = "", page = 1, per_page = 12) => {
  const data = await API.get("search/photos/", {
    params: { query, page, per_page },
  });
  return data;
};

export default fetchData;
