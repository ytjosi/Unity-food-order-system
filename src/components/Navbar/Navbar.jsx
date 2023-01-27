import { pb } from "@/utils/Pocket"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const name = pb?.authStore?.model?.name
    const username = pb?.authStore?.model?.username
    const email = pb?.authStore?.model?.email
    const navigate = useNavigate()

    const handleLogout = () => {
        pb.authStore.clear()
        navigate('/login')
    }

    return (
        <div className="card w-full flex justify-between py-4">
            <div className="w-full">
                <Link to="/" className="font-medium text-white">foodUp</Link>
            </div>
            <div className="w-full h-full flex justify-end items-center">
                <div>
                    {pb?.authStore?.model ?
                        <>
                            <div className="flex items-center gap-x-2">
                                <button onClick={() => setOpen(!open)} className="text-base font-medium text-white">Hi, {name ?? ''}</button>
                                {open &&
                                    <>
                                        <div className="absolute right-2 top-14 rounded bg-white shadow-md p-4">
                                            <p className="text-base font-medium">{username ?? ''}</p>
                                            <p className="text-sm font-medium opacity-60">{email ?? ''}</p>
                                            <hr className="mx-3 my-1" />
                                            <div className="text-base font-medium flex flex-col items-start w-full">
                                                <Link to="/account" className="w-full my-1 py-1 px-2 hover:bg-indigo-500 rounded hover:text-white">Account</Link>
                                                <button onClick={handleLogout} className="w-full my-1 py-1 px-2 hover:bg-indigo-500 rounded text-left hover:text-white">Logout</button>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                        </>
                        :
                        <Link to="/login" className=" my-1 py-1 px-2 hover:bg-indigo-500 rounded hover:text-white">Login</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar