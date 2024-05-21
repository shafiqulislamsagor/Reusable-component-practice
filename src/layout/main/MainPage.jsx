import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Toggle from "../../Components/Toggle/Toggle";

const MainPage = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <div className="ml-44">
            <Toggle/>
            </div>
        </div>
    );
};

export default MainPage;