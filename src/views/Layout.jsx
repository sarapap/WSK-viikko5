import { Link, Outlet } from "react-router-dom";

const Layout = () => (
    <div>
        <header>
            <nav>
                <Link to="/">Etusivu 🏠</Link>
                <Link to="/profile">Profiili 🤣</Link>
                <Link to="/upload">Upload</Link>
                <Link to="/login">Login</Link>
            </nav>
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