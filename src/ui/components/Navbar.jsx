import { Link, useNavigate } from 'react-router';
import { NavLink } from './NavLink';

export const Navbar = () => {

    const navigate = useNavigate()

    const onLogout = ()=>{
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        to="/marvel"
                        value="Marvel"
                    />

                    <NavLink
                        to="/dc"
                        value="DC"
                    />

                    <NavLink
                        to="/search"
                        value="Search"
                    />

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='text-info nav-item nav-link'>
                        Alexis Perez
                    </span>
                    <button
                        className='nav-item nav-link btn'
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}