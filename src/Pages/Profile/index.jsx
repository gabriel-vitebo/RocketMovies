import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Container, Form, Avatar } from "./styles"

import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"
import avatarPlaceHolder from "../../assets/empaty-profile.svg"

import { TextButton } from "../../Components/TextButton"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"

export function Profile() {
  const { user, updateProfile } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }
  function handleBackHome() {
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <TextButton
          onClick={handleBackHome}
          icon={FiArrowLeft}
          title="Voltar"
        />
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
