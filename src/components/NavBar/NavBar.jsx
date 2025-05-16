import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar
} from '@mui/material'
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7
} from '@mui/icons-material'
import useStyles from './style'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}></Toolbar>
      </AppBar>
    </>
  )
}
export default Navbar
