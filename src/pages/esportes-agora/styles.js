import styled from "styled-components";

import { OutlinedPrimaryButton } from "components/button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  padding: 30px;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`

export const ButtonContainer =  styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  margin-bottom: 30px;
`

export const MatchContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;

  margin-bottom: 30px;
`

export const CardContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;

  margin-bottom: 30px;
`

export const LoadingContainer = styled.div`
  margin-bottom: 30px;
`

export const Button = styled(OutlinedPrimaryButton)`
  width: auto;
`
