import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience';
import Footer from './components/Footer';
import useDarkMode from './useDarkMode';

function App() {
  const [isDarkMode, toggleDarkMode] =  useDarkMode();

  return (
    <>
      <div className={isDarkMode ? "bg-gray-900 min-h-screen min-w-screen" : "bg-gray-100 min-h-screen min-w-screen"}>
        <div className="max-w-4xl mx-auto px-20">
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
            <About isDarkMode={isDarkMode}/>
            <Experience isDarkMode={isDarkMode}/>
            <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
