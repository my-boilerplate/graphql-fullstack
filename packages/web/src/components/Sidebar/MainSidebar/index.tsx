import React from 'react'
import { IconButton, Avatar, Drawer, Box, Tooltip } from '@material-ui/core'
import useStyles from './style'
// Icons
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone'
import ChatRoundedIcon from '@material-ui/icons/ChatRounded'
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded'
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded'
import HelpRoundedIcon from '@material-ui/icons/HelpRounded'

const MainSidebar: React.FC = () => {
  const classes = useStyles()
  // const { openDrawer } = props

  return (
    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <Box
        display="flex"
        justifyContent="center"
        pt={1}
        mr={1}
        ml={1}
        flexGrow={1}
      >
        <Box>
          <Tooltip title="Menu" placement="right">
            <IconButton
              className={classes.middleButtom} /* onClick={openDrawer} */
            >
              <MenuOpenRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box flexGrow={1} mr={1} ml={1}>
        <Box className={classes.middleDiv}>
          <Tooltip title="Apps" placement="right">
            <IconButton className={classes.middleButtom}>
              <AppsTwoToneIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={classes.middleDiv}>
          <Tooltip title="Chat" placement="right">
            <IconButton className={classes.middleButtom}>
              <ChatRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={classes.middleDiv}>
          <Tooltip title="Social Network" placement="right">
            <IconButton className={classes.middleButtom}>
              <ExploreRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={classes.middleDiv}>
          <Tooltip title="Settings" placement="right">
            <IconButton className={classes.middleButtom}>
              <SettingsRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={classes.middleDiv}>
          <Tooltip title="Support" placement="right">
            <IconButton className={classes.middleButtom}>
              <HelpRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box pb={1} mr={1} ml={1}>
        <Box className={classes.middleDiv}>
          <Tooltip title="Support" placement="right">
            <IconButton size="small">
              <Avatar className={classes.avatarButtom} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Drawer>
  )
}

export default MainSidebar
