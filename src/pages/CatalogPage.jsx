"use client";

import { useState } from "react";

// Komponen ConfirmationModal (tidak ada perubahan)
const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl p-6 m-4 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-6">{children}</p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            Ya, Unduh
          </button>
        </div>
      </div>
    </div>
  );
};

const CatalogPage = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data produk dengan path gambar yang sudah diperbarui
  const products = [
    {
      id: 1,
      name: "Bibit Alpukat",
      price: 100000,
      category: "bibit-buah",
      image: "/images/alpukat.jpeg",
      description: "Bibit alpukat dengan tinggi 100-120 cm",
      details: "Produk KTH Karya Mandiri Bersama.",
      contact: {
        whatsapp: "081391230321",
        phone: "083808850563",
      },
      inStock: true,
      specifications: [
        "Tinggi: 100-120 cm",
        "Umur: 6-8 bulan",
        "Siap tanam",
        "Sudah berbuah dalam 2-3 tahun",
      ],
    },
    {
      id: 2,
      name: "Bibit Mangrove",
      price: 15000,
      category: "bibit-hutan",
      image: "/images/mangrove.jpeg",
      description:
        "Tanaman Rhizopora spp. setinggi 80-100 cm yang siap untuk ditanam.",
      details: "Produk KTH Flora Mangrove",
      contact: {
        whatsapp: "081314748740",
        phone: "085282820977",
      },
      shopeeLink: "https://shopee.co.id/warungkth",
      inStock: true,
      specifications: [
        "Tinggi: 80-100 cm",
        "Jenis: Rhizopora spp.",
        "Cocok untuk area pantai",
        "Tahan air asin",
      ],
    },
    {
      id: 3,
      name: "Bibit Mahoni",
      price: 25000,
      category: "bibit-hutan",
      image: "/images/mahoni.jpeg",
      description: "Bibit mahoni berkualitas tinggi untuk penghijauan",
      details: "Produk KTH Hijau Lestari",
      contact: {
        whatsapp: "081234567890",
        phone: "082345678901",
      },
      inStock: true,
      specifications: [
        "Tinggi: 50-70 cm",
        "Umur: 4-6 bulan",
        "Cocok untuk penghijauan",
        "Tumbuh cepat",
      ],
    },
    {
      id: 4,
      name: "Bibit Jambu Air",
      price: 75000,
      category: "bibit-buah",
      image: "/images/jambu air.jpeg",
      description: "Bibit jambu air unggul siap tanam",
      details: "Produk KTH Buah Nusantara",
      contact: {
        whatsapp: "081345678912",
        phone: "082456789123",
      },
      inStock: true,
      specifications: [
        "Tinggi: 80-100 cm",
        "Varietas unggul",
        "Berbuah dalam 1-2 tahun",
        "Buah manis dan segar",
      ],
    },
    {
      id: 5,
      name: "Bibit Trembesi",
      price: 35000,
      category: "bibit-hutan",
      image: "/images/trembesi.jpeg",
      description: "Bibit trembesi untuk peneduh dan penghijauan kota",
      details: "Produk KTH Urban Forest",
      contact: {
        whatsapp: "081456789234",
        phone: "082567890345",
      },
      inStock: false,
      specifications: [
        "Tinggi: 60-80 cm",
        "Pohon peneduh",
        "Cocok untuk taman kota",
        "Daun rindang",
      ],
    },
    {
      id: 6,
      name: "Bibit Rambutan",
      price: 85000,
      category: "bibit-buah",
      image: "/images/rambutan.jpeg",
      description: "Bibit rambutan varietas unggul",
      details: "Produk KTH Buah Tropika",
      contact: {
        whatsapp: "081567890345",
        phone: "082678901456",
      },
      inStock: true,
      specifications: [
        "Tinggi: 90-110 cm",
        "Varietas binjai",
        "Buah besar dan manis",
        "Berbuah dalam 3-4 tahun",
      ],
    },
  ];

  // Fungsi-fungsi lain (categories, filteredProducts, startDownload, formatPrice) tidak berubah...
  const categories = [
    { id: "all", name: "Semua Produk", count: products.length },
    {
      id: "bibit-buah",
      name: "Bibit Buah",
      count: products.filter((p) => p.category === "bibit-buah").length,
    },
    {
      id: "bibit-hutan",
      name: "Bibit Hutan",
      count: products.filter((p) => p.category === "bibit-hutan").length,
    },
  ];

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const startDownload = () => {
    const link = document.createElement("a");
    // 1. Path diubah ke file catalog.pdf
    link.href = "/files/catalog.pdf";
    // 2. Nama file unduhan diubah menjadi catalog.pdf
    link.download = "catalog.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsModalOpen(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const ProductCard = ({ product }) => (
    // 1. Tambahkan `flex flex-col` untuk membuat kartu menjadi flex container vertikal
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
      <div className="relative">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Stok Habis
          </div>
        )}
        <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          {product.category === "bibit-buah" ? "Bibit Buah" : "Bibit Hutan"}
        </div>
      </div>

      {/* 2. Tambahkan `flex flex-col flex-grow` agar bagian ini mengisi sisa ruang */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-green-600 mb-2">
          {formatPrice(product.price)}
        </p>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <p className="text-gray-500 text-xs mb-3">{product.details}</p>

        {/* Specifications */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-700 text-sm mb-2">
            Spesifikasi:
          </h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {product.specifications.map((spec, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-3 h-3 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {spec}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="border-t pt-3 mb-4">
          <p className="text-xs text-gray-500 mb-2">Hubungi Penjual:</p>
          <div className="flex flex-wrap gap-2">
            <a
              href={`https://wa.me/${product.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600 transition-colors"
            >
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`tel:${product.contact.phone}`}
              className="flex items-center bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600 transition-colors"
            >
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Telepon
            </a>
          </div>
          {product.shopeeLink && (
            <a
              href={product.shopeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-orange-500 text-white px-2 py-1 rounded text-xs hover:bg-orange-600 transition-colors mt-2 w-fit"
            >
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9 5.16.74 9-3.45 9-9V7l-10-5z" />
              </svg>
              Shopee
            </a>
          )}
        </div>

        {/* 3. Tambahkan `mt-auto` untuk mendorong tombol ini ke bawah */}
        <button
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors mt-auto ${
            product.inStock
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!product.inStock}
        >
          {product.inStock ? "Hubungi Penjual" : "Stok Habis"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Konten lainnya (Hero, Filter, Grid) tidak ada perubahan */}
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Katalog Produk KTH Jakarta 2024
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Produk berkualitas dari Kelompok Tani Hutan DKI Jakarta
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center mx-auto shadow-md hover:shadow-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-4-4m4 4l4-4m-6 8h8a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z"
                />
              </svg>
              Download Katalog PDF
            </button>
          </div>
        </div>

        <div className="container mx-auto px-6 pb-12">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cari Produk
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari bibit atau tanaman..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <svg
                    className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
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
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urutkan
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="name">Nama A-Z</option>
                  <option value="price-low">Harga Terendah</option>
                  <option value="price-high">Harga Tertinggi</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-600">
              Menampilkan {filteredProducts.length} produk
              {selectedCategory !== "all" &&
                ` dalam kategori "${
                  categories.find((c) => c.id === selectedCategory)?.name
                }"`}
              {searchQuery && ` untuk pencarian "${searchQuery}"`}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
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
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Produk tidak ditemukan
              </h3>
              <p className="text-gray-500">
                Coba ubah kata kunci pencarian atau filter kategori
              </p>
            </div>
          )}
        </div>
      </main>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={startDownload}
        title="Konfirmasi Unduhan"
      >
        Apakah Anda yakin ingin mengunduh file
        "Katalog-Produk-KTH-Jakarta-2024.pdf"?
      </ConfirmationModal>
    </div>
  );
};

export default CatalogPage;
