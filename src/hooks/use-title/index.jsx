import { useEffect } from "react"

const useTitle = (title, ignoreSufix = false) => {
  useEffect(() => {
    document.title = title
    if (!ignoreSufix) {
      document.title += " | WEB I"
    }
  }, [ignoreSufix, title])
}

export default useTitle
