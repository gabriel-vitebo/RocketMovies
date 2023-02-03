import { Header } from "../../Components/Header"
import { TextButton } from "../../Components/TextButton"
import { Input } from "../../Components/Input"
import { TextArea } from "../../Components/TextArea"
import { ItemTag } from "../../Components/ItemTag"


import { FiArrowLeft } from "react-icons/fi"

import { Container, Form } from "./styles"

export function New(){
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <TextButton title="voltar" icon={FiArrowLeft} />
            <h1>Novo Filme</h1>
          </header>
          <div className="tittle-and-rating">
            <Input placeholder="Título" />
            <Input type="number" placeholder="Sua nota (de 0 a 5)" />
          </div>
          <TextArea placeholder="Observações" />
            <h2>Marcadores</h2>
          <div className="tags">
            <ItemTag value="comedia" />
            <ItemTag isNew  placeholder="Adicionar marcador"/>
          </div>
        </Form>
      </main>
    </Container>
  )
}