import { pb } from "@/utils/Pocket";
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    description: Yup.string().min(2, 'Too Short!').max(150, 'Too Long!').required('Required'),
    published: Yup.date().required('Required'),
    shelf: Yup.number().required('Required'),
    quantity: Yup.number().required("Required")
})


const AddBook = () => {
    const [isLoading, setIsLoading] = useState(false)
    const RegisterBooks = async (values) => {
        setIsLoading(true)
        try {
            await pb.collection('books').create(values);
            toast.success(`Successfully registered`, { className: "text-base font-medium" })
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
                validationSchema={SignupSchema}
                initialValues={{
                    name: "",
                    description: "",
                    author: "",
                    published: "",
                    shelf: "",
                    quantity: "",
                }}
                onSubmit={(values) => {
                    RegisterBooks(values)
                }}
            >
                <Form className="flex flex-col w-full max-w-[500px] min-w-[250px] rounded shadow p-5 m-1">
                    <h1 className="font-medium w-full flex justify-center">Add a book</h1>
                    <hr className="mx-10 my-5" />
                    <div className="flex flex-col my-1">
                        <label htmlFor="name" className="text-base opacity-50 font-medium">Title</label>
                        <Field className="input" name="name" type="text" placeholder="Title" />
                        <ErrorMessage component="p" className="text-sm text-red-500" name="name" />
                    </div>
                    <div className="flex flex-col my-1">
                        <label htmlFor="description" className="text-base opacity-50 font-medium">Description<span>{`(optional)`}</span></label>
                        <Field className="input" name="description" type="text" placeholder="Description" />
                        <ErrorMessage component="p" className="text-sm text-red-500" name="description" />
                    </div>
                    <div className="flex flex-col my-1">
                        <label htmlFor="author" className="text-base opacity-50 font-medium">Author</label>
                        <Field className="input" name="author" type="text" placeholder="author" />
                        <ErrorMessage component="p" className="text-sm text-red-500" name="author" />
                    </div>
                    <div className="flex flex-col my-1">
                        <label htmlFor="published" className="text-base opacity-50 font-medium">Publish date</label>
                        <Field className="input" type="date" name="published" placeholder="Publish date" />
                        <ErrorMessage component="p" className="text-sm text-red-500" name="published" />
                    </div>
                    <div className="flex flex-col my-1">
                        <label htmlFor="shelf" className="text-base opacity-50 font-medium">Shelf no</label>
                        <Field className="input" type="number" name="shelf" placeholder="Shelf no" />
                        <ErrorMessage component="p" className="text-sm text-red-500" name="shelf" />
                    </div>
                    <div className="flex flex-col my-1">
                        <label htmlFor="quantity" className="text-base opacity-50 font-medium">Quantity</label>
                        <Field className="input" type="number" name="quantity" placeholder="Quantity" />
                        <ErrorMessage component="p" className="text-sm text-red-500" name="quantity" />
                    </div>
                    <button type="submit" className="button text-base my-5">{!isLoading ? "Register" : "Wait..."}</button>
                </Form>
            </Formik>
        </div>
    )
}

export default AddBook