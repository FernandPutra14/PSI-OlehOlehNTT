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

function signin() {
    window.sessionStorage.setItem(sessionKey.name, defaultAccount.name);
    window.sessionStorage.setItem(sessionKey.email, defaultAccount.email);

    window.location.replace('/index.html');
}

function signout() {
    window.sessionStorage.removeItem(sessionKey.name);
    window.sessionStorage.removeItem(sessionKey.email);

    window.location.reload();
}