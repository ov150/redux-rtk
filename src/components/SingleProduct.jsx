import React from 'react'
import { useGetProductByIdQuery } from '../redux/services/dummyData'

const SingleProduct = () => {
    const { data, isError, isLoading } = useGetProductByIdQuery(2);
    if (isError) {
        return <p> Something went wrong</p>
    }
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.description}</p>
        </div>
    )
}

export default SingleProduct