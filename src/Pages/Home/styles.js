import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 12.8rem auto;
  grid-template-areas:
    "header"
    "create"
    "content";
`

export const NewNote = styled.div`
  grid-area: create;
  display: flex;
  align-items: center;
  margin: 5rem 10.7rem 3rem 10.7rem;
  justify-content: space-between;
  height: 9rem;
  border: none;

  > div {
    width: 20.7rem;
  }

  font-size: 3.2rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
  color: ${({ theme }) => theme.COLORS.SUB_TITLE};
`
export const Content = styled.section`
  grid-area: content;
`