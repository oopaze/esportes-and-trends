import useTitle from "hooks/use-title";

import * as S from "./styles"

const Home = () => {
  useTitle("WEB I", true)
  
  return (
    <S.Container>
      <S.Title>
        OlÃ¡ ð«¶, <br/>
        tudo bem? Seja bem-vindo! ð¬
      </S.Title>
      <S.ButtonContainer>
        <S.Button to="twitter-trends">ð«°ð¼ Aqui vocÃª ver os trending topics do twitter <S.Emoji>ð</S.Emoji> </S.Button>
        <S.Button to="esportes-agora">â½ï¸ E aqui detalhes sobre as partidas do futebol brasileiro ðð¿ââï¸</S.Button>
      </S.ButtonContainer>
    </S.Container>
  )
};

export default Home;
