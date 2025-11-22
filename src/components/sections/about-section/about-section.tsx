export default function AboutSection() {
    return (
      <section id="about" className="container1100 py-[120px] flex gap-[80px]">
        <div className="w-[420px] h-[420px] bg-neutral-200 border rounded" />
  
        <div>
          <h2 className="text-[40px] font-bold mb-6">Nada Lama, Cara Baru.</h2>
          <p className="text-[24px] text-neutral-600 leading-relaxed">
            Swaranava adalah platform digital yang memadukan tradisi dan teknologi,
            tempat pengguna dapat belajar alat musik tradisional serta terhubung
            dengan event dan penjual alat musik untuk mendukung proses belajar
            yang menyeluruh.
          </p>
  
          <button className="mt-10 bg-black text-white px-10 py-4 rounded text-[24px]">
            Lihat lebih banyak
          </button>
        </div>
      </section>
    );
  }
  