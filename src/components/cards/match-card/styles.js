import styled from "styled-components";

export const MatchCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 300px;
  width: 100%;
  min-width: 250px;
  min-height: 250px;

  padding: 20px;

  border: 1px solid #0003;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 2px #0003;
`

export const Shields = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;

  margin-bottom: 20px;
`

export const Shield = styled.img`
  display: block;

  width: auto;
  max-width: 50%;
  height: 100px;

  margin: 0 auto;
  margin-bottom: 10px;
`

export const Placar = styled.p`
  margin-bottom: 20px;
`

export const Status = styled.span`
  padding: 5px;

  border: 2px solid #007fff;
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

export const Moment = styled.span`
  font-weight: 600;
  margin-bottom: 20px;
`


