// import React, { useState } from "react";
// import products from "./Product"; // Assuming `Product.js` exports an array of products
// import "./ProductPage.css";

// const ProductPage = () => {
//     const [search, setSearch] = useState("");

//     // Extract unique categories from products
//     const categories = [...new Set(products.map((product) => product.category))];

//     return (
//         <div className="product-page">
//             {/* Search Bar */}
//             <div className="search-bar">
//                 <input
//                     type="text"
//                     placeholder="Search for products..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//             </div>

//             {/* Categories and Products */}
//             {categories.map((category) => (
//                 <div key={category} className="category-section">
//                     <h2 className="category-title">{category}</h2>
//                     <div className="product-list">
//                         {products
//                             .filter(
//                                 (product) =>
//                                     product.category === category &&
//                                     product.name.toLowerCase().includes(search.toLowerCase())
//                             )
//                             .map((product, index) => (
//                                 <div key={index} className="product-card">
//                                     <img
//                                         src={product.image}
//                                         alt={product.name}
//                                         className="product-image"
//                                     />
//                                     <h3 className="product-name">{product.name}</h3>
//                                     <p className="product-description">{product.description}</p>
//                                     <p className="product-price">{product.price}</p>
//                                     <button
//                                         className="order-button"
//                                         onClick={() => window.open(product.orders, "_blank")}
//                                     >
//                                         Order Now
//                                     </button>
//                                 </div>
//                             ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ProductPage;










import React, { useState } from "react";
import products from "./Product"; // Assuming `Product.js` exports an array of products
import "./ProductPage.css";

const ProductPage = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    // Extract unique categories from products
    const categories = ["All", ...new Set(products.map((product) => product.category))];

    // Filtered products based on search and filter
    const filteredProducts = products.filter(
        (product) =>
            (filter === "All" || product.category === filter) &&
            product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="product-page">
            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Category Filters */}
            <div className="filter-buttons">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`filter-button ${filter === category ? "active" : ""}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Products */}
            <div className="product-list">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="product-card">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                        />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">{product.price}</p>
                        <button
                            className="order-button"
                            onClick={() => window.open(product.orders, "_blank")}
                        >
                            Order Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
