import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage"
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage.js"
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage.js"






const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element= {<HomePage/>}/>
            </Routes>

            <Routes>
                <Route path= "/listtrips" element= {<ListTripsPage/>} />
            </Routes>

            <Routes>
                <Route path= "/applicationforme" element= {<ApplicationFormPage/>}/>
            </Routes>

            <Routes>
                <Route path= "login" element= {<LoginPage/>}/>
            </Routes>

            <Routes>
                <Route path= "admin" element= {<AdminHomePage/>}/>
            </Routes>

            <Routes>
                <Route path = "admin/tripdetails/:idtrip" element = {<TripDetailsPage/>}/>
            </Routes>

            <Routes>
                <Route path = "admin/createtrip" element = {<CreateTripPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;