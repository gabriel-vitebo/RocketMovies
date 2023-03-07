import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  height: 22.2rem;
  background-color: ${({ theme }) => theme.COLORS.BG_NOTE};
  border: none;
  border-radius: 1.6rem;
  padding: 3.2rem;
  margin-bottom: 2.4rem;
  overflow: hidden;

  > h2 {
    color: ${({ theme }) => theme.COLORS.SUB_TITLE};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    font-size: 2.4rem;
    font-weight: 700;
    display: flex;
    margin-bottom: 0.6rem;
  }

  > .rating {
    display: flex;
    gap: 0.6rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.TEXT_NOTE};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.6rem;
    font-weight: 400;
    text-align: justify;
    margin: 1.5rem 0;
    height: 4rem;
    max-width: 222ch;
    white-space: wrap;
    overflow: hidden;
  }

  > footer {
    display: flex;
    justify-content: flex-start;
  }
`
