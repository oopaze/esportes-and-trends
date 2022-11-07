import { useEffect, useRef, useState } from "react"
import Proptypes from "prop-types"

import CountryOption from "./country-option"
import InputBox from "./input-box"

import * as S from "./styles"

const CountrySelect = (props) => {
  const { options, country, setCountry } = props

  const [isActive, setIsActive] = useState(false)
  const [selectedOption, setSelectedOption] = useState(country)

  const clickRef = useRef()

  const setOption = (option) => {
    setIsActive(false)
    setSelectedOption(option)
    setCountry(option.value)
  }

  useEffect(() => {
    function handleClickOutside(evt) {
      const target = evt.target

      if (clickRef.current && isActive) {
        const clickWasOutside = !clickRef.current.contains(target)
        if (clickWasOutside) setIsActive(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isActive])

  return (
    <S.Container>
      <InputBox isActive={isActive} setIsActive={setIsActive}>
        {selectedOption ? (
          <CountryOption 
            value={selectedOption.value} 
            label={selectedOption.label}
            onClick={() => setOption(undefined)} 
            isShowing
          /> 
        ) : (
          <S.Placeholder>Escolha o país</S.Placeholder>
        ) 
        }
      </InputBox>
      <S.SelectBox isActive={isActive} ref={clickRef}>
        {options.map((option) => (
          <CountryOption 
            value={option.value} 
            label={option.label} 
            onClick={() => setOption(option)} 
          />
        ))}
      </S.SelectBox>
    </S.Container>
  )
}

CountrySelect.propTypes = {
  options: Proptypes.arrayOf({
    value: Proptypes.number.isRequired,
    label: Proptypes.string.isRequired
  }),
  country: Proptypes.number.isRequired,
  setCountry: Proptypes.func.isRequired
}

export default CountrySelect
