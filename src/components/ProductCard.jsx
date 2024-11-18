import Link from 'next/link'
import React from 'react'

const ProductCard = ({ cardItem }) => {
  return (
    <div className="product-card flex-[1_0_24%] border p-4 rounded-lg hover:shadow-lg transition-all duration-300 relative z-10">
        <Link href={`/products/${cardItem.id}`} className="flex flex-col items-center gap-6 hover:text-white">
            <div className="image border w-full h-[270px] flex justify-center items-center bg-white rounded-md">
              <img src={cardItem.thumbnail} alt={cardItem.title} className="w-full h-full object-contain" />
            </div>
            <div className="content">
              <h1 className="text-xl font-bold">{cardItem.title}</h1>
              <p className="text-gray-500">{cardItem.description}</p>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard