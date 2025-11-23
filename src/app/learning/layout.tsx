// src/app/learning/layout.tsx
import Image from "next/image";

export default function LearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/background-landingpage.png" 
        alt=""               
        aria-hidden="true"    
        fill
        className="absolute inset-0 -z-10 object-cover"
        priority
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
