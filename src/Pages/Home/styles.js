import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto;
  grid-template-areas:
    "header header"
    "newnotes newnotes"
    "content content";

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
`
export const NewNote = styled.div`
  grid-area: newnotes;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  width:1137px;
  margin-top: 5rem;
  
  >h1 {
    font-size: 3.2rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  >div {
    width: 20.7rem;
  }
  
`
export const Content = styled.div`
  grid-area: content;
  width: 1137px;
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

  > Section {
    margin-bottom: 2.4rem;
  }
`