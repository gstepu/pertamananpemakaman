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
      color: "#0ea5e9",
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
      color: "#0ea5e9",
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
      color: "#0ea5e9",
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
      color: "#22c55e",
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
      color: "#0ea5e9",
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
      color: "#0ea5e9",
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
      color: "#0ea5e9",
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
      color: "#22c55e",
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
      color: "#0ea5e9",
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
      color: "#22c55e",
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
      color: "#0ea5e9",
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
      color: "#0ea5e9",
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
      color: "#0ea5e9",
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
  const weekDays = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];
  const weekDates = [21, 22, 23, 24, 25, 26, 27];

  const monthDays = [
    [31, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
  ];

  const sidebarEvents = [
    {
      date: "2/22/2025",
      temp: "55°/40°",
      events: [
        {
          time: "08:00 - 09:00",
          title: "Senam Terapi (Ling Tien Kung)",
          color: "#22c55e",
        },
        { time: "10:00 - 11:00", title: "Latihan Tari", color: "#22c55e" },
      ],
    },
    {
      date: "2/23/2021",
      temp: "55°/40°",
      events: [
        { time: "09:00 - 10:00", title: "Senam Landsdance", color: "#22c55e" },
        { time: "12:00 - 13:00", title: "Paskibraka", color: "#22c55e" },
      ],
    },
    {
      date: "2/24/2021",
      temp: "55°/40°",
      events: [
        {
          time: "8:30 - 9:00",
          title: "City Sales Pitch",
          color: "#22c55e",
          link: "https://zoom.us/j/1983475281",
        },
        {
          time: "8:30 - 9:00",
          title: "City Sales Pitch",
          color: "#22c55e",
          link: "https://zoom.us/j/1983475281",
        },
      ],
    },
    {
      date: "3/2/2021",
      temp: "55°/40°",
      events: [
        {
          time: "8:30 - 9:00",
          title: "Visit to discuss improvements",
          color: "#22c55e",
        },
      ],
    },
    { date: "3/3/2021", temp: "55°/40°", events: [] },
  ];

  // Get events that start at a specific time and day
  const getEventsStartingAtTimeAndDay = (timeIndex, dayIndex) => {
    return events.filter((event) => {
      const eventHour = Number.parseInt(event.time.split(":")[0]);
      const slotHour = Number.parseInt(timeSlots[timeIndex].split(":")[0]);
      return event.day === dayIndex + 1 && eventHour === slotHour;
    });
  };

  // Calculate the position and height for events based on time slots
  const getEventPosition = (event, timeIndex) => {
    const eventStartHour = Number.parseInt(event.time.split(":")[0]);
    const slotHour = Number.parseInt(timeSlots[timeIndex].split(":")[0]);

    if (eventStartHour === slotHour) {
      // This is the starting time slot for the event
      return {
        height: `${event.duration * 60}px`, // 60px per hour
        zIndex: 10,
      };
    }
    return null;
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
      <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-sm w-full">
          {/* Modal Header */}
          <div className="bg-[#2e7d32] text-white p-3 rounded-t-lg">
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
                <p>Tanggal: {weekDates[selectedEvent.day - 1]} Februari 2025</p>
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
        </div>
      </div>
    );
  };

  // Get events for the current selected day
  const getCurrentDayEvents = () => {
    const currentDayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const adjustedDay = currentDayOfWeek === 0 ? 7 : currentDayOfWeek; // Convert Sunday to 7
    return events.filter((event) => event.day === adjustedDay);
  };

  // Navigate to previous/next day
  const navigateDay = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction);
    setCurrentDate(newDate);
  };

  // Get day name in Indonesian
  const getDayName = (date) => {
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    return days[date.getDay()];
  };

  // Get month name in Indonesian
  const getMonthName = (date) => {
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    return months[date.getMonth()];
  };

  // Render Daily View - Simplified
  const renderDailyView = () => {
    const dayEvents = getCurrentDayEvents();
    const dayName = getDayName(currentDate);
    const monthName = getMonthName(currentDate);
    const dayNames = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];
    const currentDayName = dayNames[currentDate.getDay()];

    return (
      <div className="flex-1 overflow-auto">
        <div className="min-w-full">
          {/* Daily Header - Simple */}
          <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => navigateDay(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg"
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
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800">
                  {dayName}, {currentDate.getDate()} {monthName}{" "}
                  {currentDate.getFullYear()}
                </h2>
              </div>
              <button
                onClick={() => navigateDay(1)}
                className="p-2 hover:bg-gray-100 rounded-lg"
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

          {/* Simple Daily Grid */}
          <div className="grid grid-cols-6 border-b border-gray-200 bg-white sticky top-16 z-10">
            <div className="p-3"></div>
            <div className="col-span-5 p-3 text-center border-l border-gray-200">
              <div className="text-sm text-gray-600 mb-1">{currentDayName}</div>
              <div className="text-2xl font-semibold">
                {currentDate.getDate()}
              </div>
            </div>
          </div>

          {/* Time Grid for Daily View - Simple */}
          <div className="relative">
            {timeSlots.map((time, timeIndex) => {
              const timeEvents = dayEvents.filter((event) => {
                const eventHour = Number.parseInt(event.time.split(":")[0]);
                const slotHour = Number.parseInt(time.split(":")[0]);
                return eventHour === slotHour;
              });

              return (
                <div
                  key={time}
                  className="grid grid-cols-6 border-b border-gray-100 min-h-[60px]"
                >
                  <div className="p-3 text-sm text-gray-500 border-r border-gray-200 bg-white text-right">
                    {time}
                  </div>
                  <div className="col-span-5 border-l border-gray-200 relative hover:bg-gray-50 transition-colors">
                    {timeEvents.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="absolute left-0 right-0 top-0 p-2 text-sm font-medium cursor-pointer hover:shadow-lg transition-shadow border-l-4 mb-1"
                        style={{
                          backgroundColor:
                            event.color === "#0ea5e9"
                              ? "#dbeafe"
                              : event.color === "#22c55e"
                              ? "#dcfce7"
                              : "#dbeafe",
                          borderLeftColor: event.color,
                          color:
                            event.color === "#0ea5e9"
                              ? "#1e40af"
                              : event.color === "#22c55e"
                              ? "#166534"
                              : "#1e40af",
                          height: `${event.duration * 60 - 4}px`,
                          zIndex: 10,
                        }}
                        onClick={() => handleEventClick(event)}
                      >
                        <div className="font-semibold text-sm">
                          {event.time}
                        </div>
                        <div className="leading-tight">{event.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const days = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];
  const dates = [21, 22, 23, 24, 25, 26, 27];

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      {/* Main Calendar Content */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="w-72 bg-[#2e7d32] text-white p-3 overflow-y-auto">
          <div className="mb-4">
            <h1 className="text-xl font-bold mb-4 text-center text-yellow-400">
              {selectedPark}
            </h1>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold">Februari 2025</h2>
              <div className="flex gap-1">
                <button
                  onClick={() => navigateWeek(-1)}
                  className="text-white hover:bg-white/20 p-1 rounded"
                >
                  <svg
                    className="w-4 h-4"
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
                <button
                  onClick={() => navigateWeek(1)}
                  className="text-white hover:bg-white/20 p-1 rounded"
                >
                  <svg
                    className="w-4 h-4"
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
              <div className="grid grid-cols-7 gap-1 text-xs">
                {[
                  [31, 1, 2, 3, 4, 5, 6],
                  [7, 8, 9, 10, 11, 12, 13],
                  [14, 15, 16, 17, 18, 19, 20],
                  [21, 22, 23, 24, 25, 26, 27],
                  [28, 1, 2, 3, 4, 5, 6],
                  [7, 8, 9, 10, 11, 12, 13],
                ].map((week, weekIndex) =>
                  week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`text-center p-1 rounded ${
                        day === 22
                          ? "bg-blue-500 text-white"
                          : weekIndex === 0 && dayIndex === 0
                          ? "text-gray-400"
                          : weekIndex >= 4 && day <= 13
                          ? "text-gray-400"
                          : ""
                      }`}
                    >
                      {day}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-4">
            {/* HARI INI */}
            <div>
              <div className="flex items-center justify-between mb-2">
                {/* 2. Teks hari/tanggal diubah menjadi putih */}
                <div className="text-sm font-medium text-white">
                  HARI INI 2/22/2025
                </div>
                <div className="flex items-center gap-1 text-xs text-white">
                  55°/40°
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                  <div className="text-sm">
                    {/* 1. Teks jam diubah menjadi kuning */}
                    <div className="font-medium text-yellow-400">
                      08:00 - 10:00
                    </div>
                    <div className="text-white">
                      Senam Terapi (Ling Tien Kung)
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                  <div className="text-sm">
                    <div className="font-medium text-yellow-400">
                      10:00 - 11:00
                    </div>
                    <div className="text-white">Latihan Tari</div>
                  </div>
                </div>
              </div>
            </div>

            {/* BESOK */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-white">
                  BESOK 2/23/2025
                </div>
                <div className="flex items-center gap-1 text-xs text-white">
                  55°/40°
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                  <div className="text-sm">
                    <div className="font-medium text-yellow-400">
                      09:00 - 10:00
                    </div>
                    <div className="text-white">Senam Landsdance</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                  <div className="text-sm">
                    <div className="font-medium text-yellow-400">
                      12:00 - 14:00
                    </div>
                    <div className="text-white">Paskibraka</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RABU */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-white">
                  RABU 2/24/2025
                </div>
                <div className="flex items-center gap-1 text-xs text-white">
                  55°/40°
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                  <div className="text-sm">
                    <div className="font-medium text-yellow-400">
                      14:00 - 17:00
                    </div>
                    <div className="text-white">FOTO WISUDA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <div className="bg-white border-b border-gray-200 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigateWeek(-1)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <svg
                    className="w-4 h-4"
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
                <span className="text-sm">Hari ini</span>
                <button
                  onClick={() => navigateWeek(1)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <svg
                    className="w-4 h-4"
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

                <div className="flex gap-2 ml-8">
                  <button
                    onClick={() => setViewMode("Harian")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                      viewMode === "Harian"
                        ? "bg-[#fdd835] text-black"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Harian
                  </button>
                  <button
                    onClick={() => setViewMode("Mingguan")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                      viewMode === "Mingguan"
                        ? "bg-[#fdd835] text-black"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Mingguan
                  </button>
                  <button
                    onClick={() => setViewMode("Bulanan")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                      viewMode === "Bulanan"
                        ? "bg-[#fdd835] text-black"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Bulanan
                  </button>
                  <button
                    onClick={() => setViewMode("Tahunan")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                      viewMode === "Tahunan"
                        ? "bg-[#fdd835] text-black"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Tahunan
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <svg
                    className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
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
                  <input
                    type="text"
                    placeholder="Taman WIJAYA KUSUMA"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <button
                  onClick={() => onNavigate && onNavigate("park-application")}
                  className="bg-[#22c55e] hover:bg-[#22c55e]/90 text-white px-4 py-2 rounded-lg font-medium flex items-center"
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
          </div>

          {/* Calendar Grid */}
          {viewMode === "Harian" ? (
            renderDailyView()
          ) : (
            <div className="flex-1 overflow-auto">
              <div className="min-w-full">
                {/* Week Header */}
                <div className="grid grid-cols-8 border-b border-gray-200 bg-white sticky top-0 z-10">
                  <div className="p-3"></div>
                  {days.map((day, index) => (
                    <div
                      key={day}
                      className="p-3 text-center border-l border-gray-200"
                    >
                      <div className="text-xs text-gray-600 mb-1">{day}</div>
                      <div className="text-xl font-semibold">
                        {dates[index]}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Time Grid */}
                <div className="relative">
                  {timeSlots.map((time, timeIndex) => (
                    <div
                      key={time}
                      className="grid grid-cols-8 border-b border-gray-100 min-h-[60px]"
                    >
                      <div className="p-3 text-sm text-gray-500 border-r border-gray-200 bg-white text-right">
                        {time}
                      </div>
                      {dates.map((date, dayIndex) => (
                        <div
                          key={`${time}-${dayIndex}`}
                          className="border-l border-gray-200 relative hover:bg-gray-50 transition-colors"
                        >
                          {getEventsStartingAtTimeAndDay(
                            timeIndex,
                            dayIndex
                          ).map((event, eventIndex) => {
                            const position = getEventPosition(event, timeIndex);
                            if (!position) return null;

                            return (
                              <div
                                key={eventIndex}
                                className="absolute left-0 right-0 top-0 p-2 text-xs font-medium cursor-pointer hover:shadow-lg transition-shadow border-l-4 mb-1"
                                style={{
                                  backgroundColor:
                                    event.color === "#0ea5e9"
                                      ? "#dbeafe"
                                      : event.color === "#22c55e"
                                      ? "#dcfce7"
                                      : "#dbeafe",
                                  borderLeftColor: event.color,
                                  color:
                                    event.color === "#0ea5e9"
                                      ? "#1e40af"
                                      : event.color === "#22c55e"
                                      ? "#166534"
                                      : "#1e40af",
                                  height: `${event.duration * 60 - 4}px`,
                                  zIndex: position.zIndex,
                                }}
                                onClick={() => handleEventClick(event)}
                              >
                                <div className="font-semibold">
                                  {event.time}
                                </div>
                                <div className="leading-tight">
                                  {event.title}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Event Detail Modal */}
      {isModalOpen && <EventDetailModal />}
    </div>
  );
};

export default ParkSchedulePage;
