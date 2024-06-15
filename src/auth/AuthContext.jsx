import { createContext, useEffect,useReducer } from 'react';

export const AuthContext = createContext();
export const authReducer = (state,action) => {
    switch(action.type){
        case 'signup' :
            return{
                user: action.payload ,
                isAuthenticated: false,
            }
        case 'login':
            return{
                user: action.payload ,
                isAuthenticated: true,
            }   
        case 'logout':
            return{
                user: null,
                userLogin: null,
                isAuthenticated: false,
            }
        default :
            return state    
    }
}

export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,{
        user: null,
        userLogin: null,
        isAuthenticated: null,
    });

    useEffect(() => {
        const storedState = JSON.parse(localStorage.getItem("authState"));

        if(storedState){
            dispatch(storedState);
        }
    },[]);

    useEffect(() => {
        localStorage.setItem("authState", JSON.stringify(state));
    },[state]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user){
            dispatch({type:'login', payload: user});
        }
    },[]);

    console.log("AuthContext State", state);

    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}