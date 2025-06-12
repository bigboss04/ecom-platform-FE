import * as React from 'react'

<<<<<<< feature/sign-in-sign-up
// next
=======
// next 
>>>>>>> main
import { NextPage } from 'next'

// MUI
import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
<<<<<<< feature/sign-in-sign-up

// import Badge from '@mui/material/Badge'

// component
import IconifyIcon from 'src/components/Icon'
import UserDropdown from 'src/components/user-dropdown'
=======
import Badge from '@mui/material/Badge'


// component 
import IconifyIcon from 'src/components/Icon'
>>>>>>> main

//Layout

// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

const drawerWidth: number = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}
type TProps = {
  open: boolean
  toggleDrawer: () => void
<<<<<<< feature/sign-in-sign-up
  isHideMenu?: false
=======
>>>>>>> main
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,

<<<<<<< feature/sign-in-sign-up
  backgroundColor:
    theme.palette.mode == 'light' ? theme.palette.customColors.lightPaperBg : theme.palette.customColors.darkPaperBg,
  color: theme.palette.primary.main,
=======
  // backgroundColor: theme.palette.customColors.main,
  // color: theme.palette.primary.main,
>>>>>>> main
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

<<<<<<< feature/sign-in-sign-up
const HorizontalLayout: NextPage<TProps> = ({ open, toggleDrawer, isHideMenu }) => {
=======
const HorizontalLayout: NextPage<TProps> = ({ open, toggleDrawer }) => {
>>>>>>> main
  return (
    <AppBar position='absolute' open={open}>
      <Toolbar
        sx={{
<<<<<<< feature/sign-in-sign-up
          pr: '30px',
          margin: '0 20px' // keep right padding when drawer closed
        }}
      >
        {!isHideMenu && (
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              padding: '10px',
              ...(open && { display: 'none' })
            }}
          >
            <IconifyIcon icon='material-symbols:menu-rounded' />
          </IconButton>
        )}
        <Typography component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <UserDropdown />
        {/* <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <IconifyIcon icon='mingcute:notification-line' />
          </Badge>
        </IconButton> */}
=======
          pr: '24px' // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' })
          }}
        >
          <IconifyIcon icon='material-symbols:menu-rounded' />
        </IconButton>
        <Typography component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <IconifyIcon icon='mingcute:notification-line' />
          </Badge>
        </IconButton>
>>>>>>> main
      </Toolbar>
    </AppBar>
  )
}
export default HorizontalLayout
