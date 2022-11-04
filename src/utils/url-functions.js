const getUrlSufix = () => {
  return window.location.pathname.replace("/esportes-agora", "").replace("/twitter-trends", "")
}

const prefix = getUrlSufix()

export const generateUrl = (path) => {
  return prefix.slice(0, -1) + path
}

export const getPathName = () => {
  return window.location.pathname.replace(prefix, "/")
}
