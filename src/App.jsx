import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import {
  Actors,
  MoviesInformation,
  Movies,
  Profile,
  NavBar
} from './components/index.js'
const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}
export default App
