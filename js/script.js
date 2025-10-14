 function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    const button = document.getElementById("dropdownBtn");
    dropdown.classList.toggle("show");
    button.classList.toggle("open");
  }

  // Close dropdown when clicking outside
  window.onclick = function(event) {
    const button = document.getElementById("dropdownBtn");
    if (!event.target.closest('.dropdown')) {
      document.getElementById("myDropdown").classList.remove("show");
      button.classList.remove("open");
    }
  }