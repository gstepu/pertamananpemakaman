"use client";

import { useState } from "react";

const RegisterPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Hapus error saat pengguna mulai mengetik
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // 1. Logika validasi diperbarui untuk semua field
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Nama lengkap wajib diisi.";
    if (!formData.email) newErrors.email = "Email wajib diisi.";
    if (!formData.username) newErrors.username = "Username wajib diisi.";
    if (!formData.phone) newErrors.phone = "Nomor telepon wajib diisi.";
    if (!formData.password) newErrors.password = "Password wajib diisi.";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword =
        "Password dan konfirmasi password tidak cocok.";
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Anda harus menyetujui syarat & ketentuan.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    setTimeout(() => {
      console.log("Register data:", formData);
      onNavigate(
        "home",
        "Registrasi berhasil! Cek email Anda untuk verifikasi."
      );
    }, 2000);
  };

  // Helper untuk kelas error
  const errorClass = (field) =>
    errors[field]
      ? "border-red-500 focus:ring-red-500"
      : "border-gray-300 focus:ring-green-500";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center">
              <img
                src="https://placehold.co/60x60/ffffff/004a26?text=DKI"
                alt="Logo DKI"
                className="w-12 h-12"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Daftar Member Baru
          </h2>
          <p className="text-gray-600">
            Bergabunglah dengan layanan digital kami
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          {/* 2. Tambahkan `noValidate` untuk menonaktifkan validasi browser */}
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nama Lengkap
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`block w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${errorClass(
                  "fullName"
                )}`}
                placeholder="Masukkan nama lengkap"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`block w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${errorClass(
                  "email"
                )}`}
                placeholder="contoh@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
                className={`block w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${errorClass(
                  "username"
                )}`}
                placeholder="Pilih username unik"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">{errors.username}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nomor Telepon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className={`block w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${errorClass(
                  "phone"
                )}`}
                placeholder="08xxxxxxxxxx"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`block w-full px-3 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${errorClass(
                    "password"
                  )}`}
                  placeholder="Minimal 8 karakter"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {/* SVG Icon */}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Konfirmasi Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`block w-full px-3 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${errorClass(
                    "confirmPassword"
                  )}`}
                  placeholder="Ulangi password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {/* SVG Icon */}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Terms Agreement */}
            <div>
              <div className="flex items-start">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
                />
                <label
                  htmlFor="agreeTerms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Saya menyetujui Syarat & Ketentuan dan Kebijakan Privasi
                </label>
              </div>
              {errors.agreeTerms && (
                <p className="mt-1 text-sm text-red-600">{errors.agreeTerms}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
              >
                {isLoading ? "Memproses..." : "Daftar Sekarang"}
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center pt-2">
              <p className="text-sm text-gray-600">
                Sudah punya akun?{" "}
                <a
                  href="#login"
                  className="font-medium text-green-600 hover:text-green-500 transition duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("login");
                  }}
                >
                  Masuk di sini
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
