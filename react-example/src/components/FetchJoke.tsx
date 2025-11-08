import { useEffect, useState } from 'react'

type Joke = { value: string }

export default function FetchJoke() {
    const [joke, setJoke] = useState<string>('Carregando...')
    const [loading, setLoading] = useState(false)

    async function load() {
        try {
            setLoading(true)
            const res = await fetch('https://api.chucknorris.io/jokes/random')
            const data: Joke = await res.json()
            setJoke(data.value)
        } catch (e) {
            setJoke('Falha ao buscar piada 😅')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { load() }, [])

    return (
        <div className="card">
            <p>{joke}</p>
            <button onClick={load} disabled={loading}>
                {loading ? 'Buscando...' : 'Outra piada'}
            </button>
        </div>
    )
}
