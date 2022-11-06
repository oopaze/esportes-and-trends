export const getCountryIconClass = (countryCode) => {
  switch(countryCode) {
    case 1:
      return "fi fi-un"
    case 23424975:
      return "fi fi-gb"
    case 23424768:
      return "fi fi-br"
    case 23424829:
      return "fi fi-de"
    case 23424900:
      return "fi fi-mx"
    case 23424775:
      return "fi fi-ca"
    case 23424977:
      return "fi fi-us"
    default:
      return ""
  }
}
