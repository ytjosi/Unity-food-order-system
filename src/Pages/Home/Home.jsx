import BookContext from "@/context/BooksContext";
import { pb } from "@/utils/Pocket";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Home = () => {
  const { role } = pb.authStore.model
  const { search, setSearch, addToCart } = useContext(BookContext)
  const [homeBooks, sethomeBooks] = useState([])

  const handleDelete = async (id) => {
    try {
      await pb.collection('books').delete(id);
      toast.success(`Successfully deleted the book`, { className: "text-base font-medium" })
    } catch (error) {
      toast.error(error?.message, { className: "text-base font-medium" })
    }
  }

  useEffect(() => {
    const Home = async () => {
      try {
        const resultList = await pb.collection('books').getList(1, 50);
        sethomeBooks(resultList)
      } catch (error) {
        toast.error(error?.message, { className: "text-base font-medium" })

      }
    }
    Home()
  }, [search, setSearch])

  return (
    <div className="flex flex-col justify-center mt-5 h-full">
      {role === 'Admin' &&
        <div className="w-full flex justify-center">
          <Link to="/add-book" className="button my-2 text-base">Add a book</Link>
        </div>
      }
      <div className="rounded h-full w-5/6 bg-gray-200 m-2 p-2 res-grid gap-2">
        {!homeBooks ?
          Array.apply(null, Array(10)).map((_, i) => (
            <div key={i} className="bg-white w-full max-w-[250px] h-[200px] rounded animate-pulse" />
          ))
          :
          homeBooks?.items?.map((book, i) => (
            <div key={i} className="text-base font-medium bg-white shadow rounded p-2 max-w-[250px] flex flex-col justify-between">
              <p className="text-cut-3">{book?.name}</p>
              <div>
                <p><span className="opacity-70">By:</span> {book?.author}</p>
                <p><span className="opacity-70">Quantity:</span> {book?.quantity}</p>
                <p><span className="opacity-70">shelf no:</span> {book?.shelf}</p>
              </div>
              {role === 'Admin' &&
                <div className="flex gap-1 mt-2">
                  <Link to={`edit-book/${book?.id}`} className="bg-yellow-500 button">Edit</Link>
                  <button onClick={() => handleDelete(book?.id)} className="bg-red-500 button">Delete</button>
                </div>
              }
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home