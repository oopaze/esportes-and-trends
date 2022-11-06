import styled from "styled-components";

export const Container = styled.a`
  width: 240px;
  min-height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 15px;
  gap: 2px;

  background-color: #001218;

  border-radius: 10px;
  text-decoration: none;

  :hover {
    filter: brightness(1.4);
  }
`

export const Name = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 600;
  word-wrap: break-word;
`

export const TweetAmount = styled.p`
  font-size: 0.8rem;
  color: #4c6155;
`

export const Tip = styled.sub`
  color: #4c6155;
  font-size: 0.8rem;
`
