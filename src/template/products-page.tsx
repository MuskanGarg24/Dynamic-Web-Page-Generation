import React from 'react'

const Products = () => {
    return (
        <div>products-page</div>
    )
}

export default Products

export function getServerData() {
    console.log("Server side rendering of products page");
    return {
        props: {},
    }
}