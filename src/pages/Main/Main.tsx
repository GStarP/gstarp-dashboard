import React from 'react'
import { Box } from '@mui/system'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import TripleClickEvent from './TripleClickEvent/TripleClickEvent'
import RightClickMenu from './RightClickMenu/RightClickMenu'

function Main() {
  return (
    <Box
      sx={{
        flex: 1,
        pt: 4,
        bgcolor: '#F9FAFD'
      }}
    >
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="triple-click-event" element={<TripleClickEvent />} />
        <Route path="right-click-menu" element={<RightClickMenu />} />
      </Routes>
    </Box>
  )
}

export default Main
