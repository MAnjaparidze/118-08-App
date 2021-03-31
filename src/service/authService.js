export const userService = {
    // login,
    logout,
    isLogined,
    data,
};

function isLogined() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return true;
    } else {
        return false;
    }
}

function data(val) {
    let user = JSON.parse(localStorage.getItem('user'));
    // let str = JSON.stringify(user);
    if (val == 'fname') {
        return user.fname;
    }
    if (val == 'lname') {
        return user.lname;
    }
    if (val == 'email'){
        return user.email;
    } else {
        return false;
    }
}

// remove user from local storage to log user out
function logout() {
    localStorage.removeItem('user');
    window.location.reload(true);
}