document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  const uid = document.getElementById("uid").value.trim();
  const passwd = document.getElementById("passwd").value.trim();
  if (!uid || !passwd) {
    e.preventDefault();
    alert("Please enter both username and password.");
  }
});
