import { OutlinedPrimaryButton } from "components/button"
import styled from "styled-components"

export const ContestCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 300px;
  width: 100%;
  min-width: 250px;
  min-height: 300px;

  padding: 20px;

  border: 1px solid #0003;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 2px #0003;
`

export const ContestImg = styled.img`
  display: block;

  width: auto;
  height: 100px;

  margin: 0 auto;
  margin-bottom: 20px;
`

export const ContestTitle = styled.h3`
  text-align: center;
  font-weight: 600;

  margin-bottom: 20px;
`

export const Line = styled.div`
  width: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;

  margin-bottom: 20px;
`

export const Status = styled.span`
  padding: 5px;

  border: 2px solid #007bff;
  border-radius: 5px;

  background-color: #FFFD;
  color: #007bff;
  text-transform: capitalize;

  :hover {
    border-color: #0040ff;
    color: #0040ff;
    cursor: pointer;
  }
`

export const Button = styled(OutlinedPrimaryButton)`
  width: auto;
`
