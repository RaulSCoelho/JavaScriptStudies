'use client'
import { Backdrop, CircularProgress } from '@mui/material'

export default function Loading() {
  return (
    <Backdrop className="text-skin-base" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
