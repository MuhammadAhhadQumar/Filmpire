import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100vh'
  },
  content: {
    flexGrow: '1',
    padding: '2em'
  },
  toolbar: {
    height: '70px',
    backgroundColor: '#f5f5f5'
  }
}))

export default useStyles
