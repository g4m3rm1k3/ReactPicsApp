import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID CHHVyjlts5RKA6ZJBMzIGz_VIQYbbMY2WZnQTvZpIl4",
  },
});
