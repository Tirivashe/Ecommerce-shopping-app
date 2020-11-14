import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: "5rem",
    paddingRight: "5rem"
  },
  button: {
    bottom: "50%",
    left: "40%",
    backgroundColor: "#eee",
    borderRadius: 0,
    color: "#000",
    border: "1px black solid",
    '&:hover': {
      backgroundColor: "#eee"
    }
  }
}))