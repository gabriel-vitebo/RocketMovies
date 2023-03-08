import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { Header } from "../../Components/Header"
import { FiArrowLeft, FiClock } from "react-icons/fi"
import { TextButton } from "../../Components/TextButton"
import { Section } from "../../Components/Section"
import { Tag } from "../../Components/Tag"
import { Span } from "../../Components/Span"
import { Rating } from "../../Components/Rating"
import { Container, Content, CreatedAt } from "./styles"

export function Details() {
  const [data, setData] = useState(null)
  const params = useParams()
  useEffect(() => {
    async function fetchNoteDetails() {
      const response = await api.get(`/movienotes/${params.id}`)
      setData(response.data)
    }
    fetchNoteDetails()
  }, [])
  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <TextButton title="voltar" icon={FiArrowLeft} />
            <section>
              <div className="title-movie">
                <h1>{data.title}</h1>
                <Rating />
              </div>
              <div className="info-user-movie">
                <img
                  src="https://github.com/gabriel-vitebo.png"
                  alt="Foto do usuário"
                />
                <Span title="Gabriel Vitebo" />
                <CreatedAt>
                  <FiClock />
                  <p>{data.updated_at}</p>
                  <span>às</span>
                  <p>16:52</p>
                </CreatedAt>
              </div>
            </section>
            <Section>
              <Tag title="Comédia" />
              <Tag title="Animação" />
              <Tag title="3D" />
            </Section>
            <p>{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  )
}
