import React, { useMemo, useState } from 'react'
import { Box } from '@mui/system'
import { Paper, TextField, Typography } from '@mui/material'
import { useMultipleClick } from './triple-click-event'

function TripleClickEvent() {
  // TODO duplicate logic
  // Continuous Time (ms)
  const [ctnTimeStr, setCtnTimeStr] = useState('500')
  const ctnTime = useMemo(() => {
    const n = parseInt(ctnTimeStr)
    return isNaN(n) ? 500 : n
  }, [ctnTimeStr])
  // Click Time
  const [clickTimeStr, setClickTimeStr] = useState('3')
  const clickTime = useMemo(() => {
    const n = parseInt(clickTimeStr)
    return isNaN(n) ? 3 : n
  }, [clickTimeStr])

  const [text, setText] = useState('Click Here To See')

  const multipleClickHandler = useMemo(
    () =>
      useMultipleClick(ctnTime, clickTime, (time: number) => {
        setText(`${clickTime} clicks in ${time | 0} ms`)
      }),
    [ctnTime, clickTime]
  )

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
        <Typography variant="h4">TripleClick Event</Typography>
        <Typography color="text.secondary">Listen Continuous Click</Typography>
        <Box sx={{ mt: 4, '>div:not(:last-child)': { mr: 2 } }}>
          <TextField
            label="Continuous Time (ms)"
            variant="outlined"
            value={ctnTimeStr}
            onChange={(e) => {
              setCtnTimeStr(e.target.value)
            }}
          />
          <TextField
            label="Click Time"
            variant="outlined"
            value={clickTimeStr}
            onChange={(e) => {
              setClickTimeStr(e.target.value)
            }}
          />
        </Box>
        <Paper
          variant="outlined"
          sx={{
            display: 'flex',
            flex: 1,
            mt: 4,
            justifyContent: 'center',
            alignItems: 'center',
            ':hover': {
              cursor: 'pointer'
            }
          }}
          onClick={multipleClickHandler}
        >
          <Typography
            variant="h3"
            color="text.disabled"
            sx={{ userSelect: 'none' }}
          >
            {text}
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}

export default TripleClickEvent
