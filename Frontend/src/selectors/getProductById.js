import { popularProducts } from "../data"

const getProductById = (id = '') => {

    console.log('getProductById called')

    return popularProducts.filter(item => item.id == id)
}

export default getProductById