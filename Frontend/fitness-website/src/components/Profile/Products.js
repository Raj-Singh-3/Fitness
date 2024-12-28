// import React from "react";

// const Products = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Ordered Products</h2>
//       <ul className="space-y-4">
//         <li>
//           <p>Protein Shake - $30</p>
//           <p>Status: Delivered</p>
//         </li>
//         <li>
//           <p>Resistance Bands - $20</p>
//           <p>Status: In Transit</p>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Products;








import React, { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Protein Shake", price: "$30", status: "Delivered" },
    { id: 2, name: "Resistance Bands", price: "$20", status: "In Transit" },
  ]);

  const handleRepurchase = (productName) => {
    alert(`You have repurchased: ${productName}`);
  };

  return (
    <div className="w-full p-6 bg-gray-50 rounded-md shadow-lg">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center">Ordered Products</h2>

      {/* Product List */}
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white p-4 rounded-md shadow flex justify-between items-center hover:bg-gray-100 transition"
          >
            {/* Product Info */}
            <div>
              <p className="text-lg font-semibold text-gray-800">{product.name} - {product.price}</p>
              <p className={`text-sm font-medium ${product.status === "Delivered" ? "text-green-600" : "text-yellow-600"}`}>
                Status: {product.status}
              </p>
            </div>

            {/* Repurchase Button */}
            <button
              onClick={() => handleRepurchase(product.name)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition"
            >
              Repurchase
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
