import React from 'react'
import { useUpdateProductMutation } from '../redux/services/dummyData'

const UpdateProduct = ({productId}) => {
    const [updateProduct, {data, error, isLoading}] = useUpdateProductMutation()
    if(error){
        return <p>Something went wrong</p>
    }
    if(isLoading){
        return <p>Loading</p>
    }
    const handleUpdateProduct = async () =>{
        try {
            const updateProductData = {
                title: "underscore man",
            }
            await updateProduct({
                id: productId,
                updatedProduct : updateProductData
            })
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <p>{data?.id}</p>
        <p>{data?.title}</p>
        <p>{data?.description}</p>
        <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button>
    </div>
  )
}

export default UpdateProduct