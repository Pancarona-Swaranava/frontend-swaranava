import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        backgroundImage: 'url(/images/footer-bg.png)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
        width: '100%'
      }}
    >
      <div className="container1100 pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mt-48">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-4">
            <Image
              src="/images/logotype-kuning.png"
              alt="SWARA NAVA Logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 md:gap-8 ml-4">
            <Link 
              href="/" 
              className="text-lg hover:underline decoration-2 underline-offset-4"
              style={{ color: '#FFC800' }}
            >
              Beranda
            </Link>
            <Link 
              href="#about" 
              className="text-lg hover:underline decoration-2 underline-offset-4"
              style={{ color: '#FFC800' }}
            >
              Tentang
            </Link>
            <Link 
              href="#store" 
              className="text-lg hover:underline decoration-2 underline-offset-4"
              style={{ color: '#FFC800' }}
            >
              Toko
            </Link>
            <Link 
              href="#event" 
              className="text-lg hover:underline decoration-2 underline-offset-4"
              style={{ color: '#FFC800' }}
            >
              Event
            </Link>
            <Link 
              href="#community" 
              className="text-lg hover:underline decoration-2 underline-offset-4"
              style={{ color: '#FFC800' }}
            >
              Komunitas
            </Link>
            <Link 
              href="#faq" 
              className="text-lg hover:underline decoration-2 underline-offset-4"
              style={{ color: '#FFC800' }}
            >
              FAQ
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6">
          <div className="w-[calc(100%+160px)] border-t mb-6 -ml-20" style={{ borderColor: 'rgba(255, 200, 0, 0.2)' }}></div>
          <p className="text-center text-sm" style={{ color: '#FFC800' }}>
            © {new Date().getFullYear()} SWARA NAVA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

