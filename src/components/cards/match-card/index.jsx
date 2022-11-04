import { formatMoment } from "utils/formatDate"
import * as S from "./styles"


const MatchCard = ({ match }) => {
  return (
    <S.MatchCard>
      <S.Shields>
        <S.Shield src={match.time_mandante.escudo} />
        <b>X</b>
        <S.Shield src={match.time_visitante.escudo} />
      </S.Shields>
      <S.Placar>
        {match.time_mandante.sigla} <b>{match.placar_visitante}</b> 
        {" "}x{" "}
        <b>{match.placar_visitante}</b> {match.time_visitante.sigla}</S.Placar>
      <S.Moment>{formatMoment(match.data_realizacao_iso)}</S.Moment>
      <S.Status>{match.status}</S.Status>
    </S.MatchCard>
  )
}

export default MatchCard
