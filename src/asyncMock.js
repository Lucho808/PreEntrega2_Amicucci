const products = [
    {
        id:'1',
        name: 'Comida para Gatos',
        price: 1000 ,
        category: 'alimento',
        img: '../src/Components/Imagen/SobreDeComida.jpeg',
        stock: 25,
        description:'Descripcion de la comida'
    },
    {id:'2', name: 'Jueguete de gato', price: 2000 , category: 'juguete', img:'./', stock: 30, description:'Descripcion de la juguete'},
    {id:'3', name: 'Peine para gato', price: 500 , category: 'articulo', img:'', stock: 100, description:'Descripcion del peine'},

]

export const getProducts = () => {
    return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(products)
            },500)
    })
}

 export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
} 

/* export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === categoryId))
        }, 500)
    })
} */