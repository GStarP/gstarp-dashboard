import React from 'react'
import { Box } from '@mui/system'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'

function Main() {
  return (
    <Box
      sx={{
        flex: 1
      }}
    >
      <Routes>
        <Route index element={Dashboard()} />
      </Routes>
    </Box>
  )
}

export default Main
