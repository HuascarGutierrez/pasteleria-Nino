import React from 'react'
import './styles/ProductView.css'
function ProductView(props) {
    const productView = props.productView;

    return (
        <div className='productoView'>
            <div className='imge'>
               <img src="/images/ProductView.png"  />
            </div>
            <h2>Pastel de Tres Leches</h2>
            <h3>Esponjoso</h3>
           
        </div>

    );
}

export default ProductView;
