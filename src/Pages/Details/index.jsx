import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()

  function handleBackHome() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja remove o filme?")
    if (confirm) {
      await api.delete(`/movienotes/${params.id}`)
      navigate(-1)
    }
  }

  const params = useParams()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder

  let maxStarCount = 5
  let fullStarCount = data ? data.rating : 0
  let emptyStarCount = maxStarCount - fullStarCount

  let fullStarsList = new Array(fullStarCount).fill(true)
  let emptyStarsList = new Array(emptyStarCount).fill(false)
  let stars = fullStarsList.concat(emptyStarsList)

  const yearDayAndMonth = data ? data.updated_at.slice(0, 10) : 0
  const hoursAndMinutes = data ? data.updated_at.slice(10, 16) : 0

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
            <div className="button-text">
              <TextButton
                title="voltar"
                icon={FiArrowLeft}
                onClick={handleBackHome}
              />
              <TextButton title="Exluir filme" onClick={handleRemove} />
            </div>
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
                  <p>{`${yearDayAndMonth} às  ${hoursAndMinutes}`}</p>
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
