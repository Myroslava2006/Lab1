'use client'
import { useFavorites } from '@/contexts/FavoritesContext'

export default function FavoriteButton({ bookId }) {
  const { toggleFavorite, isFavorite } = useFavorites()
  const liked = isFavorite(bookId)
  return <button onClick={() => toggleFavorite(bookId)} className="fav" title={liked ? 'Видалити з обраного' : 'Додати до обраного'}>{liked ? '❤️' : '🤍'}</button>
}
