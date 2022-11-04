import Route from "./components/route"
import Home from "pages/home"
import TwitterTrends from "pages/twitter-trends"
import EsportesAgora from "pages/esportes-agora"

const App = () => {
  return (
    <>
      <Route path="/" name="home" Component={Home} />
      <Route path="/twitter-trends" name="twitter-trends" Component={TwitterTrends} />
      <Route path="/esportes-agora" name="esportes-agora" Component={EsportesAgora} />
    </>
  )
}

export default App
