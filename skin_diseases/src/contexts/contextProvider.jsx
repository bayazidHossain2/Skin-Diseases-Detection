import { createContext, useContext, useState } from "react";


const StateContext = createContext(
    {
        user: null,
        token: null,
        setUser: () => {},
        setToken: () => {}
    }
)

export const ContextProvider = ({children}) => {


    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('SD_ACCESS_TOKEN'));
    // const [token, _setToken] = useState('abcd');

    const setToken = (token) => {
        _setToken(token)
        if(token){
            localStorage.setItem('SD_ACCESS_TOKEN', token);
        }else {
            localStorage.removeItem('SD_ACCESS_TOKEN');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            setUser,
            token,
            setToken
        }}>
            {children}

        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)