const gambarContainer = document.querySelector('.gambar_detail_produk_container');
const gambar = gambarContainer.querySelector('img');

gambarContainer.addEventListener('mousemove', (e) => {
  const rect = gambarContainer.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  
  gambar.style.transformOrigin = `${x}% ${y}%`;
  gambar.style.transform = 'scale(2)';
});

gambarContainer.addEventListener('mouseleave', () => {
  gambar.style.transformOrigin = 'center center';
  gambar.style.transform = 'scale(1)';
});