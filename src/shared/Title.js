import styled from "styled-components"

export const Title = styled.h1`
  font-size: 3rem;
  font-family: "SF Mono";
  ${({color}) => color && `color: ${color};`}
`
