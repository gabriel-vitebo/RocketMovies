import styled from "styled-components";
import { FiStar } from "react-icons/fi"

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
      gap: 1rem;
      align-items: center;

      h1 {
        font-size: 3.6rem;
        font-weight: 500;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
        line-break: 4.7rem;
        margin-right: 1rem;
      }
    }
  }
`

export const Span  = styled.div`

`
export const CreatedAt = styled.div`

`
