import '../Item/Item.css';

const Item = ({id, name, img, price, stock}) => {

    return(

        <article className="cardItem">
            <header className="Header">
                <h2 className="itemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='card-content'>
                <link to={`/item/${id}`} className='Option'>Ver detalle</link>
            </footer>
        </article>
    )
}

export default Item