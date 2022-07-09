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
      className="flex justify-center px-8 pb-12 box-border h-full"
    >
      <Box
       className="flex flex-col flex-1 max-w-screen-lg"
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
          className="flex flex-1 mt-8 justify-center items-center hover:cursor-pointer"
          onClick={multipleClickHandler}
        >
          <Typography
            variant="h3"
            color="text.disabled"
            className="select-none"
          >
            {text}
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}

export default TripleClickEvent
