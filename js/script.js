// for banner slider
var swiperBanner = new Swiper(".hero_banner_slider", {
    navigation: {
        nextEl: ".custom-swiper-btn_next",
        prevEl: ".custom-swiper-btn_prev",
    },
});

// for service slider
var swiperBanner = new Swiper(".service_slider", {
    slidesPerView: 4,
    spaceBetween:30,
    pagination: {
        el: ".service_swiper_pagination",
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 4 }, 
    }
});


// Select all accordion buttons
const acc = document.querySelectorAll(".accordion");

if (acc.length > 1) {
  const secondBtn = acc[1];
  const secondPanel = secondBtn.nextElementSibling;
  const secondIcon = secondBtn.querySelector("i");

  secondPanel.classList.remove("hidden");  // Show panel
  secondIcon.classList.add("rotate-180");   // Rotate arrow
  secondIcon.classList.add(
    "w-[12px]", "h-[30px]", "pl-7", "pt-[5px]", "cursor-pointer"
  );
}


acc.forEach(btn => {
  btn.addEventListener("click", () => {
    // Close all other panels first
    acc.forEach(otherBtn => {
      if (otherBtn !== btn) {
        const otherPanel = otherBtn.nextElementSibling;
        const otherIcon = otherBtn.querySelector("i");
        otherPanel.classList.add("hidden");
        otherIcon.classList.remove("rotate-180");
        
      }
    });

    // Toggle current panel
    const panel = btn.nextElementSibling;
    panel.classList.toggle("hidden");

    // Toggle arrow rotation
    const icon = btn.querySelector("i");
    icon.classList.toggle("rotate-180");

    // Add Tailwind styling once (optional, safe)
    icon.classList.add(
      "w-[12px]", "h-[30px]", "pl-7", "pt-[5px]", "cursor-pointer"
    );
  });
});

// mobile navbar
const hamburger = document.getElementById("hamburger"); 
const mobileDrawer = document.getElementById("mobileDrawer"); 
const mobileClose = document.getElementById("mobileClose"); 
const overlayHeader = document.getElementById("overlayHeader"); 

const mobilePageNav = document.getElementById("mobilePageNav"); 
const mobilePageNavMenu = document.getElementById("mobilePageNavMenu");

// console.log(drawer, overlay, hamburger, crossIcon, mobilePageNav, mobilePageNavMenu);

// Open drawer
hamburger.addEventListener("click", () => {
    mobileDrawer.classList.remove("-translate-x-full");
    overlayHeader.classList.remove("hidden");
});

// Close drawer (X button)
mobileClose.addEventListener("click", () => {
    mobileDrawer.classList.add("-translate-x-full");
    overlayHeader.classList.add("hidden");
});

// Close drawer (overlay click)
overlayHeader.addEventListener("click", () => {
    mobileDrawer.classList.add("-translate-x-full");
    overlayHeader.classList.add("hidden");
});

mobilePageNav.addEventListener("click", function() {
    mobilePageNavMenu.classList.toggle("hidden");
})


// for search box
const searchToggle = document.getElementById("searchToggle");
const searchDropdown = document.getElementById("searchDropdown");

searchToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    searchDropdown.classList.toggle("opacity-0");
    searchDropdown.classList.toggle("invisible");
    searchDropdown.classList.toggle("translate-y-2");
});

// Prevent closing when clicking inside dropdown
searchDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Close when clicking outside
document.addEventListener("click", () => {
    searchDropdown.classList.add("opacity-0", "invisible", "translate-y-2");
});
