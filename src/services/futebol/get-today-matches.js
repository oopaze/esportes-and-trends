import client from "../futebol"

const getTodayMatches = async (contestId, roundsId) => {
  return await client.get(`campeonatos/${contestId}/rodadas/${roundsId}`)
}

export default getTodayMatches
