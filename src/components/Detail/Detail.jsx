import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';

const Detail = () => {
    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1, 
                nombre: "HTML 5",
                foto: "http://placehold.it/300x300",
                descripcion: "Curso de HTML 5. Curso completo y paso a paso para que domines las bases de Desarrollo Web",
                precio: 550
            })
        }, 2000);
    });

    useEffect(() => {
        getProduct
            .then(response => setProduct(response))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            {
                product ?
                <div>
                    <ProductDetail item={product} />

                    <div>
                        productos recomendados
                    </div>
                </div> : 
                <p>Cargando producto...</p>
            }
        </>
    )
}
export default Detail; 