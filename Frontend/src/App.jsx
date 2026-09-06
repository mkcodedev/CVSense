import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"
import { useContext } from "react"
import { AuthContext } from "./features/auth/auth.context.jsx"

function Notifications() {
  const { notifications } = useContext(AuthContext)

  return (
    <div className="notifications" aria-live="polite">
      {notifications.map(notification => (
        <div key={notification.id} className={`notification notification--${notification.type}`}>
          <span>{notification.type === "error" ? "!" : "✓"}</span>
          {notification.message}
        </div>
      ))}
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <InterviewProvider>
        <div className="app-shell">
          <Notifications />
          <div className="site-notice" role="status" aria-live="polite">
            <span className="site-notice__label">Attention</span>
            <p className="site-notice__text">
              Some features may not work as expected because of API limits. This site uses a free model.
            </p>
          </div>
          <RouterProvider router={router} />
        </div>
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App
