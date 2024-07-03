import React from 'react'
import { useDeleteProductMutation } from '../redux/services/dummyData'


const DeleteProduct = ({productId}) => {
    const [deleteProduct, {data, error, isLoading}] = useDeleteProductMutation()
    if(error){
        return <p>Something went wrong</p>
    }
    if(isLoading){
        return <p>Loading</p>
    }
    const deletehandler = async () =>{
        try {
            await deleteProduct(productId)
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <p>{data?.title ? `${data.title} successfully deleted ` : ""}</p>
        <button onClick={deletehandler}>delete product</button>
    </div>
  )
}

export default DeleteProduct