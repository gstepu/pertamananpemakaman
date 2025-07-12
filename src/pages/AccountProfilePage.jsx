"use client";
import { useState } from "react";

// --- DATA CONTOH (MOCK DATA) ---
const mockUserData = {
  fullName: "Budi Santoso",
  username: "budisantoso",
  email: "budi.santoso@email.com",
  phone: "081234567890",
  profilePicture: "https://placehold.co/150x150/22c55e/FFFFFF/png?text=BS",
};

const mockHistoryData = {
  peminjamanTaman: [
    {
      id: 1,
      type: "Permohonan Peminjaman Taman",
      parkName: "Taman Suropati",
      eventName: "Senam Pagi Bersama Warga",
      date: "2024-06-15",
      status: "Disetujui",
      refNumber: "APP-PARK-XYZ123",
      organizer: "Komunitas Warga Menteng",
      description:
        "Kegiatan senam pagi rutin setiap hari Minggu untuk meningkatkan kebugaran warga sekitar.",
      participants: 30,
    },
    {
      id: 2,
      type: "Permohonan Peminjaman Taman",
      parkName: "Taman Tebet",
      eventName: "Festival Komunitas Hijau",
      date: "2024-05-20",
      status: "Ditolak",
      reason:
        "Jadwal sudah penuh oleh acara lain yang telah disetujui sebelumnya.",
      refNumber: "APP-PARK-ABC789",
      organizer: "Yayasan Bumi Lestari",
      description:
        "Acara pameran produk ramah lingkungan dan workshop daur ulang.",
      participants: 150,
    },
  ],
  bibitTanaman: [
    {
      id: 3,
      type: "Permohonan Bibit Tanaman",
      location: "Jakarta Selatan",
      date: "2024-07-01",
      status: "Diproses",
      refNumber: "APP-SEED-QWE456",
      organizer: "Karang Taruna RW 05",
      description:
        "Program penghijauan di sepanjang bantaran kali untuk mencegah erosi.",
      participants: 20, // Diartikan sebagai jumlah anggota tim
      seedlingDetails: [
        { name: "Trembesi", qty: 5 },
        { name: "Mahoni", qty: 10 },
        { name: "Bougenville", qty: 15 },
      ],
    },
  ],
  pemangkasanPohon: [
    {
      id: 4,
      type: "Permohonan Pemangkasan Pohon",
      treeLocation: "Jl. Mawar No. 10, Cilandak",
      treeCount: 2,
      pruningReason: "Pohon Terlalu Rimbun dan Menutupi Lampu Jalan",
      date: "2024-04-10",
      status: "Disetujui",
      refNumber: "APP-PRUN-DEF321",
      organizer: "Budi Santoso (Perorangan)",
      description:
        "Dua pohon angsana di depan rumah sudah sangat rimbun dan dahannya mulai menyentuh kabel listrik serta menutupi penerangan jalan umum.",
      participants: 1, // Diartikan sebagai pemohon
    },
  ],
  santunanPohon: [
    {
      id: 5,
      type: "Permohonan Santunan Pohon Tumbang",
      claimObject: "Kerusakan Kendaraan",
      incidentDate: "2024-03-04",
      date: "2024-03-05",
      status: "Disetujui",
      refNumber: "APP-CLAI-MNO654",
      organizer: "Budi Santoso (Perorangan)",
      description:
        "Mobil Toyota Avanza (B 1234 XYZ) tertimpa dahan pohon mahoni saat diparkir di Jl. Raya Cilandak.",
      participants: 1,
    },
  ],
};

// Komponen Badge Status
const StatusBadge = ({ status }) => {
  const baseClasses = "inline-block px-2 py-1 rounded-full text-xs font-medium";
  let specificClasses = "";
  switch (status) {
    case "Disetujui":
      specificClasses = "bg-green-100 text-green-700";
      break;
    case "Ditolak":
      specificClasses = "bg-red-100 text-red-700";
      break;
    case "Diproses":
      specificClasses = "bg-yellow-100 text-yellow-700";
      break;
    default:
      specificClasses = "bg-gray-100 text-gray-800";
  }
  return <span className={`${baseClasses} ${specificClasses}`}>{status}</span>;
};

// --- PERUBAHAN UTAMA: Desain modal baru yang lebih detail ---
const HistoryDetailModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full">
        {/* Modal Header */}
        <div className="bg-[#2e7d32] text-white p-3 rounded-t-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Detail Pengajuan</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Judul & Status */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.eventName || item.type}
            </h3>
            <StatusBadge status={item.status} />
          </div>

          {/* Jadwal & Referensi */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-5 8v4m-2-4h4"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Jadwal & Referensi
            </h4>
            <div className="text-sm text-gray-600 space-y-1 pl-6">
              <p>Tgl Pengajuan: {item.date}</p>
              {item.incidentDate && <p>Tgl Kejadian: {item.incidentDate}</p>}
              <p>No. Referensi: {item.refNumber}</p>
            </div>
          </div>

          {/* Detail Spesifik */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Rincian
            </h4>
            <div className="text-sm text-gray-600 space-y-1 pl-6">
              {item.parkName && (
                <p>
                  Taman: <strong>{item.parkName}</strong>
                </p>
              )}
              {item.treeLocation && (
                <p>
                  Lokasi Pohon: <strong>{item.treeLocation}</strong>
                </p>
              )}
              {item.location && (
                <p>
                  Wilayah: <strong>{item.location}</strong>
                </p>
              )}
              {item.claimObject && (
                <p>
                  Objek Klaim: <strong>{item.claimObject}</strong>
                </p>
              )}
              {item.treeCount && (
                <p>
                  Jumlah Pohon: <strong>{item.treeCount}</strong>
                </p>
              )}
              {item.totalSeedlings && (
                <p>
                  Total Bibit: <strong>{item.totalSeedlings}</strong>
                </p>
              )}
              {item.seedlingDetails && (
                <ul className="list-disc pl-5 mt-1">
                  {item.seedlingDetails.map((d) => (
                    <li key={d.name}>
                      {d.name} ({d.qty} bibit)
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Penyelenggara/Pemohon */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Pemohon
            </h4>
            <div className="text-sm text-gray-600 pl-6">
              <p className="font-medium">{item.organizer}</p>
            </div>
          </div>

          {/* Deskripsi */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Deskripsi
            </h4>
            <p className="text-sm text-gray-600 pl-6">{item.description}</p>
          </div>

          {/* Alasan Penolakan (jika ada) */}
          {item.status === "Ditolak" && item.reason && (
            <div>
              <h4 className="text-sm font-medium text-red-700 mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
                Alasan Penolakan
              </h4>
              <p className="text-sm text-red-600 bg-red-50 p-2 rounded-md pl-6">
                {item.reason}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Komponen Utama Halaman Profil ---
const AccountProfilePage = ({ onNavigate }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState(mockUserData);
  const [profilePicPreview, setProfilePicPreview] = useState(
    formData.profilePicture
  );
  const [activeTab, setActiveTab] = useState("peminjamanTaman");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHistoryItem, setSelectedHistoryItem] = useState(null);

  const handleViewDetail = (item) => {
    setSelectedHistoryItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHistoryItem(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, profilePicture: file }));
      setProfilePicPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    console.log("Saving data:", formData);
    setIsEditMode(false);
    onNavigate("account-profile", "Profil berhasil diperbarui!");
  };

  const handleCancel = () => {
    setFormData(mockUserData);
    setProfilePicPreview(mockUserData.profilePicture);
    setIsEditMode(false);
  };

  const tabs = [
    { id: "peminjamanTaman", label: "Peminjaman Taman" },
    { id: "bibitTanaman", label: "Bibit Tanaman" },
    { id: "pemangkasanPohon", label: "Pemangkasan Pohon" },
    { id: "santunanPohon", label: "Santunan Pohon Tumbang" },
  ];

  const renderHistoryList = (historyItems) => {
    if (!historyItems || historyItems.length === 0) {
      return (
        <div className="text-center py-10 text-gray-500">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            Tidak Ada Riwayat
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Anda belum pernah membuat pengajuan jenis ini.
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {historyItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-800">
                  {item.eventName || item.type}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Tgl Pengajuan: {item.date}
                </p>
                <p className="text-sm text-gray-500">
                  No. Ref: {item.refNumber}
                </p>
              </div>
              <StatusBadge status={item.status} />
            </div>
            <div className="mt-3 border-t border-gray-100 pt-3 flex justify-end">
              <button
                onClick={() => handleViewDetail(item)}
                className="text-sm font-medium text-green-600 hover:text-green-800"
              >
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Profil Akun Anda
            </h1>
            <p className="text-gray-600">
              Kelola informasi akun dan lihat riwayat pengajuan Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                {!isEditMode ? (
                  <div className="text-center">
                    <img
                      src={profilePicPreview}
                      alt="Foto Profil"
                      className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-200 object-cover"
                    />
                    <h2 className="text-2xl font-bold text-gray-900">
                      {formData.fullName}
                    </h2>
                    <p className="text-gray-500 mb-6">@{formData.username}</p>
                    <div className="text-left space-y-4">
                      <div className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 mr-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{formData.email}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 mr-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span>{formData.phone}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsEditMode(true)}
                      className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 font-medium"
                    >
                      Edit Profil
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      Edit Profil
                    </h3>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <img
                        src={profilePicPreview}
                        alt="Preview"
                        className="w-32 h-32 rounded-full border-4 border-green-200 object-cover"
                      />
                      <label
                        htmlFor="profilePicture"
                        className="absolute -bottom-1 -right-1 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100"
                      >
                        <svg
                          className="w-4 h-4 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L16.732 3.732z"
                          />
                        </svg>
                        <input
                          type="file"
                          id="profilePicture"
                          name="profilePicture"
                          className="sr-only"
                          onChange={handleFileChange}
                          accept="image/*"
                        />
                      </label>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">
                          Email (tidak dapat diubah)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          disabled
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed sm:text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          No. Telepon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="mt-6 flex space-x-3">
                      <button
                        onClick={handleCancel}
                        className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200 font-medium"
                      >
                        Batal
                      </button>
                      <button
                        onClick={handleSave}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 font-medium"
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Riwayat Pengajuan
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Lacak semua permohonan yang telah Anda ajukan.
                  </p>
                </div>
                <div className="border-b border-gray-200 px-6">
                  <nav className="-mb-px flex space-x-6 overflow-x-auto">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`${
                          activeTab === tab.id
                            ? "border-green-600 text-green-700"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        } whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>
                <div className="p-6 bg-gray-50 rounded-b-xl">
                  {renderHistoryList(mockHistoryData[activeTab])}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HistoryDetailModal
        item={selectedHistoryItem}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default AccountProfilePage;
