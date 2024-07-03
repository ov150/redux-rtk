import React from 'react'
import { useAddNewProductMutation } from '../redux/services/dummyData'

const AddProduct = () => {
    const [addNewProduct, {data, error, isLoading}] = useAddNewProductMutation()
    if(error){
        return <p>Something went wrong</p>
    }
    if(isLoading){
        return <p>Loading</p>
    }
    const handleAddProduct = async () =>{
        try {
            const newProductData = {
                id: 1,
                title: "underscore",
                description: "HI, i am underscore, coder"
            }

            await addNewProduct(newProductData)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <p>{data?.id}</p>
        <p>{data?.title}</p>
        <p>{data?.description}</p>
        <button onClick={handleAddProduct} disabled={isLoading}>add new product</button>
    </div>
  )
}

export default AddProduct