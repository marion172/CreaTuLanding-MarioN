import { data } from './mocks/data';

const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
};

const getProductoById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = data.find(prod => prod.id === id);
            resolve(producto);
        }, 2000);
    });
};

const getProductosByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosCategoria = data.filter(prod => prod.categoria === categoryId);
            resolve(productosCategoria);
        }, 2000);
    });
};

export { getProductos, getProductoById, getProductosByCategory };