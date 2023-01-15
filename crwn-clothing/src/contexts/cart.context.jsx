import { createContext, useState, useEffect } from 'react'


const addCartItem = (cartItems, productToAdd) => {
    //find if cartitems contains productToAdd
    const existingCartItems = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    //If found,increment quantity
    if (existingCartItems) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    //return new array with modified cartItems/new cart items
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    //find the cart items to remove
    const existingCartItems = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

    //check if quantity is equal to 1,ifit is remove that item from the cart
    if (existingCartItems.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    //return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    )
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },

})



export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }
    const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemToCart, cartItems, cartCount }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}