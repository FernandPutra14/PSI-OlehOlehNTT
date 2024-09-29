// Mengambil elemen button, sidebar, dan body
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');
const sidebar = document.getElementById('sidebar');
const body = document.body;

// Ketika menu button diklik, buka sidebar dan disable scroll
menuButton.addEventListener('click', () => {
  sidebar.classList.add('open');
  body.classList.add('no-scroll'); // Tambah kelas no-scroll
});

// Ketika tombol close diklik, tutup sidebar dan enable scroll
closeButton.addEventListener('click', () => {
  sidebar.classList.remove('open');
  body.classList.remove('no-scroll'); // Hapus kelas no-scroll
});

// Jika ingin menutup sidebar ketika klik di luar sidebar
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
    sidebar.classList.remove('open');
    body.classList.remove('no-scroll'); // Hapus kelas no-scroll jika sidebar ditutup
  }
});
