const showPopup = document.querySelector('.show-popup');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');
const okBtn = document.querySelector('.ok-btn');
const navTop = document.querySelector('.nav__top'); 
const navBottom = document.querySelector('.nav__bottom'); 

showPopup.onclick = () => {
    popupContainer.classList.add('active');

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;


    if (navTop) {
        navTop.style.paddingRight = `${scrollbarWidth}px`;
    }

    if (navBottom) {
        navBottom.style.paddingRight = `${scrollbarWidth}px`;
    }
}

closeBtn.onclick = () => {
    popupContainer.classList.remove('active');

    setTimeout(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '0';

        if (navTop) {
            navTop.style.paddingRight = '0';
        }

        if (navBottom) {
            navBottom.style.paddingRight = '0';
        }
    }, 400); 
}

okBtn.addEventListener('click', function () {
    toast.success('Sukses', 'Hapus Berhasil Dilakukan');

    popupContainer.classList.remove('active');

    setTimeout(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '0';

        if (navTop) {
            navTop.style.paddingRight = '0';
        }
        if (navBottom) {
            navBottom.style.paddingRight = '0';
        }
    }, 400); 
});
