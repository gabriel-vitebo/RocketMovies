import { FiPlus } from "react-icons/fi"
import { Header } from "../../Components/Header"
import { Button } from "../../Components/Button"
import { Container, NewNote, Content } from "./styles"

export function Home(){
  return (
    <Container>
      <Header />
      <NewNote>
        <h1>Meus filmes</h1>
        <div>
          <Button 
          title="Adicionar filme"
          icon={FiPlus}  
          />
        </div>
      </NewNote>
      <Content></Content>
    </Container>
  )
}