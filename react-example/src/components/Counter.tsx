import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="card">
            <p>Valor atual: {count}</p>
            <div className="row">
                <button onClick={() => setCount(c => c - 1)}>-1</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(c => c + 1)}>+1</button>
            </div>
        </div>
    )
}
