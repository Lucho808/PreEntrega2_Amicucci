import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/alimento`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Alimento</NavLink>
                <NavLink to={`/category/peluqueria`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Peluqueria</NavLink>
                <NavLink to={`/category/accesorios`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                <NavLink to={`/category/novedades`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Novedades</NavLink>
                       </div>
            <CartWidget />
        </nav>
    )

}

export default NavBar