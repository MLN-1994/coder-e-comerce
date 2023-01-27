import { useContext, useState } from "react";
import { createContext } from "react";


const MockUsers = [
    {
        email: "marianolangge@gmail.com",
        password: "hola"
    },
    {
        email: "franlangge@gmail.com",
        password: "hermano"
    },
    {
        email: "catalangge@gmail.com",
        password: "hermana"
    },
]

export const LoginContext = createContext()


export const useLoginContext = () => {
    return(
        useContext(LoginContext)
    )
}

export const LoginProvider = ({children})=>{

    const [user, setUser] = useState({
        email: "",
        logged: false,
        error: null
    })
    

const login = (values)=>{
    const match = MockUsers.find(user => user.email === values.email && user.password === values.password)
console.log(user)
    if(match){
        setUser({
            email : match.email,
            logged : true,
            error: null,
            
        })
    }else{
        setUser({
            email: null,
            logged: false,
            error: "Datos invalidos"
        })
        alert("Datos invalidos")
    }

}

    const logout = () =>{
        setUser({
            email: "",
        logged: false,
        error: null
        })
    }

    return(
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}