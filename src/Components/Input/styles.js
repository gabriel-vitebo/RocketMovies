import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
  color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
  border-radius: 1rem;

  > input {
    height: 5.6rem;
    width: 100%;
    padding: 2rem;

    color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    font-weight: 400;
    font-size: 1.6rem;
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
      font-weight: 400;
      font-size: 1.6rem;
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`