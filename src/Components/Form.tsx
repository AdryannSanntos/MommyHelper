interface FormProps {
  submitStyle?: 'blocked' | 'open'
}

export function Form(props: FormProps) {
  return (
    <div className="w-full">
      <form className="w-full pt-6" action="">
        <input
          className="my-1 w-full p-3 bg-transparent border border-blue-600 rounded placeholder-gray-500"
          type="text"
          placeholder="Nome do produto"
        />
        <input
          className="my-1 w-full p-3 bg-transparent border border-blue-600 rounded placeholder-gray-500"
          type="text"
          placeholder="Descrição da encomenda"
        />
        <input
          className="my-1 w-full p-3 bg-transparent border border-blue-600 rounded placeholder-gray-500"
          type="text"
          placeholder="Nome do(a) cliente"
        />
        <input
          className="my-1 w-full p-3 bg-transparent border border-blue-600 rounded placeholder-gray-500"
          type="number"
          placeholder="Quantidade"
        />
        <input
          className="my-1 w-full p-3 bg-transparent border border-blue-600 rounded placeholder-gray-500"
          type="datetime-local"
          placeholder="Entrega"
        />
        {props.submitStyle === 'open' ? (
          <input
            className="mt-6 w-full p-3 bg-blue-600 rounded text-white font-bold hover:brightness-[.7]"
            type="submit"
            value="CADASTRAR ENCOMENDA"
          />
        ) : (
          <input
            className="mt-6 w-full p-3 bg-blue-600 rounded text-white font-bold brightness-[.6]"
            type="submit"
            value="CADASTRAR ENCOMENDA"
          />
        )}
      </form>
    </div>
  )
}
