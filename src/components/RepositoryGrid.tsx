import { motion } from 'framer-motion'
import { RepositoryCard } from './RepositoryCard'
import type { GitHubRepo } from '../@types/github'

interface RepositoryGridProps {
  repos: GitHubRepo[]
}

export function RepositoryGrid({ repos }: RepositoryGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
    >
      {repos.map((repo) => (
        <RepositoryCard key={repo.id} repo={repo} />
      ))}
    </motion.div>
  )
}
