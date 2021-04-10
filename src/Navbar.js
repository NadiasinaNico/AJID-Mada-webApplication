import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>AJID Mada</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/service">Service</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/inscrire">Inscrire</Link>
                <Link to="/login">Login</Link>
                <Link to="/ajidmada">Ajid Accueil</Link>
            </div>
        </nav>
    );
}
export default Navbar;