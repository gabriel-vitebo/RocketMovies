import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Container, Form, Avatar } from "./styles";
import { TextButton } from "../../Components/TextButton"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"


export function Profile(){
  return (
    <Container>
      <header>
        <TextButton icon={FiArrowLeft} title="Voltar" />
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/gabriel-vitebo.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input 
            id="avatar"
            type="file"
            />
          </label>
        </Avatar>
        <Input 
        placeholder="Nome"
        type="text"
        icon={FiUser}
        />
        <Input 
        placeholder="E-mail"
        type="text"
        icon={FiMail}
        />
        <Input 
        placeholder="Senha atual"
        type="password"
        icon={FiLock}
        />
        <Input 
        placeholder="Nova senha"
        type="password"
        icon={FiLock}
        />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}