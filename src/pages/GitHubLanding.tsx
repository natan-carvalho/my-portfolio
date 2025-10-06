import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { GitHubRepo, GitHubUser } from '../@types/github'
import toast from 'react-hot-toast'
import { UserProfile } from '../components/UserProfile'
import { RepositoryGrid } from '../components/RepositoryGrid'
import { LoadingSpinner } from '../components/LoadingSpinner'

export function GitHubLanding() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGitHubData()
  }, [])

  const fetchGitHubData = async () => {
    try {
      setLoading(true)

      // Buscar dados do usuário
      const userResponse = await fetch('https://api.github.com/users/natan-carvalho')
      if (!userResponse.ok) throw new Error('Erro ao buscar dados do usuário')
      const userData = await userResponse.json()

      // Buscar repositórios
      const reposResponse = await fetch('https://api.github.com/users/natan-carvalho/repos?sort=updated&per_page=50')
      if (!reposResponse.ok) throw new Error('Erro ao buscar repositórios')
      const reposData = await reposResponse.json()

      setUser(userData)
      setRepos(reposData.filter((repo: GitHubRepo) => !repo.fork))

    } catch (error) {
      console.error('Erro ao buscar dados:', error)
      toast.error('Erro ao carregar dados do GitHub')
    } finally {
      setLoading(false)
    }

    if (loading) {
      return <LoadingSpinner />
    }
  }
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-8"
        >
          {/* Header com perfil do usuário */}
          {user && <UserProfile user={user} />}

          {/* Grid de repositórios */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Meus Projetos
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Explore uma seleção dos meus repositórios mais recentes e interessantes
              </p>
            </div>

            <RepositoryGrid repos={repos} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}