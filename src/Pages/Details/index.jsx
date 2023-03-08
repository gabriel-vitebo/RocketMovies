import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
import { Header } from "../../Components/Header"
import { FiArrowLeft, FiClock } from "react-icons/fi"
import { TextButton } from "../../Components/TextButton"
import { Section } from "../../Components/Section"
import { Tag } from "../../Components/Tag"
import { Span } from "../../Components/Span"
import { Rating } from "../../Components/Rating"
import { Container, Content, CreatedAt } from "./styles"
import avatarPlaceHolder from "../../assets/empaty-profile.svg"

export function Details() {
  const { user } = useAuth()
  const [data, setData] = useState(null)
  const params = useParams()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder

  let maxStarCount = 5
  let fullStarCount = data.rating
  let emptyStarCount = maxStarCount - fullStarCount

  let fullStarsList = new Array(fullStarCount).fill(true)
  let emptyStarsList = new Array(emptyStarCount).fill(false)
  let stars = fullStarsList.concat(emptyStarsList)
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
                {stars.map((star) => (
                  <Rating star={star} />
                ))}
              </div>
              <div className="info-user-movie">
                <img src={avatarUrl} alt={`foto de usuário de ${user.name}`} />
                <Span title={user.name} />
                <CreatedAt>
                  <FiClock />
                  <p>{data.updated_at}</p>
                </CreatedAt>
              </div>
            </section>
            {data.tags && (
              <Section>
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <p>{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  )
}
