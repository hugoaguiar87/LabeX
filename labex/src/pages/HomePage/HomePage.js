import { useNavigate } from "react-router-dom"
import { Home } from "./style"


const HomePage = () => {
    const navigate = useNavigate()

    return (
        <Home>
            <div className= "containerPai">
                <h1>Space Trips 🛸</h1>
                <div>
                    <button onClick={() => navigate("/listtrips")}>Viagens</button>
                    <button onClick= {() => navigate("/admin")}>Área Admin</button>
                </div>
            </div>
        </Home>
    )
}

export default HomePage