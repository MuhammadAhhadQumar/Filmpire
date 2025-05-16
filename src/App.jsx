import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import useStyles from './components/style.js'
import {
  Actors,
  MoviesInformation,
  Movies,
  Profile,
  NavBar
} from './components/index.js'
const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
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
