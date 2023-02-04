import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.header`
  display: flex;
  grid-area: header;
  width: 100%;
  height: 11.6rem;
  background: ${({ theme }) => theme.COLORS.BG};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.LINE};
  justify-content: space-between;
  padding: 0 8rem;
  align-items: center;

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  .exit {
    font-size: 1.4rem;
    border: none;
    color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
    font-weight: 400;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
  }

  > .setInput {
    width: 63rem;
    margin: 0 5rem;
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > .setProfile {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-right: .8rem;

    h2 {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
      font-size: 1.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.SUB_TITLE};
      
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.COLORS.LINE};
  }
`