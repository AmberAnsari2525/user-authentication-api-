import React , {useState, createContext}from 'react';
import {SignUp, SignIn} from "../Api/Userservices";

export const AuthContext = createContext();

export const AuthProvider= ({children}) => {
    const [token , setToken] = useState( localStorage.getItem ('jwtToken') || null);
    const [error ,setError ] = useState(null);

    const Login = async (formdata) => {
        try{
            const data = await SignIn (formdata)
            setToken(data.token);
            localStorage.setItem("jwtToken", data.token);
            setError(null)

        }
        catch(error){
            console.log(error);
            setError(error.message);
        }
    }
    const signup = async (userData) =>{
        try{
            const data = await SignUp (userData);
            setToken(data.token);
            localStorage.setItem("jwtToken", data.token);
            setError(null)
        }
        catch(error){
            console.log(error);
            setError(error.message);
        }
    }
    return (
        <>
            <AuthContext.Provider value={{token, signup, Login, error}}>
                {children}

            </AuthContext.Provider>
        </>
    )
}