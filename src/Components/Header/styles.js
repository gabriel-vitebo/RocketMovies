import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 11.6rem;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.LINE};
  display: flex;
  justify-content: space-between;
  padding: 0 12.3rem;

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.LINE};
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 0.9rem;

    strong {
      font-size: 1.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
      line-height: 1.8rem;
    }

    button {
      background: none;
      border: none;
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
    }
  }
`