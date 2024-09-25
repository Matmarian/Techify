"use client"

import React, { useEffect, useState } from 'react'
import CardList from '../CardList.tsx/CardList'
import Card from '../Card/Card'
import { products } from '@/mock/products'
import { IProduct } from '../../../interfaces/products'

const ClientProducts = () => {
    
    const [data, setData] = useState<IProduct[]>([])
    const [isLoading, setIsloading] = useState(true)
    const [hasError, setHasErrors] = useState(false)
    
    useEffect(() => {
        setIsloading(true);
        setTimeout(() => {
            setData(products);
            setIsloading(false);
            setHasErrors(false);
        }, 2000);
        
    }, []);

    if (isLoading) return <h1>Loanding...</h1>
    if (hasError) return <h1>Ups¡ hubo un error...</h1>

    return (

    <CardList>
    {data.map((product, i) => (
        <Card key={i} product={product}/>
    ))}          
    </CardList>
)
}

export default ClientProducts

