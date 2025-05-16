import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  content: {
    flexGrow: 1,
    padding: '2em',
    marginTop: '5em'
  },
  toolbar: {
    height: '100%',
    display: 'flex'
  }
}))

export default useStyles
