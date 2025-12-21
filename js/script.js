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


// bigTextTitle resize

const bigTextTitle = document.getElementById("bigTextTitle");

function resizeText (){
  const screenWidth = window.innerWidth;

  if (screenWidth < 640) {
    bigTextTitle.style.fontSize = "45px";
  } 
  else if (screenWidth < 1024) {
    bigTextTitle.style.fontSize = "100px";
  } 
  else {
    bigTextTitle.style.fontSize = "200px";
  }
}

window.addEventListener('resize', resizeText);
resizeText();


// preloader
window.addEventListener("load", () => {
  setTimeout(() => {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.transition = "opacity 0.7s ease";
      setTimeout(() => {
          document.getElementById("preloader").style.display = "none";
      }, 700);
  }, 3000);
});


//  sticky navbar
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  const blackLogo = document.querySelector(".blackLogo");
  const whiteLogo = document.querySelector(".whiteLogo");

  if(window.scrollY > 0){
      header.classList.add("scrolled");
      document.querySelector(".navLinks").classList.add("navLinks-colored");
      document.querySelector(".searchToggle").classList.add("navLinks-colored");
      document.querySelector(".nestedLink").classList.add("nestedLink");


      blackLogo.classList.remove("hidden");
      whiteLogo.classList.add("hidden");
  }
  // normal
  else{
      header.classList.remove("scrolled");
      document.querySelector(".navLinks").classList.remove("navLinks-colored");


      blackLogo.classList.add("hidden");
      whiteLogo.classList.remove("hidden");
  }
})
