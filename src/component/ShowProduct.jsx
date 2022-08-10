import React from 'react'
import { useSelector } from 'react-redux'

const ShowProduct = () => {
    const {title, price} = useSelector(state => state.product)

    return (
        <div>
            <h4 className='title is-4'>Title: {title}</h4>
            <h4 className='title is-4'>Price: {price}</h4>
        </div>
    )
}

export default ShowProduct
