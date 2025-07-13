"use client";

import { useState } from "react";

// Helper function to format file size
const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const FallenTreeClaimPage = ({ onNavigate = () => {} }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    nik: "",
    address: "",
    phone: "",
    claimObjectType: "", // 'meninggal', 'luka', 'bangunan', 'kendaraan'
    isInsured: "", // 'ya' atau 'tidak'
    agreeTerms: false,
  });

  const [files, setFiles] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const claimObjectTypes = [
    { id: "meninggal", name: "Korban Jiwa (Meninggal Dunia)" },
    { id: "luka", name: "Korban Jiwa (Luka-luka)" },
    { id: "bangunan", name: "Kerusakan Bangunan" },
    { id: "kendaraan", name: "Kerusakan Kendaraan" },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files: inputFiles } = e.target;
    if (inputFiles.length > 0) {
      setFiles((prev) => ({ ...prev, [name]: inputFiles[0] }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }
  };

  const getRequiredFiles = (type) => {
    // Defines all possible file inputs
    const allFiles = {
      suratPermohonan: {
        name: "suratPermohonan",
        label: "Surat Permohonan",
        required: true,
        description: "Ditujukan kepada Kepala Dinas.",
      },
      dokumentasi: {
        name: "dokumentasi",
        label: "Dokumentasi Kejadian",
        required: true,
        description: "Maksimal 5 foto.",
      },
      suratPolisi: {
        name: "suratPolisi",
        label: "Surat Keterangan dari Kepolisian",
        required: true,
      },
      ktpKorban: {
        name: "ktpKorban",
        label: "Fotocopy KTP Korban",
        required: true,
      },
      suratKuasa: {
        name: "suratKuasa",
        label: "Surat Kuasa",
        required: true,
        description: "Bermeterai Rp 10.000,-",
      },
      ktpPemohon: {
        name: "ktpPemohon",
        label: "Fotocopy KTP Pemohon",
        required: true,
      },
      rekSukuDinas: {
        name: "rekSukuDinas",
        label: "Surat Rekomendasi Suku Dinas",
        required: true,
        description: "Sesuai lokasi kejadian.",
      },
      suratKematian: {
        name: "suratKematian",
        label: "Surat Keterangan Kematian dari RS",
        required: true,
      },
      rekapBiaya: {
        name: "rekapBiaya",
        label: "Rekapitulasi Biaya Pengobatan RS",
        required: false,
      },
      suratVisum: {
        name: "suratVisum",
        label: "Surat Visum Dokter",
        required: true,
      },
      formKlaim: {
        name: "formKlaim",
        label: "Form Klaim Santunan",
        required: true,
        description: "Diisi lengkap dan ditandatangani.",
      },
      ktpPemilik: {
        name: "ktpPemilik",
        label: "Fotocopy KTP Pemilik",
        required: true,
      },
      invoice: { name: "invoice", label: "Invoice", required: true },
      stnkBpkbSim: {
        name: "stnkBpkbSim",
        label: "Fotocopy STNK, BPKB, dan SIM",
        required: true,
      },
      pernyataanAsuransi: {
        name: "pernyataanAsuransi",
        label: "Surat Pernyataan Kendaraan Tidak Diasuransikan",
        required: true,
        description: "Bermeterai Rp 10.000,-",
      },
    };

    // Returns a specific list of files based on the claim type
    switch (type) {
      case "meninggal":
        return [
          allFiles.suratPermohonan,
          allFiles.dokumentasi,
          allFiles.suratPolisi,
          allFiles.ktpKorban,
          allFiles.suratKuasa,
          allFiles.ktpPemohon,
          allFiles.rekSukuDinas,
          allFiles.suratKematian,
          allFiles.rekapBiaya,
          allFiles.suratVisum,
          allFiles.formKlaim,
        ].map((f) => ({ ...f, required: f.required !== false })); // Default to required
      case "luka":
        return [
          allFiles.suratPermohonan,
          allFiles.dokumentasi,
          allFiles.suratPolisi,
          allFiles.ktpKorban,
          {
            ...allFiles.suratKuasa,
            required: false,
            label: "Surat Kuasa (jika dikuasakan)",
          },
          {
            ...allFiles.ktpPemohon,
            required: false,
            label: "KTP Pemohon (jika dikuasakan)",
          },
          allFiles.rekSukuDinas,
          allFiles.suratVisum,
          { ...allFiles.rekapBiaya, required: true },
          allFiles.formKlaim,
        ];
      case "bangunan":
        return [
          allFiles.suratPermohonan,
          allFiles.dokumentasi,
          allFiles.suratPolisi,
          { ...allFiles.ktpPemilik, label: "Fotocopy KTP Pemilik Bangunan" },
          {
            ...allFiles.suratKuasa,
            required: false,
            label: "Surat Kuasa (jika dikuasakan)",
          },
          {
            ...allFiles.ktpPemohon,
            required: false,
            label: "KTP Pemohon (jika dikuasakan)",
          },
          allFiles.rekSukuDinas,
          { ...allFiles.invoice, description: "Dari toko bangunan/material" },
          allFiles.formKlaim,
        ];
      case "kendaraan":
        return [
          allFiles.suratPermohonan,
          allFiles.dokumentasi,
          allFiles.suratPolisi,
          allFiles.stnkBpkbSim,
          { ...allFiles.ktpPemilik, label: "Fotocopy KTP Pemilik Kendaraan" },
          {
            ...allFiles.suratKuasa,
            required: false,
            label: "Surat Kuasa (jika dikuasakan)",
          },
          {
            ...allFiles.ktpPemohon,
            required: false,
            label: "KTP Pemohon (jika dikuasakan)",
          },
          allFiles.rekSukuDinas,
          allFiles.pernyataanAsuransi,
          {
            ...allFiles.invoice,
            label: "Invoice Perbaikan dari Bengkel Resmi",
            description: undefined,
          },
          allFiles.formKlaim,
        ];
      default:
        return [];
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Nama lengkap wajib diisi";
    if (!formData.nik.trim() || !/^\d{16}$/.test(formData.nik))
      newErrors.nik = "NIK harus terdiri dari 16 digit angka";
    if (!formData.address.trim()) newErrors.address = "Alamat wajib diisi";
    if (!formData.phone.trim()) newErrors.phone = "Nomor telepon wajib diisi";
    if (!formData.claimObjectType)
      newErrors.claimObjectType = "Objek klaim wajib dipilih";
    if (!formData.isInsured)
      newErrors.isInsured = "Status asuransi wajib dipilih";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "Anda harus menyetujui syarat dan ketentuan";

    const requiredFiles = getRequiredFiles(formData.claimObjectType);
    requiredFiles.forEach(({ name, label, required }) => {
      if (required && !files[name]) {
        newErrors[name] = `${label} wajib diunggah`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmation(true);
    }
  };

  const handleConfirmSubmit = () => {
    setShowConfirmation(false);
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", { formData, files });
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 2000);
  };

  const renderFileUploads = () => {
    const fileInputs = getRequiredFiles(formData.claimObjectType);

    if (fileInputs.length === 0) {
      return (
        <div className="text-center text-gray-500 py-4 md:col-span-2">
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
            Pilih Objek Klaim
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Pilih objek klaim untuk melihat daftar berkas yang perlu diunggah.
          </p>
        </div>
      );
    }

    return fileInputs.map(({ name, label, description, required }) => (
      <FileInput
        key={name}
        name={name}
        label={label}
        description={description}
        required={required}
        file={files[name]}
        onChange={handleFileChange}
        error={errors[name]}
      />
    ));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
              <h2 className="text-xl font-semibold mb-2">
                Form Klaim Santunan Pohon Tumbang
              </h2>
              <p className="text-green-100">
                Lengkapi formulir sesuai data pada panduan untuk mengajukan
                klaim santunan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-8">
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
                  1. Data Diri & Objek Klaim
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <InputField
                    name="fullName"
                    label="Nama Lengkap (sesuai KTP)"
                    value={formData.fullName}
                    error={errors.fullName}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama lengkap Anda"
                  />
                  <InputField
                    name="nik"
                    label="NIK (sesuai KTP)"
                    value={formData.nik}
                    error={errors.nik}
                    onChange={handleInputChange}
                    placeholder="Masukkan 16 digit NIK"
                  />
                  <div className="md:col-span-2">
                    <InputField
                      as="textarea"
                      name="address"
                      label="Alamat Lengkap (sesuai KTP)"
                      value={formData.address}
                      error={errors.address}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Masukkan alamat lengkap sesuai KTP"
                    />
                  </div>
                  <InputField
                    name="phone"
                    label="No. Telepon/HP (terhubung WhatsApp)"
                    value={formData.phone}
                    error={errors.phone}
                    onChange={handleInputChange}
                    placeholder="Contoh: 081234567890"
                  />
                  <InputField
                    as="select"
                    name="claimObjectType"
                    label="Objek yang Diajukan Ganti Rugi"
                    value={formData.claimObjectType}
                    error={errors.claimObjectType}
                    onChange={handleInputChange}
                  >
                    <option value="">-- Pilih Objek Klaim --</option>
                    {claimObjectTypes.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.name}
                      </option>
                    ))}
                  </InputField>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apakah objek diasuransikan?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="isInsured"
                          value="ya"
                          checked={formData.isInsured === "ya"}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">Ya</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="isInsured"
                          value="tidak"
                          checked={formData.isInsured === "tidak"}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Tidak
                        </span>
                      </label>
                    </div>
                    {errors.isInsured && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.isInsured}
                      </p>
                    )}
                  </div>
                </div>
              </div>

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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  2. Unggah Berkas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                  {renderFileUploads()}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <div className="text-sm">
                    <label
                      htmlFor="agreeTerms"
                      className="font-medium text-gray-700"
                    >
                      Saya menyetujui syarat dan ketentuan{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <p className="text-gray-600 mt-1">
                      Saya menyatakan bahwa seluruh data dan dokumen yang
                      diunggah adalah benar dan dapat dipertanggungjawabkan
                      secara hukum.
                    </p>
                    {errors.agreeTerms && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.agreeTerms}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
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
                    "Kirim Klaim"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {showConfirmation && (
        <ConfirmationModal
          onConfirm={handleConfirmSubmit}
          onClose={() => setShowConfirmation(false)}
        />
      )}
      {showSuccess && (
        <SuccessModal
          onClose={() => {
            setShowSuccess(false);
            onNavigate("home");
          }}
        />
      )}
    </div>
  );
};

// Reusable InputField component
const InputField = ({ as = "input", name, label, error, ...props }) => {
  const Element = as;
  const errorClass = error
    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
    : "border-gray-300 focus:border-green-500 focus:ring-green-500";
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}{" "}
        {props.required !== false && <span className="text-red-500">*</span>}
      </label>
      <Element
        id={name}
        name={name}
        {...props}
        className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm ${errorClass}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

// --- MODIFIED FILE INPUT COMPONENT ---
const FileInput = ({
  name,
  label,
  description,
  required,
  file,
  onChange,
  error,
}) => {
  const isUploaded = !!file;
  const borderColor = error ? "border-red-400" : "border-gray-300";

  const handlePreview = (e) => {
    e.preventDefault(); // Prevent default button behavior
    if (file) {
      const url = URL.createObjectURL(file);
      window.open(url, "_blank");
    }
  };

  return (
    <div className={`p-3 border ${borderColor} rounded-lg`}>
      <div className="flex items-center space-x-3">
        <label htmlFor={name} className="cursor-pointer">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              isUploaded ? "bg-green-600" : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {isUploaded ? (
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
            ) : (
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            )}
          </div>
          <input
            id={name}
            name={name}
            type="file"
            className="sr-only"
            onChange={onChange}
            accept="image/*,application/pdf"
          />
        </label>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-800">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </p>
          {isUploaded ? (
            <div className="text-xs text-gray-500 truncate" title={file.name}>
              {file.name} ({formatFileSize(file.size)})
            </div>
          ) : (
            <div className="text-xs text-gray-500">
              {description || "Unggah berkas Anda"}
            </div>
          )}
        </div>
        <div className="ml-auto flex-shrink-0">
          {isUploaded ? (
            <button
              type="button"
              onClick={handlePreview}
              className="px-3 py-1.5 text-xs font-medium bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50"
            >
              Lihat
            </button>
          ) : (
            <label
              htmlFor={name}
              className="cursor-pointer px-3 py-1.5 text-xs font-medium bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50"
            >
              Pilih File
            </label>
          )}
        </div>
      </div>
      {error && <p className="text-red-500 text-xs mt-1.5">{error}</p>}
    </div>
  );
};

// --- MODAL COMPONENTS (Styling updated for consistency) ---

const ConfirmationModal = ({ onConfirm, onClose }) => (
  <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg shadow-xl max-w-sm w-full">
      <div className="bg-green-600 text-white p-4 rounded-t-lg">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 mr-2"
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
          <h2 className="text-lg font-semibold">Konfirmasi Pengiriman</h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 text-sm mb-4">
          Pastikan semua data dan berkas yang Anda unggah sudah benar. Apakah
          Anda yakin ingin melanjutkan?
        </p>
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
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
              <p>
                Setelah klaim dikirim, tim kami akan melakukan verifikasi.
                Proses ini mungkin memerlukan beberapa hari kerja.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-4 py-3 rounded-b-lg flex justify-end space-x-3">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Periksa Kembali
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
        >
          <svg
            className="w-4 h-4 mr-1.5"
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
          Ya, Kirim
        </button>
      </div>
    </div>
  </div>
);

const SuccessModal = ({ onClose }) => (
  <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
      <div className="bg-green-600 p-4 rounded-t-lg flex items-center justify-center">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white"
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
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Klaim Terkirim!
        </h3>
        <p className="text-gray-600 mb-6">
          Terima kasih. Klaim Anda telah berhasil dikirim dan akan segera kami
          proses. Tim kami akan menghubungi Anda untuk verifikasi lebih lanjut.
        </p>
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
        <button
          onClick={onClose}
          className="w-full px-6 py-2.5 bg-green-600 text-white font-medium text-sm rounded-lg hover:bg-green-700 transition-colors"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  </div>
);

export default FallenTreeClaimPage;
