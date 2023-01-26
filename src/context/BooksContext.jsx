import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";


const BookContext = createContext();

export default BookContext;

export const BookProvider = ({ children }) => {
    let [books, setBooks] = useState([])

    useEffect(() => {
        const cart = localStorage.getItem('cart')
        if (cart) {
            setBooks(cart)
        }
    }, [books, setBooks])
    
    const [search, setSearch] = useState('')
    const addToCart = (book) => {
        setBooks((prev) => [...prev, book])
        localStorage.setItem('cart', JSON.stringify(books))
        toast.success(`${book.name} added to cart successfully`, { className: "text-base font-medium" })
    }
    let contextData = {
        addToCart: addToCart,
        books: books,
        search: search,
        setSearch: setSearch
    }
    return (
        <BookContext.Provider value={contextData}>
            {children}
        </BookContext.Provider>
    )
}