import Proptypes from "prop-types"

import * as S from "./styles"

const TrendingTopic = ({ url, name, tweetVolume }) => {
  return (
    <S.Container href={url} target="_blank">
      <S.Name>{name}</S.Name>
      {tweetVolume && <S.TweetAmount>{tweetVolume} tweets</S.TweetAmount>}
      <S.Tip>Clique para ver mais...</S.Tip>
    </S.Container>
  )
}

TrendingTopic.propTypes = {
  url: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  tweetVolume: Proptypes.object
}

export default TrendingTopic
