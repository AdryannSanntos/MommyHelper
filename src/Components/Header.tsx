import { Link } from 'react-router-dom'
import Logo from './Utils/Logo'

interface HeaderProps {
  type: 'listar' | 'cadastrar'
}

export function Header(props: HeaderProps) {
  return (
    <header className="w-full flex flex-col justify-center items-center pb-4">
      <div className="w-full flex  justify-center items-center bg-gray-200 py-4 pb-6">
        <Logo />
      </div>
      <div className="w-full flex  justify-center items-center bg-gray-200 border-b border-gray-300">
        <nav>
          <ul className="flex gap-6">
            {props.type === 'cadastrar' ? (
              <Link to={`/`}>
                <li className="py-4 border-b-2 border-blue-600">
                  <a className="text-blue-600 font-bold" href="#">
                    Cadastrar
                  </a>
                </li>
              </Link>
            ) : (
              <Link to={`/`}>
                <li className="py-4">
                  <a href="#">Cadastrar</a>
                </li>
              </Link>
            )}
            {props.type === 'listar' ? (
              <Link to={`/listar`}>
                <li className="py-4 border-b-2 border-blue-600">
                  <a className="text-blue-600 font-bold" href="#">
                    Listar
                  </a>
                </li>
              </Link>
            ) : (
              <Link to={`/listar`}>
                <li className="py-4">
                  <a href="#">Listar</a>
                </li>
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
