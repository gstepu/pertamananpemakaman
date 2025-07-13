"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  FileText,
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  Search,
  CalendarCheck,
  Trees,
  Sprout,
} from "lucide-react"

// Tambahkan ini di bagian import di atas
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend
} from "recharts";

// Carousel Gambar Tampilan Awal
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const slides = [
    {
      image: "/images/tebet-eco-park.jpg",
      title: "Menata Hijau Jakarta, Merawat Kehidupan Kota",
      description:
        "Melalui penataan ruang hijau yang terencana, kami berkomitmen untuk merawat keberlangsungan ekosistem dan meningkatkan kualitas hidup seluruh warga Jakarta.",
    },
    {
      image: "/images/tpu.jpg",
      title: "Mengelola dengan Hati, Melayani dengan Hormat",
      description:
        "Menyediakan area pemakaman yang hijau, bersih, dan tertata rapi untuk memberikan ketenangan bagi keluarga yang ditinggalkan.",
    },
    {
      image: "/images/hutan-kota.png",
      title: "Ruang Terbuka Hijau Jakarta yang Nyaman, Lestari dan Terjangkau",
      description:
        "Komitmen kami memberikan pelayanan terbaik dengan sistem digital yang memudahkan masyarakat dalam mengakses berbagai informasi dan layanan.",
    },
  ]

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlay, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/75 to-green-700/45 z-10"></div>
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{slide.title}</h1>
                <p className="text-sm md:text-base mb-8 text-green-50 leading-relaxed">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 w-full max-w-2xl px-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari informasi makam, layanan, atau lokasi..."
            className="w-full py-2 px-4 pr-12 rounded-full text-gray-800 bg-white/95 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 placeholder-gray-500"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-700 hover:bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

//==================================================================
// KOMPONEN SERVICES SECTION
// Layanan utama yang disesuaikan dengan tema pemakaman
//==================================================================
const ServiceCard = ({ icon, title, description, href, action, onNavigate }) => (
  <div
    onClick={() => {
      if (action && onNavigate) {
        onNavigate(action)
      }
    }}
    className={`group bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${action ? "cursor-pointer" : ""} flex flex-col justify-between h-full`}
  >
    <div>
      <div className="text-green-700 mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-green-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
    <div className="mt-6 text-green-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
      Akses Layanan
      <ChevronRight className="w-4 h-4 ml-1" />
    </div>
  </div>
)

const ServicesSection = ({ onNavigate }) => {
  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Cek Data Makam",
      description: "Cari informasi lokasi makam, nama jenazah, dan status lahan secara real-time melalui sistem digital kami.",
      action: "cemetery-search",
    },
    {
      icon: <CalendarCheck className="w-12 h-12" />,
      title: "Jadwal Penggunaan Taman",
      description: "Lihat jadwal kegiatan, acara, atau pemanfaatan ruang terbuka hijau dan taman di wilayah DKI Jakarta..",
      action: "park-schedule",
    },
    {
      icon: <Trees className="w-12 h-12" />,
      title: "Permohonan Pemangkasan Pohon",
      description: "Ajukan permintaan pemangkasan pohon yang berisiko membahayakan atau mengganggu lingkungan sekitar.",
      action: "tree-application",
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Peta TPU dan RTH",
      description: "Jelajahi peta interaktif untuk menemukan lokasi Tempat Pemakaman Umum (TPU) dan Ruang Terbuka Hijau (RTH) di Jakarta.",
      action: "map",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Utama</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Kami menyediakan berbagai layanan digital yang memudahkan masyarakat dalam mengakses informasi dan layanan
            pemakaman di DKI Jakarta.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Berita dan Informasi
const NewsCard = ({ imageUrl, date, title, excerpt, category }) => (
  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
    <div className="relative overflow-hidden">
      <img
        src={imageUrl || "/placeholder.svg?height=300&width=400"}
        alt={title}
        className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">{category}</span>
      </div>
    </div>
    <div className="p-3">
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <Clock className="w-4 h-4 mr-2" />
        {date}
      </div>
      <h3 className="font-semibold text-base mb-3 text-gray-800 group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
      <button className="text-green-700 hover:text-green-800 text-base font-semibold transition-colors duration-200 flex items-center group">
        Baca Selengkapnya
        <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
      </button>
    </div>
  </article>
)

const NewsSection = () => {
  const newsItems = [
    {
      imageUrl: "/images/tpu-taman-kusir.jpg",
      date: "8 Januari 2025",
      title: "Peningkatan Fasilitas Taman Pemakaman Tanah Kusir",
      excerpt:
        "Dinas Pertamanan dan Pemakaman DKI Jakarta melakukan renovasi dan peningkatan fasilitas di Taman Pemakaman Tanah Kusir untuk memberikan kenyamanan lebih bagi pengunjung.",
      category: "Fasilitas",
    },
    {
      imageUrl: "/images/taman-langsat.jpg",
      date: "6 Januari 2025",
      title: "5 Taman di Jakarta yang Buka 24 Jam & Info Fasilitas",
      excerpt:
        "Pembukaan taman 24 jam di Jakarta ini sebagai bagian dari Quick Win 100 Hari Kinerja Gubernur dan Wakil Gubernur Jakarta. Kamu bisa mengajak keluarga atau teman untuk sejenak duduk-duduk di taman menikmati suasana alam dengan asri.",
      category: "Fasilitas",
    },
    {
      imageUrl: "/images/pembersihan-tpu.jpg",
      date: "4 Januari 2025",
      title: "Program Perawatan Makam Berkelanjutan",
      excerpt:
        "Inisiatif baru untuk perawatan makam berkelanjutan dengan melibatkan partisipasi masyarakat dalam menjaga kebersihan dan keindahan area pemakaman.",
      category: "Program",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Berita dan Informasi</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-3">
            Ikuti perkembangan terbaru dari kegiatan Dinas Pertamanan dan Pemakaman DKI Jakarta.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
        <div className="text-center">
          <button className="bg-green-700 text-white font-semibold text-base py-2 px-4 rounded-lg hover:bg-green-800 transition-all duration-200 inline-flex items-center transform hover:scale-105">
            Lihat Semua Berita
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}

//==================================================================
// KOMPONEN STATISTICS SECTION
// Grafik pelayanan pemakaman dengan filter periode
//==================================================================
const StatisticsSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month")
  const [selectedYear, setSelectedYear] = useState("2025")

  const periods = [
    { value: "week", label: "Mingguan" },
    { value: "month", label: "Bulanan" },
    { value: "quarter", label: "Triwulan" },
    { value: "year", label: "Tahunan" },
  ]

  const years = ["2023", "2024", "2025"]

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Total Pemakaman",
      value: "1,247",
      change: "+12%",
      trend: "up",
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Pengajuan Pemakaian Taman",
      value: "215",
      change: "-5%",
      trend: "down",
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: "Permohonan Pemangkasan Pohon",
      value: "734",
      change: "+8%",
      trend: "up",
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Permohonan Bibit Tanaman",
      value: "116",
      change: "-15%",
      trend: "up",
    },
  ]

  // Tambahkan data dummy grafik di dalam StatisticsSection
  const chartData = [
    { name: "Jan", pemakaman: 110, taman: 20, pohon: 55, bibit: 10 },
    { name: "Feb", pemakaman: 130, taman: 25, pohon: 50, bibit: 20 },
    { name: "Mar", pemakaman: 140, taman: 15, pohon: 60, bibit: 25 },
    { name: "Apr", pemakaman: 120, taman: 30, pohon: 45, bibit: 18 },
    { name: "Mei", pemakaman: 125, taman: 18, pohon: 65, bibit: 22 },
    { name: "Jun", pemakaman: 135, taman: 20, pohon: 58, bibit: 15 },
  ];

  const aggregateData = {
    week: [
      { name: "Mingguan", total: 370 },
    ],
    month: [
      { name: "Jan", total: 195 },
      { name: "Feb", total: 225 },
      { name: "Mar", total: 240 },
      { name: "Apr", total: 213 },
      { name: "Mei", total: 230 },
      { name: "Jun", total: 228 },
    ],
    quarter: [
      { name: "Q1", total: 660 },
      { name: "Q2", total: 671 },
    ],
    year: [
      { name: "2023", total: 1230 },
      { name: "2024", total: 1340 },
      { name: "2025", total: 1331 },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Statistik Pelayanan Pemakaman</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Data dan statistik pelayanan pemakaman untuk transparansi dan evaluasi kinerja layanan publik.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-start">
            <div className="flex items-center gap-4">
              <label className="text-gray-700 font-semibold">Periode:</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-gray-700 font-semibold">Tahun:</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-green-700">{stat.icon}</div>
                <div
                  className={`flex items-center text-sm font-semibold ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <TrendingUp className={`w-4 h-4 mr-1 ${stat.trend === "down" ? "rotate-180" : ""}`} />
                  {stat.change}
                </div>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Grafik Total Layanan {selectedPeriod === "month"
              ? "Bulanan"
              : selectedPeriod === "week"
                ? "Mingguan"
                : selectedPeriod === "quarter"
                  ? "Triwulan"
                  : "Tahunan"} {selectedYear}
          </h3>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={aggregateData[selectedPeriod]} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#047857" name="Total Layanan" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

//==================================================================
// KOMPONEN UTAMA LANDING PAGE
// Menggabungkan semua section
//==================================================================
export default function LandingPage({ onNavigate }) {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ServicesSection onNavigate={onNavigate} />
      <NewsSection />
      <StatisticsSection />
    </main>
  )
}