import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"

function App() {
  return (
    <AuthProvider>
      <InterviewProvider>
        <div className="app-shell">
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
