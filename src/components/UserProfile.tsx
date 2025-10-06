import { motion } from 'framer-motion'
import { MapPin, Link as LinkIcon, Users, BookOpen } from 'lucide-react'
import type { GitHubUser } from "../@types/github";

interface UserProfileProps {
  user: GitHubUser
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='text-center py-16'
    >
      {/* Avatar com efeito de glow */}
      <div className="relative inline-block mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
        <img
          src={user.avatar_url}
          alt={user.name || user.login}
          className="relative w-32 h-32 rounded-full border-4 border-white/20 shadow-2xl"
        />
      </div>

      {/* Nome e bio */}
      <h1 className="text-5xl font-bold text-white mb-4">
        {user.name || user.login}
      </h1>

      {user.bio && (
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {user.bio}
        </p>
      )}

      {/* Informações adicionais */}
      <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-slate-300">
        {user.location && (
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{user.location}</span>
          </div>
        )}

        {user.blog && (
          <a
            href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors"
          >
            <LinkIcon size={18} />
            <span>Website</span>
          </a>
        )}

        <div className="flex items-center gap-2">
          <Users size={18} />
          <span>{user.followers} seguidores</span>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
        >
          <BookOpen className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <div className="text-2xl font-bold text-white">{user.public_repos}</div>
          <div className="text-slate-300">Repositórios</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
        >
          <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
          <div className="text-2xl font-bold text-white">{user.followers}</div>
          <div className="text-slate-300">Seguidores</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
        >
          <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
          <div className="text-2xl font-bold text-white">{user.following}</div>
          <div className="text-slate-300">Seguindo</div>
        </motion.div>
      </div>

      {/* Link para o perfil */}
      <motion.a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Ver Perfil no GitHub
        <LinkIcon size={18} />
      </motion.a>
    </motion.div>
  )
}