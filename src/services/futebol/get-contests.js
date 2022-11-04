import client from "."

const getContests = async () => {
  return await client.get("campeonatos/")
}

export default getContests
