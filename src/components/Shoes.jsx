import React from 'react';
import Shoe from './Shoe';

const Shoes = (props) => {

    return(
        <main>
            <section className="shoes-wrapper">
                { props.items.map(shoe => (
                    <Shoe 
                        style={shoe.style}
                        img={shoe.img}
                        price={shoe.price}
                    />
                ))}
            </section>
            <section className="cart-wrapper">
                <h3>Cart Total: $</h3>
            </section>
        </main>
    )
}
export default Shoes;