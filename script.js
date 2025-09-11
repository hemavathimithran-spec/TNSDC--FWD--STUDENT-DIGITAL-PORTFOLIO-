// Toggle dark mode

const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  toggleBtn.textContent =

    document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";

});

// Handle contact form

const form = document.getElementById("contactForm");

const statusMsg = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const name = document.getElementById("name").value;

  statusMsg.textContent = `Thank you, ${name}! Your message has been sent to Hemavathi S.`;

  form.reset();

});