"use client";

import { useState } from "react";

const ParkApplicationPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    selectedPark: "",
    eventName: "",
    organizerName: "",
    organizerType: "",
    contactPerson: "",
    email: "",
    phone: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    participants: "",
    eventType: "",
    description: "",
    equipment: "",
    specialRequirements: "",
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [parkSearchTerm, setParkSearchTerm] = useState("");
  const [isParkDropdownOpen, setIsParkDropdownOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // List of parks in DKI Jakarta
  const availableParks = [
    {
      id: 1,
      name: "Taman Wijaya Kusuma",
      location: "Jakarta Timur",
      area: "Pulogadung",
      facilities: ["Lapangan", "Gazebo", "Toilet", "Parkir"],
    },
    {
      id: 2,
      name: "Taman Suropati",
      location: "Jakarta Pusat",
      area: "Menteng",
      facilities: ["Amphitheater", "Jogging Track", "Toilet", "Parkir"],
    },
    {
      id: 3,
      name: "Taman Menteng",
      location: "Jakarta Pusat",
      area: "Menteng",
      facilities: ["Playground", "Lapangan", "Gazebo", "Toilet"],
    },
    {
      id: 4,
      name: "Taman Langsat",
      location: "Jakarta Selatan",
      area: "Kebayoran Baru",
      facilities: ["Lapangan", "Gazebo", "Toilet", "Parkir"],
    },
    {
      id: 5,
      name: "Taman Cattleya",
      location: "Jakarta Selatan",
      area: "Tomang",
      facilities: ["Lapangan", "Gazebo", "Toilet"],
    },
    {
      id: 6,
      name: "Taman Tebet",
      location: "Jakarta Selatan",
      area: "Tebet",
      facilities: ["Jogging Track", "Lapangan", "Toilet", "Parkir"],
    },
    {
      id: 7,
      name: "Taman Ayodya",
      location: "Jakarta Selatan",
      area: "Kebayoran Baru",
      facilities: ["Lapangan", "Gazebo", "Toilet", "Parkir"],
    },
    {
      id: 8,
      name: "Taman Waduk Pluit",
      location: "Jakarta Utara",
      area: "Pluit",
      facilities: ["Lapangan", "Gazebo", "Toilet", "Parkir", "Area Danau"],
    },
    {
      id: 9,
      name: "Taman Kota Intan",
      location: "Jakarta Utara",
      area: "Penjaringan",
      facilities: ["Lapangan", "Toilet", "Parkir"],
    },
    {
      id: 10,
      name: "Taman Anggrek",
      location: "Jakarta Barat",
      area: "Grogol Petamburan",
      facilities: ["Lapangan", "Gazebo", "Toilet", "Parkir"],
    },
    {
      id: 11,
      name: "Taman Tomang",
      location: "Jakarta Barat",
      area: "Tomang",
      facilities: ["Lapangan", "Jogging Track", "Toilet"],
    },
    {
      id: 12,
      name: "Taman Puring",
      location: "Jakarta Selatan",
      area: "Kebayoran Baru",
      facilities: ["Lapangan", "Gazebo", "Toilet", "Parkir"],
    },
  ];

  const eventTypes = [
    "Senam/Olahraga",
    "Seni dan Budaya",
    "Pendidikan",
    "Sosial/Komunitas",
    "Fotografi",
    "Pelatihan",
    "Gathering",
    "Lainnya",
  ];

  const organizerTypes = [
    "Individu",
    "Komunitas",
    "Organisasi",
    "Sekolah/Universitas",
    "Perusahaan",
    "Instansi Pemerintah",
  ];

  // Filter parks based on search term
  const filteredParks = availableParks.filter(
    (park) =>
      park.name.toLowerCase().includes(parkSearchTerm.toLowerCase()) ||
      park.location.toLowerCase().includes(parkSearchTerm.toLowerCase()) ||
      park.area.toLowerCase().includes(parkSearchTerm.toLowerCase())
  );

  const selectedParkData = availableParks.find(
    (park) => park.id.toString() === formData.selectedPark
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleParkSelect = (park) => {
    setFormData((prev) => ({
      ...prev,
      selectedPark: park.id.toString(),
    }));
    setParkSearchTerm("");
    setIsParkDropdownOpen(false);

    // Clear error if exists
    if (errors.selectedPark) {
      setErrors((prev) => ({
        ...prev,
        selectedPark: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.selectedPark) newErrors.selectedPark = "Taman wajib dipilih";
    if (!formData.eventName.trim())
      newErrors.eventName = "Nama acara wajib diisi";
    if (!formData.organizerName.trim())
      newErrors.organizerName = "Nama pengaju wajib diisi";
    if (!formData.organizerType)
      newErrors.organizerType = "Jenis pengaju wajib dipilih";
    if (!formData.contactPerson.trim())
      newErrors.contactPerson = "Nama penanggung jawab wajib diisi";
    if (!formData.email.trim()) newErrors.email = "Email wajib diisi";
    if (!formData.phone.trim()) newErrors.phone = "Nomor telepon wajib diisi";
    if (!formData.eventDate) newErrors.eventDate = "Tanggal acara wajib diisi";
    if (!formData.startTime) newErrors.startTime = "Waktu mulai wajib diisi";
    if (!formData.endTime) newErrors.endTime = "Waktu selesai wajib diisi";
    if (!formData.participants)
      newErrors.participants = "Jumlah peserta wajib diisi";
    if (!formData.eventType) newErrors.eventType = "Jenis acara wajib dipilih";
    if (!formData.description.trim())
      newErrors.description = "Deskripsi acara wajib diisi";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "Anda harus menyetujui syarat dan ketentuan";

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    // Phone validation
    if (formData.phone && !/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = "Format nomor telepon tidak valid";
    }

    // Date validation (must be future date)
    if (formData.eventDate) {
      const selectedDate = new Date(formData.eventDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.eventDate = "Tanggal acara harus di masa depan";
      }
    }

    // Time validation
    if (formData.startTime && formData.endTime) {
      if (formData.startTime >= formData.endTime) {
        newErrors.endTime = "Waktu selesai harus setelah waktu mulai";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Show confirmation modal instead of directly submitting
    setShowConfirmation(true);
  };

  const handleConfirmSubmit = async () => {
    setShowConfirmation(false);
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 2000);
  };

  const handleCancelSubmit = () => {
    setShowConfirmation(false);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onNavigate("park-schedule");
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Confirmation Modal Component
  // Confirmation Modal Component
  const ConfirmationModal = () => {
    if (!showConfirmation) return null;

    return (
      <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-sm w-full">
          {/* Modal Header (Warna diubah menjadi hijau) */}
          <div className="bg-green-600 text-white p-3 rounded-t-lg">
            <div className="flex items-center">
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              {/* Teks diubah menjadi "Permohonan" */}
              <h2 className="text-base font-semibold">Konfirmasi Permohonan</h2>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-4">
            <p className="text-gray-700 text-sm mb-3">
              {/* Teks diubah menjadi "Permohonan" */}
              Apakah Anda yakin ingin mengirim permohonan pemakaian taman dengan
              detail berikut?
            </p>

            {/* Summary Information (Warna diubah menjadi hijau) */}
            <div className="bg-green-50 rounded-lg p-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Taman:</span>
                <span className="text-gray-800">{selectedParkData?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Acara:</span>
                <span className="text-gray-800">{formData.eventName}</span>
              </div>
              <div className="flex justify-between">
                {/* Teks diubah menjadi "Pemohon" */}
                <span className="font-medium text-gray-600">Pemohon:</span>
                <span className="text-gray-800">{formData.organizerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Tanggal:</span>
                <span className="text-gray-800">
                  {formatDate(formData.eventDate)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Waktu:</span>
                <span className="text-gray-800">
                  {formData.startTime} - {formData.endTime} WIB
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Peserta:</span>
                <span className="text-gray-800">
                  {formData.participants} orang
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Jenis Acara:</span>
                <span className="text-gray-800">{formData.eventType}</span>
              </div>
            </div>

            <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-2">
                <svg
                  className="w-4 h-4 text-blue-600 mt-0.5"
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
                <div className="text-xs text-blue-800">
                  <p className="font-medium">Informasi Penting:</p>
                  <p>
                    {/* Teks diubah menjadi "Permohonan" */}
                    Setelah permohonan dikirim, Anda akan menerima konfirmasi
                    melalui email dalam 1-2 hari kerja. Pastikan semua informasi
                    sudah benar sebelum mengirim.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-gray-50 px-4 py-3 rounded-b-lg flex justify-end space-x-2">
            <button
              onClick={handleCancelSubmit}
              className="px-3 py-1.5 text-sm bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
            >
              Batal
            </button>
            <button
              onClick={handleConfirmSubmit}
              className="px-3 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center"
            >
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {/* Teks diubah menjadi "Permohonan" */}
              Ya, Kirim Permohonan
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Success Modal Component
  const SuccessModal = () => {
    if (!showSuccess) return null;

    return (
      <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
          <div className="bg-green-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold">
                {/* Teks diubah menjadi "Permohonan" */}
                Permohonan Berhasil Dikirim!
              </h2>
            </div>
          </div>
          <div className="p-6 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {/* Teks diubah menjadi "Permohonan" */}
                Terima kasih atas permohonan Anda
              </h3>
              <p className="text-gray-600 text-sm">
                {/* Teks diubah menjadi "Permohonan" */}
                Permohonan pemakaian <strong>
                  {selectedParkData?.name}
                </strong>{" "}
                untuk acara <strong>"{formData.eventName}"</strong> telah
                berhasil dikirim.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5"
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
                <div className="text-left">
                  <h4 className="font-medium text-blue-800 text-sm mb-1">
                    Langkah Selanjutnya:
                  </h4>
                  <ul className="text-xs text-blue-700 space-y-1">
                    {/* Teks diubah menjadi "Permohonan" */}
                    <li>• Tim kami akan meninjau permohonan Anda</li>
                    <li>
                      • Konfirmasi akan dikirim ke email:{" "}
                      <strong>{formData.email}</strong>
                    </li>
                    <li>• Proses persetujuan memakan waktu 1-2 hari kerja</li>
                    <li>
                      • Anda akan dihubungi jika diperlukan informasi tambahan
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-green-800">
                  Nomor Referensi: #
                  {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Simpan nomor referensi di atas untuk keperluan follow-up
            </p>
          </div>
          <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
            <div className="flex justify-center space-x-3">
              <button
                onClick={handleSuccessClose}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Kembali ke Jadwal
              </button>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Ajukan Lagi
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Form Content */}
        <div className="container mx-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                <h2 className="text-xl font-semibold mb-2">
                  Form Permohonan Acara
                </h2>
                <p className="text-green-100">
                  Lengkapi formulir di bawah ini untuk mengajukan Permohonan
                  pemakaian taman
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Park Selection Section */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Pilih Lokasi Taman
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Taman yang Ingin Dipinjam{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div
                          className={`w-full px-3 py-2 border rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 ${
                            errors.selectedPark
                              ? "border-red-500"
                              : "border-gray-300"
                          } ${selectedParkData ? "bg-white" : "bg-gray-50"}`}
                          onClick={() =>
                            setIsParkDropdownOpen(!isParkDropdownOpen)
                          }
                        >
                          {selectedParkData ? (
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-gray-900">
                                  {selectedParkData.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {selectedParkData.area},{" "}
                                  {selectedParkData.location}
                                </div>
                              </div>
                              <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500">
                                Pilih taman yang ingin dipinjam
                              </span>
                              <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* Dropdown */}
                        {isParkDropdownOpen && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-80 overflow-hidden">
                            {/* Search Input */}
                            <div className="p-3 border-b border-gray-200">
                              <div className="relative">
                                <input
                                  type="text"
                                  placeholder="Cari taman..."
                                  value={parkSearchTerm}
                                  onChange={(e) =>
                                    setParkSearchTerm(e.target.value)
                                  }
                                  className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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

                            {/* Park List */}
                            <div className="max-h-60 overflow-y-auto">
                              {filteredParks.length > 0 ? (
                                filteredParks.map((park) => (
                                  <div
                                    key={park.id}
                                    className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                                    onClick={() => handleParkSelect(park)}
                                  >
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1">
                                        <div className="font-medium text-gray-900">
                                          {park.name}
                                        </div>
                                        <div className="text-sm text-gray-500 mb-1">
                                          {park.area}, {park.location}
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                          {park.facilities.map(
                                            (facility, index) => (
                                              <span
                                                key={index}
                                                className="inline-block px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full"
                                              >
                                                {facility}
                                              </span>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div className="p-4 text-center text-gray-500">
                                  <svg
                                    className="w-8 h-8 mx-auto mb-2 text-gray-400"
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
                                  Taman tidak ditemukan
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      {errors.selectedPark && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.selectedPark}
                        </p>
                      )}

                      {/* Selected Park Info */}
                      {selectedParkData && (
                        <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex items-start space-x-3">
                            <svg
                              className="w-5 h-5 text-green-600 mt-0.5"
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
                            <div>
                              <h4 className="font-medium text-green-800">
                                Fasilitas Tersedia:
                              </h4>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {selectedParkData.facilities.map(
                                  (facility, index) => (
                                    <span
                                      key={index}
                                      className="inline-block px-2 py-1 text-xs bg-green-200 text-green-800 rounded-full"
                                    >
                                      {facility}
                                    </span>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Event Information Section */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2"
                      />
                    </svg>
                    Informasi Acara
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Acara <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.eventName
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Contoh: Senam Pagi Bersama"
                      />
                      {errors.eventName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.eventName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Acara <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.eventType
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Pilih jenis acara</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.eventType && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.eventType}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Deskripsi Acara <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.description
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Jelaskan detail acara yang akan dilaksanakan..."
                      />
                      {errors.description && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Organizer Information Section */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
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
                    Informasi Pemohon
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Pemohon/Organisasi{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="organizerName"
                        value={formData.organizerName}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.organizerName
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Nama lengkap atau nama organisasi"
                      />
                      {errors.organizerName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.organizerName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Pemohon <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="organizerType"
                        value={formData.organizerType}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.organizerType
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="">Pilih jenis Pemohon</option>
                        {organizerTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.organizerType && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.organizerType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Penanggung Jawab <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.contactPerson
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Nama penanggung jawab acara"
                      />
                      {errors.contactPerson && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.contactPerson}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="email@contoh.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="08xxxxxxxxxx"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Schedule Information Section */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Jadwal Acara
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tanggal Acara <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.eventDate
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.eventDate && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.eventDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Waktu Mulai <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.startTime
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.startTime && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.startTime}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Waktu Selesai <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.endTime ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.endTime && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.endTime}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jumlah Peserta <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="participants"
                        value={formData.participants}
                        onChange={handleInputChange}
                        min="1"
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.participants
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Jumlah peserta"
                      />
                      {errors.participants && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.participants}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Information Section */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
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
                    Informasi Tambahan
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Peralatan yang Dibutuhkan
                      </label>
                      <textarea
                        name="equipment"
                        value={formData.equipment}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Contoh: Sound system, kursi, tenda, dll. (Kosongkan jika tidak ada)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kebutuhan Khusus
                      </label>
                      <textarea
                        name="specialRequirements"
                        value={formData.specialRequirements}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Contoh: Akses listrik, area parkir khusus, dll. (Kosongkan jika tidak ada)"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <div className="text-sm">
                      <label className="font-medium text-gray-700">
                        Saya menyetujui syarat dan ketentuan{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <p className="text-gray-600 mt-1">
                        Dengan mencentang kotak ini, saya menyatakan bahwa
                        informasi yang diberikan adalah benar dan saya bersedia
                        mengikuti semua aturan dan ketentuan yang berlaku untuk
                        pemakaian taman.
                      </p>
                      {errors.agreeTerms && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.agreeTerms}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={() => onNavigate("home")}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      "Kirim Permohonan"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Confirmation Modal */}
      <ConfirmationModal />

      {/* Success Modal */}
      <SuccessModal />
    </div>
  );
};

export default ParkApplicationPage;
