import { useCallback, useState } from "react";
import type { IProduct } from "../types";
import ProductList from "./ProductList";

const dummyProducts = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    name: `Product ${i}`,
    price: Math.floor(Math.random() * 1000),
}));

const ProductDashboard = () => {
    const [maxPrice, setMaxPrice] = useState(500);
    const [count, setCount] = useState(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(e.target.value));
    }

    const filterProducts = useCallback(() => {
        console.log("Simulating heavy filtering operation");
        const start = performance.now();
        const filtered: IProduct[] = [];
        for(let i = 0; i < dummyProducts.length; i++) {
            for(let j = 0; j < 100; j++) {
                if(dummyProducts[i].price <= maxPrice) {
                    filtered.push(dummyProducts[i]);
                }
            }
        }
        const end = performance.now();
        console.log(`Filtering took ${end - start} milliseconds`);
        return filtered;
    }, [maxPrice]);

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    }   

    const headingStyle = {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "20px",
    }

    const inputStyle = {
        marginLeft: "10px",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    }

    const buttonStyle = {
        marginLeft: "20px",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    }

    return (
        <div style={containerStyle as React.CSSProperties}>
            <h1 style={headingStyle as React.CSSProperties}>Product Dashboard</h1>
            <label>
                Max Price: 
                <input
                    type="number"
                    value={maxPrice}
                    onChange={handleInputChange}
                    style={inputStyle as React.CSSProperties}
                />
            </label>

            <button onClick={() => setCount(count + 1)} style={buttonStyle as React.CSSProperties}>
                Increase Counter ({count})
            </button>

            <ProductList filterProducts={filterProducts} />
        </div>
    )
}

export default ProductDashboard;