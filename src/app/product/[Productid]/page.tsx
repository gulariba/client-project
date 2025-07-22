"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

// 🟩 Define Product Type — replace fields if needed
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  colors?: string[];
  category?: string;
}

// 🟩 Define route params type
interface ProductPageProps {
  params: {
    Productid: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { Productid } = params;
  const [productData, setProductData] = useState<Product | null>(null);

  useEffect(() => {
    // Dummy data (replace with real fetch or API call)
    const allProducts: Product[] = [
      {
        id: "1",
        name: "Lace Bra",
        description: "Elegant lace bra for everyday comfort and style.",
        price: 2499,
        image: "/products/lace-bra.jpg",
        category: "bras",
        colors: ["#fce4ec", "#f8bbd0"],
      },
      {
        id: "2",
        name: "Cotton Panty Set",
        description: "Soft breathable cotton panties in a colorful pack.",
        price: 1399,
        image: "/products/cotton-panty.jpg",
        category: "panties",
        colors: ["#e1bee7", "#d1c4e9"],
      },
      // ...add more sample products
    ];

    const found = allProducts.find((p) => p.id === Productid);
    if (found) {
      setProductData(found);
    } else {
      setProductData(null);
    }
  }, [Productid]);

  if (!productData) return notFound();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="relative w-full h-96">
          <Image
            src={productData.image}
            alt={productData.name}
            fill
            className="object-cover rounded-2xl shadow-md"
            priority
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{productData.name}</h1>
          <p className="text-gray-500 text-sm capitalize mb-4">
            Category: {productData.category}
          </p>
          <p className="text-lg text-gray-700 mb-4">{productData.description}</p>
          <p className="text-xl font-semibold text-pink-600 mb-4">
            PKR {productData.price}
          </p>

          {/* Colors */}
          {productData.colors && (
            <div className="flex items-center gap-2 mt-4">
              <span className="font-medium">Available Colors:</span>
              {productData.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-6 h-6 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
