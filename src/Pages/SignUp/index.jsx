import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Container, Form, Background} from "./styles"
import { Button } from "../../Components/Button"
import { Input } from "../../Components/Input"
import { TextButton } from "../../Components/TextButton"

export function SignUp(){
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input type="text" placeholder="Nome" icon={FiUser} />

        <Input type="text" placeholder="E-mail" icon={FiMail} />

        <Input type="password" placeholder="Senha" icon={FiLock} />

        <Button title="Cadastrar" />
        <Link className="ButtonBackToLogin" to="/">
          <TextButton icon={FiArrowLeft} title="Voltar para o login" />
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
