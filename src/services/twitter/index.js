import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Authorization": `Bearer ${process.env.REACT_APP_TWITTER_USER_TOKEN}`,
    "accept": "*/*"
  }
})

export default api
