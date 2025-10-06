import { motion } from 'framer-motion'
import { Star, GitFork, ExternalLink, Calendar } from 'lucide-react'
import type { GitHubRepo } from '../@types/github'

interface RepositoryCardProps {
  repo: GitHubRepo
}

export function RepositoryCard({ repo }: RepositoryCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      'C++': '#f34b7d',
      C: '#555555',
      HTML: '#e34c26',
      CSS: '#1572B6',
      PHP: '#4F5D95',
      Ruby: '#701516',
      Go: '#00ADD8',
      Rust: '#dea584',
      Swift: '#ffac45',
      Kotlin: '#F18E33',
      Vue: '#4FC08D',
      React: '#61DAFB'
    }
    return colors[language] || '#8b5cf6'
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 h-full flex flex-col">
        {/* Header do card */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
            {repo.name}
          </h3>
          <motion.a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-slate-400 hover:text-purple-400 transition-colors"
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>

        {/* Descrição */}
        {repo.description && (
          <p className="text-slate-300 mb-4 flex-grow line-clamp-3">
            {repo.description}
          </p>
        )}

        {/* Linguagem principal */}
        {repo.language && (
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getLanguageColor(repo.language) }}
            />
            <span className="text-sm text-slate-300">{repo.language}</span>
          </div>
        )}

        {/* Estatísticas */}
        <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star size={16} />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork size={16} />
              <span>{repo.forks_count}</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{formatDate(repo.updated_at)}</span>
          </div>
        </div>

        {/* Topics/Tags */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {repo.topics.slice(0, 3).map((topic) => (
              <span
                key={topic}
                className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
              >
                {topic}
              </span>
            ))}
            {repo.topics.length > 3 && (
              <span className="text-xs text-slate-400">
                +{repo.topics.length - 3} mais
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}