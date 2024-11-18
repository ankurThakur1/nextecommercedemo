import React from 'react'
import ProductDetail from '@/components/ProductDetail'
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';

const ProductsDetailPage = async({ params }) => {
    const { id } = await params;
    console.log(id);
  return (
    <div>
      <Link href={"/products"} className="fixed top-4 left-5 border flex justify-center items-center rounded-full w-8 h-8 hover:shadow-md transition-all duration-300"><IoChevronBackOutline className="text-gray-500" /></Link>
      <ProductDetail id={id} key={id} />
    </div>
  )
}

export default ProductsDetailPage