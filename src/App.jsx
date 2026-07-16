import { useEffect, useRef, useState } from 'react'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Pipeline', href: '#pipeline' },
]

const skills = [
  {
    title: 'System Data Precision and Input Integrity',
    value: 95,
    detail:
      'Data operations that enforce accuracy, validation, and repeatable workflows for mission-critical systems.',
  },
  {
    title: 'WordPress Administration & CMS Platform Operations',
    value: 90,
    detail:
      'Reliable content delivery, structured page management, and secure publishing controls for digital assets.',
  },
  {
    title: 'Git & GitHub Version Control',
    value: 40,
    detail:
      'Foundational source control workflow with push, pull, branch awareness, and command-based collaboration.',
  },
  {
    title: 'DevOps Core Concepts & Linux CLI Fundamentals',
    value: 20,
    detail:
      'Early-stage cloud infrastructure learning with shell proficiency, environment setup, and deployment mindset.',
  },
]

const terminalCommands = {
  help: [
    'help   — display available commands',
    'bio    — learn the transition story',
    'skills — show the current professional profile',
    'clear  — reset the terminal window',
  ],
  bio: [
    'Muhammad Khan is a content management and data operations specialist actively learning DevOps.',
    'He maintains live operational accuracy while building Linux CLI fluency and automation mindset.',
    'This portfolio demonstrates a practical DevOps journey alongside current operational responsibilities.',
  ],
  skills: skills.map((skill) => `${skill.title} — ${skill.value}%`),
}

const initialTerminal = [
  'Welcome to the professional portfolio terminal.',
  'Type help to review supported commands.',
  '>',
]

function App() {
  const [imageSource, setImageSource] = useState('/profile.jpeg')
  const [imageFailed, setImageFailed] = useState(false)
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalLines, setTerminalLines] = useState(initialTerminal)
  const [pipelinePhase, setPipelinePhase] = useState('idle')
  const [pipelineProgress, setPipelineProgress] = useState(0)
  const [activeStage, setActiveStage] = useState(0)
  const terminalInputRef = useRef(null)

  useEffect(() => {
    terminalInputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (pipelinePhase !== 'building') {
      return undefined
    }

    setPipelineProgress(0)
    setActiveStage(0)

    const timers = [
      setTimeout(() => {
        setPipelineProgress(28)
        setActiveStage(1)
      }, 450),
      setTimeout(() => setPipelineProgress(58), 1000),
      setTimeout(() => {
        setPipelineProgress(84)
        setActiveStage(2)
      }, 1700),
      setTimeout(() => {
        setPipelineProgress(100)
        setActiveStage(3)
      }, 2300),
      setTimeout(() => setPipelinePhase('successful'), 2800),
    ]

    return () => timers.forEach(clearTimeout)
  }, [pipelinePhase])

  const handleImageError = () => {
    if (imageSource.endsWith('profile.jpeg')) {
      console.log("Image Error")
      return
    }
    setImageFailed(true)
  }

  const updateTerminal = (newLines) => {
    setTerminalLines((existing) => [...existing, ...newLines])
  }

  const handleCommand = (event) => {
    event.preventDefault()
    const command = terminalInput.trim().toLowerCase()
    setTerminalInput('')

    if (!command) {
      updateTerminal([''])
      return
    }

    if (command === 'clear') {
      setTerminalLines(initialTerminal)
      return
    }

    const commandResponse = terminalCommands[command]
    if (commandResponse) {
      updateTerminal([`> ${command}`, ...commandResponse, ''])
    } else {
      updateTerminal([
        `> ${command}`,
        `command not found: ${command}`,
        'type help for available commands',
        '',
      ])
    }
  }

  const startPipeline = () => {
    if (pipelinePhase === 'building') {
      return
    }

    setPipelinePhase('building')
    setPipelineProgress(0)
    setActiveStage(0)
  }

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(62,232,184,0.12),_transparent_28%),radial-gradient(circle_at_20%_20%,_rgba(99,91,255,0.12),_transparent_20%)] blur-3xl" />
      <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-950/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-sm font-medium sm:px-8">
          <div>
            <p className="text-lg font-semibold tracking-wide text-emerald-300">Muhammad Mohtashim Khan</p>
            <p className="text-slate-400">Data Operator & Content Management Specialist</p>
          </div>
          <div className="flex items-center gap-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-slate-300 transition hover:bg-slate-800/80 hover:text-emerald-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/MOHTASHIM473"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-emerald-400/30 px-4 py-2 text-emerald-200 transition hover:bg-emerald-400/10"
            >
              GitHub
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8">
        <section id="about" className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              DevOps learning and operational precision.
            </div>
            <div className="space-y-5 rounded-[32px] border border-slate-700/60 bg-[#111a2e]/95 p-8 shadow-neon">
              <div className="max-w-3xl space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Overview</p>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Professional systems precision, operational reliability, and a path into DevOps.
                </h1>
                <p className="max-w-2xl text-slate-300 leading-8">
                  I combine live content management and data operations with practical DevOps learning. This portfolio shows a focused journey from operational responsibility into infrastructure automation.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-700/80 bg-slate-950/80 p-5">
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Current role</p>
                    <p className="mt-3 text-lg font-semibold text-white">Content Management & Data Operations</p>
                  </div>
                  <div className="rounded-3xl border border-slate-700/80 bg-slate-950/80 p-5">
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Learning focus</p>
                    <p className="mt-3 text-lg font-semibold text-white">DevOps fundamentals, pipelines, and automation workflows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="relative overflow-hidden rounded-[40px] border border-slate-700/60 bg-[#111a2e]/95 p-6 shadow-neon">
              <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(62,232,184,0.18),_transparent_42%)]" />
              <div className="relative z-10 flex flex-col items-center gap-5">
                <div className="relative flex h-60 w-60 items-center justify-center rounded-full bg-slate-950/95 shadow-[0_0_50px_rgba(62,232,184,0.14)]">
                  <div className="absolute inset-0 animate-pulseRing rounded-full border border-emerald-400/20" />
                  <div className="absolute inset-6 rounded-full bg-slate-950/80 blur-xl" />
                  {imageFailed ? (
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-5xl font-semibold uppercase tracking-[0.32em] text-emerald-300">
                      MMK
                    </div>
                  ) : (
                    <img
                      src={imageSource}
                      onError={handleImageError}
                      alt="Muhammad Mohtashim Khan profile"
                      className="relative h-full w-full rounded-full object-cover shadow-[0_0_40px_rgba(62,232,184,0.16)]"
                    />
                  )}
                </div>
                <div className="space-y-2 text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">Primary profile</p>
                  <h2 className="text-2xl font-semibold text-white">Muhammad Mohtashim Khan</h2>
                  <p className="text-sm leading-6 text-slate-300">
                    Current content management and data operations specialist building practical DevOps skills alongside live operational responsibilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-700/60 bg-[#111a2e]/95 p-6 shadow-neon">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="text-slate-400">Email</p>
                  <a
                    href="mailto:khanmohtashim473@gmail.com"
                    className="text-emerald-300 transition hover:text-emerald-100"
                  >
                    khanmohtashim473@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-slate-400">GitHub</p>
                  <a
                    href="https://github.com/MOHTASHIM473"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-300 transition hover:text-emerald-100"
                  >
                    github.com/MOHTASHIM473
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="skills" className="mt-16 space-y-6">
          <div className="rounded-[36px] border border-slate-700/70 bg-[#111a2e]/90 p-8 shadow-neon">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Skills profile</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">A realistic profile of current operations and DevOps learning.</h2>
              </div>
              <p className="max-w-2xl text-slate-300 sm:text-right">
                These metrics reflect a strong foundation in system precision and CMS control, plus a fast-growing readiness for command line and automation practices.
              </p>
            </div>

            <div className="mt-10 grid gap-6">
              {skills.map((skill) => (
                <div key={skill.title} className="space-y-4 rounded-3xl border border-slate-700/70 bg-slate-950/90 p-6">
                  <div className="flex items-center justify-between gap-4 text-sm font-medium text-slate-200">
                    <span>{skill.title}</span>
                    <span className="text-emerald-300">{skill.value}%</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-400">{skill.detail}</p>
                  <div className="h-4 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-500 shadow-[0_0_22px_rgba(62,232,184,0.25)]"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="terminal" className="mt-16 grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[36px] border border-slate-700/70 bg-[#111a2e]/95 p-8 shadow-neon">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Interactive shell</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Simulated Bash terminal</h2>
              </div>
              <div className="rounded-full border border-emerald-500/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                commands: help · bio · skills · clear
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-700/80 bg-[#08101f] p-5 text-sm text-slate-200 shadow-[inset_0_0_40px_rgba(0,0,0,0.25)]">
              <div className="mb-4 flex items-center gap-3 text-slate-400">
                <span className="h-2.5 w-2.5 rounded-full bg-[#fb5f5f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f5b23f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3edc97]" />
              </div>
              <div className="min-h-[260px] space-y-2 overflow-y-auto rounded-3xl border border-slate-800/70 bg-slate-950/80 px-4 py-5 font-mono text-[0.95rem] leading-6 text-slate-200">
                {terminalLines.map((line, index) => (
                  <div key={`${line}-${index}`} className="whitespace-pre-wrap">
                    {line}
                  </div>
                ))}
              </div>
              <form onSubmit={handleCommand} className="mt-5 flex gap-3 rounded-3xl border border-slate-700/80 bg-slate-950/90 p-4">
                <span className="text-emerald-300">guest@portfolio:$</span>
                <input
                  ref={terminalInputRef}
                  value={terminalInput}
                  onChange={(event) => setTerminalInput(event.target.value)}
                  placeholder="Enter command"
                  className="flex-1 bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
                  aria-label="Terminal command input"
                />
                <button
                  type="submit"
                  className="rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/25 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[36px] border border-slate-700/70 bg-[#111a2e]/95 p-8 shadow-neon">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">DevOps foundation</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Why this terminal matters</h2>
              <p className="mt-4 text-slate-300 leading-7">
                This simulated shell highlights practical command familiarity and reproducible workflow thinking for DevOps. It supports a focused learning path from current operational work into infrastructure automation.
              </p>
            </div>
            <div className="rounded-[36px] border border-slate-700/70 bg-[#111a2e]/95 p-8 shadow-neon">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Professional transition</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">From operational discipline to DevOps practice.</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>Live content workflows anchor reliable automation habits in DevOps learning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  <span>Current operational responsibilities align with deployment controls and audit-ready systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <span>The next step is converting operational consistency into cloud-native pipeline skills.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="pipeline" className="mt-16 rounded-[36px] border border-slate-700/70 bg-[#111a2e]/95 p-8 shadow-neon">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">CI/CD simulator</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Visual deployment pipeline</h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
                Status: {pipelinePhase === 'idle' ? 'Idle' : pipelinePhase === 'building' ? 'Building' : 'Successful'}
              </span>
              <button
                type="button"
                onClick={startPipeline}
                disabled={pipelinePhase === 'building'}
                className="rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {pipelinePhase === 'building' ? 'Running pipeline...' : pipelinePhase === 'successful' ? 'Run again' : 'Run pipeline'}
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                title: 'Git commit',
                description: 'Capture changes, keep history intact, and prepare the repository for automation.',
                active: activeStage >= 1,
                icon: '',
              },
              {
                title: 'Build process',
                description: 'Translate code into a deterministic artifact with validation and status checks.',
                active: activeStage >= 2,
                icon: '⚙️',
              },
              {
                title: 'Live deploy',
                description: 'Deliver the result to production-like infrastructure with a successful release state.',
                active: activeStage >= 3,
                icon: '🚀',
              },
            ].map((step) => (
              <div
                key={step.title}
                className={`rounded-[32px] border p-6 transition ${
                  step.active
                    ? 'border-emerald-400/40 bg-emerald-400/10 shadow-[0_0_40px_rgba(62,232,184,0.12)]'
                    : 'border-slate-700/70 bg-slate-950/90'
                }`}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-xl text-emerald-300 shadow-[0_0_24px_rgba(62,232,184,0.14)]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-700/80 bg-slate-950/90 p-6">
            <div className="mb-4 flex items-center justify-between gap-4 text-sm uppercase tracking-[0.32em] text-slate-400">
              <span>Execution progress</span>
              <span>{pipelineProgress}%</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-500 transition-all duration-700"
                style={{ width: `${pipelineProgress}%` }}
              />
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[36px] border border-slate-700/70 bg-[#111a2e]/95 p-8 shadow-neon">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Mentorship</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Academic mentorship and training credit</h2>
            <p className="mt-4 text-slate-300 leading-7">
              Special recognition to instructor Farzeen Ali and training institute The Techzeen for supporting my DevOps learning journey and foundation in infrastructure automation.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-700/70 bg-slate-950/90 p-6">
                <p className="uppercase tracking-[0.32em] text-slate-400">Instructor</p>
                <p className="mt-3 text-xl font-semibold text-white">Farzeen Ali</p>
                <p className="mt-2 text-slate-400">Mentorship focused on DevOps principles, automation workflows, and delivery excellence.</p>
              </div>
              <div className="rounded-3xl border border-slate-700/70 bg-slate-950/90 p-6">
                <p className="uppercase tracking-[0.32em] text-slate-400">Institute</p>
                <p className="mt-3 text-xl font-semibold text-white">The Techzeen</p>
                <p className="mt-2 text-slate-400">A practical training environment for cloud infrastructure, DevOps tools, and professional growth.</p>
              </div>
            </div>
          </div>

        </section>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950/90 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Muhammad Mohtashim Khan.</p>
          <p>
            Email: <a href="mailto:khanmohtashim473@gmail.com" className="text-emerald-300 hover:text-emerald-200">khanmohtashim473@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
