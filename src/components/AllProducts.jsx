import React from 'react'
import { useGetAllProductsQuery } from '../redux/services/dummyData'


const AllProducts = () => {
    const {data , isError , isLoading} = useGetAllProductsQuery()
    if(isError){
        return <h1>Something went wrong</h1>
    }
    if(isLoading){
        return <p>Loading...</p>
    }
  return (
    <div>
        {data?.products.map((p)=>(
            <>
                <p key={p.id}>{p.title}</p>
                <p>{p.description}</p>
            </>
        ))
        }
    </div>
  )
}

export default AllProducts