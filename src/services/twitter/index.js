import axios from "axios"

const api = axios.create({
  baseURL: "https://esportes-and-trends.herokuapp.com",
  headers: {
    "Authorization": `Bearer ${process.env.REACT_APP_TWITTER_USER_TOKEN}`,
    "accept": "*/*"
  }
})

export default api
