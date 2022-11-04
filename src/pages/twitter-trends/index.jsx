import Link from "components/link"
import useTitle from "hooks/use-title"

const TwitterTrends = () => {
  useTitle("Twitter Trends")

  return (
    <div>
      <h1>
        Twitter Trends
      </h1>

      <Link to="home">Home</Link>
    </div>
  )
}

export default TwitterTrends
