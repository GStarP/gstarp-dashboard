import React, { useRef } from 'react'
import { Box } from '@mui/system'
import { IconButton, Paper, Typography } from '@mui/material'
import { useRightClickMenu } from './right-click-menu'
import { useEffect } from 'react'
import { Cached, Check, Close } from '@mui/icons-material'

// TODO can pass more control of menu
function AnimationMenu(hide: () => void) {
  const menuItem = [Check, Close, Cached]
  return (
    <Box
      sx={{
        position: 'relative',
        top: -24,
        left: 8,
        '>button:not(:last-child)': {
          mr: 1
        }
      }}
    >
      {menuItem.map((Item, i) => (
        <IconButton
          sx={{ bgcolor: 'rgba(0, 0, 0, 0.04)' }}
          key={`right-click-menu-item-${i}`}
          onClick={() => {
            hide()
          }}
        >
          {<Item />}
        </IconButton>
      ))}
    </Box>
  )
}

function RightClickMenu() {
  const el = useRef<HTMLDivElement>(null)
  let clear = () => {
    /* empty func */
  }
  // will execute once after mounted
  useEffect(() => {
    clear = useRightClickMenu(el.current, AnimationMenu)
    // will execute once before unmount
    return () => {
      clear()
    }
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        px: 4,
        pb: 6,
        boxSizing: 'border-box',
        height: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          maxWidth: '1024px'
        }}
      >
        <Typography variant="h4">Right Click Menu</Typography>
        <Typography color="text.secondary">DIY Right Click Response</Typography>
        <Paper
          variant="outlined"
          sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            mt: 4
          }}
          ref={el}
        >
          <Typography
            variant="h3"
            color="text.disabled"
            sx={{ userSelect: 'none' }}
          >
            Right Click Blank Area
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}

export default RightClickMenu
