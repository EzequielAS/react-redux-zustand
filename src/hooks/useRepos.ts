import { QueryClient, useQuery } from '@tanstack/react-query'

export const queryClient = new QueryClient()

interface Repository {
  id: number
  name: string
}

interface GetAllReposResponse {
  repositories: Repository[]
}

export async function getAllRepos(): Promise<GetAllReposResponse> {
  let repositories: Repository[] = []

  await fetch('https://api.github.com/users/EzequielAS/repos')
    .then((response) => response.json())
    .then((data: Repository[]) => {
      repositories = data
    })

  return {
    repositories,
  }
}

export function useRepos() {
  return useQuery(['repos'], getAllRepos, {
    staleTime: 1000 * 60 * 60, // 60 minutes
    refetchOnWindowFocus: false,
  })
}
