export default function EventDetailPage() {
  return (
    <div className="flex w-full min-h-screen overflow-hidden bg-neutral-200">

      <div className="w-[45%] bg-neutral-300 flex items-center justify-center">
        <div className="w-[80%] h-[80%] bg-neutral-400 rounded-[30px]"></div>

        <div className="absolute bottom-10 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-black" />
          <div className="w-3 h-3 rounded-full bg-neutral-400" />
          <div className="w-3 h-3 rounded-full bg-neutral-400" />
          <div className="w-3 h-3 rounded-full bg-neutral-400" />
        </div>
      </div>

      <div className="w-[55%] flex justify-center py-10">
        <div className="w-[85%] h-[90vh] bg-white rounded-[40px] shadow overflow-y-auto p-10">

          <h1 className="text-[32px] font-bold leading-tight">
            Bandung Kota Angklung Festival
          </h1>

          <p className="text-neutral-500 mt-1">Nama Komunitas</p>

          <div className="mt-6 flex items-start gap-3">
            <div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
            <div>
              <p className="text-[14px] font-bold">08.00 WIB – Selesai</p>
              <p className="text-[14px] text-neutral-600">Sabtu, 24 Mei 2025</p>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-3">
            <div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
            <div>
              <p className="text-[14px] text-neutral-600">Bandung, Jawa Barat</p>
              <p className="text-[14px] font-bold">Balai Kota Bandung</p>
            </div>
          </div>


          <h2 className="font-bold text-[18px] mt-10">Tentang Event</h2>
          <p className="text-neutral-600 mt-2 text-[14px] leading-relaxed">
            Bandung Kota Angklung Festival adalah perayaan budaya tahunan di Bandung
            yang bertujuan melestarikan angklung sebagai warisan budaya Indonesia,
            menampilkan berbagai komunitas dan maestro angklung dalam satu panggung
            untuk menunjukkan harmoni budaya.
          </p>

          <h2 className="font-bold text-[18px] mt-10">Pengisi Acara</h2>

          <div className="mt-4 space-y-4">
            {[1,2,3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-neutral-300 rounded-full"></div>
                <div>
                  <p className="font-medium">Nama Komunitas</p>
                  <p className="text-neutral-500 text-[14px]">Guest Star</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="font-bold text-[18px] mt-10">Lini Masa</h2>

          <div className="mt-6 space-y-6 border-l pl-6">
            {[
              ["8.00 WIB", "Open gate"],
              ["9.00 WIB", "Opening Parade: Marching Angklung + Tarian Jaipong"],
              ["9.30 WIB", "Sambutan Wali Kota & Ketua Panitia"],
              ["10.00 WIB", "Penampilan: Angklung Harmony Kids Ensemble"],
              ["11.00 WIB", "Workshop 1 – Angklung Basics"],
              ["14.00 WIB", "Penampilan Komunitas Angklung Dewasa"],
              ["16.00 WIB", "Penutupan"],
            ].map(([time, desc], i) => (
              <div key={i} className="flex gap-6 text-[14px]">
                <p className="font-bold w-[80px]">{time}</p>
                <p className="text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t flex justify-between items-center">
            <div>
              <p className="text-neutral-500 text-[14px]">Harga</p>
              <p className="font-bold text-[18px]">Rp60.000/orang</p>
            </div>

            <button className="px-10 py-3 bg-black text-white rounded-full">
              Beli
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

