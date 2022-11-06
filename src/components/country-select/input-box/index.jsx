import Proptypes from "prop-types"

import * as S from "./styles"

const InputBox = ({ children, isActive, setIsActive }) => {
  const handleClick = () => {
    setIsActive((prevValue) => !prevValue)
  }

  return (
    <S.Container isActive={isActive} onClick={handleClick}>
      {children}
      <S.ArrowIcon isActive={isActive} />
    </S.Container>
  )
}

InputBox.propTypes = {
  children: Proptypes.node.isRequired,
  isActive: Proptypes.bool.isRequired,
  setIsActive: Proptypes.func.isRequired
}

export default InputBox
