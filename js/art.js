//  Script for dropdown
    function toggleDropdown(button) {
      const dropdown = button.nextElementSibling;
      dropdown.classList.toggle("show");
      button.classList.toggle("open");
    }


const slider = document.getElementById("slider");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  const slideWidth = slider.querySelector("img").offsetWidth + 24; // img width + gap
  const visibleWidth = slider.parentElement.offsetWidth;
  const totalWidth = slideWidth * slider.children.length;
  let scrollPosition = 0;

  function updateButtons() {
    if (scrollPosition <= 0) {
      prevBtn.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
    }

    if (scrollPosition + visibleWidth >= totalWidth - 5) {
      nextBtn.classList.add("hidden");
    } else {
      nextBtn.classList.remove("hidden");
    }
  }

  nextBtn.addEventListener("click", () => {
    scrollPosition += slideWidth * 2; // scroll 2 books per click
    if (scrollPosition + visibleWidth > totalWidth) {
      scrollPosition = totalWidth - visibleWidth;
    }
    slider.style.transform = `translateX(-${scrollPosition}px)`;
    updateButtons();
  });

  prevBtn.addEventListener("click", () => {
    scrollPosition -= slideWidth * 2;
    if (scrollPosition < 0) {
      scrollPosition = 0;
    }
    slider.style.transform = `translateX(-${scrollPosition}px)`;
    updateButtons();
  });

  // Initialize visibility
  updateButtons();

  // Recalculate on window resize
  window.addEventListener("resize", () => {
    slider.style.transform = "translateX(0px)";
    scrollPosition = 0;
    updateButtons();
  });