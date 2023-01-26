import { createContext, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from '@tanstack/react-query'

const UserContext = createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)
    let [auth, setAuth] = useState(() => (localStorage.getItem('auth?')) ?? null)
    let [school, setSchool] = useState(() => JSON.parse(localStorage.getItem('school')) ?? null)
    const [error, setError] = useState(false)
    const [callGetUser, setCallGetUser] = useState(false)
    let navigate = useNavigate();


    const getUser = async () => {
        const response = await axiosInstance.get(`users/me/`)
        return response?.data
    }

    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split(".")[1]));
        } catch (err) {
            setError(true)
        }
    };

    useEffect(() => {
        const decodedJwt = parseJwt(authTokens);
        if (authTokens && !error) {
            if (decodedJwt?.exp * 1000 < Date.now()) {
                Logout
            } else {
                setCallGetUser(true)
            }
        }
        else {
            redirect('/auth/login', { replace: true, state: { from: location } })
        }
    }, []);

    const { data: fetchedUser, isLoading: LoadingUser, refetch, isRefetching, error: userError, isError } = useQuery(['get-user'], getUser, { enabled: callGetUser })



    const LogoutUser = () => {
        setAuthTokens(null);
        setAuth(null);
        localStorage.removeItem('token');
        localStorage.removeItem('auth?');
        navigate("/login", { replace: true })
    }

    let contextData = {
        fetchedUser: fetchedUser,
        LoadingUser: LoadingUser,
        callGetUser: callGetUser,
        setSchool: setSchool,
        refetch: refetch,
        isRefetching: isRefetching,
        userError: userError,
        isError: isError,
        Login: Login,
        LoginUser: LoginUser,
        LoadingLogin: LoadingLogin,
        LogoutUser: LogoutUser,
        auth: auth,
        authTokens: authTokens,
    }
    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    )
}