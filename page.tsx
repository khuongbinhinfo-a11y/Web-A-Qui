import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedCategories } from "@/components/sections/featured-categories";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

import { products, reviews } from "@/lib/data";

export default function HomePage() {
  const bestSellers = products.filter(p => p.tags.includes('bán chạy')).slice(0, 8);
  const newArrivals = products.filter(p => p.tags.includes('hàng mới')).slice(0, 4);

  return (
    <>
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
      <WhyChooseUs />
      <Testimonials reviews={reviews.slice(0, 3)} />
      <FinalCta />
    </>
  );
}