import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ demoSelected, setDemoSelected ] = useState(false)
    const [ showPassword, setShowPassword ] = useState(false)

    const useDemoLogin = () => {
        setEmail("test@gmail.com")
        setPassword("test123@")
        setDemoSelected(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const loggedInUser = await handleLogin({email,password})
        if (loggedInUser) navigate('/')
    }

    if(loading){
        return (<main className="auth-page"><div className="auth-loading" role="status"><span className="auth-spinner" />Checking your account...</div></main>)
    }


    return (
        <main className="auth-page">
            <div className="auth-layout">
                <section className="auth-intro">
                    <div className="auth-brand"><span>CV</span> CVSense</div>
                    <p className="auth-eyebrow">Your next opportunity starts here</p>
                    <h1>Turn your resume into interview confidence.</h1>
                    <p className="auth-copy">Build focused preparation plans, spot skill gaps, and walk into every interview ready.</p>
                    <div className="auth-stat"><strong>AI-powered</strong><span>personalized interview preparation</span></div>
                </section>
                <section className="form-container" aria-labelledby="login-title">
                    <div className="form-heading">
                        <p className="form-eyebrow">Welcome back</p>
                        <h2 id="login-title">Log in to CVSense</h2>
                        <p>Continue building your interview strategy.</p>
                    </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            required
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email" id="email" name='email' autoComplete="email" placeholder='you@example.com' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-field">
                            <input
                                required
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                type={showPassword ? "text" : "password"} id="password" name='password' autoComplete="current-password" placeholder='Enter your password' />
                            <button type="button" className="password-toggle" onClick={() => setShowPassword(current => !current)} aria-label={showPassword ? "Hide password" : "Show password"}>
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        {demoSelected && <small className="password-status">Password filled from test login</small>}
                    </div>
                    <button className='button primary-button auth-submit' type="submit">Login <span aria-hidden="true">-&gt;</span></button>
                </form>
                <button
                    type="button"
                    className={`demo-login ${demoSelected ? "demo-login--selected" : ""}`}
                    onClick={useDemoLogin}
                    aria-label="Fill test login email and password"
                >
                    <span>Test login</span>
                    <small>Click to autofill</small>
                </button>
                <p className="auth-switch">Don't have an account? <Link to={"/register"} >Create one</Link></p>
                </section>
            </div>
        </main>
    )
}

export default Login