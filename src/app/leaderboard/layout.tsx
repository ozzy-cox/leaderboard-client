'use client'
import * as React from 'react'
import { Container, Grid } from '@mui/material'
import Appbar from '../../components/appBar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function LeaderboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}
