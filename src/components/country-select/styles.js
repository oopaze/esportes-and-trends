import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: 300px;
  width: 100%;
`

export const ActiveSelectBox = css`
  border-bottom: 1px solid #aaa;
  border-right: 1px solid #aaa;
  border-left: 1px solid #aaa;
`

export const Placeholder = styled.p`
  color: #333;
`

export const SelectBox = styled.div`
  width: 100%;
  height: auto;
  max-height: 400px;

  ${(props) => !props.isActive && "max-height: 0px;"}

  overflow: hidden;

  transition: max-height 200ms linear;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  ${(props) => props.isActive && ActiveSelectBox}
`
