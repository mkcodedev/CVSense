import { createContext, useEffect, useState } from "react";
import { getMe } from "./services/auth.api";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [checkingSession, setCheckingSession] = useState(true)
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        let mounted = true

        getMe()
            .then(data => {
                if (mounted) setUser(data.user)
            })
            .catch(() => {
                if (mounted) setUser(null)
            })
            .finally(() => {
                if (mounted) setCheckingSession(false)
            })

        return () => {
            mounted = false
        }
    }, [])

    const notify = (message, type = "info") => {
        const id = Date.now() + Math.random()
        setNotifications(current => [ ...current, { id, message, type } ])
        window.setTimeout(() => {
            setNotifications(current => current.filter(notification => notification.id !== id))
        }, 4000)
    }

    


    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, checkingSession, notifications, notify }} >
            {children}
        </AuthContext.Provider>
    )

    
}