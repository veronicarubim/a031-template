import React from "react"
import CarroRenault from "./carro"

export default function Garagem () {
    const nome = "Veronica"
    return (
    <> 
        <h1>Garagem de {nome}</h1>
        <CarroRenault></CarroRenault>
        <CarroRenault></CarroRenault>
    </>)

}
