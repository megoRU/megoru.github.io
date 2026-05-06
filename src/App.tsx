import { Header } from './components/Header';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300">
      <Header />
      <main>
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
