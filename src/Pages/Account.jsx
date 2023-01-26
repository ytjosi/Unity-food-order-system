import { pb } from "@/utils/Pocket"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import * as Yup from "yup";

const UpdateSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    username: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
})


const Account = () => {
    const name = pb?.authStore?.model?.name
    const username = pb?.authStore?.model?.username
    const email = pb?.authStore?.model?.email
    const id = pb?.authStore?.model?.id
    const role = pb?.authStore?.model?.role

    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const DeleteUser = async () => {
        try {
            navigate('/login')
            await pb.collection('users').delete(id);
            toast.success('Account deleted', { className: "text-base font-medium" })
        } catch (error) {
            toast.error(error?.message, { className: "text-base font-medium" })
        }
    }

    const UpdateUser = async (values) => {
        setIsLoading(true)
        try {
            await pb.collection('users').update(id, values);
            toast.success(`Successfully updated`, { className: "text-base font-medium" })
            setIsLoading(false)
            await pb.collection('users').authRefresh();
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            if (error?.data?.name) {
                toast.error(error?.data?.name?.message, { className: "text-base font-medium" })
            } else if (error?.data?.username) {
                toast.error(error?.data?.username?.message, { className: "text-base font-medium" })

            } else if (error?.data?.email) {
                toast.error(error?.data?.email?.message, { className: "text-base font-medium" })
            } else {
                toast.error(error?.message, { className: "text-base font-medium" })

            }
        }
    };

    return (
        <div className="text-base p-2">
            <h1 className="font-medium text-3xl">Hi, {name}</h1>
            <div className="font-medium ml-4 mt-4">
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Role: {role}</p>
            </div>
            <button type="submit" onClick={DeleteUser} className="bg-red-500 button text-base my-5 ml-4">Delete</button>
            <div>

                <Formik
                    enableReinitialize
                    validationSchema={UpdateSchema}
                    initialValues={{
                        name: name,
                        username: username,
                        email: email,
                    }}
                    onSubmit={(values) => {
                        UpdateUser(values)
                    }}
                >
                    <Form className="flex flex-col w-full max-w-[500px] min-w-[250px] rounded shadow p-5 m-1">
                        <h1 className="font-medium text-xl mt-10">Edit you account</h1>
                        <hr className="mx-10 my-4" />
                        <div className="flex flex-col my-1">
                            <label htmlFor="name" className="text-base opacity-50 font-medium">Full name</label>
                            <Field className="input" name="name" type="text" placeholder="Full name" />
                            <ErrorMessage component="p" className="text-sm text-red-500" name="name" />
                        </div>
                        <div className="flex flex-col my-1">
                            <label htmlFor="username" className="text-base opacity-50 font-medium">username<span>{`(optional)`}</span></label>
                            <Field className="input" name="username" type="text" placeholder="Username" />
                            <ErrorMessage component="p" className="text-sm text-red-500" name="username" />
                        </div>
                        <div className="flex flex-col my-1">
                            <label htmlFor="email" className="text-base opacity-50 font-medium">Email</label>
                            <Field className="input" name="email" type="text" placeholder="example@example.com" />
                            <ErrorMessage component="p" className="text-sm text-red-500" name="email" />
                        </div>
                        <button type="submit" className="button text-base my-5">{!isLoading ? "Signup" : "Wait..."}</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Account