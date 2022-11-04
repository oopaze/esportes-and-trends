import useTitle from "hooks/use-title"

const NotFound = () => {
  useTitle("Error 404")

  return (
    <h3>404 - PÁGINA NÃO ENCONTRADA</h3>
  )
}

export default NotFound
