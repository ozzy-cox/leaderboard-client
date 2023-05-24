'use client'
import * as React from 'react'
import { Container, Grid } from '@mui/material'
import Appbar from '../../components/appBar'

export default function LeaderboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container fixed>
      <Appbar />
      <Container>
        <Grid container spacing={3}>
          <Grid xs={6}>
            <div>1</div>
          </Grid>
          <Grid xs>
            <div>asdfasfd</div>
          </Grid>
          <Grid xs={6}>
            <div>asdfasfd</div>
          </Grid>
          <Grid xs>
            <div>asdfasfd</div>
          </Grid>
        </Grid>
      </Container>
      {children}
    </Container>
  )
}
