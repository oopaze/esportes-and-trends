import client from "services"

const getTrends = () => {
  return client.get("")
}

export default getTrends
