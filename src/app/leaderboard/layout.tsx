'use client'
import * as React from 'react'
import { Container, Grid } from '@mui/material'
import Appbar from '../../components/appBar'

export default function LeaderboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container fixed>
      <Appbar />
      <Container>
        <Grid container>
          <Grid xs>
            <div>asdfasfd</div>
          </Grid>
          <Grid xs={9}>{children}</Grid>
          <Grid xs>
            <div>asdfasfd</div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}
