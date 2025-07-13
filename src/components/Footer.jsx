"use client"
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white text-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo dan Deskripsi */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/images/logo.png"
                alt="Logo DKI"
                className="h-10 w-10 mr-3"
              />
              <span className="text-lg font-semibold leading-tight">
                Dinas Pertamanan dan Pemakaman DKI Jakarta
              </span>
            </div>
            <p className="text-green-100 leading-relaxed">
              Melayani masyarakat Jakarta dalam pengelolaan ruang terbuka hijau dan penyediaan layanan digital untuk akses informasi serta pengajuan fasilitas taman dan pemakaman.
            </p>
          </div>

          {/* Menu Layanan */}
          <div>
            <h3 className="text-base font-semibold mb-3">Layanan Digital</h3>
            <ul className="space-y-2">
              {[
                { label: "Cek Data Makam", href: "#", action: "cemetery-search"},
                { label: "Jadwal Penggunaan Taman", href: "#", action: "park-schedule"},
                { label: "Permohonan Pemangkasan Pohon", href: "#", action: "tree-application"},
                { label: "Peta TPU dan RTH", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-green-100 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-base font-semibold mb-3">Hubungi Kami</h3>
            <ul className="space-y-3 text-green-100 text-sm">
              <li className="flex items-start gap-2">
                <div className="pt-1">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                </div>
                <a
                  href="https://www.google.com/maps?q=Jl.+AIPDA+KS.+TUBUN+No+1,+Petamburan,+Tanah+Abang,+Jakarta+Pusat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition leading-relaxed"
                >
                  Jl. AIPDA KS. TUBUN No 1, Kel. Petamburan, Tanah Abang, Jakarta Pusat
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:0215328454" className="hover:text-white transition">
                  (021) 532 8454
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:distama@jakarta.go.id" className="hover:text-white transition">
                  distama@jakarta.go.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-700 mt-10 pt-6 text-center text-green-100 text-xs">
          © {new Date().getFullYear()} Dinas Pertamanan dan Hutan Kota DKI Jakarta. Seluruh Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;