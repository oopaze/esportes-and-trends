const getUrlSufix = () => {
  return window.location.pathname.replace("/esportes-agora", "/").replace("/twitter-trends", "/")
}

const prefix = getUrlSufix()

export const generateUrl = (path) => {
  return prefix + path
}

export const getPathName = () => {
  return window.location.pathname.replace(prefix, "")
}
