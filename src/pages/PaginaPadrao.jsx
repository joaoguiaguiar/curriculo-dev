import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const PaginaPadrao = () => {
    return (
        <main>
            <Menu />
            <Outlet />
            <Footer/>
        </main>
    );
};

export default PaginaPadrao;