import { useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { Header } from "../../Components/Header"
import { TextButton } from "../../Components/TextButton"
import { Input } from "../../Components/Input"
import { TextArea } from "../../Components/TextArea"
import { ItemTag } from "../../Components/ItemTag"
import { Button } from "../../Components/Button"

import { FiArrowLeft } from "react-icons/fi"
import { useState } from "react"

import { Container, Form } from "./styles"

export function New() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBackHome() {
    const confirm = window.confirm(
      "Deseja voltar? o Filme não foi salvo e será descartado, caso queira salvar o filme, clique em 'Salvar alterações'"
    )
    if (confirm) {
      navigate(-1)
    }
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Titulo é obrigatório!")
    }

    if (newTag) {
      return alert(
        "Uma tag não foi adicionada, clique para adicionar ou será descartada!"
      )
    }

    await api
      .post("/movienotes", {
        title,
        rating,
        description,
        tags,
      })
      .then(() => {
        alert("Filme adicionado com sucesso!")
        navigate(-1)
      })
      .catch((error) => {
        if (error.response) {
          return alert(error.response.data.message)
        }
      })
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <TextButton
              onClick={handleBackHome}
              title="voltar"
              icon={FiArrowLeft}
            />
            <h1>Novo Filme</h1>
          </header>
          <div className="tittle-and-rating">
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
          <h2>Marcadores</h2>
          <div className="tags">
            {tags.map((tag, index) => (
              <ItemTag
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
                className="tag"
              />
            ))}
            <ItemTag
              isNew
              placeholder="Adicionar marcador"
              className="tag"
              onChange={(e) => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>
          <Button title="Salvar alterações" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  )
}
