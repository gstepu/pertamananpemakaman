"use client";

//==================================================================
// KOMPONEN HERO SECTION
// Didefinisikan di sini karena hanya dipakai di LandingPage
//==================================================================
const HeroSection = () => (
  <section className="bg-gradient-to-br from-green-700 to-green-800 text-white relative">
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Layanan Digital Dinas Pertamanan dan Hutan Kota DKI Jakarta
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-green-50">
        Akses mudah untuk layanan pemakaian taman, informasi jadwal acara, dan
        berbagai layanan digital lainnya.
      </p>
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari layanan, taman, atau informasi..."
            className="w-full py-4 px-6 pr-14 rounded-full text-gray-800 bg-white shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 focus:shadow-xl placeholder-gray-500 border-2 border-white/20"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-700 hover:bg-green-800 text-white rounded-full p-3 w-12 h-12 shadow-lg transition-all duration-200 hover:scale-105">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
);

//==================================================================
// KOMPONEN SERVICES SECTION
// Didefinisikan di sini karena hanya dipakai di LandingPage
//==================================================================
const ServiceCard = ({
  icon,
  title,
  description,
  href,
  action,
  onNavigate,
}) => (
  <div
    onClick={() => {
      if (action && onNavigate) {
        onNavigate(action);
      }
    }}
    className={`block bg-white p-6 rounded-lg text-center hover:shadow-xl hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
      action ? "cursor-pointer" : ""
    }`}
  >
    <div className="text-4xl text-green-700 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const ServicesSection = ({ onNavigate }) => {
  const services = [
    {
      icon: (
        <svg
          className="w-10 h-10 mx-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      title: "Jadwal Acara Taman",
      description:
        "Lihat jadwal dan ajukan pemakaian taman untuk berbagai kegiatan.",
      href: "#park-schedule",
      action: "park-schedule",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 mx-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Informasi Retribusi",
      description:
        "Lihat detail dan status pembayaran retribusi pemakaian fasilitas.",
      href: "#retribusi",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 mx-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Perizinan Kegiatan",
      description:
        "Informasi persyaratan dan proses pengajuan izin kegiatan di taman.",
      href: "#perizinan",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 mx-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Peta Lokasi Taman",
      description: "Jelajahi lokasi dan fasilitas taman-taman di DKI Jakarta.",
      href: "#peta-taman",
      action: "map",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Layanan Digital
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Akses mudah ke berbagai layanan digital yang tersedia untuk masyarakat
          DKI Jakarta.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

//==================================================================
// KOMPONEN NEWS SECTION
// Didefinisikan di sini karena hanya dipakai di LandingPage
//==================================================================
const NewsCard = ({ imageUrl, date, title, excerpt, link }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <img
      src={imageUrl || "/placeholder.svg"}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <span className="text-sm text-green-600 font-medium">{date}</span>
      <h3 className="font-semibold text-lg my-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
      <a
        href={link}
        className="text-green-700 hover:text-green-800 font-semibold transition-colors duration-200 flex items-center"
      >
        Baca Selengkapnya
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  </div>
);

const NewsSection = () => {
  const newsItems = [
    {
      imageUrl:
        "https://placehold.co/600x400/047857/ffffff?text=Kegiatan+Penanaman",
      date: "5 Januari 2025",
      title: "Program Jumat Menanam di Hutan Kota Srengseng",
      excerpt:
        "Kegiatan penanaman pohon rutin setiap hari Jumat untuk menambah tutupan hijau di Jakarta...",
      link: "#",
    },
    {
      imageUrl:
        "https://placehold.co/600x400/065f46/ffffff?text=Revitalisasi+Taman",
      date: "3 Januari 2025",
      title: "Revitalisasi Taman Suropati Selesai dengan Wajah Baru",
      excerpt:
        "Setelah melalui proses revitalisasi selama 3 bulan, Taman Suropati kini hadir dengan fasilitas yang lebih lengkap...",
      link: "#",
    },
    {
      imageUrl:
        "https://placehold.co/600x400/064e3b/ffffff?text=Sosialisasi+Layanan",
      date: "1 Januari 2025",
      title: "Sosialisasi Layanan Digital Pemakaian Taman",
      description:
        "Dinas Pertamanan dan Hutan Kota mengadakan sosialisasi layanan digital untuk kemudahan masyarakat...",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Berita & Informasi Terkini
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          Ikuti perkembangan terbaru dari program dan kegiatan Dinas Pertamanan
          dan Hutan Kota DKI Jakarta.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate("news")}
            className="bg-green-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-800 transition-all duration-200 inline-flex items-center"
          >
            Lihat Semua Berita
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

//==================================================================
// KOMPONEN UTAMA LANDING PAGE
// Menggabungkan semua section di atas
//==================================================================
export default function LandingPage({ onNavigate }) {
  return (
    <main>
      <HeroSection />
      <ServicesSection onNavigate={onNavigate} />
      <NewsSection />
    </main>
  );
}
