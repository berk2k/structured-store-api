import { useEffect, useState } from "react";
import { api } from "./api";
import type { Product } from "./types/Product";


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get<Product[]>("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛍️ Product List</h1>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "30px" }}>
          <h2>{p.name}</h2>
          <img src={p.image} alt={p.name} width={200} />
          <p>{p.description}</p>
          <p>
            <b>{p.price} {p.currency}</b> — {p.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Product",
                name: p.name,
                image: [p.image],
                description: p.description,
                brand: { "@type": "Brand", name: p.brand },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: p.rating,
                  reviewCount: p.reviewCount
                },
                offers: {
                  "@type": "Offer",
                  priceCurrency: p.currency,
                  price: p.price,
                  availability: p.stock > 0
                    ? "https://schema.org/InStock"
                    : "https://schema.org/OutOfStock"
                }
              })
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
