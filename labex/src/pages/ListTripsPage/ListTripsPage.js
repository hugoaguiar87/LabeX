import { useNavigate } from "react-router"
import { UrlBase } from "../../constants/constants"
import { useRequestGet } from "../../hooks/useRequest"
import {  Main, Trip } from "./style"
import { Header } from "../../constants/stylesConstant"

const ListTripsPage = () =>{
    const navigate = useNavigate()
    let result = useRequestGet(`${UrlBase}/trips`)

    const listTrips = result.data.trips && result.data.trips.map((trip) => {
        return(
            <Trip key={trip.id}>
                <h2><b>{trip.name}</b> </h2>
                <text><b>Planeta:</b> {trip.planet}</text>
                <text><b>Duração:</b> {trip.durationInDays} dias</text>
                <text><b>Data:</b> {trip.date}</text>
                <div>                
                    <text><b>Descrição:</b></text>
                    <text> {trip.description}</text>
                </div>
            </Trip>
        )
    })

    return(
        <>
            <Header>
                <h2>Space Trips 🛸</h2>
                <div>
                    <button onClick = {() => navigate(-1)}>Voltar</button>
                    <button onClick = {() => navigate("/applicationforme")}>Increver-se</button>
                    <button onClick = {() => navigate("/")}>Home</button>
                </div>
            </Header>
            <Main>
                <h1>Viagens Disponíveis</h1>
                <div>
                    {result.isLoading && <p>Carregando...</p>}
                    {!result.isLoading && result.error && <p>Ocorreu um erro!</p>}
                    {!result.isLoading && result.data.trips && result.data.trips.length > 0 && listTrips}
                    {!result.isLoading && result.data.trips && result.data.trips.length === 0 && (<p>Não há viagens disponíveis!</p>)}
                </div>
            </Main>
        </>
    )
}

export default ListTripsPage