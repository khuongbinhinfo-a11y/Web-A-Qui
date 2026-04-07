import Link from "next/link";

interface ProductShowcaseProps {
  title: string;
  products: any[]; // Trong thực tế sẽ import type Product từ '@/lib/types'
  variant?: 'primary' | 'secondary';
}

export function ProductShowcase({ title, products, variant = 'primary' }: ProductShowcaseProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <section className={`py-16 ${variant === 'secondary' ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Ảnh sản phẩm */}
              <Link href={`/san-pham/${product.slug}`} className="relative aspect-square overflow-hidden bg-gray-100 block">
                {product.tags && product.tags[0] && (
                  <span className="absolute top-2 left-2 z-10 bg-black text-white text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded">
                    {product.tags[0]}
                  </span>
                )}
                <img 
                  src={product.images[0] || "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80"} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              
              {/* Thông tin sản phẩm */}
              <div className="p-4 flex flex-col flex-1">
                <Link href={`/san-pham/${product.slug}`}>
                  <h3 className="text-sm text-gray-700 font-medium line-clamp-2 hover:text-brand-primary mb-2">
                    {product.name}
                  </h3>
                </Link>
                <div className="mt-auto">
                  <p className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}