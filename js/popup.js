const showPopup = document.querySelector('.show-popup');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');

showPopup.onclick = () => {
    popupContainer.classList.add('active');

    // Mencegah scroll pada body
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
}

closeBtn.onclick = () => {
    // Hapus kelas active, tapi tambahkan penundaan sebelum mengembalikan scroll
    popupContainer.classList.remove('active');

    // Tambahkan sedikit jeda waktu untuk menghilangkan efek "miring" atau transisi yang tidak mulus
    setTimeout(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '0';
    }, 400); // Sesuaikan 400ms sesuai dengan durasi transisi CSS
}
