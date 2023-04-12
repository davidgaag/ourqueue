(async () => {
    let authenticated = false;
    const username = localStorage.getItem("username");
    if (username) {
        // const nameEl = document.getElementById("username");
        // nameEl.value = username;
        const user = await getUser(username);
        authenticated = user?.authenticated;
    }

    setDisplay("load-animation", "none");

    if (authenticated) {
        document.getElementById("username").textContent = "Welcome, " + username;
        setDisplay("user-display", "block");
    } else {
        setDisplay("login-controls", "block");
    }
})();

async function logIn() {
    loginOrRegister(`/api/auth/login`);
}

async function register() {
    loginOrRegister(`/api/auth/register`);
}

async function logOut() {

}

async function loginOrRegister(endpoint) {
    const username = document.getElementById("username-input").value;
    const password = document.getElementById("password-input").value;
    const response = await fetch(endpoint, {
        method: "post",
        body: JSON.stringify({ username: username, password: password }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        credentials: "same-origin"
    });
    const body = await response.json();

    if (response?.status === 200) {
        localStorage.setItem("username", username);
        location.reload();
    } else {
        const errorEl = document.getElementById("login-error-text");
        errorEl.textContent = body.msg;
        errorEl.style.display = "block";
    }
}

async function getUser(username) {
    const response = await fetch(`/api/user/${username}`);
    if (response.status === 200) {
        return response.json();
    }
    return null;
}

function setDisplay(elementId, display) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = display;
    }
}