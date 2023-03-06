import { Link } from "react-router-dom"

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
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag("")
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="/">
              <TextButton title="voltar" icon={FiArrowLeft} />
            </Link>
            <h1>Novo Filme</h1>
          </header>
          <div className="tittle-and-rating">
            <Input placeholder="Título" />
            <Input type="number" placeholder="Sua nota (de 0 a 5)" />
          </div>
          <TextArea placeholder="Observações" />
          <h2>Marcadores</h2>
          <div className="tags">
            {tags.map((tag, index) => (
              <ItemTag
                key={String(index)}
                value={tag}
                onClick={() => {}}
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
          <div className="SaveAndDeleteButtons">
            <button className="DeleteButton">Excluir filme</button>
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}
