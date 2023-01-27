import { pb } from "@/utils/Pocket";
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom"
import * as Yup from "yup";

const EditFoodSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    price: Yup.number(),
    description: Yup.string().min(2, 'Too Short!').max(150, 'Too Long!').required('Required'),
    discount: Yup.number().when("price", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.number().moreThan([Yup.ref("price", "Discount can't be more than the price")], "Passwords don't match."),
    })
})



const EditBooks = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [homeFoods, sethomeFoods] = useState(null)
    useEffect(() => {
        const Home = async () => {
            try {
                const resultList = await pb.collection('foods').getOne(id);
                sethomeFoods(resultList)
            } catch (error) {
                toast.error(error?.message, { className: "text-base font-medium" })
            }
        }
        Home()
    }, [])

    const EditFood = async (values) => {
        setIsLoading(true)
        try {
            await pb.collection('foods').update(id, values);
            toast.success(`Successfully updated`, { className: "text-base font-medium" })
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            if (error?.data?.name) {
                toast.error(error?.data?.name?.message, { className: "text-base font-medium" })
            } else if (error?.data?.author) {
                toast.error(error?.data?.author?.message, { className: "text-base font-medium" })

            } else if (error?.data?.description) {
                toast.error(error?.data?.description?.message, { className: "text-base font-medium" })

            } else if (error?.data?.published) {
                toast.error(error?.data?.published?.message, { className: "text-base font-medium" })

            } else if (error?.data?.shelf) {
                toast.error(error?.data?.shelf?.message, { className: "text-base font-medium" })

            } else {
                toast.error(error?.message, { className: "text-base font-medium" })

            }
        }
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <Formik
                enableReinitialize
                validationSchema={EditFoodSchema}
                initialValues={{
                    name: homeFoods?.name ?? '',
                    price: homeFoods?.price ?? '',
                    description: homeFoods?.description ?? '',
                    discount: homeFoods?.discount ?? '',
                }}
                onSubmit={(values) => {
                    EditFood(values)
                }}
            >
                <Form className="flex flex-col w-full max-w-[500px] min-w-[250px] rounded shadow p-5 m-1">
                    <h1 className="font-medium w-full flex justify-center">Add Food</h1>
                    <hr className="mx-10 my-5" />
                    <div className="flex flex-col my-1">
                        <label htmlFor="name" className="text-base opacity-50 font-medium">Title</label>
                        <Field className="input" name="name" type="text" placeholder="Title" />
                        <ErrorMessage component="p" className="text-sm text-red-500" name="name" />
                    </div>
                    <div className="flex flex-col my-1">
                        <label htmlFor="description" className="text-base opacity-50 font-medium">Description<span className="text-sm opacity-60">{`(optional)`}</span></label>
                        <Field className="input" name="description" type="text" placeholder="Description" />
                        <ErrorMessage component="p" className="text-sm text-red-500" name="description" />
                    </div>
                    <div className="flex flex-col my-1">
                        <label htmlFor="price" className="text-base opacity-50 font-medium">Price</label>
                        <Field className="input" name="price" type="number" placeholder="Price" />
                        <ErrorMessage component="p" className="text-sm text-red-500" name="price" />
                    </div>
                    <div className="flex flex-col my-1">
                        <label htmlFor="discount" className="text-base opacity-50 font-medium">Discount<span className="text-sm opacity-60">{`(optional)`}</span></label>
                        <Field className="input" type="number" name="discount" placeholder="Discount" />
                        <ErrorMessage component="p" className="text-sm text-red-500" name="discount" />
                    </div>
                    <button type="submit" className="button text-base my-5">{!isLoading ? "Update" : "Wait..."}</button>
                </Form>
            </Formik>
        </div>
    )
}

export default EditBooks