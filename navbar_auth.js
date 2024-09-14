document.addEventListener('DOMContentLoaded', function () {
    const navBtn = document.querySelector('.nav__btn')
    const authState = getAuthState();

    if (authState.signin) {
        navBtn.innerHTML = `Nama : ${authState.identity.name} Email : ${authState.identity.email} <button id="btn_signout" class="btn">Sign Out</button>`;
        const btnSignout = document.querySelector('#btn_signout');
        btnSignout.addEventListener('click', function () {
            signout();
        })
    }
});