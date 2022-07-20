import { Form } from '../Components/Form'
import { Header } from '../Components/Header'

export function Cadastrar() {
  return (
    <div>
      <Header type="cadastrar" />
      <main className="flex justify-center items-center flex-col py-4">
        <div className="w-[80%] flex justify-center items-center flex-col">
          <h1 className="title text-blue-800">CADASTRAR ENCOMENDA</h1>
          <Form submitStyle="open" />
        </div>
      </main>
    </div>
  )
}
