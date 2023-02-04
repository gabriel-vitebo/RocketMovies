import { Routes, Route } from "react-router-dom"

import { Singing } from "../Pages/Singing"
import { SignUp } from "../Pages/SignUp"

export function AuthRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Singing />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  )
}