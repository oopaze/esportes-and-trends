import Proptypes from "prop-types"

const TrendingTopic = ({ url, name, tweetVolume }) => {
  return <a href={url}>{name}{tweetVolume && ` - ${tweetVolume}`}</a>
}

TrendingTopic.propTypes = {
  url: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  tweetVolume: Proptypes.object
}

export default TrendingTopic
