import { NavLink } from 'react-router-dom';


const Navigation = () => <nav>
    <ul>
        <li>
            <NavLink exact to="/" className="" activeClassName="">Home</NavLink>
        </li>
        <li>
            <NavLink to="/movies" className="" activeClassName="">Movies</NavLink>
        </li>
    </ul>
</nav>


export default Navigation;