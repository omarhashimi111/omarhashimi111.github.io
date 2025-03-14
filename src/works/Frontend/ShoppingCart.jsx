import React from 'react'

function ShoppingCart() {
  return (
    <div>
        <h1 className="font-bold text-center text-xl">Shopping Cart</h1>

        <br />

        <p className="">Here is the Shopping cart every E-Commerce website need
            to have.In this project I fetch some dummy products data from an external API to be able to make the ecommerce environment for our Shopping Cart.
        </p>

        <br />

        <p>
            This project is built with ReactJs and bootstrap for quickly styling.
            this project has everything necessary for ecommerce website.
        </p>
        <strong>Including but not Limited:</strong>
        <div>
            <ul className="list-disc ml-5">
                <li>Filtering Products</li>
                <li>Adding and removing from the cart</li>
                <li>MultiPage</li>
                <li>Realtime Calcuator</li>
                <li>State Management</li>
            </ul>
        </div>
        <br />
        <p>
            This project is a good example of how the State Management Works How the state flow from the DOM.
        </p>

        <br />

        <div>Here is the Demo <a className="text-blue-950 underline" target="_blank" href="https://omarhashimi111.github.io/Shopping-cart/">link to the Project</a></div>
        <div className="">
            And <a className="text-blue-950 underline" target="_blank" href="https://github.com/omarhashimi111/Shopping-cart">Link to the GitHub Repository</a> of the Project
        </div>

    </div>
  )
}

export default ShoppingCart