import ScrollyCanvas from './components/ScrollyCanvas'
import Projects from './components/Projects'
import Education from './components/Education'

function App() {
  return (
    <main className="bg-black min-h-screen font-sans selection:bg-white/30 text-white">
      <ScrollyCanvas />
      <Projects />
      <Education />
    </main>
  )
}

export default App
