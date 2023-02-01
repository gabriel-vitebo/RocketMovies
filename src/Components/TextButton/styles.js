import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  border: none;
  font-size: 1.6rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};

  display: flex;
  justify-content: center;
  gap: .8rem;

  > svg {
    font-size: 1.6rem
  }
`