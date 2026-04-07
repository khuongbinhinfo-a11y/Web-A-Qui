import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <img
        src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=2070&q=80"
        alt="Người đàn ông đeo balo da"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Đồ da đẹp, gọn và bền cho nhu cầu hằng ngày
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-200">
          Từ ví da, dây lưng đến balo và túi xách, chúng tôi chọn những thiết kế dễ dùng, chỉn chu và có giá trị sử dụng lâu dài.
        </p>
        <div className="mt-10 flex gap-4">
          <Link href="/san-pham" className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-md font-semibold transition-colors">Xem sản phẩm</Link>
          <Link href="/san-pham?tag=bán-chạy" className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-semibold transition-colors">Mua hàng ngay</Link>
        </div>
      </div>
    </section>
  );
}