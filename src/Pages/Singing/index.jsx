import { useState } from "react"
import { FiLock, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { Container, Form, BackgroundImg } from "./styles"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"

export function Singing() {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setpassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <div>
          <Link to="/register">Criar conta</Link>
        </div>
      </Form>
      <BackgroundImg />
    </Container>
  )
}
