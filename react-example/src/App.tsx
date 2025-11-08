// export default function App() {
//   return (
//     <h1>Hello World com React! 🚀</h1>
//   );
// }

import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import FetchJoke from './components/FetchJoke'
import './app.css'

export default function App() {
  // exemplo extra de estado (alternar tema claro/escuro)
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'app app--dark' : 'app'}>
      <Header title="Hello React!" />

      <section className="section">
        <h2>Contador (useState)</h2>
        <Counter />
      </section>

      <section className="section">
        <h2>Props entre componentes</h2>
        <UserCard name="Anderson" role="Aprendendo React" />
      </section>

      <section className="section">
        <h2>Consumindo API (fetch)</h2>
        <FetchJoke />
      </section>

      <section className="section">
        <h2>Outro estado (toggle de tema)</h2>
        <button onClick={() => setDark(v => !v)}>
          Alternar para tema {dark ? 'claro' : 'escuro'}
        </button>
      </section>

      <Footer />
    </div>
  )
}
