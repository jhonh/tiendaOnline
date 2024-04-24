import React from 'react'
import ReactDom from 'react-dom/client'

const root = ReactDom.createRoot(document.getElementById('root'))

function Saludar() {

    return <h1>Hola mundo</h1>
}

root.render(<Saludar/>)