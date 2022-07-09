import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined'
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined'
// Icon Type Support
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material/SvgIcon'
import { useNavigate } from 'react-router-dom'

const DASHBOARD_ITEM_ICON_SIZE = 48

interface DashBoardItemProps {
  title: string
  icon: OverridableComponent<SvgIconTypeMap>
  path: string
}

function DashboardItem(props: DashBoardItemProps) {
  const nav = useNavigate()
  return (
    <Grid item xs={2} className="square">
      <Paper
        variant="outlined"
        className="absolute flex flex-col items-center justify-center hover:cursor-pointer box-border"
        sx={{
          position: 'absolute',
          // Grid Item has padding=16px
          top: '16px',
          left: '16px',
          width: 'calc(100% - 16px)',
          height: 'calc(100% - 16px)'
        }}
        onClick={() => nav(props.path)}
      >
        {<props.icon sx={{ fontSize: DASHBOARD_ITEM_ICON_SIZE }} />}
        <Typography variant="body2" sx={{ mt: 2, userSelect: 'none' }}>
          {props.title}
        </Typography>
      </Paper>
    </Grid>
  )
}

function Dashboard() {
  const dashBoardItems: DashBoardItemProps[] = [
    {
      title: 'Right Click Menu',
      icon: TableViewOutlinedIcon,
      path: 'right-click-menu'
    },
    {
      title: 'TripleClick Event',
      icon: MouseOutlinedIcon,
      path: 'triple-click-event'
    }
  ]
  return (
    <Box
      className="flex justify-center px-8"
    >
      <Box className="flex-1 max-w-screen-lg">
        <Typography variant="h4">Dashboard</Typography>
        <Typography color="text.secondary">Try Tricky Functions</Typography>
        <Grid
          container
          spacing={2}
          sx={{
            mt: 2
          }}
        >
          {dashBoardItems.map((props, index) => (
            <DashboardItem {...props} key={`dashboard-item-${index}`} />
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Dashboard
