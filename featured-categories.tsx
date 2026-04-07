import Link from "next/link";

export function FeaturedCategories() {
  const categories = [
    { title: "Ví Da", href: "/danh-muc/vi-da", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600" },
    { title: "Túi Xách", href: "/danh-muc/tui-xach", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600" },
    { title: "Balo Da", href: "/danh-muc/balo-da", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600" },
    { title: "Dây Lưng", href: "/danh-muc/day-lung", image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-2xl font-bold">Danh Mục Nổi Bật</h2>
        <Link href="/san-pham" className="text-sm font-medium text-brand-primary hover:underline">
          Xem tất cả &rarr;
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {categories.map((category) => (
          <Link key={category.title} href={category.href} className="group block">
            <div className="bg-gray-100 aspect-[4/5] rounded-lg overflow-hidden mb-4 relative">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition duration-300 z-10"></div>
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
              />
            </div>
            <h3 className="font-semibold text-center text-gray-900 group-hover:text-brand-primary transition-colors">
              {category.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}