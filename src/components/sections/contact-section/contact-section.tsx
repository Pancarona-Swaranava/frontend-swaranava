export default function ContactSection() {
    return (
      <section id="contact" className="container1100 py-[150px] text-center">
        <h2 className="text-[54px] font-bold mb-4">Hubungi Kami!</h2>
        <p className="text-[24px] text-neutral-600 mb-16">
          Punya pertanyaan atau butuh bantuan? Hubungi kami.
        </p>
  
        <form className="max-w-[700px] mx-auto text-left text-[24px]">
          <label>Nama Panjang</label>
          <input
            className="w-full border p-4 rounded mb-6"
            placeholder="Ketik Nama panjang"
          />
  
          <label>Nomor Telfon</label>
          <input
            className="w-full border p-4 rounded mb-6"
            placeholder="Ketik Nomor Telfon"
          />
  
          <label>Pesan</label>
          <textarea
            className="w-full border p-4 rounded mb-6"
            placeholder="Ketik Pesan"
          />
  
          <div className="flex gap-3 mb-6 items-start">
            <input type="checkbox" className="mt-2" />
            <p className="text-neutral-600 text-[18px] leading-relaxed">
              Anda menyetujui <u>Ketentuan Layanan</u> dan <u>Kebijakan Privasi</u>.
            </p>
          </div>
  
          <button className="w-full bg-black text-white py-4 rounded text-[24px]">
            Kirim
          </button>
        </form>
      </section>
    );
  }
  