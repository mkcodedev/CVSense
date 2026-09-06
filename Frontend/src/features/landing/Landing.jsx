import React, { useState } from "react"
import { Link } from "react-router"
import "./landing.scss"

const Progress = ({ label, value, tone = "blue" }) => (
    <div className="product-progress">
        <div><span>{label}</span><b>{value}%</b></div>
        <i><span className={`progress-fill progress-fill--${tone}`} style={{ width: `${value}%` }} /></i>
    </div>
)

const ProductFrame = ({ children, className = "" }) => <div className={`product-frame ${className}`}>{children}</div>

const Heading = ({ eyebrow, title, copy, centered = false }) => (
    <div className={`landing-heading ${centered ? "landing-heading--center" : ""}`}>
        <p className="landing-eyebrow"><span />{eyebrow}</p>
        <h2>{title}</h2>
        {copy && <p className="landing-heading__copy">{copy}</p>}
    </div>
)

const Landing = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [selectedRole, setSelectedRole] = useState("Software Engineer")
    const closeMenu = () => setMenuOpen(false)
    const roles = ["Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Internship", "Career Switcher"]
    const roadmap = ["Resume analysis", "Core skills", "React architecture", "System design", "Behavioral practice", "Mock interview", "Final review"]
    const roleFocus = {
        "Software Engineer": "system design and scalable APIs",
        "Frontend Developer": "React architecture and performance",
        "Backend Developer": "data modeling and service design",
        "Full Stack Developer": "end-to-end product decisions",
        Internship: "core concepts and project walkthroughs",
        "Career Switcher": "transferable experience and fundamentals"
    }

    return (
        <main className="landing-page">
            <nav className={`landing-nav ${menuOpen ? "landing-nav--open" : ""}`} aria-label="Main navigation">
                <Link className="landing-brand" to="/" onClick={closeMenu}><span className="landing-brand__mark">CV</span><span>CVSense</span></Link>
                <button type="button" className="landing-menu-toggle" onClick={() => setMenuOpen(open => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}><span /><span /></button>
                <div className="landing-nav__links"><a href="#product" onClick={closeMenu}>Product</a><a href="#how-it-works" onClick={closeMenu}>How it works</a><a href="#features" onClick={closeMenu}>Features</a><a href="#future" onClick={closeMenu}>About</a></div>
                <div className="landing-nav__actions"><Link className="landing-login" to="/login">Sign in</Link><Link className="landing-nav__cta" to="/register">Get started <span>-&gt;</span></Link></div>
            </nav>

            <section className="landing-hero" id="product">
                <div className="hero-copy">
                    <p className="landing-eyebrow"><span /> AI-powered interview preparation</p>
                    <h1>Prepare for the interview you&apos;re <em>actually</em> going to have.</h1>
                    <p className="hero-copy__description">CVSense analyzes your resume and the job description to build a personalized interview strategy, identify skill gaps, and tell you what to prepare next.</p>
                    <div className="hero-actions"><Link className="button-primary" to="/register">Build my preparation plan <span>-&gt;</span></Link><a className="button-text" href="#how-it-works">See how it works <span>↓</span></a></div>
                    <p className="hero-microcopy">Upload your resume <i /> Add the job description <i /> Get your plan</p>
                </div>
                <ProductFrame className="hero-product">
                    <div className="product-topline"><span>INTERVIEW PREPARATION</span><b><i /> LIVE PLAN</b></div>
                    <div className="product-role"><div><small>Target role</small><strong>Frontend Engineer</strong></div><span className="product-dot">•••</span></div>
                    <div className="hero-product__body"><div className="score-circle"><strong>82</strong><small>% match</small></div><div className="hero-product__bars"><p>Profile alignment</p><Progress label="Technical skills" value={91} tone="green" /><Progress label="Experience" value={84} tone="green" /><Progress label="System design" value={68} tone="orange" /><Progress label="Communication" value={86} /></div></div>
                    <div className="ai-recommendation"><span className="ai-spark">✦</span><div><small>AI RECOMMENDATION</small><strong>Focus on system design and distributed systems for this role.</strong></div><span className="arrow">-&gt;</span></div>
                </ProductFrame>
            </section>

            <section className="value-strip"><div><b>01</b><span>Understand your fit</span></div><strong>-&gt;</strong><div><b>02</b><span>Know what to prepare</span></div><strong>-&gt;</strong><div><b>03</b><span>Practice what matters</span></div></section>

            <section className="landing-section problem-section"><Heading eyebrow="The problem" title="Knowing you have an interview is easy. Knowing what to prepare is not." copy="Generic preparation creates information overload. It does not account for your background, your target role, or the gaps that can change the outcome." /><div className="problem-grid"><article><b>01</b><h3>Too much information</h3><p>Hundreds of topics. No clear priority.</p></article><article><b>02</b><h3>Generic preparation</h3><p>Questions that don&apos;t match your experience.</p></article><article><b>03</b><h3>No clear roadmap</h3><p>You know you should prepare, but not where to start.</p></article></div></section>

            <section className="landing-section concept-section"><Heading centered eyebrow="From context to confidence" title="Your preparation should start with you." copy="CVSense connects the context you already have to the practice you actually need." /><div className="concept-flow"><div className="flow-inputs"><span>RESUME</span><b>+</b><span>JOB DESCRIPTION</span></div><div className="flow-arrow">↓</div><div className="flow-node flow-node--blue">CVSENSE AI</div><div className="flow-arrow">↓</div><div className="flow-chain"><span>PROFILE ANALYSIS</span><i>→</i><span>MATCH SCORE</span><i>→</i><span>SKILL GAPS</span></div><div className="flow-arrow">↓</div><div className="flow-output"><span>TECHNICAL QUESTIONS</span><b>+</b><span>BEHAVIORAL QUESTIONS</span></div><div className="flow-arrow">↓</div><div className="flow-node flow-node--dark">PERSONALIZED ROADMAP</div></div></section>

            <section className="landing-section how-section" id="how-it-works"><Heading eyebrow="How it works" title="Three steps from raw context to a sharper conversation." /><div className="how-grid"><article className="how-step"><div className="step-number">01</div><div><h3>Add your context</h3><p>Upload your resume and paste the job description you&apos;re targeting.</p></div><ProductFrame className="mini-product"><div className="upload-row"><span className="file-icon">PDF</span><div><strong>Resume.pdf</strong><small>Uploaded successfully</small></div><b className="status-good">✓</b></div><div className="mini-plus">+</div><div className="job-preview"><small>JOB DESCRIPTION</small><strong>Frontend Engineer...</strong><p>React · TypeScript · APIs · Design systems</p></div></ProductFrame></article><article className="how-step"><div className="step-number">02</div><div><h3>Understand your gaps</h3><p>CVSense compares your experience with the role and surfaces strengths and areas needing attention.</p></div><ProductFrame className="mini-product"><div className="mini-match"><strong>82%</strong><span>MATCH</span><em>Strong fit</em></div><div className="check-list"><span>✓ React <b>Strong</b></span><span>✓ REST APIs <b>Strong</b></span><span>△ System Design <b className="status-warn">Improve</b></span><span>△ Testing <b className="status-warn">Improve</b></span></div></ProductFrame></article><article className="how-step"><div className="step-number">03</div><div><h3>Follow your plan</h3><p>Get personalized questions and a day-wise roadmap that turns preparation into progress.</p></div><ProductFrame className="mini-product"><div className="day-heading"><span>DAY 04</span><strong>System design</strong></div><div className="todo-list"><span>○ Review caching</span><span>○ Study load balancing</span><span>○ Practice design question</span><span>○ Review trade-offs</span></div></ProductFrame></article></div></section>

            <section className="landing-section feature-section" id="features"><Heading eyebrow="The CVSense engine" title="Everything connected. Nothing generic." copy="The product is the visual language: analysis becomes a score, a score becomes focus, and focus becomes a plan." /><div className="feature-bento"><ProductFrame className="bento-card bento-analysis"><div className="bento-label">AI PROFILE ANALYSIS <span>↗</span></div><strong>82% <small>match</small></strong><div className="bento-track"><span /></div><p>Understand how your experience aligns with the target role.</p></ProductFrame><ProductFrame className="bento-card"><div className="bento-label">SKILL GAP DETECTION</div><div className="bento-skills"><span>React <b className="status-good">✓ Strong</b></span><span>JavaScript <b className="status-good">✓ Strong</b></span><span>Node.js <b>✓ Good</b></span><span>System design <b className="status-warn">△ Improve</b></span><span>Testing <b className="status-warn">△ Improve</b></span></div></ProductFrame><ProductFrame className="bento-card"><div className="bento-label">TECHNICAL QUESTIONS</div><div className="question-lines"><span>01 Explain React rendering...</span><span>02 How would you optimize...</span><span>03 Design a scalable API...</span></div><a href="#how-it-works">18 questions -&gt;</a></ProductFrame><ProductFrame className="bento-card bento-behavioral"><div className="bento-label">BEHAVIORAL QUESTIONS</div><h3>Stories based on your projects, experience, and role.</h3><a href="#how-it-works">Prepare answer -&gt;</a></ProductFrame><ProductFrame className="bento-card bento-roadmap"><div className="bento-label">PERSONALIZED ROADMAP <span>7 DAYS</span></div>{['Resume analysis', 'Core skills', 'React architecture', 'System design', 'Mock interview'].map((item, index) => <div className="roadmap-row" key={item}><b>DAY 0{index + 1}</b><span>{item}</span><i className={index < 2 ? 'done' : ''}>{index < 2 ? '✓' : '○'}</i></div>)}</ProductFrame></div></section>

            <section className="landing-section deep-dive-section"><div className="deep-dive-copy"><Heading eyebrow="Know your fit" title="A score is useful when it tells you what to do next." copy="Match score is not a verdict. It is a starting point for your highest-impact preparation." /><ul className="insight-list"><li><b>✓</b> Strong technical foundation</li><li><b>✓</b> Relevant project experience</li><li className="warning"><b>△</b> Improve system design</li></ul></div><ProductFrame className="analytics-product"><div className="analytics-head"><span>MATCH SCORE</span><b>STRONG MATCH</b></div><div className="analytics-score">82<small>%</small></div><div className="analytics-bars"><Progress label="Technical" value={91} tone="green" /><Progress label="Experience" value={84} tone="green" /><Progress label="Communication" value={86} /><Progress label="System design" value={68} tone="orange" /></div></ProductFrame></section>

            <section className="landing-section skill-section"><div><Heading eyebrow="Stop guessing what you&apos;re missing" title="Spend preparation time where it has the highest impact." copy="CVSense identifies the skills that matter most for your target role, so improvement becomes concrete." /></div><ProductFrame className="skill-product">{[['React', 91, 'Strong', 'green'], ['JavaScript', 86, 'Strong', 'green'], ['Node.js', 78, 'Good', 'blue'], ['System Design', 61, 'Improve', 'orange'], ['Testing', 54, 'Improve', 'orange'], ['Performance', 42, 'Focus', 'red']].map(([name, value, status, tone]) => <div className="skill-line" key={name}><div><strong>{name}</strong><b className={`status-${tone}`}>{status}</b></div><i><span className={`progress-fill--${tone}`} style={{ width: `${value}%` }} /></i></div>)}</ProductFrame></section>

            <section className="landing-section questions-section"><Heading centered eyebrow="Practice with context" title="Practice questions that know your background." /><div className="question-feature-grid"><ProductFrame className="question-feature"><span className="question-type">TECHNICAL QUESTION</span><h3>How would you optimize a React application that has become slow as the number of components grows?</h3><p>Built around the technical demands of your target role.</p><a href="#features">View answer framework -&gt;</a></ProductFrame><ProductFrame className="question-feature question-feature--dark"><span className="question-type">BEHAVIORAL QUESTION</span><h3>Tell me about a time you had to make a difficult technical trade-off.</h3><p>Based on your projects + experience.</p><a href="#features">Prepare answer -&gt;</a></ProductFrame></div></section>

            <section className="landing-section roadmap-section"><Heading eyebrow="Personalized roadmap" title="Turn preparation into a plan you can actually follow." copy="Small, role-specific steps create better preparation than an endless list of topics." /><ProductFrame className="roadmap-product"><div className="roadmap-product__top"><div><small>YOUR 7-DAY PLAN</small><strong>Preparation runway</strong></div><span>01 / 07</span></div><div className="timeline">{roadmap.map((item, index) => <div className={`timeline-day timeline-day--${index < 2 ? 'done' : index === 2 ? 'current' : 'upcoming'}`} key={item}><i>{index < 2 ? '✓' : index + 1}</i><small>DAY 0{index + 1}</small><strong>{item}</strong></div>)}</div><Link className="button-primary" to="/register">Start your personalized roadmap <span>-&gt;</span></Link></ProductFrame></section>

            <section className="landing-section paths-section"><Heading eyebrow="Built around your role" title="One platform. Different interview paths." copy="Preparation changes based on the role, so your plan should too." /><div className="paths-layout"><div className="paths-grid">{roles.map((path, index) => <button type="button" className={`path-card ${selectedRole === path ? 'path-card--active' : ''}`} onClick={() => setSelectedRole(path)} key={path}><span>0{index + 1}</span><strong>{path}</strong><i>-&gt;</i></button>)}</div><ProductFrame className="role-preview"><div className="bento-label">CURRENT PREPARATION EMPHASIS <span>AI-SELECTED</span></div><strong>{selectedRole}</strong><p>Prioritize <b>{roleFocus[selectedRole]}</b> in your preparation plan.</p><div className="role-preview__tags"><span>Role context</span><span>Skill gaps</span><span>Practice plan</span></div><Link className="text-link" to="/register">Build this plan <span>-&gt;</span></Link></ProductFrame></div></section>

            <section className="landing-section education-section"><div><Heading eyebrow="Why preparation should be specific" title="Your time is limited. Your preparation should know where to spend it." copy="A candidate preparing for a frontend role should not spend the same amount of time on every possible interview topic. Resume, experience, projects, and target role should determine what deserves attention." /></div><div className="education-compare"><div><small>GENERIC PREPARATION</small><p><b>100</b> topics</p><p><b>—</b> No priority</p><p><b>—</b> No context</p></div><span className="education-equals">+</span><div className="education-focused"><small>CVSENSE</small><p><b>Your</b> background</p><p><b>+</b> Target role</p><p><b>=</b> Focused preparation</p></div></div></section>

            <section className="trust-section"><Heading centered eyebrow="A clearer way to prepare" title="Personalized. Context-aware. Actionable." copy="CVSense keeps the focus on your role and your next best action, without pretending to replace your judgment." /><div className="trust-list"><span>Resume + role context</span><span>AI-powered analysis</span><span>Actionable next steps</span></div></section>

            <section className="workflow-band"><Heading centered eyebrow="The complete workflow" title="Your resume and role, connected to what comes next." /><div className="workflow-line">{['UPLOAD', 'ANALYZE', 'MATCH', 'IDENTIFY GAPS', 'GENERATE QUESTIONS', 'BUILD ROADMAP', 'PREPARE'].map((item, index) => <div key={item}><i>{String(index + 1).padStart(2, '0')}</i><span>{item}</span></div>)}</div></section>

            <section className="landing-section future-section" id="future"><div><Heading eyebrow="Where CVSense is going" title="Preparation is only the beginning." copy="The current product helps you build the plan. The next chapter will help you practice, measure, and improve it." /></div><div className="future-columns"><div><small>AVAILABLE NOW</small>{['AI resume & job analysis', 'Match score', 'Skill gap detection', 'Technical + behavioral questions', 'Day-wise roadmap'].map(item => <p key={item}><b>✓</b>{item}</p>)}</div><div><small>COMING NEXT</small>{['Voice AI mock interviews', 'Coding interview practice', 'AI resume builder', 'Performance analytics', 'Progress tracking'].map(item => <p key={item}><b>→</b>{item}</p>)}</div></div></section>

            <section className="landing-cta"><Heading centered eyebrow="Start with your role" title="Don&apos;t prepare for every possible interview. Prepare for yours." copy="Turn your resume and target role into a focused preparation plan." /><Link className="button-primary button-primary--light" to="/register">Build my preparation plan <span>-&gt;</span></Link><small>Free to get started · No guesswork</small></section>

            <footer className="landing-footer"><div className="landing-footer__brand"><Link className="landing-brand" to="/"><span className="landing-brand__mark">CV</span><span>CVSense</span></Link><p>AI-powered interview preparation.</p></div><div><small>PRODUCT</small><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#future">Roadmap</a></div><div><small>RESOURCES</small><a href="https://github.com/mkcodedev/CVSense" target="_blank" rel="noreferrer">GitHub</a><Link to="/login">Sign in</Link><Link to="/register">Get started</Link></div><p className="landing-footer__legal">© 2026 CVSense · MIT License</p></footer>
        </main>
    )
}

export default Landing
