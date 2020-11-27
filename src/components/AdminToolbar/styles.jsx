import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: 'flex-end',
    backgroundColor: "black",
    width: "100%",
    padding: "5px"
  },

  link: {
    textDecoration: "none",
    color: "#eee",
    marginRight: "10px"
  }
}))
