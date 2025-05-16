import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  content: {
    flexGrow: 1,
    padding: '2em'
  },
  toolbar: {
    height: '70px',
    display: 'flex'
  }
}))

export default useStyles
