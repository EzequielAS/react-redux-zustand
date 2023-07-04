import { QueryClientProvider } from '@tanstack/react-query'
import { Player } from './pages/Player'
import { queryClient } from './hooks/useRepos'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Player />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
