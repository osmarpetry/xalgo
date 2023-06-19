import {
  Toolbar,
  Typography,
  AppBar as AppBarMUI,
  Box,
  Button
} from '@mui/material'
import Link from 'next/link'
import React from 'react'

function AppBar() {
  return (
    <AppBarMUI position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {['EconomicGroup'].map((page) => (
            <Link href={page}>
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBarMUI>
  )
}

export default AppBar
