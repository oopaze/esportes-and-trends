import styled, { css } from "styled-components";

import { IoIosArrowDown } from "react-icons/io"

export const ActiveContainer = css`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const InactiveContainer = css`
  border-radius: 5px;
`

export const Container = styled.div`
  width: 100%;
  min-height: 40px;

  padding: 5px 10px;

  border: 1px solid #aaa;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  ${(props) => props.isActive ? ActiveContainer : InactiveContainer}
`

export const ActiveArrow = css`
  transform: rotate(180deg);
`

export const ArrowIcon = styled(IoIosArrowDown)`
  color: black;

  ${(props) => props.isActive && ActiveArrow}

  transition: transform 200ms linear;
`
