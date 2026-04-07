import { HeroSection } from "./hero-section";
import { FeaturedCategories } from "./featured-categories";
import { ProductShowcase } from "./product-showcase";
import { Header } from "./header";
import { Footer } from "./footer";

// Dữ liệu mock tạm thời để tránh lỗi undefined import
const mockProducts = [
  { id: '1', slug: 'vi-da-nam', name: 'Ví da nam dáng ngang', price: 450000, images: ['https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80'], tags: ['bán chạy'] },
  { id: '2', slug: 'tui-deo-cheo', name: 'Túi đeo chéo gọn nhẹ', price: 890000, images: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80'], tags: ['hàng mới'] },
  { id: '3', slug: 'balo-cong-so', name: 'Balo da công sở', price: 1450000, images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'], tags: ['bán chạy'] },
];

export default function HomePage() {
  const bestSellers = mockProducts.filter(p => p.tags.includes('bán chạy'));
  const newArrivals = mockProducts.filter(p => p.tags.includes('hàng mới'));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCategories />
        <ProductShowcase 
          title="Sản phẩm bán chạy" 
          products={bestSellers} 
        />
        <ProductShowcase 
          title="Hàng mới về" 
          products={newArrivals} 
          variant="secondary" 
        />
        {/* Tạm ẩn các component chưa có file để tránh lỗi crash */}
        {/* <WhyChooseUs /> */}
        {/* <Testimonials reviews={reviews.slice(0, 3)} /> */}
        {/* <FinalCta /> */}
      </main>
      <Footer />
    </div>
  );
}