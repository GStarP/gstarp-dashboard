import React from 'react'
import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded'
import GitHubIcon from '@mui/icons-material/GitHub'
import Main from './pages/Main/Main'
import { useNavigate } from 'react-router-dom'
import { toURL } from './utils/common'

function App() {
  const nav = useNavigate()
  return (
    <Box
      id="app"
      sx={{
        height: '100vh',
        display: 'flex'
      }}
    >
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            sx={{
              mr: 2
            }}
            onClick={() => {
              nav('/')
            }}
          >
            <WidgetsRoundedIcon
              sx={{
                fontSize: 28
              }}
            />
          </IconButton>
          <Typography variant="h5" component="div">
            Dashboard
          </Typography>

          <IconButton
            color="inherit"
            sx={{
              ml: 'auto'
            }}
            onClick={() => {
              toURL('https://github.com/GStarP/gstarp-dashboard')
            }}
          >
            <GitHubIcon
              sx={{
                fontSize: 28
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          // 1 => 8px
          pt: 8
        }}
      >
        <Main />
      </Box>
    </Box>
  )
}

export default App
