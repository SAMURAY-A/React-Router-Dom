import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Product({ productList }) {
  const { id } = useParams();
  const productId = parseInt(id);

  const value = productList.find((product) => product.id === productId);

  return (
    <div className="p-4">
      <div>
        <h2>title: {value.name}</h2>
        <p>body: {value.title}</p>
      </div>
      <Link to={`/products`} className="text-red-500">
        {"<"}-back
      </Link>
    </div>
  );
}
