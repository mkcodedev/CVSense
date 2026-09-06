import React, { useState } from 'react'
import '../style/interview.scss'
import { useInterview } from '../hooks/useInterview.js'
import { useNavigate, useParams } from 'react-router'
import { useAuth } from '../../auth/hooks/useAuth.js'



const NAV_ITEMS = [
    { id: 'overview', label: 'Strategy Overview', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>) },
    { id: 'technical', label: 'Technical Questions', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>) },
    { id: 'behavioral', label: 'Behavioral Questions', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>) },
    { id: 'roadmap', label: 'Road Map', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>) },
    { id: 'toolkit', label: 'Interview Toolkit', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /><path d="m15 5 3 3" /></svg>) },
]

// ── Sub-components ────────────────────────────────────────────────────────────
const QuestionCard = ({ item, index }) => {
    const [ open, setOpen ] = useState(false)
    return (
        <div className='q-card'>
            <div className='q-card__header' onClick={() => setOpen(o => !o)}>
                <span className='q-card__index'>Q{index + 1}</span>
                <p className='q-card__question'>{item.question}</p>
                <span className={`q-card__chevron ${open ? 'q-card__chevron--open' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                </span>
            </div>
            {open && (
                <div className='q-card__body'>
                    <div className='q-card__section'>
                        <span className='q-card__tag q-card__tag--intention'>Intention</span>
                        <p>{item.intention}</p>
                    </div>
                    <div className='q-card__section'>
                        <span className='q-card__tag q-card__tag--answer'>Model Answer</span>
                        <p>{item.answer}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

const RoadMapDay = ({ day }) => (
    <div className='roadmap-day'>
        <div className='roadmap-day__header'>
            <span className='roadmap-day__badge'>Day {day.day}</span>
            <h3 className='roadmap-day__focus'>{day.focus}</h3>
        </div>
        <ul className='roadmap-day__tasks'>
            {day.tasks.map((task, i) => (
                <li key={i}>
                    <span className='roadmap-day__bullet' />
                    {task}
                </li>
            ))}
        </ul>
    </div>
)

const Overview = ({ report, scoreColor, onOpenSection }) => {
    const technicalCount = report.technicalQuestions.length
    const behavioralCount = report.behavioralQuestions.length
    const roadmapCount = report.preparationPlan.length
    const topGaps = report.skillGaps.slice(0, 3)
    const nextDay = report.preparationPlan[0]
    const priorityWidth = { high: 38, medium: 64, low: 86 }

    return (
        <section className='overview-section'>
            <div className='overview-hero'>
                <div>
                    <p className='overview-kicker'>Your interview command center</p>
                    <h2>{report.title || 'Interview strategy'}</h2>
                    <p className='overview-summary'>A focused plan built from your target role, profile, and the areas that will move your readiness fastest.</p>
                </div>
                <div className={`overview-score ${scoreColor}`}>
                    <span className='overview-score__value'>{report.matchScore}</span>
                    <span className='overview-score__label'>match score</span>
                </div>
            </div>

            <div className='metric-grid'>
                <button type='button' className='metric-card' onClick={() => onOpenSection('technical')}>
                    <span className='metric-card__number'>{technicalCount}</span>
                    <span className='metric-card__label'>Technical drills</span>
                    <span className='metric-card__hint'>Build depth</span>
                </button>
                <button type='button' className='metric-card' onClick={() => onOpenSection('behavioral')}>
                    <span className='metric-card__number'>{behavioralCount}</span>
                    <span className='metric-card__label'>Behavioral prompts</span>
                    <span className='metric-card__hint'>Tell your story</span>
                </button>
                <button type='button' className='metric-card' onClick={() => onOpenSection('roadmap')}>
                    <span className='metric-card__number'>{roadmapCount}</span>
                    <span className='metric-card__label'>Days to prepare</span>
                    <span className='metric-card__hint'>Follow the path</span>
                </button>
                <button type='button' className='metric-card' onClick={() => onOpenSection('toolkit')}>
                    <span className='metric-card__number'>{report.skillGaps.length}</span>
                    <span className='metric-card__label'>Focus areas</span>
                    <span className='metric-card__hint'>Close the gaps</span>
                </button>
            </div>

            <div className='overview-grid'>
                <div className='insight-panel'>
                    <div className='panel-title-row'>
                        <div>
                            <p className='panel-eyebrow'>Priority map</p>
                            <h3>Where to spend your energy</h3>
                        </div>
                        <span className='panel-title-icon'>01</span>
                    </div>
                    {topGaps.length > 0 ? topGaps.map((gap) => (
                        <div className='gap-row' key={gap.skill}>
                            <div className='gap-row__top'><strong>{gap.skill}</strong><span className={`severity severity--${gap.severity}`}>{gap.severity} priority</span></div>
                            <div className='gap-row__track'><span className={`gap-row__fill gap-row__fill--${gap.severity}`} style={{ width: `${priorityWidth[gap.severity] || 64}%` }} /></div>
                        </div>
                    )) : <p className='empty-copy'>No skill gaps were identified. Use the toolkit to sharpen your strongest stories.</p>}
                    <button type='button' className='text-action' onClick={() => onOpenSection('toolkit')}>Open focus toolkit <span aria-hidden='true'>-&gt;</span></button>
                </div>

                <div className='insight-panel insight-panel--accent'>
                    <div className='panel-title-row'>
                        <div>
                            <p className='panel-eyebrow'>Recommended next</p>
                            <h3>{nextDay ? `Day ${nextDay.day}: ${nextDay.focus}` : 'Start with your first drill'}</h3>
                        </div>
                        <span className='panel-title-icon'>02</span>
                    </div>
                    <p className='next-copy'>{nextDay ? 'Turn the plan into momentum with these first actions.' : 'Pick a question set and rehearse one answer out loud.'}</p>
                    <ul className='next-list'>
                        {(nextDay?.tasks || ['Choose one technical question to answer aloud', 'Prepare a concise STAR story', 'Review the highest-priority skill gap']).slice(0, 3).map((task) => (
                            <li key={task}><span className='check-dot'>+</span>{task}</li>
                        ))}
                    </ul>
                    <button type='button' className='text-action' onClick={() => onOpenSection(nextDay ? 'roadmap' : 'toolkit')}>View full plan <span aria-hidden='true'>-&gt;</span></button>
                </div>
            </div>
        </section>
    )
}

const Toolkit = ({ report, onOpenSection }) => (
    <section>
        <div className='content-header'>
            <div><p className='panel-eyebrow'>Practice mode</p><h2>Interview Toolkit</h2></div>
            <span className='content-header__count'>Ready when you are</span>
        </div>
        <div className='toolkit-grid'>
            <button type='button' className='tool-card' onClick={() => onOpenSection('technical')}>
                <span className='tool-card__icon'>&lt;/&gt;</span><strong>Technical sprint</strong>
                <span>Run through {report.technicalQuestions.length} role-specific questions and compare your answer with the model approach.</span>
                <em>Start sprint -&gt;</em>
            </button>
            <button type='button' className='tool-card' onClick={() => onOpenSection('behavioral')}>
                <span className='tool-card__icon'>STAR</span><strong>Story builder</strong>
                <span>Shape {report.behavioralQuestions.length} behavioral answers around a clear situation, action, and result.</span>
                <em>Build stories -&gt;</em>
            </button>
            <button type='button' className='tool-card' onClick={() => onOpenSection('roadmap')}>
                <span className='tool-card__icon'>7D</span><strong>Readiness runway</strong>
                <span>Use your {report.preparationPlan.length}-day roadmap to turn preparation into small, repeatable sessions.</span>
                <em>Open roadmap -&gt;</em>
            </button>
        </div>
        <div className='toolkit-callout'>
            <strong>Interview ritual</strong>
            <span>Pick one prompt, answer in two minutes, then rewrite only the weakest part. Repeat daily until the answer feels natural.</span>
        </div>
    </section>
)

// ── Main Component ────────────────────────────────────────────────────────────
const Interview = () => {
    const [ activeNav, setActiveNav ] = useState('overview')
    const { report, loading, downloadingResume, getResumePdf } = useInterview()
    const { handleLogout } = useAuth()
    const navigate = useNavigate()
    const { interviewId } = useParams()

    if (loading || !report) {
        return (
            <main className='loading-screen'>
                <h1>Loading your interview plan...</h1>
            </main>
        )
    }

    const scoreColor =
        report.matchScore >= 80 ? 'score--high' :
            report.matchScore >= 60 ? 'score--mid' : 'score--low'

    const handleSignOut = async () => {
        await handleLogout()
        navigate('/login')
    }


    return (
        <div className='interview-page'>
            <div className='interview-layout'>

                <button
                    type='button'
                    className='interview-close-btn'
                    onClick={() => navigate('/dashboard')}
                    aria-label='Close interview details'
                >
                    ×
                </button>

                {/* ── Left Nav ── */}
                <nav className='interview-nav'>
                    <div className="nav-content">
                        <p className='interview-nav__label'>Sections</p>
                        {NAV_ITEMS.map(item => (
                            <button
                                key={item.id}
                                className={`interview-nav__item ${activeNav === item.id ? 'interview-nav__item--active' : ''}`}
                                onClick={() => setActiveNav(item.id)}
                            >
                                <span className='interview-nav__icon'>{item.icon}</span>
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <button
                        disabled={downloadingResume}
                        onClick={() => { getResumePdf(interviewId) }}
                        className='button primary-button' >
                        <svg height={"0.8rem"} style={{ marginRight: "0.8rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.6144 17.7956 11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916.821765 9.19319.821767 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C.868537 9.26368.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z"></path></svg>
                        {downloadingResume ? 'Downloading Resume...' : 'Download Resume'}
                    </button>
                    <button
                        type='button'
                        className='button secondary-button'
                        onClick={handleSignOut}
                    >
                        Logout
                    </button>
                </nav>

                <div className='interview-divider' />

                {/* ── Center Content ── */}
                <main className='interview-content'>
                    {activeNav === 'overview' && <Overview report={report} scoreColor={scoreColor} onOpenSection={setActiveNav} />}

                    {activeNav === 'technical' && (
                        <section>
                            <div className='content-header'>
                                <h2>Technical Questions</h2>
                                <span className='content-header__count'>{report.technicalQuestions.length} questions</span>
                            </div>
                            <div className='q-list'>
                                {report.technicalQuestions.map((q, i) => (
                                    <QuestionCard key={i} item={q} index={i} />
                                ))}
                            </div>
                        </section>
                    )}

                    {activeNav === 'behavioral' && (
                        <section>
                            <div className='content-header'>
                                <h2>Behavioral Questions</h2>
                                <span className='content-header__count'>{report.behavioralQuestions.length} questions</span>
                            </div>
                            <div className='q-list'>
                                {report.behavioralQuestions.map((q, i) => (
                                    <QuestionCard key={i} item={q} index={i} />
                                ))}
                            </div>
                        </section>
                    )}

                    {activeNav === 'roadmap' && (
                        <section>
                            <div className='content-header'>
                                <h2>Preparation Road Map</h2>
                                <span className='content-header__count'>{report.preparationPlan.length}-day plan</span>
                            </div>
                            <div className='roadmap-list'>
                                {report.preparationPlan.map((day) => (
                                    <RoadMapDay key={day.day} day={day} />
                                ))}
                            </div>
                        </section>
                    )}

                    {activeNav === 'toolkit' && <Toolkit report={report} onOpenSection={setActiveNav} />}
                </main>

                <div className='interview-divider' />

                {/* ── Right Sidebar ── */}
                <aside className='interview-sidebar'>

                    {/* Match Score */}
                    <div className='match-score'>
                        <p className='match-score__label'>Match Score</p>
                        <div className={`match-score__ring ${scoreColor}`}>
                            <span className='match-score__value'>{report.matchScore}</span>
                            <span className='match-score__pct'>%</span>
                        </div>
                        <p className='match-score__sub'>Strong match for this role</p>
                    </div>

                    <div className='sidebar-divider' />

                    {/* Skill Gaps */}
                    <div className='skill-gaps'>
                        <p className='skill-gaps__label'>Skill Gaps</p>
                        <div className='skill-gaps__list'>
                            {report.skillGaps.map((gap, i) => (
                                <span key={i} className={`skill-tag skill-tag--${gap.severity}`}>
                                    {gap.skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </aside>
            </div>
        </div>
    )
}

export default Interview