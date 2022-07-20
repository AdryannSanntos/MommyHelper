import { Route, Routes } from 'react-router-dom'
import { Cadastrar } from './Pages/Cadastrar'
import { Listar } from './Pages/Listar'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Cadastrar />} />
      <Route path="/listar" element={<Listar />} />
    </Routes>
  )
}
