import api from "services/twitter"

const getTrends = (countryCode = 1) => {
  return api.get(`/trends/${countryCode}`)
}

export default getTrends
