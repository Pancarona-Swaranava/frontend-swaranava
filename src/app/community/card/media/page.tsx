export default function MediaPage() {
  return (
    <>
      <div className="bg-gray-100 p-4 rounded-2xl">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />

          <div className="flex-1">
            <input
              type="text"
              placeholder="Apa yang ingin anda tanya atau bagikan?"
              className="w-full bg-white px-4 py-2 rounded-full border text-sm outline-none"
            />

            <label className="flex items-center gap-2 mt-2 text-sm text-gray-500">
              <input type="checkbox" />
              Post sebagai anonim
            </label>
          </div>

          <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
            {">"}
          </button>
        </div>
      </div>

      <div className="bg-gray-100 mt-6 p-6 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div>
            <p className="font-medium">Zahra Yani</p>
            <p className="text-xs text-gray-500">16 Juni 2023</p>
          </div>
        </div>

        <div className="w-full h-60 bg-gray-300 rounded-xl mb-4" />

        <h2 className="font-semibold text-lg mb-2">
          Hari ini saya belajar musik Manuk Dadali, mohon masukan dan sarannya...
        </h2>

        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
    </>
  );
}
