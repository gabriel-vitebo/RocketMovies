import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  >main {
    grid-area: content;
    padding: 4.0rem 0;
  }
`

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  > button:first-child {
    align-self: flex-start;
  }

  > section {
    .title-movie {
      display: flex;
      align-items: center;
      gap: 1rem;

      h1 {
        font-size: 3.6rem;
        font-weight: 500;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
        line-break: 4.7rem;
        margin-right: 1rem;
        margin-top: 2.5rem;
      }

      input {
        display: none;
      }

      label {
        display: block;
        min-height: 2rem;
        min-width: 2rem;
      }

      label:has(input:checked) {  
        background: ${({ theme }) => theme.COLORS.PRIMARY};
        display: block;
      }

      .star-rating-empaty {
        min-height: 2rem;
        min-width: 2rem;
        fill: ${({ theme }) => theme.COLORS.PRIMARY};
        stroke: ${({ theme }) => theme.COLORS.PRIMARY};
      }

      .star-rating{ 
        min-height: 2rem;
        min-width: 2rem;
        stroke: ${({ theme }) => theme.COLORS.PRIMARY};
      }
      
    }
      
    }

    .info-user-movie {
      display: flex;
      align-items: center;
      margin-top: 2.5rem;

      img {
        width: 1.6rem;
        height: 1.6rem;
        margin-right: 0.8rem;
      }
    }
  
`

export const CreatedAt = styled.div`

`
