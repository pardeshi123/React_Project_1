import React, { useState } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts("https://dummyjson.com/products");
  const [search, setSearch] = useState("");

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.searchBox}
      />

      {loading && <p>Loading products...</p>}
      {error && <p style={styles.error}>Error fetching products: {error}</p>}

      {!loading && !error && (
        <div style={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductItem key={product.id} product={product} />)
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  searchBox: {
    padding: "8px",
    width: "100%",
    maxWidth: "400px",
    marginBottom: "20px",
    display: "block",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "10px",
  },
  error: {
    color: "red",
  },
};

export default ProductList;
