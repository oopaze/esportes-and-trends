import styled from "styled-components";

export const BaseButton = styled.button`
  min-height: 40px;
  width: auto;

  padding: 5px 10px;
  
  text-align: center;

  border-radius: 5px;

  :focus {
    border-width: 2px;
  }

  :hover {
    filter: brightness(.8);
  }
`

export const BaseOutlinedButton = styled(BaseButton)`
  color: black;
  border-width: 2px;

  :focus {
    border-width: 2px;
  }
`

export const PrimaryButton = styled(BaseButton)`
  background-color: #343a40;
  color: white;
`

export const OutlinedPrimaryButton = styled(BaseOutlinedButton)`
  border-color: #343a40;
`

export const DangerButton = styled(BaseButton)`
  background-color: #dc3545;
  color: white;
`

export const OutlinedDangerButton = styled(BaseOutlinedButton)`
  border-color: #dc3545;
`
