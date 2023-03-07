import styled from "styled-components"

export const Container = styled.div`
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
`
