const products = [
    {
        id:'1',
        name: 'Comida para Gatos',
        price: 1000 ,
        category: 'alimento',
        img:'',
        stock: 25,
        description:'Descripcion de la comida'
    },
    {id:'2', name: 'Comida para Gatos', price: 1000 , category: 'alimento', img:'', stock: 25, description:'Descripcion de la comida'},
    {id:'3', name: 'Comida para Gatos', price: 1000 , category: 'alimento', img:'', stock: 25, description:'Descripcion de la comida'},

]//array de productos

export const getProducts = () => {
    return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(products)
            },500)
    })
}//retorna una promesa

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (_productId) => {
    return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(products.find(prod => prod.cat ===_productId))
            },500)
    })
}



