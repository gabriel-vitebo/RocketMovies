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

  > span {
    display: flex;
    justify-self: start;
    color: ${({ theme }) => theme.COLORS.TEXT_NOTE};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.6rem;
    font-weight: 400;
    text-align: justify;
    margin: 1.5rem 0;
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

  > .rating {
    display: flex;
    gap: 0.6rem;
    label {
      min-height: 2rem;
      min-width: 2rem;
      align-items: center;
      justify-content: center;
      display: flex;
    }

    input[type="checkbox"] {
      display: none;
    }

    .star-rating-empaty {
      stroke: ${({ theme }) => theme.COLORS.PRIMARY};
      display: block;
      min-height: 2rem;
      min-width: 2rem;
    }

    label:has(input:checked) .star-rating {
      fill: ${({ theme }) => theme.COLORS.PRIMARY};
      stroke: ${({ theme }) => theme.COLORS.PRIMARY};
      display: block;
      min-height: 2rem;
      min-width: 2rem;
    }

    label:has(input:checked) .star-rating-empaty {
      display: none;
    }
  }
`
