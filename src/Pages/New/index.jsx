import { Header } from "../../Components/Header"
import { TextButton } from "../../Components/TextButton"
import { Input } from "../../Components/Input"
import { TextArea } from "../../Components/TextArea"


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
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <TextArea placeholder="Observações" />
        </Form>
      </main>
    </Container>
  )
}