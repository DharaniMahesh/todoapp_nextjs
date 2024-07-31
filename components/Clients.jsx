"use client";

import { useState, createContext, useContext } from "react";
import Link from "next/link";

const Context = createContext({user:{}})

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    return <Context.Provider
        value={{user, setUser}}
    >
        {children}

    </Context.Provider>
}

export const LogoutBtn = () => {
    const {user} = useContext(Context);
    const LogoutHandler = () => {
        alert("Logout");
    }
    return user.id ? (
        <button className="btn" onClick={LogoutHandler}>Logout</button>
    ):(
        <Link href="/login">Login</Link>
    )
}

export const TodoButton = ({id, completed}) => {
    const deleteHandler = (id) => {
        alert(`Deleted, ${id}`);
    }
    
    return (
        <>
            <input type="checkbox" checked={completed}/>
            <button className="btn" onClick={()=>deleteHandler(id)}>Delete</button>
        </>
    )
}