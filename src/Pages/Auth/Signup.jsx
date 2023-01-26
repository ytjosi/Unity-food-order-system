import { pb } from "@/utils/Pocket";
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    username: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8).required('Required'),
    passwordConfirm: Yup.string().required("Password confirmation is required.").when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Passwords don't match."),
    })
})


const Signup = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const SignupUser = async (values) => {
        setIsLoading(true)
        try {
            const authData = await pb.collection('users').create(values);
            toast.success(`Successfully registered`, { className: "text-base font-medium" })
            setIsLoading(false)
            navigate('/login')
        } catch (error) {
            setIsLoading(false)
            if (error?.data?.name) {
                toast.error(error?.data?.name?.message, { className: "text-base font-medium" })
            } else if (error?.data?.username) {
                toast.error(error?.data?.username?.message, { className: "text-base font-medium" })

            } else if (error?.data?.email) {
                toast.error(error?.data?.email?.message, { className: "text-base font-medium" })

            } else if (error?.data?.password) {
                toast.error(error?.data?.password?.message, { className: "text-base font-medium" })

            } else if (error?.data?.passwordConfirm) {
                toast.error(error?.data?.passwordConfirm?.message, { className: "text-base font-medium" })

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
                    username: "",
                    name: "",
                    email: "",
                    emailVisibility: true,
                    password: "",
                    passwordConfirm: "",
                    role: 'student'
                }}
                onSubmit={(values) => {
                    SignupUser(values)
                }}
            >
                <Form className="flex flex-col w-full max-w-[500px] min-w-[250px] rounded shadow p-5 m-1">
                    <h1 className="font-medium w-full flex justify-center">Signup</h1>
                    <hr className="mx-10 my-5" />
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
                    <div className="flex flex-col my-1">
                        <label htmlFor="password" className="text-base opacity-50 font-medium">Password</label>
                        <Field className="input" type="password" name="password" placeholder="Password" />
                        <ErrorMessage component="p" className="text-sm text-red-500" name="password" />
                    </div>
                    <div className="flex flex-col my-1">
                        <label htmlFor="passwordConfirm" className="text-base opacity-50 font-medium">Confirm password</label>
                        <Field className="input" type="password" name="passwordConfirm" placeholder="Confirm password" />
                        <ErrorMessage component="p" className="text-sm text-red-500" name="passwordConfirm" />
                    </div>
                    <p className="text-sm font-medium">Already have an account??, then <Link className="text-indigo-600" to="/login">login</Link></p>
                    <button type="submit" className="button text-base my-5">{!isLoading ? "Signup" : "Wait..."}</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Signup