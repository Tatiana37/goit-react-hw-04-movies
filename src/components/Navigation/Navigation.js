import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';


const Navigation = () =>
    <div className={s.navBox}>
<nav >
    <ul className={s.navList}>
        <li>
            <NavLink exact to="/" className={s.navLink} activeClassName={s.navActive}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/movies" className={s.navLink} activeClassName={s.navActive}>Movies</NavLink>
        </li>
    </ul>
</nav>
        
    </div>


export default Navigation;