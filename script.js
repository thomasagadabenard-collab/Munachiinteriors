const menuToggle = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("close-btn");
const mobileNav = document.getElementById("mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("scroll", () => {
  if(window.scrollY > 15){

  }
})

function openMenu() {
    mobileNav.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    mobileNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);


mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});


/*FAQ*/
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

/*GSAP HERO ANIMATION*/

const heroTimeline = gsap.timeline({
  defaults: {
    ease: "power3.out"
  }
});


gsap.set(".hero-bg", {
  scale: 1.12
});

gsap.set(".header", {
  y: -40,
  opacity: 0
});

gsap.set(".desktop-nav a", {
  y: -20,
  opacity: 0
});

gsap.set(".header-cta", {
  y: -20,
  opacity: 0
});

gsap.set(".hero-eyebrow", {
  y: 30,
  opacity: 0
});

gsap.set(".hero-text h1", {
  y: 70,
  opacity: 0
});

gsap.set(".hero-description", {
  y: 40,
  opacity: 0
});

gsap.set(".hero-actions", {
  y: 30,
  opacity: 0
});

gsap.set(".hero-card", {
  x: 80,
  opacity: 0
});

gsap.set(".hero-bottom", {
  opacity: 0
});


heroTimeline

    .to(".hero-bg", {
        scale: 1,
        duration: 2.2,
        ease: "power2.out"
    }, 0)

    .to(".header", {
        y: 0,
        opacity: 1,
        duration: 0.8
    }, 0.2)

    .to(".desktop-nav a", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.3
    }, 0.45)

    .to(".header-cta", {
        y: 0,
        opacity: 1,
        duration: 0.6
    }, 0.75)

    .to(".hero-eyebrow", {
        y: 0,
        opacity: 1,
        duration: 0.7
    }, 0.85)

    .to(".hero-text h1", {
        y: 0,
        opacity: 1,
        duration: 1
    }, 1.0)

    .to(".hero-description", {
        y: 0,
        opacity: 1,
        duration: 0.75
    }, 1.35)

    .to(".hero-actions", {
        y: 0,
        opacity: 1,
        duration: 0.7
    }, 1.55)

    .to(".hero-card", {
        x: 0,
        opacity: 1,
        duration: 1.2
    }, 1.25)

    .to(".hero-bottom", {
        opacity: 1,
        duration: 0.8
    }, 2.0);


// SERVICES SECTION ANIMATION


const servicesTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".services",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});


gsap.set(".services h2", {
    y: 40,
    opacity: 0
});

gsap.set(".service-card", {
    y: 70,
    opacity: 0
});


servicesTimeline
    .to(".services h2", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
    })

    .to(".service-card", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out"
    }, "-=0.35");



const provisionTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".provision",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});

gsap.set(".provision h2", {
    y: 40,
    opacity: 0
});

gsap.set(".prov-images", {
    y: 60,
    opacity: 0,
    scale: 0.95
});


provisionTimeline
    .to(".provision h2", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
    })

    .to(".prov-images", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out"
    }, "-=0.3");





