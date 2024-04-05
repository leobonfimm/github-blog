import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface GithubUser {
  login: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

interface GithubIssueItem {
  id: number
  html_url: string
  title: string
  url: string
  created_at: Date
  user: GithubUser
  comments: number
  body: string
}

interface GithubIssues {
  total_count: number
  items: GithubIssueItem[]
}

interface GithubContextType {
  user: GithubUser
  issues: GithubIssues
}

export const GithubContext = createContext({} as GithubContextType)

interface GithubProviderProps {
  children: ReactNode
}

export const USERNAME = 'rocketseat-education'
export const TEXT = 'Boas práticas'
export const REPO = 'reactjs-github-blog-challenge'

export function GithubProvider({ children }: GithubProviderProps) {
  const [user, setUser] = useState({} as GithubUser)
  const [issues, setIssues] = useState({} as GithubIssues)

  useEffect(() => {
    api.get('/users/diego3g').then((response) => setUser(response.data))
    api
      .get('/search/issues', {
        params: {
          q: `${TEXT}%20repo:${USERNAME}/${REPO}`,
        },
      })
      .then((response) => setIssues(response.data))
  }, [])

  return (
    <GithubContext.Provider value={{ user, issues }}>
      {children}
    </GithubContext.Provider>
  )
}
