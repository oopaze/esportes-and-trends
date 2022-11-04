import Proptypes from "prop-types"

import useRouter from "hooks/use-router"
import { useEffect } from "react"

const Route = ({ path, name, Component, innerProps = {} }) => {
  const { shouldRender, addRoute } = useRouter()

  useEffect(() => {
    addRoute({path, name, Component, innerProps})
  }, [Component, addRoute, innerProps, name, path])

  return (
    shouldRender(name) ? <Component {...innerProps} /> : <></>
  )
}

Route.propTypes = {
  path: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  Component: Proptypes.func.isRequired,
  innerProps: Proptypes.object
}

export default Route
