import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight text-brand-primary mb-4 block">
              Q LEATHER
            </Link>
            <p className="text-sm text-gray-600 mb-6">
              Đồ da thật, thiết kế tinh gọn, bền đẹp cho nhu cầu hằng ngày. Không chỉ là phụ kiện, đó là món đồ đi cùng bạn mỗi ngày.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Danh Mục</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/danh-muc/vi-da" className="hover:text-brand-primary">Ví da nam/nữ</Link></li>
              <li><Link href="/danh-muc/balo-da" className="hover:text-brand-primary">Balo da công sở</Link></li>
              <li><Link href="/danh-muc/tui-xach" className="hover:text-brand-primary">Túi xách da</Link></li>
              <li><Link href="/danh-muc/day-lung" className="hover:text-brand-primary">Dây lưng</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Hỗ Trợ Khách Hàng</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/chinh-sach/doi-tra" className="hover:text-brand-primary">Chính sách đổi trả</Link></li>
              <li><Link href="/chinh-sach/bao-hanh" className="hover:text-brand-primary">Chính sách bảo hành</Link></li>
              <li><Link href="/chinh-sach/giao-hang" className="hover:text-brand-primary">Giao hàng & Thanh toán</Link></li>
              <li><Link href="/kien-thuc/cach-bao-quan" className="hover:text-brand-primary">Hướng dẫn bảo quản da</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Liên Hệ</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Hotline: <a href="tel:0987654321" className="font-semibold hover:text-brand-primary">0987 654 321</a></li>
              <li>Email: contact@qleather.vn</li>
              <li>Giờ làm việc: 8:30 - 21:30</li>
            </ul>
          </div>

        </div>
        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Q Leather. All rights reserved.
        </div>
      </div>
    </footer>
  );
}