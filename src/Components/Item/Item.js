import '../Item/Item.css';
import ItemCount from '../ItemCount/ItemCount';

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
               <p className="info">
                   Precio: ${price}
               </p>
               <p className="info">
                   Stock disponible: {stock}
               </p>
               <p><ItemCount/></p>
           </section>
           <footer className='ItemFooter'>
               <button className='Option'>Ver detalle</button>
               
           </footer>
       </article> 
   ) 
}

export default Item