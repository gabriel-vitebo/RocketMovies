import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  > p {
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    color: ${({ theme }) => theme.COLORS.SUB_TITLE};
    margin: 4.8rem 0;
  }

  > div {
    display: flex;
    justify-content: center;
    width: 100%;

    > a {
      font-size: 1.6rem;
      font-weight: 400;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }

  }
`

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`