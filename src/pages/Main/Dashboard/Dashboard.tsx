import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined'
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
        sx={{
          position: 'absolute',
          // Grid Item has padding=16px
          top: '16px',
          left: '16px',
          width: 'calc(100% - 16px)',
          height: 'calc(100% - 16px)',
          boxSizing: 'border-box',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',

          ':hover': {
            cursor: 'pointer'
          }
        }}
        onClick={() => nav(props.path)}
      >
        {<props.icon sx={{ fontSize: DASHBOARD_ITEM_ICON_SIZE }} />}
        <Typography variant="body2" sx={{ mt: 1, userSelect: 'none' }}>
          {props.title}
        </Typography>
      </Paper>
    </Grid>
  )
}

function Dashboard() {
  const dashBoardItems: DashBoardItemProps[] = [
    {
      title: 'RightClickMenu',
      icon: TableViewOutlinedIcon,
      path: 'right-click-menu'
    }
  ]
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mx: 4
      }}
    >
      <Box sx={{ flex: 1, maxWidth: '1024px' }}>
        <Typography variant="h4">Dashboard</Typography>
        <Typography color="text.secondary">Try Tricky Functions</Typography>
        <Grid
          container
          spacing={2}
          sx={{
            mt: 2
          }}
        >
          {dashBoardItems.map((props) => DashboardItem(props))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Dashboard
