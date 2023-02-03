import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 58px;
  text-align: center;
  margin: 1.6rem;
  padding: 1.6rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BG_INPUT};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.TEXT_INPUT}` : "none"};
  font-size: 1.6rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  color: ${({ theme }) => theme.COLORS.WHITE};
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  &:hover {
    background-color: ${({ theme, isNew }) =>
      isNew ? "transparent" : theme.COLORS.PRIMARY};
  }

  > button {
    border: none;
    background: none;
  }

  svg {
    min-height: 24px;
    min-width: 24px;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  > input {
    border: none;
    background: none;
    height: inherit;
  }
`
