import './App.css'
import useDarkMode from "./Hooks/useDarkMode";



function App() {

    const [toggleTheme] = useDarkMode();

  return (
    <div className="App">
        <button children={"change theme"} onClick={toggleTheme}/>
      <p>
        Hello!
      </p>
    </div>
  )
}

export default App
