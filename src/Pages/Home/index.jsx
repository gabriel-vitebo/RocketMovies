import { useEffect, useState } from "react"
import { FiPlus } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { Container, NewNote, Content } from "./styles"
import { Header } from "../../Components/Header"
import { Button } from "../../Components/Button"
import { Note } from "../../Components/Note"
import { Section } from "../../Components/Section"

export function Home() {
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movienotes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header onChange={setSearch} />
      <NewNote>
        <h1>Meus filmes</h1>
        <Link to="/new" className="ButtonToCreateANewNote">
          <Button icon={FiPlus} title="Adicionar filme" />
        </Link>
      </NewNote>
      <Content>
        <Section>
          {notes.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Section>
      </Content>
    </Container>
  )
}
