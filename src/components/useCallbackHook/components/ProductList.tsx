import React from 'react'
import type { IProductList } from '../types'

const ProductList = ({ filterProducts }: IProductList) => {
    console.log("Rendering ProductList");

    const filteredProducts = filterProducts();

    const userContainerStyle = {
        border: "1px solid grey",
        padding: "10px",
        marginTop: "10px",
        width: "300px",
        height: "200px",
        overflowY: "auto",
        backgroundColor: "#f0f0f0",
        borderRadius: "5px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
    }

    const userListStyle = {
        listStyleType: "none",
        padding: "0",
        margin: "0",
    }

    const userListItemStyle = {
        padding: "5px",
        marginBottom: "5px",
        borderBottom: "1px solid #ccc",
    }

  return (
    <div style={userContainerStyle as React.CSSProperties}>
        <h3>Products</h3>
        <ul style={userListStyle as React.CSSProperties}>
        {filteredProducts.map((product, i) => (
            <li style={userListItemStyle as React.CSSProperties} key={i}>{product.name}</li>
        ))}
        </ul>
    </div>
  )
}

export default React.memo(ProductList);