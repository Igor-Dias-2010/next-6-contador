import { useState } from "react"
export default function Contador() {
    const [contador, setContador] = useState(0)
    return (
        <div id="container" >
            <h1>Contador</h1>
            <p>{contador}</p>
            <button onClick={() => setContador(prev => prev + 1)}>+1</button>
            <button onClick={() => setContador(prev => prev = 0)}>Reset</button>
            <button onClick={() => setContador(prev => prev - 1)}>-1</button>
        </div>

    )
}