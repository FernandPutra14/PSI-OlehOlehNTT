const sessionKey = {
    name: 'auth_name',
    email: 'auth_email',
};

const defaultAccount = {
    name: 'Tim Ziro',
    email: 'timziro@gmail.com',
}

function getAuthState() {
    const name = window.sessionStorage.getItem(sessionKey.name);
    const email = window.sessionStorage.getItem(sessionKey.email);

    if(!name || !email) {
        return { signin : false };
    }

    return {
        signin : true,
        identity : {
            name,
            email
        }
    }
};

function signin(name, email) {
    window.sessionStorage.setItem(sessionKey.name, name);
    window.sessionStorage.setItem(sessionKey.email, email);

    window.location.replace('/index.html');
}

function signout() {
    window.sessionStorage.removeItem(sessionKey.name);
    window.sessionStorage.removeItem(sessionKey.email);

    window.location.reload();
}

document.addEventListener('DOMContentLoaded', function () {
    const authorizeElements = document.querySelectorAll('.authorize');
    const notAuthorizeElements = document.querySelectorAll('.not-authorize');
    const namePlaceholders = document.querySelectorAll('.name-placeholder');
    const emailPlaceholders = document.querySelectorAll('.email-placeholder');

    const authState = getAuthState();

    if(authState.signin) {
        authorizeElements.forEach(function(element) {
            element.classList.add('show');
        });

        namePlaceholders.forEach(function(element) {
            element.outerHTML = authState.identity.name;
        });
        
        emailPlaceholders.forEach(function(element) {
            element.outerHTML = authState.identity.email;
        });
    } else {
        notAuthorizeElements.forEach(function(element) {
            element.classList.add('show');
        });
    }
});