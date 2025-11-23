"use client";

export default function Navbar() {
  return (
    <header className="w-full py-4 bg-white border-b border-neutral-200 sticky top-0 z-50">
      <nav className="container1100 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <div className="w-[110px] h-[55px] bg-neutral-200 border rounded" />
        </div>

        {/* MENU */}
        <ul className="flex gap-[50px] text-body text-neutral-600">
          <li><a href="#hero" className="hover:text-black">Home</a></li>
          <li><a href="#about" className="hover:text-black">About</a></li>
          <li><a href="#store" className="hover:text-black">Store</a></li>
          <li><a href="#event" className="hover:text-black">Event</a></li>
          <li><a href="#community" className="hover:text-black">Community</a></li>
          <li><a href="#faq" className="hover:text-black">FAQ</a></li>
        </ul>
      </nav>
    </header>
  );
}
