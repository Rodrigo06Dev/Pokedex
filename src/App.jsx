import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexById from './pages/PokedexById'
import ProtectedRoutes from './pages/ProtectedRoutes'
import useLocalStorage from 'use-local-storage'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const switchTheme = () => {
    const newTheme = theme === 'ligth' ? 'dark' : 'ligth';
    setTheme(newTheme)
  }
  
  return (
    <div className="App" data-theme={theme}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/> }>
        <Route 
          path='/pokedex' 
          element={
            <Pokedex
            switchTheme = {switchTheme}
            theme = {theme}
            setTheme = {setTheme}
            />
          }
        />
        <Route 
          path='pokedex/:id' 
          element={
            <PokedexById
              switchTheme = {switchTheme}
              theme = {theme}
              setTheme = {setTheme}
            />
          }
        />
        </Route>
      </Routes>
    </div>
  )
}

export default App
