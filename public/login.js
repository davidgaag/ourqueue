function login() {
    const usernameEl = document.getElementById("username-input");
    localStorage.setItem("username", usernameEl.value);
}