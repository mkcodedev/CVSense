import { createContext, useState } from "react";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [notifications, setNotifications] = useState([])

    const notify = (message, type = "info") => {
        const id = Date.now() + Math.random()
        setNotifications(current => [ ...current, { id, message, type } ])
        window.setTimeout(() => {
            setNotifications(current => current.filter(notification => notification.id !== id))
        }, 4000)
    }

    


    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, notifications, notify }} >
            {children}
        </AuthContext.Provider>
    )

    
}