import { useEffect, useState } from "react"

import Link from "components/link"
import useTitle from "hooks/use-title"

import getContests from "services/futebol/get-contests"
import Loading from "components/loading"
import ContestCard from "components/cards/contest-card"
import getTodayMatches from "services/futebol/get-today-matches"
import MatchCard from "components/cards/match-card"

import * as S from "./styles"

const EsportesAgora = () => {
  useTitle("Esportes Agora")

  const [contests, setContests] = useState([]) 
  const [matches, setMatches] = useState([])
  const [showRounds, setShowRounds] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const chargeRounds = async (roundId, contestId) => {
    setIsLoading(true)
    const { data, status } = await getTodayMatches(contestId, roundId)
    
    if (status < 400) {
      setShowRounds(true)
      setMatches(data.partidas)
    }

    setIsLoading(false)
  }

  const fetchContests = async () => {
    const { data, status } = await getContests()

    if (status < 400)
      setContests(data)

    setIsLoading(false)
  }

  useEffect(() => {
    fetchContests()
  }, [])

  return (
    <S.Container>
      <S.Title>Esportes Agora</S.Title>
      <S.ButtonContainer>
        <Link to="home">Voltar para home</Link>
        {showRounds && (
          <S.Button onClick={() => setShowRounds(false)}>
            Voltar para os campeonatos
          </S.Button>
        )}
      </S.ButtonContainer>
      {isLoading ? (
        <S.LoadingContainer>
          <Loading />
        </S.LoadingContainer>
      ) : (
        showRounds ? (
          <S.MatchContainer>
            {matches.map(match => (
              <MatchCard match={match} />
              ))}
          </S.MatchContainer>
        ) : (
          <S.CardContainer>
            {contests.map((contest) => (
              <ContestCard contest={contest} key={contest.campeonato_id} chargeRounds={chargeRounds} />
            ))}
          </S.CardContainer>
        )
        )}
    </S.Container>
  )
}

export default EsportesAgora
