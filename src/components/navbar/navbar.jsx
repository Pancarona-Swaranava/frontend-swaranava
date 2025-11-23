"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Offset untuk navbar
      const aboutSection = document.getElementById("about");
      
      // Jika belum sampai section about atau scroll di top, berarti di home
      if (!aboutSection || scrollPosition < aboutSection.offsetTop || window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // Check section lainnya
      const sections = ["about", "store", "event", "community", "faq"];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (itemId, href) => {
    setActiveSection(itemId);
    
    // Jika link Beranda, scroll ke top
    if (itemId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navItems = [
    { href: "/", id: "home", label: "Beranda" },
    { href: "#about", id: "about", label: "Tentang" },
    { href: "#store", id: "store", label: "Toko" },
    { href: "#event", id: "event", label: "Event" },
    { href: "#community", id: "community", label: "Komunitas" },
    { href: "#faq", id: "faq", label: "FAQ" },
  ];

  return (
    <div 
      className="fixed top-4 left-1/2 z-50"
      style={{
        transform: 'translateX(-50%) scale(0.65625)',
        transformOrigin: 'top center',
        width: 'min(913px, calc((100vw - 2rem) / 0.65625))',
        height: 'calc(112px / 0.65625)'
      }}
    >
      <nav 
        className="w-full h-[112px]"
        style={{
          backgroundImage: 'url(/images/navbar-bg.png)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      <div className="container1100 h-full flex items-center justify-center">
        {/* Navigation Menu */}
        <nav className="flex items-center gap-[82.08px]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleLinkClick(item.id, item.href)}
                className={`text-[#3A2A1F] text-[20px] decoration-2 underline-offset-4 ${
                  isActive 
                    ? "font-semibold underline" 
                    : "font-normal"
                } hover:underline`}
                style={{
                  transition: 'font-weight 0.4s cubic-bezier(0.4, 0, 0.2, 1), text-decoration 0.3s ease-in-out, opacity 0.3s ease-in-out',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </nav>
    </div>
  );
}

