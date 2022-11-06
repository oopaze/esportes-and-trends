import styled from "styled-components";

export const OptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: white;
  
  gap: 5px;
  ${(props) => !props?.isShowing && "padding: 5px 10px;"}

  width: 100%;

  cursor: pointer;

  :hover {
    ${(props) => !props?.isShowing && "filter: brightness(.8);"}
  }
`

export const Icon = styled.span`
  border-radius: 4px;

  width: 20px;
  height: 20px;

  display: block;
`

export const Text = styled.p`
  font-weight: 500;
`
