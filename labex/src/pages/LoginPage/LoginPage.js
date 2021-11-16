import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { UrlBase } from "../../constants/constants"
import { Header } from "../../constants/stylesConstant";
import { Main } from "./style";

const LoginPage = () => {
    const [informations, setInformations] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate()

    const onClickLogin = async (e) => {
        e.preventDefault()
        let token
        let error

        await axios
             .post(`${UrlBase}/login`, {
                "email": informations.email,
            	"password": informations.password
            }, {
                "Content-Type": "application/json"
            })
            .then((response) => {
                token = response.data.token
            })
            .catch((err) => {
                console.log("erroLogin", err)
                error = err
            })
        
            if(token){
                navigate("/admin")
                localStorage.setItem("token", token)
            } else{
                alert("Usuário ou senha incorreta!")
            }
    }

    return(
        <>
            <Header>
                <h2>Space Trips 🛸</h2>
                <div>
                    <button onClick= {() => {navigate("/")}}>Home</button>
                </div>
            </Header>
            <Main>
                <form onSubmit= {onClickLogin}>
                    <h1>Login</h1>
                    <input 
                        placeholder= "Email" 
                        type= "email"
                        value= {informations.email} 
                        onChange= {(e)=> setInformations({...informations, email: e.target.value})}
                        required 
                    />
                    <input 
                        placeholder= "Senha"   
                        type= "password"
                        value= {informations.password} 
                        onChange= {(e)=> setInformations({...informations, password: e.target.value})}
                        required
                    />
                    <button type="submit" >Login</button>
                </form>
            </Main>

        </>
    )
}

export default LoginPage