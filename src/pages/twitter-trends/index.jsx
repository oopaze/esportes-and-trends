import { useState } from "react"

import CountrySelect from "components/country-select"
import Link from "components/link"
import useTitle from "hooks/use-title"
import Loading from "components/loading"
import { countryOptions } from "./constants"

import * as S from "./styles"
import getTrends from "services/twitter/get-trends"
import TrendingTopic from "components/trending-topic"

const TwitterTrends = () => {
  useTitle("Twitter Trends")

  const [country, setCountry] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [trends, setTrends] = useState([])
  const [showTrends, setShowTrends] = useState(false)

  const changeCountry = (receivedCountry) => {
    setShowTrends(false)
    
    setCountry(receivedCountry)
    setIsLoading(true)
    fetchTrends(receivedCountry).finally(() => setIsLoading(false))

    setShowTrends(true)
  }

  const fetchTrends = async (country) => {
    const { data } = await getTrends(country)

    if (data.success) {
      setTrends(data.trends)
    }
  }

  return (
    <S.Container>
      <S.Title>
        Twitter Trends
      </S.Title>

      <Link to="home">Voltar para home</Link>

      <S.SelectCountryContainer>
        <CountrySelect 
          options={countryOptions} 
          country={country} 
          setCountry={changeCountry} 
        />
      </S.SelectCountryContainer>

      {isLoading && <Loading />}

      {showTrends && 
        <S.TrendsContainer>
          {trends.map((trend) => (
            <TrendingTopic 
              url={trend.url} 
              key={trend.name}
              tweetVolume={trend.tweet_volume}
              name={trend.name}
            />
          ))}
        </S.TrendsContainer>
      }
    </S.Container>
  )
}

export default TwitterTrends
