'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Layout from "@/components/Layout"
import { ShoppingCart, Plus, Minus } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'
import { useRouter } from 'next/navigation'

interface Product {
  id: string
  title: string
  price: number
  image: string
  isNew?: boolean
  isSale?: boolean
  description: string
}

const products: Product[] = [
  {
    id: "1",
    title: "Library Stool Chair",
    price: 20,
    image: "/images/Library-Stool-Chair.png",
    isNew: true,
    description: "Comfortable and stylish library stool chair perfect for reading corners."
  },
  {
    id: "2",
    title: "Modern Desk Chair",
    price: 25,
    image: "/images/Library-Stool-Chair 1.png",
    isSale: true,
    description: "Ergonomic desk chair designed for long hours of comfortable work."
  },
  {
    id: "3",
    title: "Comfortable Armchair",
    price: 30,
    image: "/images/Library-Stool-Chair 3.png",
    description: "Plush armchair ideal for relaxing in your living room or study."
  },
  {
    id: "4",
    title: "Ergonomic Office Chair",
    price: 35,
    image: "/images/Library-Stool-Chair 4.png",
    description: "High-back office chair with lumbar support for maximum comfort."
  },
  {
    id: "5",
    title: "Stylish Dining Chair",
    price: 22,
    image: "/images/Library-Stool-Chair 5.png",
    isNew: true,
    description: "Elegant dining chair to complement your dining room decor."
  },
  {
    id: "6",
    title: "Lounge Chair",
    price: 28,
    image: "/images/Library-Stool-Chair 6.png",
    isSale: true,
    description: "Comfortable lounge chair perfect for your patio or sunroom."
  },
  {
    id: "7",
    title: "Rocking Chair",
    price: 32,
    image: "/images/Library-Stool-Chair 7.png",
    description: "Classic rocking chair for nurseries or peaceful corners."
  },
  {
    id: "8",
    title: "Bar Stool",
    price: 18,
    image: "/images/Library-Stool-Chair.png",
    description: "Modern bar stool for kitchen islands or home bars."
  }
]

type PageProps = {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: PageProps) {
  const router = useRouter()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const resolvedParams = await params
        const productId = resolvedParams.id

        const foundProduct = products.find(p => p.id === productId)
        setProduct(foundProduct || null)
      } catch (error) {
        console.error("Failed to resolve params:", error)
        setProduct(null)
      }
    }

    fetchProduct()
  }, [params])

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity
    })
    router.push('/cart')
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

  return (
    <Layout>
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden group">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            {product.isNew && (
              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                New
              </div>
            )}
            {product.isSale && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                Sale
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#272343]">{product.title}</h1>
            <div className="inline-block bg-[#007580] text-white px-4 py-2 rounded-full text-sm mb-6">
              ${product.price.toFixed(2)} USD
            </div>
            <p className="text-gray-600 mb-8">
              {product.description}
            </p>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <button onClick={decrementQuantity} className="p-2 hover:bg-gray-100">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button onClick={incrementQuantity} className="p-2 hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <Button
              onClick={handleAddToCart}
              className="w-full md:w-auto py-3 px-8 transition-all duration-300 hover:scale-105 bg-[#007580]"
            >
              <ShoppingCart className="mr-2" />
              Add To Cart
            </Button>
          </div>
        </div>

        {/* Related Products Section */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.filter(p => p.id !== product.id).slice(0, 4).map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="group"
              >
                <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-gray-900 transition-colors duration-300 group-hover:text-[#007580]">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  ${item.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}

