import { useState } from "react"
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { Container, Form, Background } from "./styles"
import { Button } from "../../Components/Button"
import { Input } from "../../Components/Input"
import { TextButton } from "../../Components/TextButton"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        console.log("entrou")
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch((error) => {
        console.log("entrou aqui")
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possivel cadastrar")
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="E-mail"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link className="ButtonBackToLogin" to="/">
          <TextButton icon={FiArrowLeft} title="Voltar para o login" />
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
