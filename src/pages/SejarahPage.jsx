import { ArrowLeft, Clock, Calendar } from "lucide-react";

const SejarahPage = ({ onNavigate }) => {
  const sejarahData = [
    {
      year: "1970",
      title: "Pembentukan Dinas Pertamanan",
      content:
        "Dinas Pertamanan Propinsi DKI Jakarta yang telah dibentuk pada tahun 1970, merupakan kelanjutan dari Aafdeling Beplantingen pada Gemeente Jakarta pada pemerintahan Hindia Belanda, selanjutnya menjadi Seksi Taman-taman pada Djawatan Pekerdjaan Oemoem Kotapradja Djakarta.",
    },
    {
      year: "1961",
      title: "Rekomendasi DPRD",
      content:
        "Diprakarsai oleh DPRD Provinsi DKI Jakarta yang pada tahun 1961 merekomendasikan perlunya penataan pertamanan kota Jakarta agar dapat setara dengan ibukota negara lain di dunia.",
    },
    {
      year: "1962",
      title: "Pendirian Akademi Pertamanan",
      content:
        "Pada tahun 1962 Pemerintah DKI Jakarta mendirikan Akademi Pertamanan (AKAP) yang para lulusannya dapat langsung bekerja di Seksi Pertamanan, Dinas Pekerjaan Umum Provinsi DKI Jakarta.",
    },
    {
      year: "1962 - 1970",
      title: "Era Seksi Pertamanan",
      content:
        'Pada masa periode 1962 - 1970, Dinas Pertamanan Propinsi DKI Jakarta hanya merupakan Seksi Pertamanan pada Bagian Pekerjaan Kota, Dinas Pekerjaan Umum DCI Jakarta, serta Seksi Pertamanan pada Suku-Suku Dinas Pekerjaan Umum Wilayah Kota. Saat itu para pekerja lapangan lebih akrab dengan nama "Bagian Taman-Taman".',
    },
    {
      year: "1970",
      title: "Pembentukan Struktur Organisasi",
      content:
        "Pada Tahun 1970, dengan SK Gubernur Nomor cd3./1/1/1970 Tanggal 3 Agustus 1970, dibentuk Dinas Pertamanan DKI Jakarta, dengan Struktur Organisasi terdiri dari Kepala Dinas, Bagian Perencanaan, Bagian Pelaksanaan/ Pemeliharaan, Bagian Umum, Suku Dinas Pertamanan di setiap wilayah kota.",
    },
    {
      year: "1976",
      title: "Penyempurnaan Struktur",
      content:
        "Pada Tahun 1976, dengan SK Gubernur KDKI Jakarta Nomor B.VII/3400/2/1/76 tanggal 8 Juni 1976, Struktur Organisasi Dinas Pertamanan disempurnakan menjadi: Kepala Dinas, Wakil Kepala Dinas, Urusan Perencanaan, Urusan Pengadaan, Urusan Pembangunan Taman, Urusan Pemeliharaan Taman, Urusan Bimbingan Pertamanan, Bagian Umum, Bagian Keuangan, Suku Dinas Pertamanan di setiap Wilayah Kota, Penilik Pertamanan di setiap kecamatan.",
    },
    {
      year: "1983",
      title: "Peraturan Daerah Pertama",
      content:
        "Selanjutnya pada Tahun 1983 dengan Surat Keputusan Menteri Dalam Negeri No : 061.131.165 tanggal 13 April 1983, disahkan Peraturan Daerah Khusus Ibukota Jakarta Nomor 9 Tahun 1982 tentang Pembentukan Susunan Organisasi dan Tata Kerja Dinas Pertamanan DKI Jakarta.",
    },
    {
      year: "1997",
      title: "Dinas Pertamanan dan Keindahan Kota",
      content:
        "Pada tahun 1997 pengembangan organisasi kembali dilakukan, dimana dengan Perda Nomor 7 Tahun 1997 tanggal 27 Mei 1997 tentang Organisasi dan Tata Kerja Dinas Pertamanan dan Keindahan Kota, maka nama Unit kembali menjadi Dinas Pertamanan dan Keindahan kota.",
    },
    {
      year: "2001",
      title: "Perampingan Struktur",
      content:
        "Pada tahun 2001, sesuai dengan pelaksanaan perampingan struktur organisasi Pemerintahan, maka Dinas Pertamanan dan Keindahan Kota, kembali disesuaikan strukturnya. Dalam pembahasan awal, Dinas Pertamanan akan dimerger dengan Dinas Kehutanan, Dinas Tata Pemakaman Umum, Kanwil Kehutanan.",
    },
    {
      year: "1969",
      title: "Era Urusan Pemakaman",
      content:
        "Pada masa sebelum tahun 1969, urusan pelayanan pemakaman masih tetap menjadi Urusan Pemakaman Dinas Pekerjaan Umum DKI Jakarta di atas, namun karena pesatnya perkembangan kota Jakarta, maka Urusan Pemakaman dibutuhkan eksistensinya menjadi suatu Organisasi yang berdiri sendiri.",
    },
    {
      year: "1971",
      title: "Penyempurnaan Dinas Pemakaman",
      content:
        "Kemudian pada tahun 1971 disempurnakan kembali struktur organisasi Dinas Pemakaman tersebut dengan ditetapkannya Keputusan Gubernur Kepala Daerah Daerah Chusus Ibukota Djakarta Nomor: Ce.5/1/1/1971 tanggal 17 Maret 1971 tentang Penyempurnaan Struktur Organisasi Dinas Pemakaman Daerah Chusus Ibukota Djakarta.",
    },
    {
      year: "1977",
      title: "Penyempurnaan Struktur Pemakaman",
      content:
        "Selanjutnya pada tahun 1977, penyempurnaan organisasi dinas pemakaman dilakukan kembali melalui Keputusan Gubernur Kepala Daerah Daerah Chusus Ibukota Djakarta Nomor: 105 Tahun 1977 tanggal 22 Pebruari 1977 tentang Penyempurnaan Struktur Organisasi Dinas Pemakaman Daerah Khusus Ibukota Jakarta.",
    },
    {
      year: "1995",
      title: "Dinas Tata Pemakaman Umum",
      content:
        "Pada tahun 1995, melalui Peraturan Daerah Propinsi DKI Jakarta Nomor 3 Tahun 1995 nomenklatur Dinas Pemakaman Daerah Khusus Ibukota Jakarta berubah menjadi Dinas Tata Pemakaman Umum Propinsi Daerah Khusus Ibukota Jakarta.",
    },
    {
      year: "2008",
      title: "Penggabungan Pertamanan dan Pemakaman",
      content:
        "Kemudian pada tahun 2008, berdasarkan Peraturan Daerah Provinsi DKI Jakarta Nomor 10 Tahun 2008 tentang Organisasi Perangkat Daerah, kedua unit tersebut yaitu Dinas Pertamanan dan Kantor Pelayanan Pemakaman Provinsi DKI Jakarta menjadi Dinas Pertamanan dan Pemakaman Provinsi DKI Jakarta.",
    },
    {
      year: "2016",
      title: "Dinas Kehutanan",
      content:
        "Pada tahun 2016 berdasarkan Peraturan Daerah Provinsi DKI Jakarta Nomor 18 Tahun 2016 tentang Organisasi Perangkat Daerah, terjadi penggabungan antara Dinas Pertamanan dan Pemakaman Provinsi dengan Bidang Kehutanan pada Dinas Kelautan, Pertanian dan Ketahanan Pangan DKI Jakarta menjadi Dinas Kehutanan Provinsi DKI Jakarta.",
    },
    {
      year: "2019",
      title: "Dinas Pertamanan dan Hutan Kota",
      content:
        "Akhirnya pada tahun 2019 berdasarkan Peraturan Daerah Provinsi DKI Jakarta Nomor 2 Tahun 2019 tentang Perubahan Atas Peraturan Daerah Nomor 5 Tahun 2016 tentang Pembentukan dan Susunan Perangkat Daerah Provinsi Daerah Khusus Ibukota Jakarta, maka ditetapkan Peraturan Gubernur Nomor 157 Tahun 2019 tentang Organisasi dan Tata Kerja Dinas Pertamananan dan Hutan Kota.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate("LandingPage")}
              className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali ke Beranda</span>
            </button>
          </div>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <button
              onClick={() => onNavigate("LandingPage")}
              className="hover:text-green-700 transition-colors"
            >
              Beranda
            </button>
            <span>/</span>
            <span className="text-gray-700">Tentang Kami</span>
            <span>/</span>
            <span className="text-green-700 font-medium">Sejarah</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Sejarah</h1>
            <p className="text-lg text-gray-600">
              Perjalanan Dinas Pertamanan dan Hutan Kota Provinsi DKI Jakarta
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-300"></div>

            {sejarahData.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6 mb-8">
                {/* Timeline dot */}
                <div className="relative z-10 bg-green-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="bg-white rounded-lg shadow-sm border p-6 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    <Clock className="w-4 h-4 text-gray-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Perjalanan Sejarah yang Panjang
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dari masa pemerintahan Hindia Belanda hingga era modern saat
                ini, Dinas Pertamanan dan Hutan Kota telah mengalami berbagai
                transformasi organisasi untuk memberikan pelayanan terbaik bagi
                masyarakat Jakarta dalam pengelolaan ruang terbuka hijau,
                pertamanan, dan pemakaman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SejarahPage;
