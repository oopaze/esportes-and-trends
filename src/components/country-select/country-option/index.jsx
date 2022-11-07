import Proptypes from "prop-types"
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { getCountryIconClass } from "./helper"
import * as S from "./styles"

const CountryOption = ({ label, value, onClick, isShowing = false }) => {
  const countryClassIcon = getCountryIconClass(value)

  return (
    <S.OptionContainer 
      onClick={onClick} 
      isShowing={isShowing}
    > 
      <S.Icon className={countryClassIcon} />
      <S.Text>{label}</S.Text>
    </S.OptionContainer>
  )
}

CountryOption.propTypes = {
  label: Proptypes.string.isRequired,
  value: Proptypes.number.isRequired,
  isShowing: Proptypes.bool,
  onClick: Proptypes.func.isRequired
}

export default CountryOption
