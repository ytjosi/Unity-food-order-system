import { pb } from "@/utils/Pocket";
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"
import * as Yup from "yup";
const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
})

const Login = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const LoginUser = async (values) => {
        setIsLoading(true)
        try {
            const auth = await pb.collection('users').authWithPassword(
                values?.email,
                values?.password,
            );
            setIsLoading(false)
            toast.success(`Welcome back ${auth?.record?.name}`, { className: "text-base font-medium" })
            navigate('/')
        } catch (error) {
            setIsLoading(false)
            if (error?.data?.email) {
                toast.error(error?.data?.email?.message, { className: "text-base font-medium" })

            } else if (error?.data?.password) {
                toast.error(error?.data?.password?.message, { className: "text-base font-medium" })
            } else {
                toast.error(error?.message, { className: "text-base font-medium" })

            }
        }
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <Formik
                validationSchema={LoginSchema}
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={(values) => {
                    LoginUser(values)
                }}
            >
                <Form className="flex flex-col w-full max-w-[500px] min-w-[250px] rounded shadow p-5 m-1">
                    <h1 className="font-medium">Login</h1>
                    <div className="flex flex-col my-1">
                        <label htmlFor="email" className="text-base opacity-50 font-medium">Email</label>
                        <Field className="input" name="email" type="text" placeholder="example@example.com" />
                        <ErrorMessage className="text-sm text-red-500" component="p" name="email" />
                    </div>
                    <div className="flex flex-col my-1">
                        <label htmlFor="email" className="text-base opacity-50 font-medium">Password</label>
                        <Field className="input" type="password" name="password" placeholder="Password" />
                        <ErrorMessage className="text-sm text-red-500" component="p" name="password" />
                    </div>
                    <p className="text-sm font-medium">Don't have an account??, then <Link className="text-indigo-600" to="/signup">signup</Link></p>
                    <button type="submit" className="button text-base my-5">{!isLoading ? "Login" : "Wait..."}</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Login