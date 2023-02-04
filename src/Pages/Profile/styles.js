import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;
    background: ${({ theme }) => theme.COLORS.BG_NOTE};

    display: flex;
    align-items: center;
    padding: 0 12.4rem;
  }

  > .buttonBackToHome {
    display: flex;
    align-items: center;
    padding: 0 12.4rem;
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 3rem auto 0;

  >div:nth-child(4) {
    margin-top: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    border-radius: 50%;
    width: 18.6rem;
    height: 18.6rem;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.TEXT_BUTTON};
    }
  }
`