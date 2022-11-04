import axios from "axios"

const client = axios.create({
  baseURL: "https://api.api-futebol.com.br/v1/",
  headers: {
    "Authorization": `Bearer ${process.env.REACT_APP_FUTEBOL_TEST_KEY}`
  }
})

export default client
