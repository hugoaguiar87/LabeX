import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router";
import { UrlBase } from "../../constants/constants";
import useProtectedPage from "../../hooks/useProtectedPage"
import { Header } from "../../constants/stylesConstant"
import { Main } from "../ApplicationFormPage/style"



const CreateTripPage = () => {
    useProtectedPage()

    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const [inputText, setInputText] = useState({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const createTrip = (e) =>{
        e.preventDefault()

        axios
            .post(`${UrlBase}/trips`, 
            {
                "name": inputText.name,
                "planet": inputText.planet,
                "date": inputText.date,
                "description": inputText.description,
                "durationInDays": inputText.durationInDays
            },
            {headers: {
                "Content-Type": "application/json",
                "auth" : token
            }})
            .then((res) => {
                alert("Viagem criada com sucesso!")
                setInputText({
                    name: "",
                    planet: "",
                    date: "",
                    description: "",
                    durationInDays: ""
                })
            })
            .catch((er) => {
                alert("Erro! Tente novamente!")
            })
    }


    return(
        <>
            <Header>
                <h2>Space Trips 🛸</h2>
                <div>
                    <button onClick={() => navigate(-1)}>Voltar</button>
                </div>
            </Header>
            <Main>
                <h1>Criar Viagem</h1>
                <form onSubmit={createTrip}>
                    <input 
                        placeholder= "Nome da Viagem" 
                        type="text" 
                        value={inputText.name} 
                        onChange={(e) => {setInputText({...inputText, name: e.target.value})}}
                        required 
                    />
                    <input 
                        placeholder= "Nome do Planeta" 
                        type="text" 
                        value={inputText.planet} 
                        onChange={(e) => {setInputText({...inputText, planet: e.target.value})}} 
                        required
                    />
                    <input 
                        placeholder= "Data" 
                        type="date" 
                        value={inputText.date} 
                        onChange={(e) => {setInputText({...inputText, date: e.target.value})}}
                        required 
                    />
                    <input 
                        placeholder= "Descrição" 
                        type="text" 
                        minLength="20"
                        value={inputText.description} 
                        onChange={(e) => {setInputText({...inputText, description: e.target.value})}}
                        required 
                    />
                    <input 
                        placeholder= "Duração em Dias" 
                        type="number"
                        min="0" 
                        value={inputText.durationInDays} 
                        onChange={(e) => {setInputText({...inputText, durationInDays: e.target.value})}}
                        required 
                    />
                    
                    <button type= "submit">Enviar</button>
                </form>
            </Main>
        </>
    )
}

export default CreateTripPage