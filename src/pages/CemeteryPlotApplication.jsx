"use client"
import { useState, useEffect } from "react"

const CemeteryDataSearchPage = ({ onNavigate }) => {
  const [searchData, setSearchData] = useState({
    tpu: "",
    unit: "",
    blok: "",
    blad: "",
    petak: "",
    namaJenazah: "",
    tglMeninggal: "",
    tglKubur: "",
    namaAhliwaris: "",
  })

  const handleReset = () => {
    setSearchData({
        tpu: "",
        unit: "",
        blok: "",
        blad: "",
        petak: "",
        namaJenazah: "",
        tglMeninggal: "",
        tglKubur: "",
        namaAhliwaris: "",
    })
    setSearchResults([]) }

  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const tpuOptions = ["Karet Bivak", "Tanah Kusir I/II", "Srengseng Sawah", "Karet PSBB", "Semper", "Kali Sari"]
  const unitOptions = ["Islam", "Kristen", "Katolik", "Hindu", "Buddha"]
  const blokOptions = ["AAI", "AAII", "AI", "AII", "AAIII"]

  const sampleResults = [
    { id: 1, namaJenazah: "ASRIE", namaAhliwaris: "ARUM", tglMeninggal: "2015-07-13", tglKubur: "2025-07-13", unit: "Islam", blok: "AAI", blad: "070", petak: "0254", tpu: "Karet Bivak" },
    { id: 2, namaJenazah: "RACHMAN SALEH", namaAhliwaris: "", tglMeninggal: "2025-07-13", tglKubur: "2025-07-13", unit: "Islam", blok: "AI", blad: "026", petak: "0057", tpu: "Srengseng Sawah" },
    { id: 3, namaJenazah: "NY. SRI ADHIATI", namaAhliwaris: "", tglMeninggal: "2020-07-30", tglKubur: "2025-07-13", unit: "Islam", blok: "AAII", blad: "019", petak: "0120", tpu: "Tanah Kusir I/II" },
    { id: 4, namaJenazah: "SUDARMAN", namaAhliwaris: "", tglMeninggal: "2025-07-13", tglKubur: "", unit: "Islam", blok: "AAI", blad: "008", petak: "0616", tpu: "Karet PSBB" },
    { id: 5, namaJenazah: "ICANG", namaAhliwaris: "NAMI", tglMeninggal: "2025-07-13", tglKubur: "2025-07-13", unit: "Islam", blok: "AAII", blad: "172", petak: "0287", tpu: "Semper" },
    { id: 6, namaJenazah: "SUPARYO", namaAhliwaris: "", tglMeninggal: "2025-07-13", tglKubur: "2025-07-13", unit: "Islam", blok: "AII", blad: "005", petak: "0711", tpu: "Kali Sari" },
    { id: 7, namaJenazah: "CHAERUDIN", namaAhliwaris: "JUMIATI", tglMeninggal: "2025-07-13", tglKubur: "2025-07-13", unit: "Islam", blok: "AAI", blad: "011", petak: "0145", tpu: "Semper" },
    { id: 8, namaJenazah: "DRS.HARIYADI", namaAhliwaris: "RACHMAN FAUZI", tglMeninggal: "2025-07-13", tglKubur: "", unit: "Islam", blok: "AAI", blad: "092", petak: "0304", tpu: "Karet Bivak" },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSearchData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSearch = () => {
  setIsSearching(true)
  setTimeout(() => {
    const isEmpty = Object.values(searchData).every((value) => value === "")

    // Jika semua input kosong, tampilkan seluruh data
    let filteredResults = isEmpty
      ? sampleResults
      : sampleResults.filter((item) => {
          return (
            (!searchData.namaJenazah || item.namaJenazah.toLowerCase().includes(searchData.namaJenazah.toLowerCase())) &&
            (!searchData.namaAhliwaris || item.namaAhliwaris.toLowerCase().includes(searchData.namaAhliwaris.toLowerCase())) &&
            (!searchData.tpu || item.tpu === searchData.tpu) &&
            (!searchData.unit || item.unit === searchData.unit) &&
            (!searchData.blok || item.blok === searchData.blok)
          )
        })

    setSearchResults(filteredResults)
    setIsSearching(false)
  }, 800)
  }

  useEffect(() => {
    handleSearch()
  }, [])

  const handleViewDetail = (item) => {
    alert(`Detail untuk ${item.namaJenazah} di ${item.tpu}`)
  }

  const clearDate = (field) => {
    setSearchData((prev) => ({ ...prev, [field]: "" }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 py-7">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-5">
            <h1 className="text-xl font-semibold text-white">Pencarian Data Jenazah</h1>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-2">TPU</label>
                <select name="tpu" value={searchData.tpu} onChange={handleInputChange} className="w-full h-11 px-4 border border-gray-300 rounded-lg shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="">--</option>
                  {tpuOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-800 mb-2">Unit</label>
                <select name="unit" value={searchData.unit} onChange={handleInputChange} className="w-full h-11 px-4 border border-gray-300 rounded-lg shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="">--</option>
                  {unitOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-800 mb-2">Blok</label>
                <select name="blok" value={searchData.blok} onChange={handleInputChange} className="w-full h-11 px-4 border border-gray-300 rounded-lg shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="">--</option>
                  {blokOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <input name="namaJenazah" value={searchData.namaJenazah} onChange={handleInputChange} placeholder="Nama Jenazah" className="w-full h-11 px-4 border border-gray-300 rounded-lg shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500" />
              <input name="tglMeninggal" value={searchData.tglMeninggal} onChange={handleInputChange} placeholder="Tanggal Meninggal" className="w-full h-11 px-4 border border-gray-300 rounded-lg shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500" />
              <input name="tglKubur" value={searchData.tglKubur} onChange={handleInputChange} placeholder="Tanggal Pemakaman" className="w-full h-11 px-4 border border-gray-300 rounded-lg shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500" />
              <input name="namaAhliwaris" value={searchData.namaAhliwaris} onChange={handleInputChange} placeholder="Nama Ahli Waris" className="w-full h-11 px-4 border border-gray-300 rounded-lg shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            <div className="text-center space-x-4">
              <button onClick={handleSearch} disabled={isSearching} className="inline-flex items-center px-6 py-2 bg-green-600 text-white rounded-full text-base font-semibold hover:bg-green-700 disabled:opacity-50 transition">
                {isSearching ? "Mencari..." : "Cari"}
              </button>
              <button onClick={handleReset} className="inline-flex items-center px-6 py-2 bg-gray-200 text-gray-700 rounded-full text-base font-semibold hover:bg-gray-300 transition">
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {searchResults.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-green-600 px-6 py-4">
              <h2 className="text-lg font-semibold text-white">Hasil Pencarian ({searchResults.length} ditemukan)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    {['Nama Jenazah', 'Ahli Waris', 'Tanggal Meninggal', 'Tanggal Pemakaman', 'Unit', 'Blok', 'Blad', 'Petak', 'TPU', 'Aksi'].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-sm font-semibold text-gray-700">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {searchResults.map((item, i) => (
                    <tr key={item.id} className="hover:bg-green-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{item.namaJenazah}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{item.namaAhliwaris}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{item.tglMeninggal}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{item.tglKubur}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{item.unit}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{item.blok}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{item.blad}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{item.petak}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{item.tpu}</td>
                      <td className="px-4 py-3 text-sm text-center">
                        <button onClick={() => handleViewDetail(item)} className="text-green-600 hover:text-green-800">Lihat</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isSearching && searchResults.length === 0 && (
          <div className="mt-8 bg-white border border-gray-200 rounded-lg p-12 text-center shadow">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Belum ada pencarian</h3>
            <p className="text-gray-500">Silakan isi form untuk melihat data jenazah.</p>
          </div>
        )}

        {isSearching && (
          <div className="mt-8 bg-white border border-gray-200 rounded-lg p-12 text-center shadow animate-pulse">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sedang mencari...</h3>
            <p className="text-gray-500">Mohon tunggu sebentar.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CemeteryDataSearchPage
