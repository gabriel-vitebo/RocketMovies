import styled from "styled-components"

export const Container = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
  color: ${({ theme }) => theme.COLORS.TEXT_BUTTON};
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  border: none;
  border-radius: 1rem;

  width: 100%;
  padding: 1.6rem 0;
  align-items: center;
  margin: 2.4rem 0 4.2rem 0;
  &:disabled {
    opacity: 0.5;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`
