import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import ProductCard from '@/components/Product-Card'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: "1",
    title: "Library Stool Chair",
    price: 20,
    image: "/images/Library-Stool-Chair.png",
    isNew: true
  },
  {
    id: "2",
    title: "Modern Desk Chair",
    price: 25,
    image: "/images/Library-Stool-Chair 1.png",
    isSale: true
  },
  {
    id: "3",
    title: "Comfortable Armchair",
    price: 30,
    image: "/images/Library-Stool-Chair 3.png"
  },
  {
    id: "4",
    title: "Ergonomic Office Chair",
    price: 35,
    image: "/images/Library-Stool-Chair 4.png"
  },
  {
    id: "5",
    title: "Stylish Dining Chair",
    price: 22,
    image: "/images/Library-Stool-Chair 5.png",
    isNew: true
  },
  {
    id: "6",
    title: "Lounge Chair",
    price: 28,
    image: "/images/Library-Stool-Chair 6.png",
    isSale: true
  },
  {
    id: "7",
    title: "Rocking Chair",
    price: 32,
    image: "/images/Library-Stool-Chair 7.png"
  },
  {
    id: "8",
    title: "Bar Stool",
    price: 18,
    image: "/images/Library-Stool-Chair.png"
  }
]

const categories = [
  {
    title: "Wing Chair",
    productCount: "2,584 Products",
    image: "/images/Wing Chair.png"
  },
  {
    title: "Wooden Chair",
    productCount: "157 Products",
    image: "/images/Wooden Chair.png"
  },
  {
    title: "Desk Chair",
    productCount: "134 Products",
    image: "/images/Desk Chair.png"
  }
]

const brands = [
  { name: "Zapier", logo: "/images/Logo.png" },
  { name: "Pipedrive", logo: "/images/Logo-1.png" },
  { name: "CIB Bank", logo: "/images/Logo-2.png" },
  { name: "Company", logo: "/images/Logo-3.png" },
  { name: "Burnt Toast", logo: "/images/Logo-4.png" },
  { name: "PandaDoc", logo: "/images/Logo-5.png" },
  { name: "Moz", logo: "/images/Logo-6.png" }
]

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#F3F3F3]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[750px]">
            <div className="md:ml-16 lg:ml-16 max-w-xl mt-10 lg:-mt-10">
              <span className="font-inter text-sm tracking-wider text-gray-600 mb-4 block">
                WELCOME TO CHAIRY
              </span>
              <h1 className="leading-normal text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2B3A] mb-8">
                Best Furniture Collection For Your Interior.
              </h1>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#007580] text-white px-6 py-3 rounded-md hover:bg-[#1d5e64] transition-colors group"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/images/Hero-Product.png"
                alt="Featured Chair"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands / Company Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-16">
            {brands.map((brand, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="pt-16 pb-18">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Top Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-default"
              >
                <div className="aspect-[3/3]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                  <div className="absolute bottom-6 left-6 ">
                    <h3 className="text-white text-xl font-semibold mb-1">{category.title}</h3>
                    <p className="text-white/80 text-sm">{category.productCount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CategoryPanel */}
      <section className="container mx-auto px-4 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-gray-50 overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-white z-10 flex items-center justify-center">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-gray-600 whitespace-nowrap transform -rotate-90">
                Explore New and Popular Styles
              </h2>
            </div>
            <Image
              src="/images/item-category 1.png"
              alt="Orange modern armchair"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 object-left"
              width={600}
              height={500}
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[140px] sm:h-[190px] lg:h-[240px] bg-gray-50 overflow-hidden group">
              <Image
                src="/images/card.png"
                alt="White upholstered chair"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 object-right"
                width={280}
                height={240}
              />
            </div>
            <div className="relative h-[140px] sm:h-[190px] lg:h-[240px] bg-gray-50 overflow-hidden group">
              <Image
                src="/images/card 1.png"
                alt="White wooden chair view 1"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 object-right"
                width={280}
                height={240}
              />
            </div>
            <div className="relative h-[140px] sm:h-[190px] lg:h-[240px] bg-gray-50 overflow-hidden group">
              <Image
                src="/images/card 2.png"
                alt="Gray upholstered dining chair"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 object-right"
                width={280}
                height={240}
              />
            </div>
            <div className="relative h-[140px] sm:h-[190px] lg:h-[240px] bg-gray-50 overflow-hidden group">
              <Image
                src="/images/card 3.png"
                alt="White wooden chair view 2"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 object-right"
                width={280}
                height={240}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

