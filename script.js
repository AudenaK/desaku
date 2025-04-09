document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi AOS
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Kalender
  const calendarEl = document.getElementById("calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    events: [
      {
        title: "Festival Budaya",
        start: "2025-04-15",
        end: "2025-04-17",
        backgroundColor: "#78716c", // Warna stone-500
        borderColor: "#78716c",
      },
      {
        title: "Pelatihan Warga",
        start: "2025-04-20",
        backgroundColor: "#78716c",
        borderColor: "#78716c",
      },
      {
        title: "Rapat Desa",
        start: "2025-04-25",
        backgroundColor: "#78716c",
        borderColor: "#78716c",
      },
      {
        title: "Gotong Royong",
        start: "2025-05-05",
        backgroundColor: "#78716c",
        borderColor: "#78716c",
      },
      {
        title: "Penyuluhan Kesehatan",
        start: "2025-05-12",
        backgroundColor: "#78716c",
        borderColor: "#78716c",
      },
      {
        title: "Workshop UMKM",
        start: "2025-05-20",
        backgroundColor: "#78716c",
        borderColor: "#78716c",
      },
    ],
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
  });
  calendar.render();

  // Navigasi aktif
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Mobile Menu
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("active");
  });

  // Handle dropdown mobile
  document.querySelectorAll('[id^="mobile-"]').forEach((button) => {
    button.addEventListener("click", function () {
      const menuId = this.id + "-menu"; // Diubah dari replace("mobile-", "") menjadi langsung tambah "-menu"
      const menu = document.getElementById(menuId);
      const isExpanded = this.getAttribute("aria-expanded") === "true";

      menu.classList.toggle("hidden");
      this.setAttribute("aria-expanded", !isExpanded);
      this.querySelector(".arrow").classList.toggle("rotate-180");
    });
  });
});
