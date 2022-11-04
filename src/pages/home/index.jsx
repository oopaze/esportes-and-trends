import Link from "components/link";
import useTitle from "hooks/use-title";

const Home = () => {
  useTitle("WEB I", true)
  
  return (
    <div>
      <h3>Olá, entre no projeto que você espera.</h3>
      <div>
        <Link to="esportes-agora">Esportes Agora</Link>
        <Link to="twitter-trends">Twitter Trends</Link>
      </div>
    </div>
  )
};

export default Home;
