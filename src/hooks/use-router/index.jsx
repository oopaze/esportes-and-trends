import {createContext, useCallback, useContext, useEffect, useState } from "react"

import NotFound from "components/not-found"
import Route from "components/route"
import { generateUrl, getPathName } from "utils/url-functions"

export const RouterContext = createContext({
  page: {},
  changePage: (name) => {},
  shouldRender: (name) => {},
  addRoute: (route) => {}
})

export const RouterContextProvider = ({ children }) => {
  
  const [routes, setRoutes] = useState([])
  const [page, setPage] = useState()

  const addRoute = (route) => {
    const isAlreadyAdded = !!routes.find((r) => r.name === route.name)

    if (!isAlreadyAdded)
      setRoutes((prevValue) => {
        return [...prevValue, route]
      })
  }

  const setNotFoundError = useCallback(() => {
    const notFoundPage = routes.find((route) => route.name === "not_found_error")
    setPage(notFoundPage)
  }, [routes])

  const changePage = (name_or_path) => {
    let route = routes.find((route) => route.name === name_or_path)

    if (!route)
      route = routes.find((route) => route.path === name_or_path)

    if (route) {
      setPage(route)
      const newPath = generateUrl(route.path)
      window.history.replaceState({ page: route.name }, route.name, newPath)
    } else {
      setNotFoundError()
    }
  }

  const shouldRender = (name) => { 
    return page?.name === name 
  }

  useEffect(() => {
    const path = getPathName()
    const route = routes.find((route) => route.path === path)

    if (route)
      setPage(route)
    else
      setNotFoundError()
  
  }, [routes, setNotFoundError])

  return (
    <RouterContext.Provider value={{
      page,
      changePage,
      shouldRender,
      addRoute
    }}>
      {children}
      <Route Component={NotFound} name="not_found_error" path="/404" />
    </RouterContext.Provider>
  )
}

const useRouter = () => {
  return useContext(RouterContext)
}

export default useRouter
