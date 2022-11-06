import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  padding: 30px;

  gap: 30px;
`

export const Title = styled.h1`
  text-align: center;
`

export const SelectCountryContainer = styled.section`
  width: 100%;
  height: auto;
  
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const TrendsContainer =  styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 1000px;
`
