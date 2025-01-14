document.querySelectorAll("header nav ul li a").forEach((link) => {
  link.addEventListener("click", (event) => {
    alert(`Anda mengklik tautan ke ${link.textContent}`);
  });
});

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

const darkModeButton = document.createElement("button");
darkModeButton.textContent = "Toggle Dark Mode";
darkModeButton.style.position = "fixed";
darkModeButton.style.bottom = "20px";
darkModeButton.style.right = "20px";
darkModeButton.style.padding = "10px 20px";
darkModeButton.style.backgroundColor = "#4CAF50";
darkModeButton.style.color = "#fff";
darkModeButton.style.border = "none";
darkModeButton.style.borderRadius = "5px";
darkModeButton.style.cursor = "pointer";

darkModeButton.addEventListener("click", toggleDarkMode);

document.body.appendChild(darkModeButton);

const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
footer.textContent = `© ${currentYear} Submission Website. All Rights Reserved.`;

document.querySelectorAll("header nav ul li a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});
