import Proptypes from "prop-types"

import * as S from "./styles"

const ContestCard = ({ contest, chargeRounds }) => {
  const canChargeMatches = () => {
    return ["campeonato-brasileiro", "copa-do-brasil"].includes(contest.slug) && contest?.rodada_atual?.nome
  }

  return (
    <S.ContestCard>
      <S.ContestImg src={contest.logo} alt={contest.nome_popular + " logo"} />
      <S.ContestTitle>{contest.nome_popular}</S.ContestTitle>
      <S.Line>
        <S.Status>{contest.status}</S.Status>
        {contest?.rodada_atual?.nome && <span>{contest.rodada_atual.nome}</span>}
      </S.Line>
      {contest?.rodada_atual?.nome && (
        <S.Button 
          onClick={() => chargeRounds(contest.rodada_atual.rodada, contest.campeonato_id)}
          disabled={!canChargeMatches()}
        >
          {canChargeMatches() ? "Carregar Partidas dessa Rodada" : "Partidas indisponíveis"}
        </S.Button>
      )}
    </S.ContestCard>
  )
}

ContestCard.propTypes = {
  contest: Proptypes.shape({
    id: Proptypes.number.isRequired,
    logo: Proptypes.string.isRequired,
    nome_popular: Proptypes.string.isRequired,
    status: Proptypes.string.isRequired,
    rodada_atual: Proptypes.shape({
      nome: Proptypes.string,
      id: Proptypes.number
    })
  }),
  chargeRounds: Proptypes.func.isRequired
}

export default ContestCard
