import { Outlet, Navigate } from 'react-router-dom'
import { pb } from './Pocket'


const Private = () => {
    return (
        pb.authStore.model ? <Outlet /> : <Navigate to='/login' />
    )
}

export default Private