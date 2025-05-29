import React from 'react'
import {RiDeleteBin3Line} from "react-icons/ri";
const CartContent = () => {
    const cartProducts=[
        {
            id: 1,
            name: "T-Shirt",
            size:"M",
            price: 100,
            color:"Red",
            quantity: 2,
            Image:"https://picsum.photos/200?random=1",
        },

        {
            id: 2,
            name: "Jeans",
            size:"S",
            price: 100,
            color:"Blue",
            quantity: 2,
            Image:"https://picsum.photos/200?random=2",
        },
        {
            id:3,
            name:"Hoodie",
            size:"L",
            price: 150,
            color:"Black",
            quantity: 1,
            Image:"https://picsum.photos/200?random=3",
        }
    ]
  return (
    <div>
        {
            cartProducts.map((product,index) =>(
                <div key={index} className="flex items-start justify-between py-4 border-b">
                    <div className="flex items-start">
                        <img src={product.Image} alt={product.name}  className="w-20 h-24 object-cover mr-4"/>
                        <div>
                            <h3>{product.name}</h3>
                            <p className="text-sm text-gray-500">
                                Size: {product.size} | Color : {product.color}
                            </p>
                            <div className="flex items-center mt-2">
                                <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
                                <span className="text-xl mx-4 text-gray-600">{product.quantity}</span>
                                <button className="border rounded px-2 py-1 text-xl font-medium"> +</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>${product.price.toLocaleString()}</p>
                        <button>
                            <RiDeleteBin3Line className="h-6 w-6 mt-2"/>
                        </button>
                    </div>

                </div>
            ))
        }
    </div>
  )
}

export default CartContent