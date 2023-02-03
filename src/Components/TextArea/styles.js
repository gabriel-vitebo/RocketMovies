import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
  color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
  font-size: 1.6rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};

  border: none;
  resize: none;

  margin-bottom: 4rem;
  margin-top: 4rem;
  border-radius: 1rem;
  padding: 1.9rem 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
    font-size: 1.6rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  }
`