import Route from "./components/route"
import Home from "pages/home"
import TwitterTrends from "pages/twitter-trends"
import EsportesAgora from "pages/esportes-agora"

const App = () => {
  return (
    <>

      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;1,100&family=Poppins:wght@400;600&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <Route path="/esportes-and-trends/" name="home" Component={Home} />
      <Route path="/esportes-and-trends/twitter-trends" name="twitter-trends" Component={TwitterTrends} />
      <Route path="/esportes-and-trends/esportes-agora" name="esportes-agora" Component={EsportesAgora} />
    </>
  )
}

export default App
