"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { allProducts } from "@/app/lib/Product";

export default function CategoryPage() {
  const { collection, category } = useParams() as {
    collection: string;
    category: string;
  };

  const filteredProducts = allProducts.filter(
    (p) =>
      p.collection.toLowerCase() === collection.toLowerCase() &&
      p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold capitalize text-primary">
          {category.replace(/-/g, " ")}
        </h1>
        <p className="text-muted mt-2">Explore the best in {collection}</p>
        <div className="mt-3 w-16 h-1 mx-auto bg-primary rounded-full" />
      </div>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-red-500 text-lg">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/collections/${collection}/${category}/${product.id}`}
              className="group relative block bg-secondary dark:bg-zinc-900 border border-muted rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              {/* Cropped Image */}
              <div className="w-full h-[250px] relative overflow-hidden rounded-md bg-black">
                <Image
                  src={product.image || "/placeholder.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-md font-medium text-foreground group-hover:text-primary transition">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 group-hover:text-primary transition">
                  {product.price}
                </p>
              </div>

              {/* Glow border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-all duration-300 rounded-xl pointer-events-none" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}


