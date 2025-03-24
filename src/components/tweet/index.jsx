import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { tr } from 'date-fns/locale'

export default function Tweet({ tweet }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isRetweeted, setIsRetweeted] = useState(false)

  return (
    <article className="flex gap-x-4 p-4 border-b border-gray-200 hover:bg-gray-50">
      <Link to={`/${tweet.user.username}`} className="flex-shrink-0">
        <img
          src={tweet.user.avatar}
          alt={tweet.user.name}
          className="w-12 h-12 rounded-full"
        />
      </Link>
      <div className="flex-1">
        <div className="flex items-center gap-x-2">
          <Link to={`/${tweet.user.username}`} className="font-bold hover:underline">
            {tweet.user.name}
          </Link>
          <span className="text-gray-500">@{tweet.user.username}</span>
          <span className="text-gray-500">·</span>
          <span className="text-gray-500">
            {formatDistanceToNow(new Date(tweet.createdAt), { addSuffix: true, locale: tr })}
          </span>
        </div>
        <p className="mt-1 text-gray-900">{tweet.content}</p>
        {tweet.image && (
          <img
            src={tweet.image}
            alt="Tweet content"
            className="mt-2 rounded-xl max-h-[500px] w-full object-cover"
          />
        )}
        <div className="mt-3 flex items-center gap-x-6">
          <button className="group flex items-center gap-x-2 text-gray-500 hover:text-blue-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-2.35.09-4.181.83-5.5 2.09V10zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 1.045.182 2.073.512 3H7.44h14.998c.33-.927.512-1.955.512-3 0-3.21-2.602-5.8-5.747-5.8h-4.248z" />
            </svg>
            <span className="text-sm group-hover:text-blue-500">{tweet.replies}</span>
          </button>
          <button
            onClick={() => setIsRetweeted(!isRetweeted)}
            className={`group flex items-center gap-x-2 ${isRetweeted ? 'text-green-500' : 'text-gray-500 hover:text-green-500'}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
            </svg>
            <span className="text-sm group-hover:text-green-500">{tweet.retweets}</span>
          </button>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`group flex items-center gap-x-2 ${isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.047 4.82.68 2.02 1.904 3.99 3.703 5.08l1.297 1.107c.38.325.96.325 1.34 0l1.297-1.107c1.799-1.09 3.022-3.06 3.703-5.08.68-2.04.6-3.7.048-4.82-.561-1.13-1.666-1.84-2.91-1.91zm4.187 7.69c-.815 2.415-1.97 4.19-3.143 5.18l-1.006.86-1.005-.86c-1.174-.99-2.33-2.765-3.144-5.18-.708-2.127-.622-3.81.064-4.91.686-1.1 1.702-1.78 2.792-1.84 1.09-.06 2.178.52 3.074 1.69.896-1.17 1.985-1.75 3.074-1.69 1.09.06 2.106.74 2.792 1.84.686 1.1.772 2.783.064 4.91z" />
            </svg>
            <span className="text-sm group-hover:text-red-500">{tweet.likes}</span>
          </button>
          <button className="group flex items-center gap-x-2 text-gray-500 hover:text-blue-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.5 2.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zM3 4.25a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H3.75A.75.75 0 013 4.25zM3.75 7a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H3.75zM3 10a.75.75 0 01.75-.75h9.5a.75.75 0 010 1.5h-9.5A.75.75 0 013 10zM3.75 13a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
} 