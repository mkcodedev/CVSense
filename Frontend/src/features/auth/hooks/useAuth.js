import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout } from "../services/auth.api";



export const useAuth = () => {

    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading, notify } = context


    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        try {
            const data = await login({ email, password })
            if (!data?.user) throw new Error("Login failed")
            setUser(data.user)
            notify("Login successful", "success")
            return data.user
        } catch (err) {
            notify(err.response?.data?.message || "Unable to login. Check your details.", "error")
            return null
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        try {
            const data = await register({ username, email, password })
            if (!data?.user) throw new Error("Registration failed")
            setUser(data.user)
            notify("Account created successfully", "success")
            return data.user
        } catch (err) {
            notify(err.response?.data?.message || "Unable to create your account.", "error")
            return null
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            const data = await logout()
            setUser(null)
            notify("You have been logged out", "success")
            return data
        } catch {
            notify("Logout failed. Please try again.", "error")
            return null
        } finally {
            setLoading(false)
        }
    }

    return { user, loading, handleRegister, handleLogin, handleLogout, notify }
}