import styled from "styled-components";

export const Container = styled.span`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.SUB_TITLE};
`