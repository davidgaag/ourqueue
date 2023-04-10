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

function login() {
    
}

function register(username) {
    
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