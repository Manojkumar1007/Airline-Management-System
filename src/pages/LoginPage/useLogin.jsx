import { useState } from "react"
import {useAuthContext} from "./../../auth/useAuthContext"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
    const [error,setError] = useState(null)
    const navigate = useNavigate()
    const { dispatch } = useAuthContext()

    const login = async (user) => {
        setError(null)
        try {
            const response = await fetch('http://localhost:5000/user/signin',{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify(user)
              })
            const text = await response.text()
            const userResponse = text ? JSON.parse(text) : {}
    
            if(response.ok && userResponse.status != "FAILED"){
                console.log(userResponse)
                dispatch({type:"login", payload:userResponse})
                navigate("/",{replace:true})
                alert(`${userResponse.message}`)
            }else{
                setError(userResponse.message || "Login Failed")
                alert(`${userResponse.message || "Login Failed"}`)
            }
        } catch (error) {
            console.error("Login error:", error)
            setError("An error occurred during login. Please try again.")
            alert("An error occured during login. Please try again")
        }
    }
    return {login,error}
}