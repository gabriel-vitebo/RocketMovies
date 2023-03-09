import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PRIMARY};
    }

    h2 {
      font-size: 2rem;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
      color: ${({ theme }) => theme.COLORS.TEXT_NOTE};
      font-weight: 400;
    }
  }
`

export const Form = styled.form`
  max-width: 1113px;
  margin: 3.8rem auto;
  > header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 4rem;

    h1 {
      font-size: 3.6rem;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.SUB_TITLE};
      margin-top: 2.4rem;
    }

    Button {
      display: flex;
      justify-content: flex-start;
    }
  }

  > .tags {
    display: flex;
    margin-top: 2.4rem;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BG_DARK};
    color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
    border: none;
    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;
    flex-wrap: wrap;

    > .tag {
      flex-basis: 180px;
      flex-grow: 1;
      flex-shrink: 0;
      width: ${({ isNew }) => (isNew ? "18rem" : "11.3rem")};
    }
  }

  > .tittle-and-rating {
    display: flex;
    gap: 4rem;
  }
`
