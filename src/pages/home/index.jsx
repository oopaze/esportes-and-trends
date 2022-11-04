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
        <S.Button to="twitter-trends">🫰🏼 Aqui você ver os trending topics do twitter <S.Emoji>🕊</S.Emoji> </S.Button>
        <S.Button to="esportes-agora">⚽️ E aqui detalhes sobre as partidas do futebol brasileiro 🙅🏿‍♂️</S.Button>
      </S.ButtonContainer>
    </S.Container>
  )
};

export default Home;
