import Link from "components/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 30px;
  padding: 5px;
`

export const Title = styled.h3`
  max-width: 500px;
  text-align: center;
`

export const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`

export const Button = styled(Link)`
  min-width: 280px;
  padding: 5px;
`

export const Emoji = styled.span`
  color: #1d9bf0;
`
