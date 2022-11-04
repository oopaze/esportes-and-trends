import Link from "components/link";
import useTitle from "hooks/use-title";

import * as S from "./styles"

const Home = () => {
  useTitle("WEB I", true)
  
  return (
    <S.Container>
      <S.Title>
        Olá 🫶, <br/>
        tudo bem? Seja bem-vindo! 😬
      </S.Title>
      <S.ButtonContainer>
        <Link to="twitter-trends">🫰🏼 Aqui você ver os trending topics do twitter <S.Emoji>🕊</S.Emoji> </Link>
        <Link to="esportes-agora">⚽️ E aqui detalhes sobre as partidas do futebol brasileiro 🙅🏿‍♂️</Link>
      </S.ButtonContainer>
    </S.Container>
  )
};

export default Home;
