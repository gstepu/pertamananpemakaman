"use client"
import { useState } from "react"

const CemeteryAvailabilityPage = () => {
  const dataTPU = [
    {
      tpu: "Karet Bivak",
      alamat: "Jl. Karet Pasar Baru Barat V, Jakarta Pusat",
      kontak: "021-1234567",
      totalPetak: 1500,
      petakTersedia: 120,
      unit: "Islam",
      blok: ["AAI", "AAII", "AII"]
    },
    {
      tpu: "Tanah Kusir I/II",
      alamat: "Jl. Tanah Kusir Raya, Jakarta Selatan",
      kontak: "021-7654321",
      totalPetak: 1800,
      petakTersedia: 85,
      unit: "Islam, Kristen",
      blok: ["AI", "AAIII"]
    },
    {
      tpu: "Srengseng Sawah",
      alamat: "Jl. Srengseng Sawah No.10, Jakarta Selatan",
      kontak: "021-3344556",
      totalPetak: 1000,
      petakTersedia: 210,
      unit: "Islam",
      blok: ["AAI", "AII"]
    },
    {
      tpu: "Karet PSBB",
      alamat: "Jl. KH Mas Mansyur, Jakarta Pusat",
      kontak: "021-7788990",
      totalPetak: 900,
      petakTersedia: 45,
      unit: "Islam",
      blok: ["AAI"]
    },
    {
      tpu: "Semper",
      alamat: "Jl. Semper Barat, Jakarta Utara",
      kontak: "021-5544332",
      totalPetak: 1300,
      petakTersedia: 170,
      unit: "Islam",
      blok: ["AAII", "AAI"]
    },
    {
      tpu: "Kali Sari",
      alamat: "Jl. Kali Sari Timur, Jakarta Timur",
      kontak: "021-9988776",
      totalPetak: 950,
      petakTersedia: 25,
      unit: "Islam, Katolik",
      blok: ["AAI", "AAII"]
    },
  ]

  const [query, setQuery] = useState("")
  const filteredData = dataTPU.filter((tpu) => {
    const q = query.toLowerCase()
    return (
      tpu.tpu.toLowerCase().includes(q) ||
      tpu.unit.toLowerCase().includes(q) ||
      tpu.blok.join(",").toLowerCase().includes(q)
    )
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 py-7">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-5">
            <h1 className="text-xl font-semibold text-white">Ketersediaan Petak Pemakaman</h1>
          </div>

          {/* Pencarian */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-center w-full bg-white border-b border-gray-100 py-2 px-4">
                <div className="w-full sm:max-w-md">
                    <div className="relative">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Cari TPU, Unit, atau Blok..."
                        className="w-full h-11 px-4 border border-gray-300 rounded-full shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
                    />
                    </div>
                </div>
                </div>
          </div>

          {/* Tabel */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Nama TPU</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Alamat</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Kontak</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Petak</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Petak Tersedia</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Blok</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Unit</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Persentase Tersedia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredData.length > 0 ? (
                  filteredData.map((tpu, index) => {
                    const persentase = ((tpu.petakTersedia / tpu.totalPetak) * 100).toFixed(1)
                    return (
                      <tr key={index} className="hover:bg-green-50">
                        <td className="px-6 py-4 text-sm text-gray-900">{tpu.tpu}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{tpu.alamat}</td>
                        <td className="px-4 py-3 text-sm">
                            <a href={`tel:${tpu.kontak}`} className="text-green-600 hover:underline">
                                {tpu.kontak}
                            </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">{tpu.totalPetak}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{tpu.petakTersedia}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{tpu.blok.join(", ")}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{tpu.unit}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{persentase}%</td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td colSpan={8} className="text-center text-gray-500 px-6 py-8 italic">
                      Tidak ada data yang cocok dengan pencarian.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="p-6 text-sm text-gray-500 italic">
            Data ketersediaan petak diperbarui secara berkala oleh Dinas Pertamanan dan Hutan Kota DKI Jakarta.
          </div>
        </div>
      </div>
    </div>
  )
}

export default CemeteryAvailabilityPage