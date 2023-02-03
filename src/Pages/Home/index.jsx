import { FiPlus } from "react-icons/fi"
import { Container, NewNote, Content } from "./styles";
import { Header } from "../../Components/Header"
import { Button } from "../../Components/Button"
import { Note } from "../../Components/Note"
import { Section } from "../../Components/Section"

export function Home(){
  return (
    <Container>
      <Header />
      <NewNote>
        <h1>Meus filmes</h1>
        <div>
          <Button icon={FiPlus} title="Adicionar filme" />
        </div>
      </NewNote>
      <Content>
        <Section>
          <Note
            data={{
              title: "Frozen",
              tags: [
                { id: "1", name: "animação" },
                { id: "2", name: "comédia" },
                { id: "3", name: "3d" },
              ],
            }}
          />
        </Section>
      </Content>
    </Container>
  )
}