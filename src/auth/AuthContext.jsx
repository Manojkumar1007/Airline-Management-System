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
                isAuthenticated: false,
            }
        default :
            return state    
    }
}

export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,{
        user: JSON.parse(localStorage.getItem('user')) || null,
        isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
    });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
        if(storedUser && isAuthenticated){
            dispatch({type: 'login', payload: storedUser});
        }
    },[]);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated));
    },[state.user, state.isAuthenticated]);

    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem("user"));
    //     if(user){
    //         dispatch({type:'login', payload: user});
    //     }
    // },[]);

    console.log("AuthContext State", state);

    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}