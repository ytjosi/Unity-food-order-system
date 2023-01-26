import Private from '@/utils/Private';
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
// home
const Home = lazy(() => import('@/Pages/Home/Home'));

const Login = lazy(() => import('@/Pages/Auth/Login'));
const Signup = lazy(() => import('@/Pages/Auth/Signup'));
const Account = lazy(() => import('@/Pages/Account'));
const AddBooks = lazy(() => import('@/Pages/AddBooks'));
const EditBook = lazy(() => import('@/Pages/EditBook'));




const SystemRoutes = () => {
    return (
        <Suspense fallback={<span className='h-1 loader w-3/4 rounded-md fixed left-0 top-0 bg-indigo-600' />}>
            <Routes>
                <Route element={<Private />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/add-book' element={<AddBooks />} />
                    <Route path='/edit-book/:id' element={<EditBook />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </Suspense>
    )
}

export default SystemRoutes