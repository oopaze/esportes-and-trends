import useRouter from "hooks/use-router"
import * as S from "./styles"

const Link = ({ children, to }) => {
  const router = useRouter()
  
  return (
    <S.Button onClick={() => {
      router.changePage(to)
    }}>
      {children}
    </S.Button>
  )
}

export default Link
