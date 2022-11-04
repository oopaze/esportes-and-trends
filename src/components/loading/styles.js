import styled, { keyframes } from 'styled-components'

const Looping = keyframes`
  0% {
    margin-bottom: 10px;
  }

  100% {
    margin-bottom: 0;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  & div:nth-child(1) {
    animation-delay: 0ms;
  }

  & div:nth-child(2) {
    animation-delay: 125ms;
  }

  & div:nth-child(3) {
    animation-delay: 250ms;
  }
`

export const Ring = styled.div`
  width: 2px;
  height: 2px;

  background-color: black;

  margin: var(--spacing-2);

  border: 3px solid var(--black);
  border-radius: 50%;
  
  animation: ${Looping} 500ms cubic-bezier(1, 0.2, 0.5, 1) infinite;
`
