import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import "../auth.form.scss"

const Register = () => {

    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const {loading,handleRegister} = useAuth()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const registeredUser = await handleRegister({username,email,password})
        if (registeredUser) navigate("/dashboard")
    }

    return (
        <main className="auth-page">
            <div className="auth-layout">
                <section className="auth-intro">
                    <div className="auth-brand"><span>CV</span> CVSense</div>
                    <p className="auth-eyebrow">Build your edge</p>
                    <h1>Prepare smarter for the conversation that matters.</h1>
                    <p className="auth-copy">Create your account and turn every job description into a focused preparation plan.</p>
                    <div className="auth-stat"><strong>One workspace</strong><span>for your interview preparation journey</span></div>
                </section>
                <section className="form-container" aria-labelledby="register-title">
                    <div className="form-heading">
                        <p className="form-eyebrow">Get started</p>
                        <h2 id="register-title">Create your account</h2>
                        <p>Save your plans and keep your preparation on track.</p>
                    </div>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            required onChange={(e) => { setUsername(e.target.value) }}
                            type="text" id="username" name='username' autoComplete="username" placeholder='Enter username' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            required onChange={(e) => { setEmail(e.target.value) }}
                            type="email" id="email" name='email' autoComplete="email" placeholder='you@example.com' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            required onChange={(e) => { setPassword(e.target.value) }}
                            type="password" id="password" name='password' autoComplete="new-password" placeholder='Create a password' />
                    </div>

                    <button className='button primary-button auth-submit' type="submit" disabled={loading}>
                        {loading ? "Creating your account..." : <>Register <span aria-hidden="true">-&gt;</span></>}
                    </button>

                </form>

                <p className="auth-switch">Already have an account? <Link to={"/login"} >Log in</Link></p>
                </section>
            </div>
        </main>
    )
}

export default Register