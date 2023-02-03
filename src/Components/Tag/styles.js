import styled from "styled-components";

export const Container = styled.span`
  margin-right: 0.8rem;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  font-weight: 400;
  line-height: 1.4rem;
  background: ${({ theme }) => theme.COLORS.TEXT_BUTTON};
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  gap: 0.8rem;
  color: ${({ theme }) => theme.COLORS.SPAN};
`