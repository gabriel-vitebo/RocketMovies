import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    margin-top: 1.5rem;
    grid-area: content;
    padding: 4rem 0;
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
  }
`

export const Content = styled.div`
  max-width: 550px;
  height: 590px;
  margin: 0 auto;

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
  }

  > p {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    color: ${({ theme }) => theme.COLORS.SUB_TITLE};
    line-height: 2.1rem;
    margin-top: 4rem;
    text-align: justify;
    margin-right: 1rem;
  }
`

export const CreatedAt = styled.div`
  align-items: center;
  display: flex;
  margin-left: 0.8rem;
  gap: 0.4rem;

  > p {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({ theme }) => theme.COLORS.SUB_TITLE};
  }

  > span {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({ theme }) => theme.COLORS.SUB_TITLE};
  }

  > svg {
    font-size: 1.6rem;
    margin-right: 0.4rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`
