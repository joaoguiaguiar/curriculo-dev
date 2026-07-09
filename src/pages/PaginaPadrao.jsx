import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

const PaginaPadrao = () => {
    return (
        <main>
            <Menu />
            <Outlet />
        </main>
    );
};

export default PaginaPadrao;
