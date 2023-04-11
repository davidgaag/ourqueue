(async () => {
    let authenticated = false;
    const username = localStorage.getItem("username");
    if (username) {
        const nameEl = document.getElementById("username");
        nameEl.value = username;
        const user = await getUser(nameEl.value);
        authenticated = user?.authenticated;
    }

    if (authenticated) {
        document.getElementById("username").textContent = username;
        setDisplay("login-controls", "hidden");
        setDisplay("user-display", "block");
    } else {
        setDisplay("login-controls", "block");
        setDisplay("user-display", "hidden");
    }
})();

async function login() {
    loginOrRegister(`/api/auth/login`);
}

async function register() {
    loginOrRegister(`/api/auth/register`);
}

async function loginOrCreate(endpoint) {
    const username = document.getElementById("username-input");
    const password = document.getElementById("password-input");
    const response = await fetch(endpoint, {
        method: "post",
        body: JSON.stringify({ username: username, password: password }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const body = await response.json();

    if (response?.status === 200) {
        localStorage.setItem("username", username);
        location.reload();
    } else {
        const errorEl = document.getElementById("login-error-text").textContent = "Invalid credentials";
        errorEl.style.display = "block";
    }
}

async function getUser(username) {
    const response = await fetch(`/api/user/${username}`);
    if (response.status === 200) {
        return response.json;
    }
    return null;
}

function setDisplay(elementId, display) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = display;
    }
}