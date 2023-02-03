import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BG_NOTE};
  border: none;
  border-radius: 1.6rem;
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.SUB_TITLE};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    font-size: 2.4rem;
    font-weight: 700;
    display: flex;
    margin-bottom: 0.6rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.TEXT_NOTE};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.6rem;
    font-weight: 400;
    text-align: justify;
    margin: 1.5rem 0;
  }

  >footer {
    display: flex;
    justify-content: flex-start;
  }
`