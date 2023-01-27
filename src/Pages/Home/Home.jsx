import { pb } from "@/utils/Pocket";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Home = () => {
  const role = pb.authStore.model.role
  const id = pb.authStore.model.id
  const [homeFoods, sethomeFoods] = useState([])

  const handleAddToCart = async ({ foodId, userId }) => {
    try {
      await pb.collection('cart').create({
        "user": userId,
        "food": foodId
      });
      toast.success(`Successfully added to cart`, { className: "text-base font-medium" })
    } catch (error) {
      toast.error(error?.message, { className: "text-base font-medium" })
    }
  }

  const handleDelete = async (id) => {
    try {
      await pb.collection('foods').delete(id);
      toast.success(`Successfully deleted the food`, { className: "text-base font-medium" })
    } catch (error) {
      toast.error(error?.message, { className: "text-base font-medium" })
    }
  }

  useEffect(() => {
    const Home = async () => {
      try {
        const resultList = await pb.collection('foods').getList(1, 50);
        sethomeFoods(resultList)
      } catch (error) {
        toast.error(error?.message, { className: "text-base font-medium" })

      }
    }
    Home()
  }, [])

  return (
    <div className="flex flex-col justify-center mt-5 h-full">
      {role === 'Admin' &&
        <div className="w-full flex justify-center">
          <Link to="/add-food" className="button my-2 text-base">Add food</Link>
        </div>
      }
      <div className="rounded h-full w-5/6 bg-gray-200 m-2 p-2 res-grid gap-2">
        {!homeFoods ?
          Array.apply(null, Array(10)).map((_, i) => (
            <div key={i} className="bg-white w-full max-w-[250px] h-[200px] rounded animate-pulse" />
          ))
          :
          homeFoods?.items?.length === 0 ?
            <>
              <div className="flex justify-center my-5 py-3">
                <p>No foods found</p>
              </div>
            </>
            :
            homeFoods?.items?.map((food, i) => (
              <div key={i} className="text-base font-medium bg-white shadow rounded p-2 max-w-[250px] flex flex-col justify-between">
                <p className="text-cut-3">{food?.name}</p>
                <div>
                  <p className="text-cut-3 mt-2 text-sm">{food?.description}</p>
                  <div className="flex gap-x-2 items-center">
                    <s className="opacity-60 text-sm">Birr {food?.price}</s>
                    <p className="text-green-500">Birr {food?.discount}</p>
                  </div>
                </div>
                {role === 'Admin' &&
                  <div className="flex gap-1 mt-2">
                    <Link to={`edit-food/${food?.id}`} className="bg-yellow-500 button">Edit</Link>
                    <button onClick={() => handleDelete(food?.id)} className="bg-red-500 button">Delete</button>
                  </div>
                }
              </div>
            ))}
      </div>
    </div>
  )
}

export default Home