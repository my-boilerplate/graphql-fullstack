import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  drawer: {
    display: 'flex',
    flexDirection: 'column'
  },
  drawerPaper: {
    flexShrink: 0
  },
  middleButtom: {
    borderRadius: theme.spacing(2)
  },
  middleDiv: {
    justifyContent: 'center',
    display: 'flex',
    marginButtom: theme.spacing(2)
  },
  avatarButtom: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  }
}))
