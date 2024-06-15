import { useNavigate } from "react-router-dom"
import "./HomePage.css"

function HomePage(){

    const navigate = useNavigate() ; 

    const handleClick1 = () => {
        navigate('/login', {replace: true})
    }

    const handleClick2 = () => {
        navigate('/signup',{replace:true})
    }

    return (
        <>
            <div className="homeContainer">
                <button onClick={handleClick1}>Login</button>
                <button onClick={handleClick2}>Signup</button>
            </div>
        </>
    )
}

export default HomePage