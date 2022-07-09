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
      className="relative -top-6 left-2"
      sx={{
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
      className="flex justify-center px-8 pb-12 box-border h-full"
    >
      <Box
        className="flex flex-col flex-1 max-w-screen-lg"
      >
        <Typography variant="h4">Right Click Menu</Typography>
        <Typography color="text.secondary">DIY Right Click Response</Typography>
        <Paper
          className="flex flex-1 justify-center items-center mt-8"
          variant="outlined"
          ref={el}
        >
          <Typography
            variant="h3"
            color="text.disabled"
            className="select-none"
          >
            Right Click Blank Area
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}

export default RightClickMenu
