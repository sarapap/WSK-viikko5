import { Outlet } from "react-router-dom";
import Logout from "../views/Logout";

const Layout = () => (
    <div>
        <header>
            <Logout />
        </header>
        <main>
            <Outlet />
        </main>
        <footer className="m-12 text-xl">
            Copyright 2024
        </footer>
    </div>
)

export default Layout;