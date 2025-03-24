import { Link } from 'react-router-dom'

export default function Avatar({ user, size = 'md' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }

  const avatar = (
    <img
      src={user.avatar}
      alt={user.name}
      className={`${sizeClasses[size]} rounded-full object-cover`}
    />
  )

  if (user.username) {
    return (
      <Link to={`/${user.username}`} className="block">
        {avatar}
      </Link>
    )
  }

  return avatar
} 