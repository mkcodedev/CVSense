import React from "react"
import { Link } from "react-router"
import "./landing.scss"

const FeatureIcon = ({ children }) => <span className="feature-icon" aria-hidden="true">{children}</span>

const Landing = () => {
    return (
        <main className="landing-page">
            <nav className="landing-nav" aria-label="Main navigation">
                <Link className="landing-brand" to="/">
                    <span className="landing-brand__mark">CV</span>
                    <span>CVSense</span>
                </Link>
                <div className="landing-nav__links">
                    <a href="#features">What it does</a>
                    <a href="#how-it-works">How to use</a>
                    <a href="#future">Future goals</a>
                </div>
                <div className="landing-nav__actions">
                    <Link className="landing-login" to="/login">Log in</Link>
                    <Link className="landing-nav__cta" to="/register">Build my plan <span aria-hidden="true">-&gt;</span></Link>
                </div>
            </nav>

            <section className="landing-hero">
                <div className="hero-copy">
                    <p className="landing-eyebrow"><span /> AI interview preparation, made personal</p>
                    <h1>Walk into your next interview with a <em>plan.</em></h1>
                    <p className="hero-copy__description">CVSense turns a job description and your experience into a focused preparation system: what to learn, what they may ask, and how to answer with confidence.</p>
                    <div className="hero-actions">
                        <Link className="hero-primary" to="/register">Create your free strategy <span aria-hidden="true">-&gt;</span></Link>
                        <a className="hero-secondary" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a>
                    </div>
                    <div className="hero-proof"><span className="proof-dot" /> Built around your role, your resume, and your next conversation</div>
                </div>
                <div className="hero-visual" aria-label="Preview of an interview readiness dashboard">
                    <div className="visual-orbit visual-orbit--one" />
                    <div className="visual-orbit visual-orbit--two" />
                    <div className="dashboard-preview">
                        <div className="preview-topline"><span>READINESS SNAPSHOT</span><b>LIVE PLAN</b></div>
                        <div className="preview-title">Frontend Engineer <span>↗</span></div>
                        <div className="preview-score-row">
                            <div className="preview-ring"><strong>82</strong><small>% match</small></div>
                            <div className="preview-bars"><span>Role alignment <i style={{ width: "82%" }} /></span><span>Story strength <i style={{ width: "68%" }} /></span><span>Skill coverage <i style={{ width: "74%" }} /></span></div>
                        </div>
                        <div className="preview-next"><span>01</span><div><small>NEXT BEST ACTION</small><strong>Practice system design trade-offs</strong></div><b>→</b></div>
                    </div>
                    <div className="floating-note floating-note--top"><span>✦</span> 7-day roadmap ready</div>
                    <div className="floating-note floating-note--bottom"><span>✓</span> 18 tailored questions</div>
                </div>
            </section>

            <section className="signal-strip" aria-label="CVSense benefits">
                <div><strong>01</strong><span>Know what matters</span><small>Find the skills the role actually rewards.</small></div>
                <div><strong>02</strong><span>Practice with intent</span><small>Prepare answers, not just a question list.</small></div>
                <div><strong>03</strong><span>Show up ready</span><small>Turn scattered prep into a clear runway.</small></div>
            </section>

            <section className="landing-section features-section" id="features">
                <div className="section-heading"><p className="landing-eyebrow">One workspace, less guesswork</p><h2>Everything you need between “I applied” and “I got it.”</h2><p>CVSense reads the context around a role and gives you a practical way to close the distance.</p></div>
                <div className="feature-grid">
                    <article className="feature-card feature-card--large"><FeatureIcon>◎</FeatureIcon><h3>Role match, made visible</h3><p>See how closely your background maps to the opportunity, with a simple score and the gaps behind it.</p><div className="mini-meter"><span /><b>82% alignment</b></div></article>
                    <article className="feature-card"><FeatureIcon>&lt;/&gt;</FeatureIcon><h3>Technical drills</h3><p>Get role-specific questions with the thinking and answer shape interviewers are looking for.</p></article>
                    <article className="feature-card"><FeatureIcon>✦</FeatureIcon><h3>Behavioral stories</h3><p>Turn your experience into confident stories with clear intent and stronger examples.</p></article>
                    <article className="feature-card"><FeatureIcon>↗</FeatureIcon><h3>Personal roadmap</h3><p>Know what to focus on today, tomorrow, and before the interview starts.</p></article>
                </div>
            </section>

            <section className="landing-section how-section" id="how-it-works">
                <div className="section-heading section-heading--split"><div><p className="landing-eyebrow">How to use CVSense</p><h2>From raw context to a sharper conversation.</h2></div><p>No complicated setup. Bring the opportunity, add your context, and let the plan do the organizing.</p></div>
                <div className="steps-grid">
                    <div className="step"><span>01</span><h3>Paste the role</h3><p>Add the full job description so the strategy knows what the company needs.</p></div>
                    <div className="step"><span>02</span><h3>Add your edge</h3><p>Upload your resume or describe your experience in a few honest lines.</p></div>
                    <div className="step"><span>03</span><h3>Follow the signal</h3><p>Use your match score, questions, skill gaps, and roadmap to prepare with purpose.</p></div>
                </div>
            </section>

            <section className="landing-section future-section" id="future">
                <div className="future-copy"><p className="landing-eyebrow">Where we are going</p><h2>Preparation should get smarter every time you use it.</h2><p>CVSense is growing toward a complete interview companion: more feedback, more practice, and a clearer view of your progress over time.</p><Link className="text-link" to="/register">Start with the foundation <span>→</span></Link></div>
                <div className="future-list"><div><span>01</span><strong>Live mock interviews</strong><small>Practice out loud with adaptive follow-up questions.</small></div><div><span>02</span><strong>Answer feedback</strong><small>Get useful notes on clarity, structure, and confidence.</small></div><div><span>03</span><strong>Progress intelligence</strong><small>See which skills are improving and what still needs attention.</small></div></div>
            </section>

            <section className="landing-cta"><p className="landing-eyebrow">Your next interview is already a project</p><h2>Give your preparation a point of view.</h2><Link className="hero-primary" to="/register">Create my interview plan <span aria-hidden="true">-&gt;</span></Link></section>

            <footer className="landing-footer"><Link className="landing-brand" to="/"><span className="landing-brand__mark">CV</span><span>CVSense</span></Link><span>Less guessing. Better conversations.</span><div><Link to="/login">Log in</Link><Link to="/register">Create account</Link></div></footer>
        </main>
    )
}

export default Landing