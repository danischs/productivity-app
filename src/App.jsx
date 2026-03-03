import Header from "./Header"
import Footer from "./Footer"
import PomodoroTimer from "./pomodoroTimer"
import './App.css';

function App() {
  return(
    <>
      <div className="main-content">
        <Header />
        <PomodoroTimer />
      </div>
      <Footer />   
    </>
  )
}

export default App
