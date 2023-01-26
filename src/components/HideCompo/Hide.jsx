import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


const Hide = ({ children, routes }) => {
    const [hidden, setHidden] = useState(true)
    const { pathname } = useLocation()

    useEffect(() => {
        const hide = routes?.includes(pathname)
        if (hide) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    }, [pathname])

    return hidden ? null : <>{children}</>
}

export default Hide