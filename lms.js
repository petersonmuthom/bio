document.querySelectorAll(".course-card button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "Unlock") {
      alert("Payment required to unlock this course.");
    } else {
      alert("Continue learning...");
    }
  });
});




const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
