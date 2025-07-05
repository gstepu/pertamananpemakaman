"use client";

import { useState } from "react";

const ParkSchedulePage = ({ onNavigate }) => {
  const [selectedPark, setSelectedPark] = useState("TAMAN WIJAYA KUSUMA");
  const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 22)); // February 22, 2025
  const [viewMode, setViewMode] = useState("Mingguan");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample events data with more details
  const events = [
    {
      id: 1,
      title: "Senam Terapi (Ling Tien Kung)",
      time: "8:00",
      endTime: "10:00",
      duration: 2,
      day: 1, // Monday
      color: "bg-blue-200 border-blue-400",
      organizer: "Komunitas Ling Tien Kung Jakarta",
      description:
        "Senam terapi untuk kesehatan tubuh dan pikiran dengan gerakan Ling Tien Kung",
      participants: 25,
      contact: "081234567890",
      status: "Disetujui",
    },
    {
      id: 2,
      title: "Latihan Tari",
      time: "10:00",
      endTime: "11:00",
      duration: 1,
      day: 1,
      color: "bg-blue-200 border-blue-400",
      organizer: "Sanggar Tari Nusantara",
      description: "Latihan rutin tari tradisional untuk persiapan pertunjukan",
      participants: 15,
      contact: "081234567891",
      status: "Disetujui",
    },
    {
      id: 3,
      title: "Design Review",
      time: "13:00",
      endTime: "14:00",
      duration: 1,
      day: 1,
      color: "bg-blue-200 border-blue-400",
      organizer: "Tim Arsitektur Lansekap",
      description: "Review desain taman dan penataan ruang hijau",
      participants: 8,
      contact: "081234567892",
      status: "Disetujui",
    },
    {
      id: 4,
      title: "Senam Lansdance",
      time: "9:00",
      endTime: "10:00",
      duration: 1,
      day: 2, // Tuesday
      color: "bg-green-200 border-green-400",
      organizer: "Klub Senam Lansia",
      description:
        "Senam aerobik khusus untuk lansia dengan musik yang menyenangkan",
      participants: 30,
      contact: "081234567893",
      status: "Disetujui",
    },
    {
      id: 5,
      title: "Paskibra",
      time: "12:00",
      endTime: "14:00",
      duration: 2,
      day: 2,
      color: "bg-blue-200 border-blue-400",
      organizer: "SMAN 1 Jakarta",
      description: "Latihan rutin pasukan pengibar bendera sekolah",
      participants: 20,
      contact: "081234567894",
      status: "Disetujui",
    },
    {
      id: 6,
      title: "FOTO WISUDA",
      time: "14:00",
      endTime: "17:00",
      duration: 3,
      day: 2,
      color: "bg-blue-200 border-blue-400",
      organizer: "Universitas Indonesia",
      description: "Sesi foto wisuda mahasiswa dengan latar belakang taman",
      participants: 50,
      contact: "081234567895",
      status: "Disetujui",
    },
    {
      id: 7,
      title: "Senam Aerobik",
      time: "9:00",
      endTime: "10:00",
      duration: 1,
      day: 3, // Wednesday
      color: "bg-blue-200 border-blue-400",
      organizer: "Komunitas Sehat Jakarta",
      description: "Senam aerobik untuk menjaga kebugaran tubuh",
      participants: 35,
      contact: "081234567896",
      status: "Disetujui",
    },
    {
      id: 8,
      title: "Foto Prewedding",
      time: "11:00",
      endTime: "12:00",
      duration: 1,
      day: 3,
      color: "bg-green-200 border-green-400",
      organizer: "Studio Foto Harmoni",
      description: "Sesi foto prewedding dengan konsep natural di taman",
      participants: 4,
      contact: "081234567897",
      status: "Disetujui",
    },
    {
      id: 9,
      title: "Membuat Video",
      time: "13:00",
      endTime: "14:00",
      duration: 1,
      day: 3,
      color: "bg-blue-200 border-blue-400",
      organizer: "Production House Creative",
      description: "Pembuatan video promosi wisata taman kota",
      participants: 10,
      contact: "081234567898",
      status: "Disetujui",
    },
    {
      id: 10,
      title: "Piknik",
      time: "10:00",
      endTime: "11:00",
      duration: 1,
      day: 4, // Thursday
      color: "bg-green-200 border-green-400",
      organizer: "Keluarga Besar Wijaya",
      description: "Piknik keluarga dengan berbagai permainan tradisional",
      participants: 25,
      contact: "081234567899",
      status: "Disetujui",
    },
    {
      id: 11,
      title: "Liputan Taman 24",
      time: "13:00",
      endTime: "14:00",
      duration: 1,
      day: 4,
      color: "bg-blue-200 border-blue-400",
      organizer: "Media Televisi Lokal",
      description: "Liputan berita tentang program perawatan taman",
      participants: 6,
      contact: "081234567800",
      status: "Disetujui",
    },
    {
      id: 12,
      title: "Gathering Santri MA FD Kafila Jakarta Timur",
      time: "9:00",
      endTime: "11:00",
      duration: 2,
      day: 5, // Friday
      color: "bg-blue-200 border-blue-400",
      organizer: "MA FD Kafila Jakarta Timur",
      description: "Gathering dan diskusi santri tentang lingkungan hidup",
      participants: 40,
      contact: "081234567801",
      status: "Disetujui",
    },
    {
      id: 13,
      title: "Videografi",
      time: "12:00",
      endTime: "13:00",
      duration: 1,
      day: 5,
      color: "bg-blue-200 border-blue-400",
      organizer: "Tim Dokumentasi Kota",
      description: "Pembuatan video dokumenter tentang taman kota",
      participants: 8,
      contact: "081234567802",
      status: "Disetujui",
    },
  ];

  const timeSlots = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const days = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];
  const dates = [21, 22, 23, 24, 25, 26, 27];

  const getEventsForTimeAndDay = (timeIndex, dayIndex) => {
    return events.filter((event) => {
      const eventHour = Number.parseInt(event.time.split(":")[0]);
      const slotHour = Number.parseInt(timeSlots[timeIndex].split(":")[0]);
      return event.day === dayIndex && eventHour === slotHour;
    });
  };

  const navigateWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction * 7);
    setCurrentDate(newDate);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  // Event Detail Modal Component
  const EventDetailModal = () => {
    if (!selectedEvent) return null;

    return (
      <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-sm w-full">
          {/* Modal Header */}
          <div className="bg-green-600 text-white p-3 rounded-t-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Detail Acara</h2>
              <button
                onClick={closeModal}
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
          <div className="p-4 space-y-3">
            {/* Event Title */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {selectedEvent.title}
              </h3>
              <div
                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  selectedEvent.status === "Disetujui"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {selectedEvent.status}
              </div>
            </div>

            {/* Schedule */}
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Jadwal Acara
              </h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Tanggal: {dates[selectedEvent.day]} Februari 2025</p>
                <p>
                  Waktu: {selectedEvent.time} - {selectedEvent.endTime} WIB
                </p>
                <p>Durasi: {selectedEvent.duration} jam</p>
              </div>
            </div>

            {/* Organizer */}
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
                Pengaju Acara
              </h4>
              <div className="text-sm text-gray-600">
                <p className="font-medium">{selectedEvent.organizer}</p>
                <p>Kontak: {selectedEvent.contact}</p>
              </div>
            </div>

            {/* Description */}
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
              <p className="text-sm text-gray-600">
                {selectedEvent.description}
              </p>
            </div>

            {/* Participants */}
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Peserta
              </h4>
              <p className="text-sm text-gray-600">
                {selectedEvent.participants} orang
              </p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t">
            <button
              onClick={closeModal}
              className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-700 text-white p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold">{selectedPark}</h1>
              <div className="flex items-center mt-2">
                <span className="text-lg">Februari 2025</span>
                <button
                  onClick={() => navigateWeek(-1)}
                  className="ml-4 p-1 hover:bg-green-600 rounded"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <span className="mx-2">Hari ini</span>
                <button
                  onClick={() => navigateWeek(1)}
                  className="p-1 hover:bg-green-600 rounded"
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Taman WIJAYA KUSUMA"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-2 rounded-lg text-gray-800 bg-white border-2 border-white w-64 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-300"
                />
                <svg
                  className="absolute right-3 top-2.5 w-5 h-5 text-gray-400"
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
              <button
                onClick={() => onNavigate("park-application")}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium flex items-center"
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
                Ajukan
              </button>
            </div>
          </div>

          {/* View Mode Tabs */}
          <div className="flex space-x-1">
            {["Harian", "Mingguan", "Bulanan", "Tahunan"].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === mode
                    ? "bg-yellow-500 text-white"
                    : "bg-green-600 hover:bg-green-500 text-white"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Calendar Content */}
      <div className="container mx-auto p-6">
        <div className="flex gap-6">
          {/* Sidebar Calendar */}
          <div className="w-80 bg-green-700 text-white rounded-lg p-6">
            {/* Mini Calendar */}
            <div className="mb-6">
              <div className="grid grid-cols-7 gap-1 text-xs mb-2">
                {["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"].map(
                  (day) => (
                    <div key={day} className="text-center font-medium p-1">
                      {day}
                    </div>
                  )
                )}
              </div>
              <div className="grid grid-cols-7 gap-1 text-sm">
                {Array.from({ length: 35 }, (_, i) => {
                  const date = i - 2; // Adjust for month start
                  const isCurrentMonth = date > 0 && date <= 28;
                  const isSelected = date === 22;
                  return (
                    <div
                      key={i}
                      className={`text-center p-2 rounded cursor-pointer ${
                        isSelected
                          ? "bg-blue-500"
                          : isCurrentMonth
                          ? "hover:bg-green-600"
                          : "text-green-300"
                      }`}
                    >
                      {isCurrentMonth ? date : ""}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Today's Events */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    HARI INI 2/22/2025
                  </span>
                  <span className="text-xs">55°/40° ☀️</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="text-sm">
                      <div className="font-medium">08:00 - 09:00</div>
                      <div className="text-green-200">
                        Senam Terapi (Ling Tien Kung)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="text-sm">
                      <div className="font-medium">10:00 - 11:00</div>
                      <div className="text-green-200">Latihan Tari</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Events */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">BESOK 2/23/2025</span>
                  <span className="text-xs">55°/40° ☀️</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="text-sm">
                      <div className="font-medium">09:00 - 10:00</div>
                      <div className="text-green-200">Senam Lansdance</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="text-sm">
                      <div className="font-medium">12:00 - 13:00</div>
                      <div className="text-green-200">Paskibra</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Calendar Grid */}
          <div className="flex-1 bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Calendar Header */}
            <div className="grid grid-cols-8 border-b">
              <div className="p-4 bg-gray-50"></div>
              {days.map((day, index) => (
                <div key={day} className="p-4 text-center bg-gray-50 border-l">
                  <div className="font-medium text-gray-600">{day}</div>
                  <div className="text-2xl font-bold text-gray-800 mt-1">
                    {dates[index]}
                  </div>
                </div>
              ))}
            </div>

            {/* Calendar Body */}
            <div className="grid grid-cols-8">
              {timeSlots.map((time, timeIndex) => (
                <div key={time} className="contents">
                  {/* Time Column */}
                  <div className="p-4 text-right text-gray-500 bg-gray-50 border-b border-r font-medium">
                    {time}
                  </div>
                  {/* Day Columns */}
                  {Array.from({ length: 7 }, (_, dayIndex) => {
                    const dayEvents = getEventsForTimeAndDay(
                      timeIndex,
                      dayIndex
                    );
                    return (
                      <div
                        key={`${timeIndex}-${dayIndex}`}
                        className="relative h-16 border-b border-l hover:bg-gray-50 transition-colors"
                      >
                        {dayEvents.map((event) => (
                          <div
                            key={event.id}
                            className={`absolute inset-x-1 top-1 p-2 rounded text-xs font-medium border-l-4 ${event.color} cursor-pointer hover:shadow-lg transition-shadow`}
                            style={{
                              height: `${event.duration * 60 - 8}px`,
                              zIndex: 10,
                            }}
                            onClick={() => handleEventClick(event)}
                          >
                            <div className="font-semibold text-blue-800">
                              {event.time}
                            </div>
                            <div className="text-blue-700 leading-tight">
                              {event.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {isModalOpen && <EventDetailModal />}
    </div>
  );
};

export default ParkSchedulePage;
