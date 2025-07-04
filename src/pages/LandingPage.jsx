import React from "react";

//==================================================================
// KOMPONEN HERO SECTION
// Didefinisikan di sini karena hanya dipakai di LandingPage
//==================================================================
const HeroSection = () => (
  <section className="hero-section text-white">
    <div className="container mx-auto px-6 py-24 md:py-32 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Mewujudkan Ruang Terbuka Hijau yang Nyaman dan Berkelanjutan
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
        Informasi dan layanan resmi dari Dinas Pertamanan dan Hutan Kota
        Provinsi DKI Jakarta.
      </p>
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari informasi, layanan, atau berita..."
            className="w-full py-3 px-5 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-green-300"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-700 hover:bg-green-800 text-white rounded-full p-2 w-10 h-10">
            <i className="fas fa-search"></i>
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
const ServiceCard = ({ icon, title, description }) => (
  <div className="icon-card bg-gray-50 p-6 rounded-lg text-center">
    <div className="text-4xl text-green-700 mb-4">
      <i className={`fas ${icon}`}></i>
    </div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: "fa-database",
      title: "Cek Data Makam",
      description: "Temukan informasi data makam di TPU seluruh DKI Jakarta.",
    },
    {
      icon: "fa-file-invoice-dollar",
      title: "Informasi Retribusi",
      description: "Lihat detail dan status pembayaran retribusi makam.",
    },
    {
      icon: "fa-book",
      title: "Izin Pemakaman",
      description: "Informasi alur dan persyaratan untuk izin pemakaman baru.",
    },
    {
      icon: "fa-map-marked-alt",
      title: "Peta TPU & RTH",
      description:
        "Jelajahi lokasi Taman Pemakaman Umum dan Ruang Terbuka Hijau.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Layanan Utama</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Akses cepat ke layanan-layanan yang paling sering dibutuhkan oleh
          masyarakat.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
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
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="text-sm text-gray-500">{date}</span>
      <h3 className="font-semibold text-lg my-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
      <a
        href={link}
        className="text-green-700 hover:text-green-900 font-semibold"
      >
        Baca Selengkapnya &rarr;
      </a>
    </div>
  </div>
);

const NewsSection = () => {
  const newsItems = [
    {
      imageUrl:
        "https://placehold.co/600x400/a0aec0/ffffff?text=Kegiatan+Penanaman",
      date: "18 Juli 2025",
      title: "Program Jumat Menanam di Hutan Kota Srengseng",
      excerpt: "Kegiatan ini bertujuan untuk menambah tutupan hijau...",
      link: "#",
    },
    {
      imageUrl:
        "https://placehold.co/600x400/718096/ffffff?text=Perawatan+Taman",
      date: "15 Juli 2025",
      title: "Revitalisasi Taman Suropati Selesai, Wajah Baru untuk Warga",
      excerpt:
        "Setelah melalui proses revitalisasi selama 3 bulan, Taman Suropati kini hadir...",
      link: "#",
    },
    {
      imageUrl: "https://placehold.co/600x400/4a5568/ffffff?text=Sosialisasi",
      date: "12 Juli 2025",
      title: "Sosialisasi Aturan Baru Retribusi Makam di Kecamatan Cipayung",
      excerpt: "Dinas Pertamanan dan Hutan Kota mengadakan sosialisasi...",
      link: "#",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Berita & Informasi Terkini
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          Ikuti perkembangan terbaru dari program dan kegiatan kami.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="bg-green-700 text-white font-bold py-3 px-8 rounded-full hover:bg-green-800 transition-all"
          >
            Lihat Semua Berita
          </a>
        </div>
      </div>
    </section>
  );
};

//==================================================================
// KOMPONEN UTAMA LANDING PAGE
// Menggabungkan semua section di atas
//==================================================================
export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <NewsSection />
    </main>
  );
}
