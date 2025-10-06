export interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name: string | null
  bio: string | null
  location: string | null
  blog: string | null
  public_repos: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  created_at: string
  updated_at: string
  fork: boolean
  archived: boolean
  private: boolean
}