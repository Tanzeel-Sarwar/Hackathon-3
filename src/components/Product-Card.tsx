'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'

interface ProductCardProps {
  id: string
  title: string
  price: number
  image: string
  isNew?: boolean
  isSale?: boolean
}

export default function ProductCard({ id, title, price, image, isNew, isSale }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation when clicking the "Add to Cart" button
    addItem({ id, title, price, image, quantity: 1 })
  }

  return (
    <Link href={`/product/${id}`} className="group relative block overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
      <div className="aspect-square w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            New
          </div>
        )}
        {isSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Sale
          </div>
        )}
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-sm font-medium text-gray-900 truncate">{title}</h3>
        <p className="mt-1 text-lg font-semibold text-gray-900">${price.toFixed(2)}</p>
      </div>
      <button 
        onClick={handleAddToCart}
        className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 hover:bg-gray-100"
        aria-label="Add to cart"
      >
        <ShoppingCart className="w-5 h-5 text-gray-600" />
      </button>
    </Link>
  )
}

