"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import CustomerReviews from './CustomerReviews';

const ProductDetail = ({ id }) => {
    const [productData, setProductData] = useState({});
    const [imageItem, setImageItem] = useState(null);
    console.log(productData);
    console.log(imageItem);

    const fetchDetailsOfProduct = async() => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const result = await response.json();
            console.log(result);
            if(result){
                setProductData(result);
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchDetailsOfProduct();
    }, []);

   
    const tagsArray = productData?.tags?.map((item, index) => (
        <div key={index}>
            <button className="hover:text-blue-400 transition-all text-lg">{item.charAt(0).toUpperCase() + item.slice(1)}</button>
            {index < productData.tags.length - 1 && ', '}
        </div>
    ));

    const handleImage = (imageItem) => {
        setImageItem(imageItem);
    }
    

  return (
    <div className="flex justify-between  gap-3 w-11/12 m-auto  h-[600px] mt-10">
        <div className="border basis-1/3 h-full rounded-md">
            <div className="w-full h-full">
                {
                    imageItem?.length > 0 ? (
                        <img src={imageItem} alt={productData.title} className="object-contain w-full"/>
                    ) : (
                        <img src={productData.thumbnail} alt={productData.title} className="object-contain w-full"/>
                    )
                }
            </div>
            <div className="flex items-center gap-3 mt-8">
                {
                    productData?.images?.map((image, index) => (
                        <div className="border basis-1/6 rounded-md cursor-pointer hover:opacity-55 transition-all" onClick={() => handleImage(image)} key={index}>
                            <img src={image} alt={productData.title} />
                        </div>
                    ))
                }
            </div>
        </div>
        <div className=" basis-2/3 p-6">
            <h1 className="text-4xl font-bold">{productData.title}</h1>
            <div className="flex flex-col gap-3 mt-5 mb-5">
                <p className="text-[18px]">Price: <span className="text-2xl ml-1 font-semibold">${productData.price}</span> <span className="px-3 py-1 rounded-xl ml-4 bg-orange-500 text-white text-sm">-{productData.discountPercentage}%</span></p>
                <p className="text-[18px]">Availability: <span className={`${productData.availabilityStatus == "In Stock" ? "text-greenHex" : "text-red-500"} text-xl  ml-1`}>{productData.availabilityStatus}</span></p>
                <p className="text-[18px]">Stock left: <span className="text-xl ml-1">{productData.stock}</span></p>
            </div>
            
            <p className="text-gray-500 text-lg mb-5 w-2/3">{productData.description}</p>
            <div className="w-1/3 mb-5">
                <div className="flex items-center gap-5">
                    <h3 className="basis-1/4 font-bold text-[14px]">TAGS: </h3>
                    {tagsArray}
                </div>
                <div className="flex items-center gap-5">
                    <h3 className="basis-1/4 font-bold text-[14px]">SKU: </h3>
                    <span className="text-lg">{productData.sku}</span>
                </div>
                <div className="flex items-center gap-5">
                    <h3 className="basis-1/4 font-bold text-[14px]">CATEGORY: </h3>
                    <button className="hover:text-blue-400 transition-all text-lg">{productData?.category ? productData.category.charAt(0).toUpperCase() + productData.category.slice(1) : ""}</button>
                </div>
            </div>
            <div className="flex gap-3">
                <p className="text-[12px] text-blueTextHex">{productData.returnPolicy}</p>
                <p className="text-[12px] text-blueTextHex">{productData.warrantyInformation}</p>
            </div>
            <div className="mt-5"> 
                {
                    productData?.reviews?.length > 0 ? (
                        productData?.reviews?.map((review, index) => (
                            <CustomerReviews review={review} key={index} />
                        ))
                    ) : (
                        null
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default ProductDetail;