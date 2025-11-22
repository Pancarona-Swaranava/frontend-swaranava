export default function CommunitySection() {
    return (
      <section
        id="community"
        className="container1100 py-[140px] text-center flex flex-col items-center"
      >
        {/* TITLE */}
        <h2 className="text-[40px] font-bold mb-[60px]">
          Lorem Ipsum dolor sit amet
        </h2>
  
        {/* BUBBLE + CIRCLES WRAPPER */}
        <div className="relative w-full max-w-[980px] mx-auto">
          {/* BULATAN ATAS KIRI */}
          <div className="absolute -left-4 top-4 w-[90px] h-[90px] bg-neutral-300 rounded-full" />
          {/* BULATAN TENGAH KIRI */}
          <div className="absolute -left-40 top-40 w-[130px] h-[130px] bg-neutral-300 rounded-full" />
          {/* BULATAN ATAS KANAN */}
          <div className="absolute -right-8 top-16 w-[100px] h-[100px] bg-neutral-300 rounded-full" />
          {/* BULATAN BAWAH KANAN */}
          <div className="absolute -right-40 bottom-0 w-[150px] h-[150px] bg-neutral-300 rounded-full" />
          {/* BULATAN BAWAH KIRI */}
          <div className="absolute -left-24 bottom-[-40px] w-[160px] h-[160px] bg-neutral-300 rounded-full" />
  
          {/* SPEECH BUBBLE */}
          <div className="relative mx-auto w-full max-w-[900px]">
            <div
              className="
                bg-neutral-200
                rounded-[48px]
                px-[60px]
                py-[50px]
                text-[20px]
                md:text-[22px]
                text-neutral-500
                leading-relaxed
                mx-auto
                shadow-sm
                transform
                -rotate-[2.2deg]
              "
            >
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
  
            {/* “EKOR” BUBBLE */}
            <div
              className="
                absolute
                left-[90px]
                -bottom-[40px]
                w-[140px]
                h-[100px]
                bg-neutral-200
                rounded-bl-[80px]
                rounded-tr-[80px]
                -rotate-[18deg]
              "
            />
          </div>
        </div>
  
        {/* BUTTON */}
        <button className="mt-[80px] bg-black text-white px-10 py-4 rounded text-[20px]">
          Lihat lebih banyak
        </button>
      </section>
    );
  }
  