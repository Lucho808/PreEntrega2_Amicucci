import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="NavBar">
                <h3>Ecommerce</h3>
            <div className='Categories'>
                <button>Articulos</button>
                <button>Juguetes</button>
                <button>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar