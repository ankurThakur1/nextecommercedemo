"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import { IoChevronBack } from 'react-icons/io5';

const ProductList = () => {
    const [productsData, setProductsData] = useState([]);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [searchResultError, setSearchResultError] = useState("")
    console.log(search);
    console.log(productsData);


    const fetchProducts = async() => {
        try {
            const request = await fetch(`https://dummyjson.com/products/search?q=${search}`);
            const result = await request.json();
            if(result && result.products){
                let productsData = result.products;
                setProductsData(productsData);

                if(result.products.length === 0){
                    setSearchResultError("No product found, please search again!")
                }
                else{
                    setSearchResultError("");
                }
            }
        } catch (error) {
            setError(error);
            console.log(error);
        }
    }

    const handleInputField = (e) => {
        setSearch(e.target.value);
    }


    useEffect(() => {
        fetchProducts();
    }, [search]);



    

  return (
    <div className="p-10 bg-gray-100 w-4/5 m-auto rounded-xl shadow-2xl flex flex-col gap-6">
        <Link href={"/"} className="border flex justify-center items-center rounded-full w-8 h-8 hover:shadow-md transition-all duration-300"><IoChevronBack className="text-gray-500" /></Link>
        <SearchBar onChange={handleInputField} value={search} />
        {
            searchResultError && <div className="w-full h-screen text-gray-500 text-2xl flex justify-center items-center border">{searchResultError}</div>
        }
        <div className="flex justify-between flex-wrap gap-3"> 
            {
                productsData.length > 0 ? (
                    productsData.map((item, index) => (
                        <ProductCard cardItem={item} key={item.id} />
                    ))
                ) : (
                    null
                )
            }
        </div>
    </div>
  )
}

export default ProductList;


