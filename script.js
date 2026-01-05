const toggleBtn = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("close-btn");
const navDrawer = document.getElementById("nav-drawer");

toggleBtn.addEventListener("click", () => {
    navDrawer.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
      navDrawer.classList.remove("open");
    });

// Close drawer when clicking outside (on mobile)
window.addEventListener("click", (e) => {
  if (e.target === navDrawer) {
      navDrawer.classList.remove("open");
      }
    });


// FAQ Toggle
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});





